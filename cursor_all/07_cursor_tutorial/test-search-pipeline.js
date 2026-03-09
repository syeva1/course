#!/usr/bin/env node

/**
 * Test script for the search pipeline
 * Run with: node test-search-pipeline.js
 */

const BASE_URL = process.env.BASE_URL || 'https://cursortutorial.ai';

async function testEndpoint(endpoint, method = 'GET', body = null) {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    
    if (body) {
      options.body = JSON.stringify(body);
    }

    console.log(`\n🔍 Testing ${method} ${endpoint}...`);
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    const data = await response.json();
    
    if (response.ok) {
      console.log(`✅ ${endpoint} - Status: ${response.status}`);
      console.log(`   Response:`, JSON.stringify(data, null, 2).substring(0, 200) + '...');
    } else {
      console.log(`❌ ${endpoint} - Status: ${response.status}`);
      console.log(`   Error:`, data.error || 'Unknown error');
    }
    
    return { success: response.ok, data, status: response.status };
  } catch (error) {
    console.log(`💥 ${endpoint} - Error:`, error.message);
    return { success: false, error: error.message };
  }
}

async function runTests() {
  console.log('🚀 Starting Search Pipeline Tests...\n');
  
  // Test 1: Health Check
  await testEndpoint('/api/search/health');
  
  // Test 2: Test Embeddings
  await testEndpoint('/api/test-embeddings');
  
  // Test 3: Debug Embeddings
  await testEndpoint('/api/debug-embeddings');
  
  // Test 4: Search Stream (simple query)
  await testEndpoint('/api/search/stream', 'POST', {
    question: 'What is Cursor?'
  });
  
  // Test 5: Search Stream (complex query)
  await testEndpoint('/api/search/stream', 'POST', {
    question: 'How do I use Tab completion in Cursor?'
  });
  
  // Test 6: Feedback
  await testEndpoint('/api/search/feedback', 'POST', {
    query: 'What is Cursor?',
    wasHelpful: true,
    rating: 5
  });
  
  // Test 7: Rate Limiting (make multiple requests quickly)
  console.log('\n🔄 Testing rate limiting...');
  for (let i = 0; i < 7; i++) {
    await testEndpoint('/api/search/stream', 'POST', {
      question: `Test query ${i + 1}`
    });
    await new Promise(resolve => setTimeout(resolve, 100)); // Small delay
  }
  
  console.log('\n✨ Tests completed!');
  console.log('\n📋 Summary:');
  console.log('- Health check: Verify all services are running');
  console.log('- Embeddings test: Check if database has content');
  console.log('- Search stream: Test the main search functionality');
  console.log('- Feedback: Test user feedback system');
  console.log('- Rate limiting: Verify abuse prevention');
}

// Run the tests
runTests().catch(console.error);
