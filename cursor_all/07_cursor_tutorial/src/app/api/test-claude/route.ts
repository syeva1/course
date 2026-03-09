import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

export const runtime = 'nodejs';

const anthropic = new Anthropic({
  apiKey: process.env.Claude_My_Secret_Key,
});

export async function GET(request: NextRequest) {
  try {
    console.log('Testing Claude API...');
    
    const response = await anthropic.messages.create({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 100,
      temperature: 0.1,
      messages: [
        {
          role: 'user',
          content: 'What is Cursor?',
        },
      ],
    });

    const answer = response.content[0].type === 'text' 
      ? response.content[0].text 
      : '';

    return NextResponse.json({
      success: true,
      answer: answer,
      usage: response.usage
    });

  } catch (error: any) {
    console.error('Claude API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        details: error
      },
      { status: 500 }
    );
  }
}
