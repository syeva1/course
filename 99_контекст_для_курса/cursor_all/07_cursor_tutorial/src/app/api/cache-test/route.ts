import { NextResponse } from 'next/server';
import { cache } from '@/lib/redis';

export async function GET() {
  const testKey = `test-${Date.now()}`;
  const testValue = { message: 'Cache test', timestamp: Date.now() };
  const ttl = 60; // 60 seconds

  const results: any = {
    test: {
      key: testKey,
      value: testValue,
      ttl: ttl
    },
    setOperation: {
      success: false,
      error: null,
    },
    getOperation: {
      success: false,
      retrievedValue: null,
      error: null,
    },
    status: cache.getStatus(),
    responseTimeMs: 0,
  };

  const startTime = Date.now();

  try {
    // Test SET operation
    await cache.set(testKey, testValue, ttl);
    results.setOperation.success = true;
  } catch (error: any) {
    results.setOperation.error = error.message;
  }

  // Small delay to ensure replication if any
  await new Promise(resolve => setTimeout(resolve, 100));

  try {
    // Test GET operation
    const retrieved = await cache.get(testKey);
    results.getOperation.success = retrieved !== null;
    results.getOperation.retrievedValue = retrieved;
  } catch (error: any) {
    results.getOperation.error = error.message;
  }

  results.responseTimeMs = Date.now() - startTime;

  return NextResponse.json({ 
    success: true, 
    message: "Cache test completed", 
    results 
  });
}
