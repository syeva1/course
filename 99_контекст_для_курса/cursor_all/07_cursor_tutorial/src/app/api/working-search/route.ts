import { NextRequest, NextResponse } from 'next/server';
import { searchSimilarContent } from '@/lib/search/vector-db';
import Anthropic from '@anthropic-ai/sdk';

export const runtime = 'nodejs';

const anthropic = new Anthropic({
  apiKey: process.env.Claude_My_Secret_Key,
});

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();
    const startTime = Date.now();
    
    console.log('Working search test:', question);
    
    // 1. Search for content
    const searchResults = await searchSimilarContent(question, {
      matchCount: 3,
      matchThreshold: 0.3,
    });
    
    console.log('Found results:', searchResults.length);
    
    if (searchResults.length === 0) {
      return NextResponse.json({
        success: true,
        data: {
          answer: "I couldn't find specific information about that in the Cursor documentation. Could you rephrase your question or ask about a different Cursor feature?",
          sources: [],
          relatedQuestions: ["What's new in Cursor 1.7?", "How do I use Tab completion?"],
          responseTimeMs: Date.now() - startTime,
        }
      });
    }
    
    // 2. Create context
    const context = searchResults.map(result => 
      `Title: ${result.metadata.title}\nContent: ${result.content}`
    ).join('\n\n');
    
    // 3. Generate answer
    const response = await anthropic.messages.create({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 500,
      temperature: 0.1,
      messages: [
        {
          role: 'user',
          content: `Answer this question about Cursor: "${question}"\n\nContext:\n${context}`
        }
      ],
    });
    
    const answer = response.content[0].type === 'text' 
      ? response.content[0].text 
      : '';
    
    // 4. Format sources
    const sources = searchResults.map(result => ({
      title: result.metadata.title,
      url: result.metadata.url,
      snippet: result.content.slice(0, 120) + '...',
      relevance: Math.round(result.similarity * 100) / 100,
    }));
    
    return NextResponse.json({
      success: true,
      data: {
        answer,
        sources,
        relatedQuestions: ["What's new in Cursor 1.7?", "How do I use Tab completion?"],
        responseTimeMs: Date.now() - startTime,
      }
    });

  } catch (error: any) {
    console.error('Working search error:', error);
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
