import { NextResponse } from 'next/server';
import { getSupabaseAdminClient } from '@/lib/search/supabase-client';
import { generateEmbedding } from '@/lib/search/embeddings';

export const runtime = 'nodejs';

/**
 * GET /api/search/diagnostic
 * Comprehensive diagnostic endpoint for search system
 */
export async function GET() {
  try {
    const diagnostics = {
      timestamp: new Date().toISOString(),
      environment: {
        nodeEnv: process.env.NODE_ENV,
        hasOpenAI: !!process.env.OPENAI_API_KEY,
        hasClaude: !!process.env.Claude_My_Secret_Key,
        hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        hasSupabaseKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      },
      database: {
        connected: false,
        hasContent: false,
        contentCount: 0,
        hasEmbeddings: false,
        searchFunctionExists: false,
        error: null as string | null
      },
      embeddings: {
        canGenerate: false,
        error: null as string | null
      }
    };

    // Test database connection
    try {
      const supabaseAdmin = getSupabaseAdminClient();
      
      // Check if we can connect
      const { data: testData, error: testError } = await supabaseAdmin
        .from('cursor_content')
        .select('id')
        .limit(1);
      
      if (testError) {
        diagnostics.database.error = testError.message;
      } else {
        diagnostics.database.connected = true;
        diagnostics.database.contentCount = testData?.length || 0;
        diagnostics.database.hasContent = (testData?.length || 0) > 0;
      }

      // Check if content has embeddings
      if (diagnostics.database.connected) {
        const { data: contentWithEmbeddings, error: embeddingError } = await supabaseAdmin
          .from('cursor_content')
          .select('id, embedding')
          .not('embedding', 'is', null)
          .limit(1);
        
        if (!embeddingError && contentWithEmbeddings && contentWithEmbeddings.length > 0) {
          diagnostics.database.hasEmbeddings = true;
        }
      }

      // Test search function
      if (diagnostics.database.connected) {
        try {
          const { data: searchTest, error: searchError } = await supabaseAdmin
            .rpc('search_cursor_content', {
              query_embedding: new Array(512).fill(0),
              match_threshold: 0.5,
              match_count: 1
            });
          
          if (!searchError) {
            diagnostics.database.searchFunctionExists = true;
          } else {
            diagnostics.database.error = `Search function error: ${searchError.message}`;
          }
        } catch (searchErr: any) {
          diagnostics.database.error = `Search function test failed: ${searchErr.message}`;
        }
      }

    } catch (dbError: any) {
      diagnostics.database.error = `Database connection failed: ${dbError.message}`;
    }

    // Test embedding generation
    try {
      const testEmbedding = await generateEmbedding('test query', 512);
      if (testEmbedding && testEmbedding.length === 512) {
        diagnostics.embeddings.canGenerate = true;
      }
    } catch (embeddingError: any) {
      diagnostics.embeddings.error = `Embedding generation failed: ${embeddingError.message}`;
    }

    // Determine overall status
    const isHealthy = diagnostics.database.connected && 
                     diagnostics.database.hasContent && 
                     diagnostics.database.hasEmbeddings && 
                     diagnostics.database.searchFunctionExists && 
                     diagnostics.embeddings.canGenerate;

    return NextResponse.json({
      status: isHealthy ? 'healthy' : 'unhealthy',
      diagnostics
    }, { 
      status: isHealthy ? 200 : 503 
    });

  } catch (error: any) {
    console.error('[Search Diagnostic] Error:', error);
    return NextResponse.json({
      status: 'error',
      error: error.message,
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
