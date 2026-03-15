import { NextRequest, NextResponse } from 'next/server';
import { cache } from '@/lib/redis';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    // Test Redis connection
    const testKey = 'test:connection';
    const testValue = { message: 'Redis is working!', timestamp: new Date().toISOString() };
    
    // Try to set a value
    await cache.set(testKey, testValue, 60);
    
    // Try to get the value
    const retrieved = await cache.get(testKey);
    
    return NextResponse.json({
      success: true,
      message: 'Redis test completed',
      environment: {
        redisUrl: process.env.UPSTASH_REDIS_REST_URL ? 'Set' : 'Not set',
        redisToken: process.env.UPSTASH_REDIS_REST_TOKEN ? 'Set' : 'Not set',
      },
      test: {
        set: 'Success',
        get: retrieved ? 'Success' : 'Failed',
        retrievedValue: retrieved
      }
    });
    
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
      environment: {
        redisUrl: process.env.UPSTASH_REDIS_REST_URL ? 'Set' : 'Not set',
        redisToken: process.env.UPSTASH_REDIS_REST_TOKEN ? 'Set' : 'Not set',
      }
    }, { status: 500 });
  }
}
