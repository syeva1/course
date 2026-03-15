import { NextRequest, NextResponse } from 'next/server';
import { answerQuestion } from '@/lib/search/rag';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();
    
    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 });
    }

    console.log(`🔬 Comparing dimensions for: "${question}"`);

    // Test with 1536 dimensions (precision mode)
    console.log('Testing 1536 dimensions...');
    process.env.SEARCH_FAST_MODE = 'false';
    const precisionStart = Date.now();
    const precisionResult = await answerQuestion(question);
    const precisionTime = Date.now() - precisionStart;

    // Test with 512 dimensions (fast mode)
    console.log('Testing 512 dimensions...');
    process.env.SEARCH_FAST_MODE = 'true';
    const fastStart = Date.now();
    const fastResult = await answerQuestion(question);
    const fastTime = Date.now() - fastStart;

    // Reset environment
    delete process.env.SEARCH_FAST_MODE;

    return NextResponse.json({
      success: true,
      question,
      comparison: {
        precision: {
          dimensions: 1536,
          responseTimeMs: precisionTime,
          answerLength: precisionResult.answer.length,
          sourcesCount: precisionResult.sources.length,
          sources: precisionResult.sources.map(s => ({
            title: s.title,
            relevance: s.relevance
          })),
          relatedQuestions: precisionResult.relatedQuestions
        },
        fast: {
          dimensions: 512,
          responseTimeMs: fastTime,
          answerLength: fastResult.answer.length,
          sourcesCount: fastResult.sources.length,
          sources: fastResult.sources.map(s => ({
            title: s.title,
            relevance: s.relevance
          })),
          relatedQuestions: fastResult.relatedQuestions
        },
        performance: {
          speedImprovement: `${Math.round(((precisionTime - fastTime) / precisionTime) * 100)}% faster with 512 dimensions`,
          timeSaved: `${precisionTime - fastTime}ms saved`,
          qualityDifference: {
            answerLengthDiff: fastResult.answer.length - precisionResult.answer.length,
            sourcesCountDiff: fastResult.sources.length - precisionResult.sources.length
          }
        }
      }
    });

  } catch (error: any) {
    console.error('Dimension comparison error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        stack: error.stack
      },
      { status: 500 }
    );
  }
}
