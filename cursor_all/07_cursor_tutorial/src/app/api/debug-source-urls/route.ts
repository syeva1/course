import { NextResponse } from 'next/server';
import { getSupabaseAdminClient } from '@/lib/search/supabase-client';

export async function GET() {
  try {
    const supabase = getSupabaseAdminClient();
    
    // Get a few content items with their metadata
    const { data: content, error } = await supabase
      .from('cursor_content')
      .select('id, title, metadata')
      .limit(5);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Extract URL information
    const urlAnalysis = content?.map((item: any) => ({
      id: item.id,
      title: item.title,
      url: item.metadata?.url || 'No URL',
      source: item.metadata?.source || 'No source',
      category: item.metadata?.category || 'No category'
    }));

    return NextResponse.json({
      success: true,
      analysis: {
        totalItems: content?.length || 0,
        urlAnalysis
      }
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
