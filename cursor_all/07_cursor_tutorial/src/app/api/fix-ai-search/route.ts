import { NextResponse } from 'next/server';
import { getSupabaseAdminClient } from '@/lib/search/supabase-client';
import { generateEmbedding } from '@/lib/search/embeddings';
import OpenAI from 'openai';

export const runtime = 'nodejs';
export const maxDuration = 60;

/**
 * POST /api/fix-ai-search
 * Complete fix for AI search - generate embeddings and test everything
 */
export async function POST() {
  try {
    console.log('🔧 Starting complete AI search fix...');
    
    const supabaseAdmin = getSupabaseAdminClient();
    
    // Step 1: Get all content
    const { data: allContent, error: fetchError } = await supabaseAdmin
      .from('cursor_content')
      .select('id, content, metadata, embedding');
    
    if (fetchError) {
      return NextResponse.json({ error: fetchError.message }, { status: 500 });
    }
    
    console.log(`📊 Found ${allContent?.length || 0} content items`);
    
    // Step 2: Generate embeddings for content that needs them
    let processedCount = 0;
    let errorCount = 0;
    
    if (allContent && allContent.length > 0) {
      for (const item of allContent) {
        try {
          // Check if embedding exists and is valid
          if (item.embedding && Array.isArray(item.embedding) && item.embedding.length > 0) {
            console.log(`✅ ${item.metadata?.title || item.id} already has embedding`);
            continue;
          }
          
          console.log(`🔄 Generating embedding for: ${item.metadata?.title || item.id}`);
          console.log(`Content length: ${item.content.length}`);
          console.log(`Content preview: ${item.content.substring(0, 100)}...`);
          
          // Test OpenAI client creation first
          console.log('Testing OpenAI client creation...');
          const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
          });
          console.log('✅ OpenAI client created successfully');
          
          // Test direct API call
          console.log('Testing direct OpenAI API call...');
          const testResponse = await openai.embeddings.create({
            model: 'text-embedding-3-small',
            input: 'test',
            encoding_format: 'float',
          });
          console.log('✅ Direct API call successful');
          console.log('Test embedding length:', testResponse.data[0]?.embedding?.length || 0);
          
          // Generate embedding
          const embedding = await generateEmbedding(item.content);
          
          // Update the database
          const { error: updateError } = await supabaseAdmin
            .from('cursor_content')
            .update({ 
              embedding: embedding,
              updated_at: new Date().toISOString()
            })
            .eq('id', item.id);
          
          if (updateError) {
            console.error(`❌ Error updating ${item.id}:`, updateError.message);
            errorCount++;
          } else {
            console.log(`✅ Updated ${item.id} with embedding`);
            processedCount++;
          }
          
          // Small delay to avoid rate limits
          await new Promise(resolve => setTimeout(resolve, 200));
          
        } catch (itemError: any) {
          console.error(`❌ Failed to process ${item.id}:`, itemError.message);
          errorCount++;
        }
      }
    }
    
    // Step 3: Create/fix the search function
    console.log('🔧 Creating search function...');
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
      console.error('❌ Error creating function:', functionError.message);
    } else {
      console.log('✅ Search function created successfully');
    }
    
    // Step 4: Test the complete search pipeline
    console.log('🧪 Testing complete search pipeline...');
    
    try {
      // Test vector search
      const testEmbedding = await generateEmbedding('What is Cursor?');
      const { data: vectorResults, error: vectorError } = await supabaseAdmin
        .rpc('search_cursor_content', {
          query_embedding: testEmbedding,
          match_threshold: 0.1,
          match_count: 3
        });
      
      if (vectorError) {
        console.error('❌ Vector search test failed:', vectorError.message);
      } else {
        console.log(`✅ Vector search test: ${vectorResults?.length || 0} results`);
      }
      
      // Test simple search
      const { data: simpleResults, error: simpleError } = await supabaseAdmin
        .from('cursor_content')
        .select('id, content, metadata')
        .textSearch('content', 'cursor')
        .limit(3);
      
      if (simpleError) {
        console.error('❌ Simple search test failed:', simpleError.message);
      } else {
        console.log(`✅ Simple search test: ${simpleResults?.length || 0} results`);
      }
      
      return NextResponse.json({
        success: true,
        message: 'AI search fix completed successfully!',
        summary: {
          totalContent: allContent?.length || 0,
          processedEmbeddings: processedCount,
          errors: errorCount,
          vectorSearchResults: vectorResults?.length || 0,
          simpleSearchResults: simpleResults?.length || 0,
          functionCreated: !functionError
        },
        vectorResults: vectorResults?.slice(0, 2) || [],
        simpleResults: simpleResults?.slice(0, 2) || []
      });
      
    } catch (testError: any) {
      console.error('❌ Test failed:', testError.message);
      return NextResponse.json({
        success: true,
        message: 'Fix completed but tests failed',
        summary: {
          totalContent: allContent?.length || 0,
          processedEmbeddings: processedCount,
          errors: errorCount,
          testError: testError.message
        }
      });
    }
    
  } catch (error: any) {
    console.error('❌ Fix failed:', error);
    return NextResponse.json({
      success: false,
      error: error.message,
      message: 'AI search fix failed'
    }, { status: 500 });
  }
}
