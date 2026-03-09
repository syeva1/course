import { NextRequest, NextResponse } from 'next/server';
import { answerQuestion } from '@/lib/search/rag';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const { question, dimensions } = await request.json();
    
    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 });
    }

    // Set environment variable for this test
    const originalFastMode = process.env.SEARCH_FAST_MODE;
    process.env.SEARCH_FAST_MODE = dimensions === 512 ? 'true' : 'false';
    
    console.log(`🧪 Testing with ${dimensions} dimensions`);
    
    const startTime = Date.now();
    const result = await answerQuestion(question);
    const endTime = Date.now();
    
    // Restore original setting
    process.env.SEARCH_FAST_MODE = originalFastMode;
    
    return NextResponse.json({
      success: true,
      dimensions,
      question,
      responseTimeMs: endTime - startTime,
      result: {
        answerLength: result.answer.length,
        sourcesCount: result.sources.length,
        sources: result.sources.map(s => ({
          title: s.title,
          relevance: s.relevance
        })),
        relatedQuestions: result.relatedQuestions
      }
    });

  } catch (error: any) {
    console.error('Dimension test error:', error);
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
