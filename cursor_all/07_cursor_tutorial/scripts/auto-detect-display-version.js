#!/usr/bin/env node

/**
 * AUTO-DETECT CURSOR DISPLAY VERSION
 * Automatically detects the actual display version from Cursor's website
 * No manual mapping required!
 */

const https = require('https');
const { JSDOM } = require('jsdom');

// Multiple sources to try for version detection
const VERSION_SOURCES = [
  {
    name: 'Cursor Download Page',
    url: 'https://www.cursor.com/download',
    selector: 'text',
    pattern: /(?:version|v|release)[:\s]*(\d+\.\d+\.\d+)/i,
    followRedirects: true
  },
  {
    name: 'Cursor Changelog',
    url: 'https://cursor.com/changelog',
    selector: 'text',
    pattern: /(?:version|v|release)[:\s]*(\d+\.\d+\.\d+)/i,
    followRedirects: true
  },
  {
    name: 'Cursor GitHub Releases',
    url: 'https://api.github.com/repos/getcursor/cursor/releases/latest',
    selector: 'json',
    pattern: 'tag_name',
    followRedirects: true
  },
  {
    name: 'Cursor App Store',
    url: 'https://apps.apple.com/app/cursor/id6448786771',
    selector: 'text',
    pattern: /version[:\s]*(\d+\.\d+\.\d+)/i,
    followRedirects: true
  },
  {
    name: 'Cursor Homepage',
    url: 'https://cursor.com',
    selector: 'text',
    pattern: /(?:version|v|release)[:\s]*(\d+\.\d+\.\d+)/i,
    followRedirects: true
  }
];

/**
 * Fetch content from a URL with redirect support
 */
function fetchContent(url, followRedirects = true) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    };

    const makeRequest = (requestUrl) => {
      https.get(requestUrl, options, (res) => {
        // Handle redirects
        if (followRedirects && (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 308)) {
          const redirectUrl = res.headers.location;
          if (redirectUrl) {
            console.log(`   → Redirecting to: ${redirectUrl}`);
            makeRequest(redirectUrl);
            return;
          }
        }

        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(data);
          } else {
            reject(new Error(`HTTP ${res.statusCode}`));
          }
        });
      }).on('error', reject);
    };

    makeRequest(url);
  });
}

/**
 * Extract version from HTML content
 */
function extractVersionFromHTML(html, pattern) {
  const dom = new JSDOM(html);
  const text = dom.window.document.body.textContent;
  const match = text.match(pattern);
  return match ? match[1] : null;
}

/**
 * Extract version from JSON content
 */
function extractVersionFromJSON(json, field) {
  try {
    const data = JSON.parse(json);
    const version = data[field];
    if (version) {
      // Remove 'v' prefix if present
      return version.replace(/^v/, '');
    }
  } catch (e) {
    // Ignore JSON parse errors
  }
  return null;
}

/**
 * Try to detect version from a single source
 */
async function detectVersionFromSource(source) {
  try {
    console.log(`🔍 Checking ${source.name}...`);
    const content = await fetchContent(source.url, source.followRedirects);
    
    let version = null;
    if (source.selector === 'json') {
      version = extractVersionFromJSON(content, source.pattern);
    } else {
      version = extractVersionFromHTML(content, source.pattern);
    }
    
    if (version) {
      console.log(`✅ Found version: ${version}`);
      return { source: source.name, version };
    } else {
      console.log(`❌ No version found`);
      return null;
    }
  } catch (error) {
    console.log(`❌ Error: ${error.message}`);
    return null;
  }
}

/**
 * Try to detect version from Cursor's local installation
 */
async function detectLocalVersion() {
  const { exec } = require('child_process');
  
  return new Promise((resolve) => {
    // Try to get version from Cursor CLI
    exec('cursor --version 2>/dev/null', (error, stdout) => {
      if (error || !stdout) {
        resolve(null);
        return;
      }
      
      const match = stdout.match(/(\d+\.\d+\.\d+)/);
      if (match) {
        console.log(`✅ Local Cursor version: ${match[1]}`);
        resolve({ source: 'Local Installation', version: match[1] });
      } else {
        resolve(null);
      }
    });
  });
}

/**
 * Main version detection function
 */
async function detectDisplayVersion() {
  console.log('🤖 AUTO-DETECTING CURSOR DISPLAY VERSION\n');
  console.log('='.repeat(60));

  const results = [];

  // Try local installation first (most reliable)
  console.log('1. Checking local Cursor installation...');
  const localResult = await detectLocalVersion();
  if (localResult) {
    results.push(localResult);
  }

  // Try web sources
  console.log('\n2. Checking web sources...');
  for (let i = 0; i < VERSION_SOURCES.length; i++) {
    const source = VERSION_SOURCES[i];
    const result = await detectVersionFromSource(source);
    if (result) {
      results.push(result);
    }
    
    // Add small delay between requests
    if (i < VERSION_SOURCES.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('📊 DETECTION RESULTS:\n');

  if (results.length === 0) {
    console.log('❌ Could not detect Cursor version from any source');
    console.log('\n💡 Manual fallback:');
    console.log('   1. Open Cursor → About Cursor');
    console.log('   2. Note the version number');
    console.log('   3. Run: npm run update-version <version>');
    return null;
  }

  // Show all detected versions
  results.forEach((result, i) => {
    console.log(`${i + 1}. ${result.source}: ${result.version}`);
  });

  // Use the most reliable source (local > download page > others)
  const priorityOrder = ['Local Installation', 'Cursor Download Page', 'Cursor Changelog', 'Cursor GitHub Releases'];
  let selectedResult = null;

  for (const source of priorityOrder) {
    selectedResult = results.find(r => r.source === source);
    if (selectedResult) break;
  }

  if (!selectedResult) {
    selectedResult = results[0]; // Fallback to first result
  }

  console.log(`\n✨ Selected version: ${selectedResult.version} (from ${selectedResult.source})`);
  return selectedResult.version;
}

// CLI usage
if (require.main === module) {
  detectDisplayVersion()
    .then(version => {
      if (version) {
        console.log(`\n📤 Detected version: ${version}`);
        process.exit(0);
      } else {
        process.exit(1);
      }
    })
    .catch(error => {
      console.error('❌ Error:', error.message);
      process.exit(1);
    });
}

module.exports = { detectDisplayVersion };
