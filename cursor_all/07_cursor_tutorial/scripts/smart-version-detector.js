#!/usr/bin/env node

/**
 * SMART VERSION DETECTOR
 * Uses multiple strategies to detect the latest Cursor version
 * Fallback approach when web scraping fails
 */

const { fetchVersion } = require('./fetch-cursor-version-real');
const { exec } = require('child_process');

/**
 * Strategy 1: Use ToDesktop API + intelligent version mapping
 */
async function detectFromToDesktop() {
  try {
    console.log('🔍 Checking ToDesktop API...');
    const buildVersion = await fetchVersion();
    console.log(`📦 Build version: ${buildVersion}`);
    
    // Intelligent version mapping based on build version patterns
    const versionMap = {
      '0.45.14': '1.7.52',
      '0.45.15': '1.7.53',
      '0.45.16': '1.7.54',
      '0.45.17': '1.7.55',
      '0.45.18': '1.7.56',
      '0.45.19': '1.7.57',
      '0.45.20': '1.7.58',
      // Add more mappings as needed
    };
    
    const displayVersion = versionMap[buildVersion];
    if (displayVersion) {
      console.log(`✅ Mapped to display version: ${displayVersion}`);
      return { source: 'ToDesktop API', version: displayVersion };
    } else {
      console.log(`⚠️  No mapping found for build version: ${buildVersion}`);
      return null;
    }
  } catch (error) {
    console.log(`❌ ToDesktop API error: ${error.message}`);
    return null;
  }
}

/**
 * Strategy 2: Check local Cursor installation
 */
async function detectFromLocal() {
  return new Promise((resolve) => {
    console.log('🔍 Checking local Cursor installation...');
    
    // Try multiple commands
    const commands = [
      'cursor --version',
      'cursor -v',
      'cursor version'
    ];
    
    let completed = 0;
    let found = false;
    
    commands.forEach(cmd => {
      exec(cmd, (error, stdout) => {
        completed++;
        
        if (!found && !error && stdout) {
          const match = stdout.match(/(\d+\.\d+\.\d+)/);
          if (match) {
            console.log(`✅ Local version found: ${match[1]}`);
            resolve({ source: 'Local Installation', version: match[1] });
            found = true;
            return;
          }
        }
        
        if (completed === commands.length && !found) {
          console.log('❌ No local version found');
          resolve(null);
        }
      });
    });
  });
}

/**
 * Strategy 3: Use a known recent version as fallback
 */
function getFallbackVersion() {
  // This would be updated periodically to a recent known version
  const fallbackVersion = '1.7.52';
  console.log(`🔄 Using fallback version: ${fallbackVersion}`);
  return { source: 'Fallback', version: fallbackVersion };
}

/**
 * Main detection function with multiple strategies
 */
async function detectVersion() {
  console.log('🤖 SMART CURSOR VERSION DETECTION\n');
  console.log('='.repeat(50));

  const strategies = [
    { name: 'Local Installation', fn: detectFromLocal },
    { name: 'ToDesktop API', fn: detectFromToDesktop },
    { name: 'Fallback', fn: getFallbackVersion }
  ];

  for (const strategy of strategies) {
    try {
      const result = await strategy.fn();
      if (result && result.version) {
        console.log(`\n✨ Selected version: ${result.version} (from ${result.source})`);
        return result.version;
      }
    } catch (error) {
      console.log(`❌ ${strategy.name} failed: ${error.message}`);
    }
  }

  console.log('\n❌ All detection strategies failed');
  return null;
}

// CLI usage
if (require.main === module) {
  detectVersion()
    .then(version => {
      if (version) {
        console.log(`\n📤 Detected version: ${version}`);
        process.exit(0);
      } else {
        console.log('\n❌ Could not detect version');
        process.exit(1);
      }
    })
    .catch(error => {
      console.error('❌ Error:', error.message);
      process.exit(1);
    });
}

module.exports = { detectVersion };
