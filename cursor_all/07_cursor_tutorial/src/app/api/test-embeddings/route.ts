import { NextResponse } from 'next/server';
import { getSupabaseAdminClient } from '@/lib/search/supabase-client';

export const runtime = 'nodejs';

/**
 * GET /api/test-embeddings
 * Test if embeddings exist in the database
 */
export async function GET() {
  try {
    const supabaseAdmin = getSupabaseAdminClient();
    
    // Check if cursor_content table exists and has data
    const { data: content, error: contentError } = await supabaseAdmin
      .from('cursor_content')
      .select('id, content, embedding')
      .limit(3);
    
    if (contentError) {
      return NextResponse.json({
        error: 'Failed to fetch content',
        details: contentError.message
      }, { status: 500 });
    }
    
    // Check if embeddings exist
    const hasEmbeddings = content?.some((row: any) => row.embedding && Array.isArray(row.embedding) && row.embedding.length > 0);
    
    // Check if search function exists
    const { data: functionTest, error: functionError } = await supabaseAdmin
      .rpc('search_cursor_content', {
        query_embedding: new Array(512).fill(0), // Dummy embedding (512 dimensions)
        match_threshold: 0.5,
        match_count: 1
      });
    
    return NextResponse.json({
      success: true,
      contentCount: content?.length || 0,
      hasEmbeddings,
      searchFunctionExists: !functionError,
      sampleContent: content?.[0] ? {
        id: content[0].id,
        contentLength: content[0].content?.length || 0,
        hasEmbedding: !!(content[0].embedding && Array.isArray(content[0].embedding) && content[0].embedding.length > 0),
        embeddingLength: content[0].embedding?.length || 0
      } : null,
      functionError: functionError?.message || null
    });
    
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      stack: error.stack?.substring(0, 500)
    }, { status: 500 });
  }
}
