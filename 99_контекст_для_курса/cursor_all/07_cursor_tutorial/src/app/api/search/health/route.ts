import { NextResponse } from 'next/server';
import { getSupabaseAdminClient } from '@/lib/search/supabase-client';
import { cache } from '@/lib/redis';

export const runtime = 'nodejs';

/**
 * GET /api/search/health
 * Health check endpoint for the search system
 */
export async function GET() {
  try {
    const health = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      services: {
        database: 'unknown',
        redis: 'unknown',
        openai: 'unknown',
        anthropic: 'unknown'
      } as Record<string, string>,
      details: {} as Record<string, string>
    };

    // Check database connection
    try {
      const supabaseAdmin = getSupabaseAdminClient();
      const { data, error } = await supabaseAdmin
        .from('cursor_content')
        .select('id')
        .limit(1);

      if (error) {
        health.services.database = 'error';
        health.details.database = error.message;
      } else {
        health.services.database = 'healthy';
        health.details.database = `Connected, ${data?.length || 0} content items`;
      }
    } catch (error: any) {
      health.services.database = 'error';
      health.details.database = error.message;
    }

    // Check Redis cache
    try {
      const cacheStatus = cache.getStatus();
      if (cacheStatus.redisWorking) {
        health.services.redis = 'healthy';
        health.details.redis = 'Connected and working';
      } else if (cacheStatus.redisConfigured) {
        health.services.redis = 'degraded';
        health.details.redis = 'Configured but not working, using memory fallback';
      } else {
        health.services.redis = 'not_configured';
        health.details.redis = 'Not configured, using memory fallback';
      }
    } catch (error: any) {
      health.services.redis = 'error';
      health.details.redis = error.message;
    }

    // Check OpenAI API key
    if (process.env.OPENAI_API_KEY) {
      health.services.openai = 'configured';
      health.details.openai = 'API key present';
    } else {
      health.services.openai = 'not_configured';
      health.details.openai = 'OPENAI_API_KEY not set';
    }

    // Check Anthropic API key
    if (process.env.Claude_My_Secret_Key) {
      health.services.anthropic = 'configured';
      health.details.anthropic = 'API key present';
    } else {
      health.services.anthropic = 'not_configured';
      health.details.anthropic = 'Claude_My_Secret_Key not set';
    }

    // Determine overall status
    const criticalServices = ['database', 'openai', 'anthropic'];
    const hasErrors = criticalServices.some(service => health.services[service] === 'error');
    const hasMissing = criticalServices.some(service => health.services[service] === 'not_configured');

    if (hasErrors) {
      health.status = 'unhealthy';
    } else if (hasMissing) {
      health.status = 'degraded';
    }

    const statusCode = health.status === 'healthy' ? 200 : 
                      health.status === 'degraded' ? 200 : 503;

    return NextResponse.json(health, { status: statusCode });

  } catch (error: any) {
    console.error('[Health Check] Error:', error);
    return NextResponse.json(
      {
        status: 'error',
        timestamp: new Date().toISOString(),
        error: error.message,
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}