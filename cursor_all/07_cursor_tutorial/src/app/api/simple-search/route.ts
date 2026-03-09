import { NextRequest, NextResponse } from 'next/server';
import { searchSimilarContent } from '@/lib/search/vector-db';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();
    
    console.log('Simple search test:', question);
    
    // Test just the vector search
    const searchResults = await searchSimilarContent(question, {
      matchCount: 3,
      matchThreshold: 0.3,
    });
    
    console.log('Search results:', searchResults.length);
    
    return NextResponse.json({
      success: true,
      question,
      resultsCount: searchResults.length,
      results: searchResults.map(r => ({
        title: r.metadata.title,
        similarity: r.similarity
      }))
    });

  } catch (error: any) {
    console.error('Simple search error:', error);
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
