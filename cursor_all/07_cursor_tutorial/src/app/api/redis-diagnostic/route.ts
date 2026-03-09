import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
    const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
    
    console.log('🔍 Detailed Redis Diagnostic Starting...');
    console.log('Redis URL:', redisUrl);
    console.log('Redis Token length:', redisToken?.length);
    
    if (!redisUrl || !redisToken) {
      return NextResponse.json({
        success: false,
        error: 'Missing Redis environment variables',
        environment: {
          redisUrl: redisUrl ? 'Set' : 'Not set',
          redisToken: redisToken ? 'Set' : 'Not set'
        }
      });
    }
    
    // Create Redis client
    const redis = new Redis({
      url: redisUrl,
      token: redisToken,
    });
    
    console.log('✅ Redis client created successfully');
    
    const results = [];
    
    // Test 1: Simple SET/GET
    try {
      console.log('🧪 Test 1: Simple SET/GET');
      const setResult = await redis.set('diagnostic-test-1', 'hello-world', { ex: 60 });
      console.log('SET result:', setResult);
      
      const getResult = await redis.get('diagnostic-test-1');
      console.log('GET result:', getResult);
      
      results.push({
        test: 'Simple SET/GET',
        set: setResult,
        get: getResult,
        success: getResult === 'hello-world'
      });
    } catch (error: any) {
      console.error('Test 1 error:', error);
      results.push({
        test: 'Simple SET/GET',
        error: error.message,
        success: false
      });
    }
    
    // Test 2: SETEX/GET
    try {
      console.log('🧪 Test 2: SETEX/GET');
      const setexResult = await redis.setex('diagnostic-test-2', 60, 'setex-value');
      console.log('SETEX result:', setexResult);
      
      const getResult = await redis.get('diagnostic-test-2');
      console.log('GET result:', getResult);
      
      results.push({
        test: 'SETEX/GET',
        setex: setexResult,
        get: getResult,
        success: getResult === 'setex-value'
      });
    } catch (error: any) {
      console.error('Test 2 error:', error);
      results.push({
        test: 'SETEX/GET',
        error: error.message,
        success: false
      });
    }
    
    // Test 3: JSON SET/GET
    try {
      console.log('🧪 Test 3: JSON SET/GET');
      const jsonValue = { message: 'test', timestamp: Date.now() };
      const setResult = await redis.set('diagnostic-test-3', JSON.stringify(jsonValue), { ex: 60 });
      console.log('JSON SET result:', setResult);
      
      const getResult = await redis.get('diagnostic-test-3');
      console.log('JSON GET result:', getResult);
      
      let parsedResult = null;
      try {
        parsedResult = getResult ? JSON.parse(getResult as string) : null;
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
      }
      
      results.push({
        test: 'JSON SET/GET',
        set: setResult,
        get: getResult,
        parsed: parsedResult,
        success: parsedResult && parsedResult.message === 'test'
      });
    } catch (error: any) {
      console.error('Test 3 error:', error);
      results.push({
        test: 'JSON SET/GET',
        error: error.message,
        success: false
      });
    }
    
    // Test 4: Check if keys exist
    try {
      console.log('🧪 Test 4: EXISTS check');
      const exists1 = await redis.exists('diagnostic-test-1');
      const exists2 = await redis.exists('diagnostic-test-2');
      const exists3 = await redis.exists('diagnostic-test-3');
      
      console.log('EXISTS results:', { exists1, exists2, exists3 });
      
      results.push({
        test: 'EXISTS check',
        exists1,
        exists2,
        exists3,
        success: exists1 === 1 || exists2 === 1 || exists3 === 1
      });
    } catch (error: any) {
      console.error('Test 4 error:', error);
      results.push({
        test: 'EXISTS check',
        error: error.message,
        success: false
      });
    }
    
    console.log('🏁 Diagnostic complete. Results:', results);
    
    return NextResponse.json({
      success: true,
      message: 'Detailed Redis diagnostic completed',
      environment: {
        redisUrl: redisUrl ? 'Set' : 'Not set',
        redisToken: redisToken ? 'Set' : 'Not set',
        urlLength: redisUrl?.length || 0,
        tokenLength: redisToken?.length || 0
      },
      results,
      summary: {
        totalTests: results.length,
        successfulTests: results.filter(r => r.success).length,
        failedTests: results.filter(r => !r.success).length
      }
    });

  } catch (error: any) {
    console.error('❌ Diagnostic error:', error);
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
