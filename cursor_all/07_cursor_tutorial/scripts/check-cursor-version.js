#!/usr/bin/env node

/**
 * Manually check for the latest Cursor version
 * This script attempts multiple methods to fetch the version
 */

const https = require('https');
const { exec } = require('child_process');

console.log('🔍 Checking for latest Cursor version...\n');

// Method 1: Try to get from Cursor's releases (if they have an API)
function checkCursorAPI() {
  return new Promise((resolve) => {
    https.get('https://api.cursor.sh/version', (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.version) {
            resolve({ method: 'Cursor API', version: json.version });
          } else {
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

// Method 2: Try to scrape the download page
function checkDownloadPage() {
  return new Promise((resolve) => {
    https.get('https://www.cursor.com/download', (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        // Look for version patterns in the HTML
        const matches = data.match(/Version[:\s]+(\d+\.\d+\.\d+)/i) || 
                       data.match(/v(\d+\.\d+\.\d+)/i) ||
                       data.match(/(\d+\.\d+\.\d+)/);
        if (matches && matches[1]) {
          resolve({ method: 'Download Page', version: matches[1] });
        } else {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

// Method 3: Try GitHub releases (if Cursor publishes there)
function checkGitHubReleases() {
  return new Promise((resolve) => {
    const options = {
      hostname: 'api.github.com',
      path: '/repos/getcursor/cursor/releases/latest',
      headers: { 'User-Agent': 'Node.js' }
    };
    
    https.get(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.tag_name) {
            const version = json.tag_name.replace(/^v/, '');
            resolve({ method: 'GitHub Releases', version });
          } else {
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

// Method 4: Check if Cursor is installed locally and get its version
function checkLocalCursor() {
  return new Promise((resolve) => {
    // Try to get version from Cursor CLI if installed
    exec('cursor --version 2>/dev/null', (error, stdout) => {
      if (error || !stdout) {
        resolve(null);
        return;
      }
      const match = stdout.match(/(\d+\.\d+\.\d+)/);
      if (match) {
        resolve({ method: 'Local Cursor Installation', version: match[1] });
      } else {
        resolve(null);
      }
    });
  });
}

// Run all methods
async function findLatestVersion() {
  const methods = [
    checkLocalCursor(),
    checkCursorAPI(),
    checkDownloadPage(),
    checkGitHubReleases()
  ];
  
  const results = await Promise.all(methods);
  const validResults = results.filter(r => r !== null);
  
  console.log('📋 Version check results:\n');
  
  if (validResults.length === 0) {
    console.log('❌ Could not detect Cursor version from any source.');
    console.log('\n💡 Suggestions:');
    console.log('   1. Manually check: https://www.cursor.com/download');
    console.log('   2. Run: node scripts/update-version.js <version>');
    console.log('   3. Update CURSOR_VERSION.txt manually');
    return null;
  }
  
  validResults.forEach((result, i) => {
    console.log(`${i + 1}. ${result.method}: ${result.version}`);
  });
  
  // If we have multiple results, prefer the highest version number
  const versions = validResults.map(r => r.version);
  const latest = versions.sort((a, b) => {
    const [aMaj, aMin, aPatch] = a.split('.').map(Number);
    const [bMaj, bMin, bPatch] = b.split('.').map(Number);
    if (aMaj !== bMaj) return bMaj - aMaj;
    if (aMin !== bMin) return bMin - aMin;
    return bPatch - aPatch;
  })[0];
  
  console.log(`\n✨ Latest detected version: ${latest}\n`);
  
  // Check current version in codebase
  const fs = require('fs');
  const path = require('path');
  
  try {
    const heroPath = path.join(process.cwd(), 'src/components/Hero.tsx');
    const heroContent = fs.readFileSync(heroPath, 'utf8');
    const currentMatch = heroContent.match(/Cursor (\d+\.\d+\.\d+)/);
    
    if (currentMatch) {
      const current = currentMatch[1];
      console.log(`📦 Current version in codebase: ${current}`);
      
      if (current === latest) {
        console.log('✅ Codebase is up to date!');
      } else {
        console.log(`⚠️  Update available: ${current} → ${latest}`);
        console.log(`\n🔧 To update, run:`);
        console.log(`   node scripts/update-version.js ${latest}`);
      }
    }
  } catch (e) {
    console.log('⚠️  Could not read current version from codebase');
  }
  
  return latest;
}

findLatestVersion();

