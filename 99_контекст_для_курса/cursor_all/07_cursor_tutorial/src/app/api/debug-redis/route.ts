import { NextResponse } from 'next/server';
import { redis, cache } from '@/lib/redis';

export const runtime = 'nodejs';

export async function GET() {
  try {
    console.log('🔍 Debugging Redis connection...');
    
    // Check environment variables
    const envCheck = {
      redisUrl: process.env.UPSTASH_REDIS_REST_URL ? 'Set' : 'Not set',
      redisToken: process.env.UPSTASH_REDIS_REST_TOKEN ? 'Set' : 'Not set',
    };
    
    console.log('Environment variables:', envCheck);
    
    // Check Redis client
    const redisStatus = redis ? 'Initialized' : 'Not initialized';
    console.log('Redis client status:', redisStatus);
    
    if (!redis) {
      return NextResponse.json({
        success: false,
        error: 'Redis client not initialized',
        envCheck,
        redisStatus
      });
    }
    
    // Test basic operations
    const testKey = 'test:debug';
    const testValue = { message: 'Hello Redis!', timestamp: Date.now() };
    
    console.log('Testing Redis operations...');
    
    // Test SET
    await redis.setex(testKey, 60, JSON.stringify(testValue));
    console.log('✅ SET operation successful');
    
    // Test GET
    const retrieved = await redis.get(testKey);
    console.log('Retrieved value:', retrieved);
    
    // Test cache helper
    const cacheKey = cache.generateKey('test question');
    console.log('Generated cache key:', cacheKey);
    
    await cache.set(cacheKey, testValue, 60);
    console.log('✅ Cache SET successful');
    
    const cached = await cache.get(cacheKey);
    console.log('Cache GET result:', cached);
    
    return NextResponse.json({
      success: true,
      message: 'Redis debugging completed',
      envCheck,
      redisStatus,
      operations: {
        set: 'Success',
        get: retrieved ? 'Success' : 'Failed',
        cacheSet: 'Success',
        cacheGet: cached ? 'Success' : 'Failed'
      },
      testData: {
        original: testValue,
        retrieved: retrieved ? JSON.parse(retrieved as string) : null,
        cached: cached
      }
    });

  } catch (error: any) {
    console.error('Redis debug error:', error);
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
