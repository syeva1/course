import { NextResponse } from 'next/server';
import { getSupabaseAdminClient } from '@/lib/search/supabase-client';

export const runtime = 'nodejs';

/**
 * GET /api/debug-embeddings
 * Debug the actual state of embeddings in the database
 */
export async function GET() {
  try {
    const supabaseAdmin = getSupabaseAdminClient();
    
    // Get all content with detailed embedding info
    const { data: allContent, error: allError } = await supabaseAdmin
      .from('cursor_content')
      .select('id, content, embedding, metadata');
    
    if (allError) {
      return NextResponse.json({ error: allError.message }, { status: 500 });
    }
    
    // Get content without embeddings
    const { data: noEmbeddings, error: noEmbeddingsError } = await supabaseAdmin
      .from('cursor_content')
      .select('id, content, metadata')
      .is('embedding', null);
    
    if (noEmbeddingsError) {
      return NextResponse.json({ error: noEmbeddingsError.message }, { status: 500 });
    }
    
    // Get content with embeddings
    const { data: withEmbeddings, error: withEmbeddingsError } = await supabaseAdmin
      .from('cursor_content')
      .select('id, content, metadata')
      .not('embedding', 'is', null);
    
    if (withEmbeddingsError) {
      return NextResponse.json({ error: withEmbeddingsError.message }, { status: 500 });
    }
    
    // Analyze the data
    const analysis = {
      totalContent: allContent?.length || 0,
      withoutEmbeddings: noEmbeddings?.length || 0,
      withEmbeddings: withEmbeddings?.length || 0,
      sampleContent: allContent?.slice(0, 2).map((item: any) => ({
        id: item.id,
        title: item.metadata?.title || 'Unknown',
        hasEmbedding: item.embedding !== null,
        embeddingType: typeof item.embedding,
        embeddingLength: Array.isArray(item.embedding) ? item.embedding.length : 'N/A',
        contentLength: item.content?.length || 0
      }))
    };
    
    return NextResponse.json({
      success: true,
      analysis,
      allContent: allContent?.map((item: any) => ({
        id: item.id,
        title: item.metadata?.title || 'Unknown',
        hasEmbedding: item.embedding !== null,
        embeddingType: typeof item.embedding,
        embeddingLength: Array.isArray(item.embedding) ? item.embedding.length : 'N/A'
      }))
    });
    
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}
