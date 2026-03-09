// Debug script to test search functionality
const https = require('https');

// Replace with your actual domain
const DOMAIN = 'www.cursortutorial.ai';

async function testEndpoint(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: DOMAIN,
      port: 443,
      path: path,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; DebugBot/1.0)'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve({ status: res.statusCode, data: jsonData });
        } catch (e) {
          resolve({ status: res.statusCode, data: data });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.end();
  });
}

async function runTests() {
  console.log('🔍 Testing search functionality...\n');

  // Test 1: Health check
  console.log('1. Testing health check...');
  try {
    const health = await testEndpoint('/api/search/health');
    console.log('   Status:', health.status);
    console.log('   Response:', JSON.stringify(health.data, null, 2));
  } catch (error) {
    console.log('   Error:', error.message);
  }

  console.log('\n2. Testing search test endpoint...');
  try {
    const test = await testEndpoint('/api/search/test');
    console.log('   Status:', test.status);
    console.log('   Response:', JSON.stringify(test.data, null, 2));
  } catch (error) {
    console.log('   Error:', error.message);
  }

  console.log('\n3. Testing simple search...');
  try {
    const simple = await testEndpoint('/api/search/simple?q=cursor');
    console.log('   Status:', simple.status);
    console.log('   Response:', JSON.stringify(simple.data, null, 2));
  } catch (error) {
    console.log('   Error:', error.message);
  }

  console.log('\n4. Testing main search...');
  try {
    const search = await testEndpoint('/api/search/ask?q=What is Cursor?');
    console.log('   Status:', search.status);
    console.log('   Response:', JSON.stringify(search.data, null, 2));
  } catch (error) {
    console.log('   Error:', error.message);
  }
}

// Update the domain and run
console.log('Please update the DOMAIN variable in this script with your actual domain');
console.log('Current domain:', DOMAIN);
console.log('Then run: node debug-search.js\n');

runTests().catch(console.error);
