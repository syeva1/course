#!/usr/bin/env node

/**
 * REAL Cursor Version Fetcher
 * Fetches from ToDesktop manifest (the ONLY reliable source)
 */

const https = require('https');

// ToDesktop manifest URLs (CONFIRMED WORKING)
const SOURCES = {
  mac: 'https://download.todesktop.com/230313mzl4w4u92/latest-mac.yml',
  windows: 'https://download.todesktop.com/230313mzl4w4u92/latest.yml',
};

function fetchVersion(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        // Parse YAML (simple version extraction)
        const match = data.match(/^version:\s*(.+)$/m);
        if (match) {
          resolve(match[1].trim());
        } else {
          reject(new Error('Version not found in manifest'));
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  console.log('🔍 Fetching latest Cursor version from ToDesktop...\n');

  try {
    // Fetch from both Mac and Windows (should be same)
    const [macVersion, winVersion] = await Promise.all([
      fetchVersion(SOURCES.mac).catch(() => null),
      fetchVersion(SOURCES.windows).catch(() => null),
    ]);

    const version = macVersion || winVersion;

    if (!version) {
      console.error('❌ Could not fetch version from any source');
      process.exit(1);
    }

    console.log(`✅ Latest Cursor build version: ${version}`);
    console.log(`📦 Source: ToDesktop manifest`);
    
    // Note about version schemes
    console.log(`\n📝 NOTE: This is the build version (0.x.x format).`);
    console.log(`   The display version (1.7.x) may be different.`);
    console.log(`   Use the version you see in Cursor → About Cursor.`);
    
    console.log(`\n🔧 To update your site:`);
    console.log(`   npm run update-version <version>`);
    console.log(`   Example: npm run update-version 1.7.39`);

    return version;
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { fetchVersion, SOURCES };

