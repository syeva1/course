import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
    const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
    
    return NextResponse.json({
      success: true,
      environment: {
        redisUrl: redisUrl ? 'Set' : 'Not set',
        redisToken: redisToken ? 'Set' : 'Not set',
        redisUrlLength: redisUrl?.length || 0,
        redisTokenLength: redisToken?.length || 0
      }
    });

  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message
      },
      { status: 500 }
    );
  }
}
