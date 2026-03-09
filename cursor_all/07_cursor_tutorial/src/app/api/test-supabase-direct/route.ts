import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

/**
 * GET /api/test-supabase-direct
 * Test Supabase connection without using the client library
 */
export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({
        error: 'Missing environment variables',
        supabaseUrl: !!supabaseUrl,
        supabaseKey: !!supabaseKey,
      });
    }
    
    // Try to fetch directly from Supabase REST API
    const response = await fetch(`${supabaseUrl}/rest/v1/cursor_content?select=count&limit=1`, {
      method: 'GET',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'count=exact'
      }
    });
    
    const data = await response.text();
    
    return NextResponse.json({
      success: true,
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
      data: data.substring(0, 500), // First 500 chars
      supabaseUrl: supabaseUrl.substring(0, 30) + '...',
    });
    
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      stack: error.stack?.substring(0, 500),
      cause: error.cause?.toString(),
    }, { status: 500 });
  }
}

