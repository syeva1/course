import { NextRequest, NextResponse } from 'next/server';
import { answerQuestion } from '@/lib/search/rag';

export const runtime = 'nodejs'; // Use Node.js runtime for AI operations
export const maxDuration = 30; // 30 seconds max (Vercel Pro allows up to 60s)

interface SearchRequest {
  question: string;
  conversationHistory?: Array<{ role: 'user' | 'assistant'; content: string }>;
}

/**
 * POST /api/search/ask
 * Main search endpoint - returns AI-generated answer with sources
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
    const { question, conversationHistory = [] } = body;

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

    // Rate limiting check (simple IP-based)
    // TODO: Implement proper rate limiting with Redis/Upstash
    const clientIp = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';
    
    console.log(`[Search] Query from ${clientIp}: "${question}"`);

    // Generate answer using RAG
    const startTime = Date.now();
    const result = await answerQuestion(question, {
      conversationHistory,
      maxSources: 8,
      temperature: 0.3,
    });

    const totalTime = Date.now() - startTime;
    console.log(`[Search] Response generated in ${totalTime}ms`);

    // Return response
    return NextResponse.json({
      success: true,
      data: {
        answer: result.answer,
        sources: result.sources,
        relatedQuestions: result.relatedQuestions,
        responseTimeMs: result.responseTimeMs,
      },
    });

  } catch (error: any) {
    console.error('[Search API] Error:', error);

    // Handle specific errors
    if (error.message?.includes('rate limit')) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again in a few moments.' },
        { status: 429 }
      );
    }

    if (error.message?.includes('API key')) {
      return NextResponse.json(
        { error: 'Service configuration error. Please contact support.' },
        { status: 500 }
      );
    }

    // Generic error response
    return NextResponse.json(
      { 
        error: 'An error occurred while processing your question. Please try again.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/search/ask?q=question
 * Alternative GET endpoint for simple queries
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const question = searchParams.get('q');

    if (!question) {
      return NextResponse.json(
        { error: 'Missing query parameter "q"' },
        { status: 400 }
      );
    }

    // Call POST handler with converted request
    return POST(new NextRequest(request.url, {
      method: 'POST',
      headers: request.headers,
      body: JSON.stringify({ question }),
    }));

  } catch (error: any) {
    console.error('[Search API GET] Error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}

