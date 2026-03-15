import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
    const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
    
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
    
    // Test different Redis client configurations
    const configs = [
      {
        name: 'Basic config',
        config: { url: redisUrl, token: redisToken }
      },
      {
        name: 'With database 0',
        config: { url: redisUrl, token: redisToken, db: 0 }
      },
      {
        name: 'With database 1',
        config: { url: redisUrl, token: redisToken, db: 1 }
      }
    ];
    
    const results = [];
    
    for (const { name, config } of configs) {
      try {
        console.log(`Testing ${name}...`);
        const redis = new Redis(config);
        
        // Test SET
        const setResult = await redis.set('test:detailed', JSON.stringify({ test: 'value', timestamp: Date.now() }), { ex: 60 });
        console.log(`${name} SET result:`, setResult);
        
        // Test GET
        const getResult = await redis.get('test:detailed');
        console.log(`${name} GET result:`, getResult);
        
        // Test with different key format
        const setResult2 = await redis.setex('test-detailed-2', 60, 'simple-value');
        console.log(`${name} SETEX result:`, setResult2);
        
        const getResult2 = await redis.get('test-detailed-2');
        console.log(`${name} GET result 2:`, getResult2);
        
        results.push({
          name,
          success: true,
          set: setResult,
          get: getResult,
          setex: setResult2,
          get2: getResult2
        });
        
      } catch (error: any) {
        console.error(`${name} error:`, error);
        results.push({
          name,
          success: false,
          error: error.message
        });
      }
    }
    
    return NextResponse.json({
      success: true,
      message: 'Detailed Redis test completed',
      environment: {
        redisUrl: redisUrl ? 'Set' : 'Not set',
        redisToken: redisToken ? 'Set' : 'Not set',
        urlLength: redisUrl?.length || 0,
        tokenLength: redisToken?.length || 0
      },
      results
    });

  } catch (error: any) {
    console.error('Detailed Redis test error:', error);
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
