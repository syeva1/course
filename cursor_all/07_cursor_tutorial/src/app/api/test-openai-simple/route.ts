import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export const runtime = 'nodejs';
export const maxDuration = 30;

/**
 * GET /api/test-openai-simple
 * Simple test of OpenAI API
 */
export async function GET() {
  try {
    console.log('🧪 Simple OpenAI test starting...');
    
    // Check environment
    const hasKey = !!process.env.OPENAI_API_KEY;
    const keyLength = process.env.OPENAI_API_KEY?.length || 0;
    const keyPrefix = process.env.OPENAI_API_KEY?.substring(0, 10) || 'N/A';
    
    console.log('Environment check:', { hasKey, keyLength, keyPrefix });
    
    if (!hasKey) {
      return NextResponse.json({
        success: false,
        error: 'No OpenAI API key found',
        env: { hasKey, keyLength, keyPrefix }
      }, { status: 500 });
    }
    
    // Create client
    console.log('Creating OpenAI client...');
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    console.log('✅ Client created');
    
    // Test API call
    console.log('Testing API call...');
    const response = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: 'test',
      encoding_format: 'float',
    });
    
    console.log('✅ API call successful');
    console.log('Response:', {
      dataLength: response.data.length,
      embeddingLength: response.data[0]?.embedding?.length || 0,
      model: response.model
    });
    
    return NextResponse.json({
      success: true,
      message: 'OpenAI API works!',
      env: { hasKey, keyLength, keyPrefix },
      result: {
        dataLength: response.data.length,
        embeddingLength: response.data[0]?.embedding?.length || 0,
        model: response.model,
        firstFiveValues: response.data[0]?.embedding?.slice(0, 5) || []
      }
    });
    
  } catch (error: any) {
    console.error('❌ Test failed:', error);
    return NextResponse.json({
      success: false,
      error: error.message,
      type: error.constructor.name,
      status: error.status,
      code: error.code
    }, { status: 500 });
  }
}
