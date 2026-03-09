import { Redis } from '@upstash/redis';

// Initialize Redis client (with fallback)
let redis: Redis | null = null;
let redisWorking = false;

if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  try {
    redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
    console.log('✅ Redis client initialized');
    redisWorking = true;
  } catch (error) {
    console.log('⚠️ Redis client failed to initialize:', error);
    redis = null;
    redisWorking = false;
  }
} else {
  console.log('⚠️ Redis not configured - using fallback caching');
}

// In-memory cache fallback
const memoryCache = new Map<string, { value: any; expires: number }>();

export { redis };

// Cache helper functions
export const cache = {
  // Store search result in cache
  async set(key: string, value: any, ttlSeconds: number = 300) {
    // Try Redis first
    if (redis && redisWorking) {
      try {
        await redis.setex(key, ttlSeconds, JSON.stringify(value));
        console.log(`✅ Redis cached: ${key}`);
        return;
      } catch (error) {
        console.log('⚠️ Redis set failed, falling back to memory:', error);
        redisWorking = false; // Mark Redis as not working
      }
    }
    
    // Fallback to memory cache
    const expires = Date.now() + (ttlSeconds * 1000);
    memoryCache.set(key, { value, expires });
    console.log(`✅ Memory cached: ${key}`);
  },

  // Get search result from cache
  async get(key: string) {
    // Try Redis first
    if (redis && redisWorking) {
      try {
        const cached = await redis.get(key);
        if (cached) {
          console.log(`🚀 Redis cache hit: ${key}`);
          return JSON.parse(cached as string);
        }
        console.log(`❌ Redis cache miss: ${key}`);
        return null;
      } catch (error) {
        console.log('⚠️ Redis get failed, falling back to memory:', error);
        redisWorking = false; // Mark Redis as not working
      }
    }
    
    // Fallback to memory cache
    const cached = memoryCache.get(key);
    if (cached && cached.expires > Date.now()) {
      console.log(`🚀 Memory cache hit: ${key}`);
      return cached.value;
    }
    
    // Clean up expired entries
    if (cached) {
      memoryCache.delete(key);
    }
    
    console.log(`❌ Memory cache miss: ${key}`);
    return null;
  },

  // Generate cache key for search queries
  generateKey(question: string): string {
    return `search:${question.toLowerCase().trim().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')}`;
  },

  // Clear cache (useful for testing)
  async clear() {
    // Clear Redis
    if (redis && redisWorking) {
      try {
        await redis.flushall();
        console.log('🧹 Redis cache cleared');
      } catch (error) {
        console.log('⚠️ Redis clear failed:', error);
        redisWorking = false;
      }
    }
    
    // Clear memory cache
    memoryCache.clear();
    console.log('🧹 Memory cache cleared');
  },

  // Get cache status
  getStatus() {
    return {
      redisWorking,
      memoryCacheSize: memoryCache.size,
      redisConfigured: !!redis
    };
  }
};
