// Quick Redis test
const { cache } = require('./src/lib/redis.ts');

async function testRedis() {
  console.log('Testing Redis cache...');
  
  // Test cache status
  const status = cache.getStatus();
  console.log('Cache status:', status);
  
  // Test setting a value
  try {
    await cache.set('test-key', { message: 'Hello Redis!' }, 60);
    console.log('✅ Cache set successful');
    
    // Test getting the value
    const result = await cache.get('test-key');
    console.log('✅ Cache get result:', result);
    
    // Test cache key generation
    const key = cache.generateKey('How do I use Cursor?');
    console.log('✅ Generated cache key:', key);
    
  } catch (error) {
    console.error('❌ Cache test failed:', error);
  }
}

testRedis();
