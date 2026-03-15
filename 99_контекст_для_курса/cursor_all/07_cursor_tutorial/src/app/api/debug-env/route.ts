import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

/**
 * GET /api/debug-env
 * Debug endpoint to check environment variables (without exposing sensitive values)
 */
export async function GET() {
  return NextResponse.json({
    env: {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ? 
        `${process.env.NEXT_PUBLIC_SUPABASE_URL.substring(0, 20)}...` : 'not set',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 
        `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.substring(0, 20)}...` : 'not set',
      SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY ? 
        `${process.env.SUPABASE_SERVICE_ROLE_KEY.substring(0, 20)}...` : 'not set',
      OPENAI_API_KEY: process.env.OPENAI_API_KEY ? 
        `sk-...${process.env.OPENAI_API_KEY.substring(process.env.OPENAI_API_KEY.length - 4)}` : 'not set',
      Claude_My_Secret_Key: process.env.Claude_My_Secret_Key ? 
        `sk-...${process.env.Claude_My_Secret_Key.substring(process.env.Claude_My_Secret_Key.length - 4)}` : 'not set',
    },
    node_env: process.env.NODE_ENV,
    vercel: process.env.VERCEL ? 'true' : 'false',
  });
}

