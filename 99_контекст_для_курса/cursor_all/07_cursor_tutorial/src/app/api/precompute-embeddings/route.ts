import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdminClient } from '@/lib/search/supabase-client';
import { generateEmbedding } from '@/lib/search/embeddings';

export const runtime = 'nodejs';
export const maxDuration = 300;

export async function POST(request: NextRequest) {
  try {
    console.log('🚀 Starting pre-computation of embeddings...');
    
    const supabaseAdmin = getSupabaseAdminClient();
    
    // Get all content that doesn't have embeddings
    const { data: contentWithoutEmbeddings, error: fetchError } = await supabaseAdmin
      .from('cursor_content')
      .select('id, content, metadata')
      .is('embedding', null);

    if (fetchError) {
      throw new Error(`Failed to fetch content: ${fetchError.message}`);
    }

    if (!contentWithoutEmbeddings || contentWithoutEmbeddings.length === 0) {
      return NextResponse.json({
        success: true,
        message: 'All content already has embeddings!',
        processed: 0
      });
    }

    console.log(`📊 Found ${contentWithoutEmbeddings.length} items without embeddings`);

    let successCount = 0;
    let errorCount = 0;
    const results: any[] = [];

    // Process each item
    for (const item of contentWithoutEmbeddings) {
      try {
        console.log(`🔄 Processing: ${item.metadata?.title || item.id}`);
        
        // Generate embedding
        const embedding = await generateEmbedding(item.content);
        
        // Update the record with the embedding
        const { error: updateError } = await supabaseAdmin
          .from('cursor_content')
          .update({ 
            embedding: embedding,
            updated_at: new Date().toISOString()
          })
          .eq('id', item.id);

        if (updateError) {
          throw new Error(`Failed to update: ${updateError.message}`);
        }

        successCount++;
        results.push({ 
          id: item.id, 
          title: item.metadata?.title || 'Unknown',
          status: 'success' 
        });
        
        console.log(`✅ Processed: ${item.metadata?.title || item.id}`);
        
        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));
        
      } catch (error: any) {
        errorCount++;
        results.push({ 
          id: item.id, 
          title: item.metadata?.title || 'Unknown',
          status: 'error', 
          error: error.message 
        });
        console.error(`❌ Error processing ${item.id}:`, error.message);
      }
    }

    // Verify the results
    const { data: contentWithEmbeddings, error: verifyError } = await supabaseAdmin
      .from('cursor_content')
      .select('id')
      .not('embedding', 'is', null);

    if (verifyError) {
      console.error('❌ Error verifying results:', verifyError.message);
    }

    console.log(`🎉 Pre-computation completed! Success: ${successCount}, Errors: ${errorCount}`);
    console.log(`📊 Total content with embeddings: ${contentWithEmbeddings?.length || 0}`);

    return NextResponse.json({
      success: true,
      message: 'Embedding pre-computation completed!',
      summary: {
        totalProcessed: contentWithoutEmbeddings.length,
        successCount,
        errorCount,
        totalWithEmbeddings: contentWithEmbeddings?.length || 0
      },
      results
    });

  } catch (error: any) {
    console.error('❌ Pre-computation error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Pre-computation failed',
        error: error.message
      },
      { status: 500 }
    );
  }
}
