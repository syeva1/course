import { NextRequest, NextResponse } from 'next/server';
import { searchSimilarContent } from '@/lib/search/vector-db';

export const runtime = 'nodejs';
export const maxDuration = 30;

/**
 * GET /api/search/test
 * Simple test endpoint to verify search functionality
 */
export async function GET(request: NextRequest) {
  try {
    console.log('🧪 Testing search functionality...');
    
    // Test 1: Check environment variables
    const envCheck = {
      openai: !!process.env.OPENAI_API_KEY,
      claude: !!process.env.Claude_My_Secret_Key,
      supabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    };
    
    console.log('Environment check:', envCheck);
    
    // Test 2: Try a simple search
    try {
      const searchResults = await searchSimilarContent('What is Cursor?', {
        matchCount: 3,
        matchThreshold: 0.5,
      });
      
      console.log('Search results:', searchResults.length);
      
      return NextResponse.json({
        success: true,
        environment: envCheck,
        searchResults: searchResults.length,
        sampleResult: searchResults[0] || null,
        message: 'Search functionality is working!'
      });
      
    } catch (searchError: any) {
      console.error('Search test failed:', searchError);
      
      return NextResponse.json({
        success: false,
        environment: envCheck,
        error: searchError.message,
        message: 'Search test failed'
      }, { status: 500 });
    }
    
  } catch (error: any) {
    console.error('Test endpoint error:', error);
    return NextResponse.json({
      success: false,
      error: error.message,
      message: 'Test endpoint failed'
    }, { status: 500 });
  }
}
