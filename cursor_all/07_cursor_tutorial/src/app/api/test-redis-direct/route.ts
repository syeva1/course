import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

export const runtime = 'nodejs';

export async function GET() {
  try {
    // Use the exact values from your Upstash console
    const redisUrl = 'https://loved-doe-18716.upstash.io';
    const redisToken = 'AUkcAAIncDIxOWE2MjZlNzgxMGY00GMxYTNK0TQ1YWQ1Y2Y0MmM3NHAyMTg3MTY';
    
    console.log('🔍 Testing with exact Upstash console values...');
    
    // Create Redis client with exact values
    const redis = new Redis({
      url: redisUrl,
      token: redisToken,
    });
    
    console.log('✅ Redis client created with exact values');
    
    // Test 1: Simple SET/GET
    try {
      console.log('🧪 Test 1: SET/GET with exact values');
      const setResult = await redis.set('exact-test-key', 'exact-test-value', { ex: 60 });
      console.log('SET result:', setResult);
      
      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const getResult = await redis.get('exact-test-key');
      console.log('GET result:', getResult);
      
      return NextResponse.json({
        success: true,
        message: 'Direct test with exact Upstash values',
        test: {
          set: setResult,
          get: getResult,
          success: getResult === 'exact-test-value'
        },
        environment: {
          redisUrl: 'Using exact console values',
          redisToken: 'Using exact console values'
        }
      });
      
    } catch (error: any) {
      console.error('Direct test error:', error);
      return NextResponse.json({
        success: false,
        error: error.message,
        stack: error.stack
      });
    }

  } catch (error: any) {
    console.error('❌ Direct test error:', error);
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
