import { NextRequest, NextResponse } from 'next/server';
import { answerQuestion } from '@/lib/search/rag';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();
    
    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 });
    }

    // Force 1536 dimensions
    process.env.SEARCH_FAST_MODE = 'false';
    
    console.log('🧪 Testing with 1536 dimensions (precision mode)');
    
    const startTime = Date.now();
    const result = await answerQuestion(question);
    const endTime = Date.now();
    
    return NextResponse.json({
      success: true,
      dimensions: 1536,
      question,
      responseTimeMs: endTime - startTime,
      answerLength: result.answer.length,
      sourcesCount: result.sources.length,
      sources: result.sources.map(s => ({
        title: s.title,
        relevance: s.relevance
      }))
    });

  } catch (error: any) {
    console.error('1536 test error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message
      },
      { status: 500 }
    );
  }
}
