#!/usr/bin/env node

/**
 * FETCH CURSOR VERSION FROM CHANGELOG
 * This is the REAL source for display versions (1.7, 1.6, etc.)
 * Source: https://cursor.com/changelog
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const CHANGELOG_URL = 'https://cursor.com/changelog';

function fetchChangelog() {
  return new Promise((resolve, reject) => {
    https.get(CHANGELOG_URL, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function parseLatestVersion(html) {
  // Look for version pattern like "1.7 Sep 29, 2025"
  // The changelog shows: <h2>1.7 Sep 29, 2025 · Changelog</h2> or similar
  
  // Try multiple patterns
  const patterns = [
    /(\d+\.\d+(?:\.\d+)?)\s+[A-Z][a-z]+\s+\d+,\s+20\d{2}/g,  // "1.7 Sep 29, 2025"
    /version[:\s]+(\d+\.\d+(?:\.\d+)?)/gi,                    // "version: 1.7"
    /<h\d[^>]*>(\d+\.\d+(?:\.\d+)?)/gi,                       // <h2>1.7
  ];
  
  const versions = [];
  
  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(html)) !== null) {
      const version = match[1];
      // Validate version format
      if (/^\d+\.\d+(\.\d+)?$/.test(version)) {
        versions.push(version);
      }
    }
  }
  
  if (versions.length === 0) {
    return null;
  }
  
  // Return the first (latest) version found
  return versions[0];
}

function parseAllVersions(html) {
  // Extract all versions with their dates for mapping
  const versionRegex = /(\d+\.\d+(?:\.\d+)?)\s+([A-Z][a-z]+\s+\d+,\s+20\d{2})/g;
  const versions = [];
  let match;
  
  while ((match = versionRegex.exec(html)) !== null) {
    versions.push({
      version: match[1],
      date: match[2],
      timestamp: new Date(match[2]).getTime()
    });
  }
  
  return versions.sort((a, b) => b.timestamp - a.timestamp);
}

async function main() {
  console.log('🔍 Fetching Cursor versions from official changelog...\n');
  console.log('📍 Source: https://cursor.com/changelog\n');
  
  try {
    const html = await fetchChangelog();
    
    // Parse latest version
    const latestVersion = parseLatestVersion(html);
    
    if (!latestVersion) {
      console.error('❌ Could not parse version from changelog');
      console.error('   The changelog format may have changed.');
      process.exit(1);
    }
    
    console.log(`✅ Latest Cursor Version: ${latestVersion}`);
    
    // Parse all versions for context
    const allVersions = parseAllVersions(html);
    
    if (allVersions.length > 0) {
      console.log(`\n📚 Recent versions found:`);
      allVersions.slice(0, 5).forEach(v => {
        console.log(`   - ${v.version} (${v.date})`);
      });
    }
    
    // Also fetch build version from ToDesktop
    console.log(`\n🔗 Fetching corresponding build version...`);
    const buildVersion = await fetchBuildVersion();
    console.log(`   Build Version: ${buildVersion}`);
    
    // Update version mapping
    const versionMapPath = path.join(__dirname, '../version-map.json');
    let versionMap = {};
    
    try {
      if (fs.existsSync(versionMapPath)) {
        versionMap = JSON.parse(fs.readFileSync(versionMapPath, 'utf8'));
        delete versionMap.note; // Remove note field for processing
      }
    } catch (e) {
      // Ignore errors
    }
    
    // Add new mapping
    versionMap[buildVersion] = latestVersion;
    versionMap.note = "This file maps Cursor build versions to display versions. Auto-generated from changelog.";
    versionMap.lastUpdated = new Date().toISOString();
    
    fs.writeFileSync(versionMapPath, JSON.stringify(versionMap, null, 2), 'utf8');
    console.log(`\n✅ Updated version-map.json: ${buildVersion} → ${latestVersion}`);
    
    // Output for automation
    console.log(`\n📤 Latest version: ${latestVersion}`);
    console.log(`📤 Build version: ${buildVersion}`);
    
    return { displayVersion: latestVersion, buildVersion };
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

function fetchBuildVersion() {
  return new Promise((resolve, reject) => {
    https.get('https://download.todesktop.com/230313mzl4w4u92/latest-mac.yml', (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        const match = data.match(/^version:\s*(.+)$/m);
        if (match) {
          resolve(match[1].trim());
        } else {
          resolve('unknown');
        }
      });
    }).on('error', () => resolve('unknown'));
  });
}

if (require.main === module) {
  main();
}

module.exports = { fetchChangelog, parseLatestVersion, parseAllVersions };

