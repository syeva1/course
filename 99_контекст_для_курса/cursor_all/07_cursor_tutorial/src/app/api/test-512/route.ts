import { NextRequest, NextResponse } from 'next/server';
import { answerQuestion } from '@/lib/search/rag';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();
    
    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 });
    }

    // Force 512 dimensions
    process.env.SEARCH_FAST_MODE = 'true';
    
    console.log('🚀 Testing with 512 dimensions (fast mode)');
    
    const startTime = Date.now();
    const result = await answerQuestion(question);
    const endTime = Date.now();
    
    return NextResponse.json({
      success: true,
      dimensions: 512,
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
    console.error('512 test error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message
      },
      { status: 500 }
    );
  }
}
