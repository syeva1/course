import { NextRequest, NextResponse } from 'next/server';
import { answerQuestionStream } from '@/lib/search/rag';
import { searchRateLimiter } from '@/lib/rate-limit';

export const runtime = 'nodejs';
export const maxDuration = 30;

interface SearchRequest {
  question: string;
  conversationHistory?: Array<{ role: 'user' | 'assistant'; content: string }>;
}

/**
 * POST /api/search/stream
 * Streaming search endpoint - returns AI-generated answer with real-time streaming
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
    
    console.log(`[Streaming Search] Query from ${clientIp}: "${question}" (${rateLimitResult.remaining} requests remaining)`);

    // Create a streaming response
    const stream = new ReadableStream({
      async start(controller) {
        try {
          // Generate streaming answer using RAG
          const startTime = Date.now();
          
          const streamGenerator = answerQuestionStream(question, {
            conversationHistory,
            maxSources: 8,
            temperature: 0.3,
          });
          
          for await (const chunk of streamGenerator) {
            // Send chunk as Server-Sent Events
            const data = JSON.stringify({
              type: chunk.isComplete ? 'complete' : 'partial',
              answer: chunk.answer,
              isComplete: chunk.isComplete,
              sources: chunk.sources,
              relatedQuestions: chunk.relatedQuestions,
              responseTimeMs: chunk.responseTimeMs,
            });
            
            controller.enqueue(`data: ${data}\n\n`);
            
            if (chunk.isComplete) {
              break;
            }
          }
          
          controller.close();
        } catch (error: any) {
          console.error('[Streaming Search API] Error:', error);
          
          const errorData = JSON.stringify({
            type: 'error',
            error: 'An error occurred while processing your question. Please try again.',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
          });
          
          controller.enqueue(`data: ${errorData}\n\n`);
          controller.close();
        }
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });

  } catch (error: any) {
    console.error('[Streaming Search API] Error:', error);
    return NextResponse.json(
      { 
        error: 'An error occurred while processing your request.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

