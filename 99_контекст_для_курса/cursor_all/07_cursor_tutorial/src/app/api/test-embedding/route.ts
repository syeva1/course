import { NextResponse } from 'next/server';
import { generateEmbedding } from '@/lib/search/embeddings';

export const runtime = 'nodejs';
export const maxDuration = 30;

/**
 * GET /api/test-embedding
 * Test embedding generation directly
 */
export async function GET() {
  try {
    console.log('🧪 Testing embedding generation...');
    
    // Test 1: Check environment variables
    const envCheck = {
      openai: !!process.env.OPENAI_API_KEY,
      openaiLength: process.env.OPENAI_API_KEY?.length || 0
    };
    
    console.log('Environment check:', envCheck);
    
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        success: false,
        error: 'OPENAI_API_KEY not configured',
        envCheck
      }, { status: 500 });
    }
    
    // Test 2: Try to generate a simple embedding
    try {
      const testText = 'This is a test for embedding generation';
      console.log('Generating embedding for:', testText);
      
      const embedding = await generateEmbedding(testText);
      
      console.log('✅ Embedding generated successfully');
      console.log('Embedding length:', embedding.length);
      console.log('First 5 values:', embedding.slice(0, 5));
      
      return NextResponse.json({
        success: true,
        message: 'Embedding generation works!',
        embeddingLength: embedding.length,
        sampleValues: embedding.slice(0, 5),
        envCheck
      });
      
    } catch (embeddingError: any) {
      console.error('❌ Embedding generation failed:', embeddingError);
      
      return NextResponse.json({
        success: false,
        error: embeddingError.message,
        stack: embeddingError.stack,
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
