import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export const runtime = 'nodejs';
export const maxDuration = 30;

/**
 * GET /api/debug-embedding-detailed
 * Detailed debugging of embedding generation
 */
export async function GET() {
  try {
    console.log('🔍 Starting detailed embedding debug...');
    
    // Step 1: Check environment variables
    const envCheck = {
      openai: !!process.env.OPENAI_API_KEY,
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
    
    // Step 2: Test OpenAI client creation
    let openai;
    try {
      openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });
      console.log('✅ OpenAI client created successfully');
    } catch (clientError: any) {
      console.error('❌ OpenAI client creation failed:', clientError);
      return NextResponse.json({
        success: false,
        error: 'OpenAI client creation failed',
        clientError: clientError.message,
        envCheck
      }, { status: 500 });
    }
    
    // Step 3: Test simple API call
    try {
      console.log('🧪 Testing simple OpenAI API call...');
      const testText = 'This is a test for embedding generation';
      
      const response = await openai.embeddings.create({
        model: 'text-embedding-3-small',
        input: testText,
        encoding_format: 'float',
      });
      
      console.log('✅ OpenAI API call successful');
      console.log('Response data length:', response.data.length);
      console.log('First embedding length:', response.data[0]?.embedding?.length || 'N/A');
      
      return NextResponse.json({
        success: true,
        message: 'Embedding generation works perfectly!',
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
      
    } catch (apiError: any) {
      console.error('❌ OpenAI API call failed:', apiError);
      
      return NextResponse.json({
        success: false,
        error: 'OpenAI API call failed',
        apiError: {
          message: apiError.message,
          status: apiError.status,
          code: apiError.code,
          type: apiError.type,
          param: apiError.param
        },
        envCheck
      }, { status: 500 });
    }
    
  } catch (error: any) {
    console.error('❌ Debug failed:', error);
    return NextResponse.json({
      success: false,
      error: error.message,
      stack: error.stack
    }, { status: 500 });
  }
}
