import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdminClient } from '@/lib/search/supabase-client';
import { generateEmbedding } from '@/lib/search/embeddings';

export const runtime = 'nodejs';
export const maxDuration = 30;

/**
 * POST /api/search/generate-embeddings
 * Generate embeddings for content that doesn't have them yet
 */
export async function POST(request: NextRequest) {
  try {
    // Check if user is authorized (you might want to add authentication here)
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.ADMIN_SECRET || 'admin-secret'}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const supabaseAdmin = getSupabaseAdminClient();
    
    // Get all content without embeddings
    const { data: content, error: fetchError } = await supabaseAdmin
      .from('cursor_content')
      .select('id, content')
      .is('embedding', null);
    
    if (fetchError) {
      return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
    }
    
    if (!content || content.length === 0) {
      return NextResponse.json({ 
        message: 'No content found that needs embeddings',
        processed: 0 
      });
    }
    
    let processed = 0;
    const errors = [];
    
    // Process each content item
    for (const item of content) {
      try {
        // Generate embedding
        const embedding = await generateEmbedding(item.content);
        
        // Update the database
        const { error: updateError } = await supabaseAdmin
          .from('cursor_content')
          .update({ embedding })
          .eq('id', item.id);
        
        if (updateError) {
          errors.push(`Failed to update item ${item.id}: ${updateError.message}`);
        } else {
          processed++;
        }
        
        // Add a small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));
        
      } catch (error: any) {
        errors.push(`Error processing item ${item.id}: ${error.message}`);
      }
    }
    
    return NextResponse.json({
      message: 'Embedding generation complete',
      processed,
      total: content.length,
      errors: errors.length > 0 ? errors : undefined
    });
    
  } catch (error: any) {
    console.error('Embedding generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate embeddings' },
      { status: 500 }
    );
  }
}
