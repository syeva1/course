import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export const runtime = 'nodejs';
export const maxDuration = 30;

/**
 * GET /api/test-embedding-direct
 * Direct test of embedding generation without any wrapper functions
 */
export async function GET() {
  try {
    console.log('🔍 Direct embedding test starting...');
    
    // Step 1: Check environment
    const envCheck = {
      hasOpenAI: !!process.env.OPENAI_API_KEY,
      openaiLength: process.env.OPENAI_API_KEY?.length || 0,
      openaiPrefix: process.env.OPENAI_API_KEY?.substring(0, 10) || 'N/A'
    };
    
    console.log('Environment check:', envCheck);
    
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        success: false,
        error: 'OPENAI_API_KEY not configured',
        envCheck
      }, { status: 500 });
    }
    
    // Step 2: Create OpenAI client
    console.log('Creating OpenAI client...');
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    console.log('✅ OpenAI client created');
    
    // Step 3: Test embedding generation
    console.log('Testing embedding generation...');
    const testText = 'This is a test for embedding generation';
    
    try {
      const response = await openai.embeddings.create({
        model: 'text-embedding-3-small',
        input: testText,
        encoding_format: 'float',
      });
      
      console.log('✅ Embedding generated successfully');
      console.log('Response:', {
        dataLength: response.data.length,
        embeddingLength: response.data[0]?.embedding?.length || 0,
        model: response.model,
        usage: response.usage
      });
      
      return NextResponse.json({
        success: true,
        message: 'Embedding generation works!',
        envCheck,
        testResults: {
          inputText: testText,
          responseDataLength: response.data.length,
          embeddingLength: response.data[0]?.embedding?.length || 0,
          firstFiveValues: response.data[0]?.embedding?.slice(0, 5) || [],
          model: response.model,
          usage: response.usage
        }
      });
      
    } catch (embeddingError: any) {
      console.error('❌ Embedding generation failed:', embeddingError);
      
      return NextResponse.json({
        success: false,
        error: 'Embedding generation failed',
        embeddingError: {
          message: embeddingError.message,
          status: embeddingError.status,
          code: embeddingError.code,
          type: embeddingError.type,
          param: embeddingError.param
        },
        envCheck
      }, { status: 500 });
    }
    
  } catch (error: any) {
    console.error('❌ Test failed:', error);
    return NextResponse.json({
      success: false,
      error: error.message,
      stack: error.stack
    }, { status: 500 });
  }
}
