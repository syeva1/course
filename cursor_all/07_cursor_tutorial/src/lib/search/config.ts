/**
 * Search configuration options
 */

export interface SearchConfig {
  // Embedding dimensions
  embeddingDimensions: 512 | 1536;
  
  // Search parameters
  maxSources: number;
  matchThreshold: number;
  
  // Performance settings
  enableCaching: boolean;
  cacheTimeoutSeconds: number;
}

/**
 * Default configuration (optimized for speed)
 */
export const DEFAULT_CONFIG: SearchConfig = {
  embeddingDimensions: 512, // Fast mode for better performance
  maxSources: 4,
  matchThreshold: 0.35,
  enableCaching: true, // Redis caching enabled
  cacheTimeoutSeconds: 300, // 5 minutes
};

/**
 * Fast configuration (512 dimensions)
 */
export const FAST_CONFIG: SearchConfig = {
  embeddingDimensions: 512, // Reduced dimensions for speed
  maxSources: 4,
  matchThreshold: 0.35, // Slightly lower threshold to compensate
  enableCaching: false,
  cacheTimeoutSeconds: 300,
};

/**
 * Get current configuration from environment variables
 */
export function getSearchConfig(): SearchConfig {
  const useFastMode = process.env.SEARCH_FAST_MODE === 'true';
  
  if (useFastMode) {
    console.log('🚀 Using FAST mode (512 dimensions)');
    return FAST_CONFIG;
  } else {
    console.log('🎯 Using PRECISION mode (512 dimensions)');
    return DEFAULT_CONFIG;
  }
}

/**
 * Environment variable names for configuration
 */
export const CONFIG_ENV_VARS = {
  SEARCH_FAST_MODE: 'SEARCH_FAST_MODE', // Set to 'true' for 512 dimensions
  REDIS_URL: 'UPSTASH_REDIS_REST_URL',
  REDIS_TOKEN: 'UPSTASH_REDIS_REST_TOKEN',
} as const;
