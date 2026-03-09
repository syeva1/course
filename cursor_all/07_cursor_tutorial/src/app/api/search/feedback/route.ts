import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdminClient } from '@/lib/search/supabase-client';

export const runtime = 'nodejs';

interface FeedbackRequest {
  query: string;
  wasHelpful: boolean;
  rating?: number;
  queryId?: string;
}

/**
 * POST /api/search/feedback
 * Log user feedback on search results
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: FeedbackRequest = await request.json();
    const { query, wasHelpful, rating, queryId } = body;

    // Validate input
    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { error: 'Invalid query. Please provide a valid search query.' },
        { status: 400 }
      );
    }

    if (typeof wasHelpful !== 'boolean') {
      return NextResponse.json(
        { error: 'Invalid feedback. Please provide a boolean value for wasHelpful.' },
        { status: 400 }
      );
    }

    if (rating && (rating < 1 || rating > 5)) {
      return NextResponse.json(
        { error: 'Invalid rating. Please provide a rating between 1 and 5.' },
        { status: 400 }
      );
    }

    // Log feedback to database
    const supabaseAdmin = getSupabaseAdminClient();
    
    if (queryId) {
      // Update existing query with feedback
      const { error: updateError } = await supabaseAdmin
        .from('search_queries')
        .update({
          was_helpful: wasHelpful,
          user_rating: rating,
        })
        .eq('id', queryId);

      if (updateError) {
        console.error('Error updating search query feedback:', updateError);
        return NextResponse.json(
          { error: 'Failed to update feedback' },
          { status: 500 }
        );
      }
    } else {
      // Create new feedback entry
      const { error: insertError } = await supabaseAdmin
        .from('search_queries')
        .insert({
          query,
          was_helpful: wasHelpful,
          user_rating: rating,
          results_count: 0, // We don't have this info in feedback-only requests
          response_time_ms: 0,
        });

      if (insertError) {
        console.error('Error inserting search query feedback:', insertError);
        return NextResponse.json(
          { error: 'Failed to save feedback' },
          { status: 500 }
        );
      }
    }

    console.log(`Feedback logged: query="${query}", helpful=${wasHelpful}, rating=${rating}`);

    return NextResponse.json({
      success: true,
      message: 'Thank you for your feedback!'
    });

  } catch (error: any) {
    console.error('[Feedback API] Error:', error);
    return NextResponse.json(
      { 
        error: 'An error occurred while processing your feedback.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}