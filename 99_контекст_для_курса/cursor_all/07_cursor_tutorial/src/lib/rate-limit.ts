import { cache } from './redis';

interface RateLimitConfig {
  windowMs: number; // Time window in milliseconds
  maxRequests: number; // Max requests per window
  keyGenerator: (request: Request) => string; // Function to generate cache key
}

// Default rate limit: 10 requests per minute per IP
const DEFAULT_CONFIG: RateLimitConfig = {
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 10,
  keyGenerator: (request: Request) => {
    const clientIp = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';
    return `rate_limit:${clientIp}`;
  }
};

export class RateLimiter {
  private config: RateLimitConfig;

  constructor(config: Partial<RateLimitConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  async checkLimit(request: Request): Promise<{
    allowed: boolean;
    remaining: number;
    resetTime: number;
  }> {
    const key = this.config.keyGenerator(request);
    const now = Date.now();
    const windowStart = now - this.config.windowMs;

    try {
      // Get current request count
      const cached = await cache.get(key);
      const requests = cached ? JSON.parse(cached as string) : [];

      // Filter out requests outside the current window
      const validRequests = requests.filter((timestamp: number) => timestamp > windowStart);

      // Check if limit exceeded
      if (validRequests.length >= this.config.maxRequests) {
        return {
          allowed: false,
          remaining: 0,
          resetTime: validRequests[0] + this.config.windowMs
        };
      }

      // Add current request
      validRequests.push(now);

      // Store updated requests (with TTL)
      await cache.set(key, JSON.stringify(validRequests), Math.ceil(this.config.windowMs / 1000));

      return {
        allowed: true,
        remaining: this.config.maxRequests - validRequests.length,
        resetTime: now + this.config.windowMs
      };

    } catch (error) {
      console.error('Rate limiting error:', error);
      // If rate limiting fails, allow the request (fail open)
      return {
        allowed: true,
        remaining: this.config.maxRequests,
        resetTime: now + this.config.windowMs
      };
    }
  }

  async resetLimit(request: Request): Promise<void> {
    const key = this.config.keyGenerator(request);
    try {
      await cache.set(key, JSON.stringify([]), Math.ceil(this.config.windowMs / 1000));
    } catch (error) {
      console.error('Rate limit reset error:', error);
    }
  }
}

// Export a default rate limiter instance
export const rateLimiter = new RateLimiter();

// Export a more restrictive rate limiter for search endpoints
export const searchRateLimiter = new RateLimiter({
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 5, // 5 searches per minute
});
