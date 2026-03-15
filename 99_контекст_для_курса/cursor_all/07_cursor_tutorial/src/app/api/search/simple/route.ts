import { NextRequest, NextResponse } from 'next/server';
import { answerQuestionSimple } from '@/lib/search/rag-simple';
import { searchRateLimiter } from '@/lib/rate-limit';

export const runtime = 'nodejs';
export const maxDuration = 30;

interface SearchRequest {
  question: string;
}

/**
 * POST /api/search/simple
 * Simple non-streaming search endpoint - returns AI-generated answer
 */
export async function POST(request: NextRequest) {
  try {
    // Check environment variables
    if (!process.env.Claude_My_Secret_Key) {
      return NextResponse.json(
        { error: 'AI service not configured. Please add Claude_My_Secret_Key to environment variables.' },
        { status: 500 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'Search service not configured. Please add OPENAI_API_KEY to environment variables.' },
        { status: 500 }
      );
    }

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json(
        { error: 'Database not configured. Please add Supabase environment variables.' },
        { status: 500 }
      );
    }

    // Parse request body
    const body: SearchRequest = await request.json();
    const { question } = body;

    // Validate input
    if (!question || typeof question !== 'string') {
      return NextResponse.json(
        { error: 'Invalid question. Please provide a valid search query.' },
        { status: 400 }
      );
    }

    if (question.length > 500) {
      return NextResponse.json(
        { error: 'Question too long. Please keep it under 500 characters.' },
        { status: 400 }
      );
    }

    // Rate limiting check
    const rateLimitResult = await searchRateLimiter.checkLimit(request);
    
    if (!rateLimitResult.allowed) {
      const resetTime = new Date(rateLimitResult.resetTime).toISOString();
      return NextResponse.json(
        { 
          error: 'Rate limit exceeded. Please wait before making another search.',
          resetTime,
          remaining: rateLimitResult.remaining
        },
        { 
          status: 429,
          headers: {
            'Retry-After': Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000).toString(),
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': resetTime
          }
        }
      );
    }

    const clientIp = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';
    
    console.log(`[Simple Search] Query from ${clientIp}: "${question}" (${rateLimitResult.remaining} requests remaining)`);

    // Generate answer using simple RAG
    const result = await answerQuestionSimple(question, {
      maxSources: 8,
      temperature: 0.3,
    });

    return NextResponse.json({
      success: true,
      data: result
    });

  } catch (error: any) {
    console.error('[Simple Search API] Error:', error);
    return NextResponse.json(
      { 
        error: 'An error occurred while processing your request.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}