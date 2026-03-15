import { NextResponse } from 'next/server';
import { getSupabaseAdminClient } from '@/lib/search/supabase-client';

export const runtime = 'nodejs';
export const maxDuration = 30;

/**
 * POST /api/fix-vector-search
 * Create or fix the vector search function in Supabase
 */
export async function POST() {
  try {
    console.log('🔧 Fixing vector search function...');
    
    const supabaseAdmin = getSupabaseAdminClient();
    
    // First, check if the function exists
    const { data: existingFunction, error: checkError } = await supabaseAdmin
      .rpc('exec_sql', { 
        sql: `
          SELECT routine_name 
          FROM information_schema.routines 
          WHERE routine_name = 'search_cursor_content' 
          AND routine_type = 'FUNCTION'
        ` 
      });
    
    console.log('Existing function check:', existingFunction);
    
    // Create the search function
    const createFunctionSQL = `
      -- Drop function if exists
      DROP FUNCTION IF EXISTS search_cursor_content(vector, float, int);
      
      -- Create the search function
      CREATE OR REPLACE FUNCTION search_cursor_content(
        query_embedding vector(1536),
        match_threshold float DEFAULT 0.5,
        match_count int DEFAULT 10
      )
      RETURNS TABLE (
        id text,
        content text,
        metadata jsonb,
        similarity float
      )
      LANGUAGE plpgsql
      AS $$
      BEGIN
        RETURN QUERY
        SELECT
          cursor_content.id,
          cursor_content.content,
          cursor_content.metadata,
          1 - (cursor_content.embedding <=> query_embedding) as similarity
        FROM cursor_content
        WHERE cursor_content.embedding IS NOT NULL
        AND 1 - (cursor_content.embedding <=> query_embedding) > match_threshold
        ORDER BY cursor_content.embedding <=> query_embedding
        LIMIT match_count;
      END;
      $$;
      
      -- Grant permissions
      GRANT EXECUTE ON FUNCTION search_cursor_content TO authenticated;
      GRANT EXECUTE ON FUNCTION search_cursor_content TO service_role;
      GRANT EXECUTE ON FUNCTION search_cursor_content TO anon;
    `;
    
    const { error: functionError } = await supabaseAdmin.rpc('exec_sql', { 
      sql: createFunctionSQL 
    });
    
    if (functionError) {
      console.error('Error creating function:', functionError);
      return NextResponse.json({ 
        success: false, 
        error: functionError.message,
        message: 'Failed to create search function'
      }, { status: 500 });
    }
    
    console.log('✅ Search function created successfully');
    
    // Test the function
    console.log('🧪 Testing search function...');
    
    // Get a sample embedding to test with
    const { data: sampleContent, error: sampleError } = await supabaseAdmin
      .from('cursor_content')
      .select('embedding')
      .not('embedding', 'is', null)
      .limit(1)
      .single();
    
    if (sampleError || !sampleContent?.embedding) {
      console.log('⚠️  No embeddings available for testing');
      return NextResponse.json({
        success: true,
        message: 'Search function created but no embeddings available for testing',
        functionCreated: true,
        hasEmbeddings: false
      });
    }
    
    // Test the function with a sample embedding
    const { data: testResults, error: testError } = await supabaseAdmin
      .rpc('search_cursor_content', {
        query_embedding: sampleContent.embedding,
        match_threshold: 0.1,
        match_count: 3
      });
    
    if (testError) {
      console.error('Test failed:', testError);
      return NextResponse.json({
        success: true,
        message: 'Search function created but test failed',
        functionCreated: true,
        testError: testError.message
      });
    }
    
    console.log(`✅ Search function test successful: ${testResults?.length || 0} results`);
    
    return NextResponse.json({
      success: true,
      message: 'Vector search function created and tested successfully',
      functionCreated: true,
      hasEmbeddings: true,
      testResults: testResults?.length || 0
    });
    
  } catch (error: any) {
    console.error('❌ Fix vector search failed:', error);
    return NextResponse.json({
      success: false,
      error: error.message,
      message: 'Failed to fix vector search'
    }, { status: 500 });
  }
}
