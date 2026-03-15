import { createClient } from '@supabase/supabase-js';

// Lazy-loaded clients to avoid build-time errors
let supabaseClient: any = null;
let supabaseAdminClient: any = null;

export function getSupabaseClient() {
  if (!supabaseClient) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Missing Supabase environment variables');
    }
    
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
  }
  return supabaseClient;
}

export function getSupabaseAdminClient() {
  if (!supabaseAdminClient) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error('Missing Supabase environment variables');
    }
    
    supabaseAdminClient = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    });
  }
  return supabaseAdminClient;
}

// Backward compatibility exports - removed to avoid confusion

// Database types
export interface CursorContent {
  id: string;
  content: string;
  embedding: number[];
  metadata: {
    source: 'tutorial' | 'docs' | 'changelog' | 'rules' | 'community';
    title: string;
    url: string;
    category?: string;
    version?: string;
    quality_score: number;
    tags?: string[];
    author?: string;
    date: string;
  };
  created_at: string;
  updated_at: string;
}

export interface SearchQuery {
  id: string;
  query: string;
  results_count: number;
  response_time_ms: number;
  user_rating?: number;
  was_helpful?: boolean;
  created_at: string;
}

