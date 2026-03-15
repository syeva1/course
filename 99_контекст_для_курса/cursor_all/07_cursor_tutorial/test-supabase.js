// Test Supabase client creation
const { createClient } = require('@supabase/supabase-js');

console.log('Testing Supabase client creation...');

const supabaseUrl = 'https://akrdqcjdyupjtrlfjljt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrcmRxY2pkeXVwanRybGZqbGp0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDcwMjg3MCwiZXhwIjoyMDc2Mjc4ODcwfQ.8NbTgPcwbMLmi0JDfqPxQliOm_-M33EwWfXcqO4916U';

try {
  const supabaseAdmin = createClient(supabaseUrl, supabaseKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
  
  console.log('✅ Supabase client created successfully');
  console.log('Client type:', typeof supabaseAdmin);
  console.log('Has from method:', typeof supabaseAdmin.from);
  
  // Test a simple query
  supabaseAdmin.from('cursor_content').select('count').limit(1)
    .then(result => {
      console.log('✅ Query successful:', result);
    })
    .catch(error => {
      console.log('❌ Query failed:', error.message);
    });
    
} catch (error) {
  console.log('❌ Client creation failed:', error.message);
}
