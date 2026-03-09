import { NextRequest, NextResponse } from 'next/server';
import { answerQuestion } from '@/lib/search/rag';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();
    
    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 });
    }

    console.log(`🧪 Testing Redis cache with: "${question}"`);

    // First request (should be slow - no cache)
    console.log('First request (cache miss)...');
    const firstStart = Date.now();
    const firstResult = await answerQuestion(question);
    const firstTime = Date.now() - firstStart;

    // Second request (should be fast - cache hit)
    console.log('Second request (cache hit)...');
    const secondStart = Date.now();
    const secondResult = await answerQuestion(question);
    const secondTime = Date.now() - secondStart;

    return NextResponse.json({
      success: true,
      question,
      results: {
        firstRequest: {
          responseTimeMs: firstTime,
          answerLength: firstResult.answer.length,
          sourcesCount: firstResult.sources.length,
          cacheStatus: 'MISS'
        },
        secondRequest: {
          responseTimeMs: secondTime,
          answerLength: secondResult.answer.length,
          sourcesCount: secondResult.sources.length,
          cacheStatus: secondTime < 1000 ? 'HIT' : 'MISS'
        },
        performance: {
          speedImprovement: firstTime > 0 ? `${Math.round(((firstTime - secondTime) / firstTime) * 100)}% faster` : 'N/A',
          timeSaved: `${firstTime - secondTime}ms saved`,
          cacheWorking: secondTime < 1000
        }
      }
    });

  } catch (error: any) {
    console.error('Redis cache test error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message
      },
      { status: 500 }
    );
  }
}
