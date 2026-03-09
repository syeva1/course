import { NextResponse } from 'next/server';
import { getSupabaseAdminClient } from '@/lib/search/supabase-client';
import { generateEmbedding } from '@/lib/search/embeddings';

export const runtime = 'nodejs';
export const maxDuration = 60;

/**
 * POST /api/generate-embeddings
 * Generate embeddings for all content that doesn't have them
 */
export async function POST() {
  try {
    console.log('🚀 Starting embedding generation...');
    
    const supabaseAdmin = getSupabaseAdminClient();
    
    // Get all content without embeddings
    const { data: contentWithoutEmbeddings, error: fetchError } = await supabaseAdmin
      .from('cursor_content')
      .select('id, content, metadata')
      .is('embedding', null);
    
    if (fetchError) {
      console.error('Error fetching content:', fetchError);
      return NextResponse.json({ error: fetchError.message }, { status: 500 });
    }
    
    if (!contentWithoutEmbeddings || contentWithoutEmbeddings.length === 0) {
      return NextResponse.json({
        success: true,
        message: 'No content needs embeddings',
        processed: 0
      });
    }
    
    console.log(`📝 Found ${contentWithoutEmbeddings.length} items without embeddings`);
    
    const results = [];
    
    // Generate embeddings for each item
    for (let i = 0; i < contentWithoutEmbeddings.length; i++) {
      const item = contentWithoutEmbeddings[i];
      console.log(`  [${i + 1}/${contentWithoutEmbeddings.length}] Processing: ${item.metadata?.title || item.id}`);
      
      try {
        // Generate embedding
        const embedding = await generateEmbedding(item.content);
        console.log(`    ✅ Generated embedding (${embedding.length} dimensions)`);
        
        // Update the database
        const { error: updateError } = await supabaseAdmin
          .from('cursor_content')
          .update({ 
            embedding: embedding,
            updated_at: new Date().toISOString()
          })
          .eq('id', item.id);
        
        if (updateError) {
          console.error(`    ❌ Error updating ${item.id}:`, updateError.message);
          results.push({
            id: item.id,
            title: item.metadata?.title || item.id,
            status: 'error',
            error: updateError.message
          });
        } else {
          console.log(`    ✅ Updated ${item.id}`);
          results.push({
            id: item.id,
            title: item.metadata?.title || item.id,
            status: 'success'
          });
        }
        
        // Small delay to avoid rate limits
        await new Promise(resolve => setTimeout(resolve, 200));
        
      } catch (itemError: any) {
        console.error(`    ❌ Failed to process ${item.id}:`, itemError.message);
        results.push({
          id: item.id,
          title: item.metadata?.title || item.id,
          status: 'error',
          error: itemError.message
        });
      }
    }
    
    const successCount = results.filter(r => r.status === 'success').length;
    const errorCount = results.filter(r => r.status === 'error').length;
    
    console.log(`🎉 Embedding generation completed! Success: ${successCount}, Errors: ${errorCount}`);
    
    return NextResponse.json({
      success: true,
      message: 'Embedding generation completed',
      summary: {
        totalItems: contentWithoutEmbeddings.length,
        successCount,
        errorCount
      },
      results: results
    });
    
  } catch (error: any) {
    console.error('❌ Embedding generation failed:', error);
    return NextResponse.json({
      success: false,
      error: error.message,
      message: 'Embedding generation failed'
    }, { status: 500 });
  }
}
