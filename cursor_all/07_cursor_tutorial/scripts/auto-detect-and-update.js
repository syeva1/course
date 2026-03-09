#!/usr/bin/env node

/**
 * AUTO-DETECT AND UPDATE
 * Strategy: Check your LOCAL Cursor installation for version
 */

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Possible Cursor installation paths
const CURSOR_PATHS = [
  '/Applications/Cursor.app/Contents/Info.plist',  // Mac
  '~/Library/Application Support/Cursor/VERSION', // Mac alternate
  'C:\\Program Files\\Cursor\\Cursor.exe',        // Windows
  process.env.LOCALAPPDATA + '\\Programs\\cursor\\Cursor.exe', // Windows user install
];

function parsePlist(plistPath) {
  return new Promise((resolve, reject) => {
    exec(`/usr/libexec/PlistBuddy -c "Print :CFBundleShortVersionString" "${plistPath}"`, (error, stdout) => {
      if (error) {
        resolve(null);
      } else {
        resolve(stdout.trim());
      }
    });
  });
}

function getWindowsVersion(exePath) {
  return new Promise((resolve) => {
    // Windows: use wmic or PowerShell
    exec(`powershell "(Get-Item '${exePath}').VersionInfo.ProductVersion"`, (error, stdout) => {
      if (error) {
        resolve(null);
      } else {
        resolve(stdout.trim());
      }
    });
  });
}

async function detectLocalCursorVersion() {
  console.log('🔍 Checking for local Cursor installation...\n');

  // Try Mac plist
  if (process.platform === 'darwin') {
    const version = await parsePlist(CURSOR_PATHS[0]);
    if (version) {
      return { version, source: 'Local Mac Installation' };
    }
  }

  // Try Windows exe
  if (process.platform === 'win32') {
    for (const exePath of CURSOR_PATHS.slice(2)) {
      if (fs.existsSync(exePath)) {
        const version = await getWindowsVersion(exePath);
        if (version) {
          return { version, source: 'Local Windows Installation' };
        }
      }
    }
  }

  return null;
}

function getCurrentWebsiteVersion() {
  try {
    const heroPath = path.join(process.cwd(), 'src/components/Hero.tsx');
    const heroContent = fs.readFileSync(heroPath, 'utf8');
    const match = heroContent.match(/Cursor (\d+\.\d+\.\d+)/);
    return match ? match[1] : null;
  } catch (e) {
    return null;
  }
}

async function main() {
  console.log('🤖 AUTO-DETECT CURSOR VERSION\n');
  console.log('='.repeat(50));

  // 1. Check local installation
  const local = await detectLocalCursorVersion();

  // 2. Check current website version
  const current = getCurrentWebsiteVersion();

  console.log('\n📊 VERSION STATUS:\n');

  if (local) {
    console.log(`✅ Local Cursor:    ${local.version} (${local.source})`);
  } else {
    console.log(`⚠️  Local Cursor:    Not detected`);
  }

  if (current) {
    console.log(`📝 Website:         ${current}`);
  } else {
    console.log(`⚠️  Website:        Version not found`);
  }

  console.log('\n' + '='.repeat(50));

  // Decision logic
  if (local && current) {
    if (local.version === current) {
      console.log('\n✅ Website is UP TO DATE!\n');
      process.exit(0);
    } else {
      console.log(`\n⚠️  VERSION MISMATCH DETECTED!\n`);
      console.log(`   Local:   ${local.version}`);
      console.log(`   Website: ${current}`);
      console.log(`\n🔧 TO UPDATE:`);
      console.log(`   npm run update-version ${local.version}`);
      console.log(`   git add -A && git commit -m "Update to Cursor ${local.version}" && git push\n`);
      
      // Return version for automation
      console.log(`\n📤 Detected version: ${local.version}`);
      return local.version;
    }
  } else if (local) {
    console.log(`\n🔧 TO UPDATE:`);
    console.log(`   npm run update-version ${local.version}\n`);
    return local.version;
  } else {
    console.log(`\n⚠️  Could not auto-detect version.`);
    console.log(`\n📝 MANUAL STEPS:`);
    console.log(`   1. Open Cursor → Settings → About`);
    console.log(`   2. Note the version number (e.g., 1.7.39)`);
    console.log(`   3. Run: npm run update-version <version>\n`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { detectLocalCursorVersion, getCurrentWebsiteVersion };

