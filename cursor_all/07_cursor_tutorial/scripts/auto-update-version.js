#!/usr/bin/env node

/**
 * AUTO-UPDATE CURSOR VERSION
 * Checks for new Cursor versions and automatically updates the website
 */

const { fetchVersion } = require('./fetch-cursor-version-real');
const { getDisplayVersion, getLatestDisplayVersion } = require('./version-mapper');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Get current version from the website
 */
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

/**
 * Update the website to a new version
 */
async function updateWebsiteVersion(newVersion) {
  return new Promise((resolve, reject) => {
    exec(`npm run update-version ${newVersion}`, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(`Update failed: ${error.message}`));
        return;
      }
      resolve(stdout);
    });
  });
}

/**
 * Main auto-update function
 */
async function autoUpdate() {
  console.log('🤖 AUTO-UPDATE CURSOR VERSION\n');
  console.log('='.repeat(50));

  try {
    // 1. Fetch latest build version from ToDesktop
    console.log('🔍 Fetching latest build version...');
    const buildVersion = await fetchVersion();
    console.log(`📦 Latest build version: ${buildVersion}`);

    // 2. Map to display version
    const displayVersion = getDisplayVersion(buildVersion);
    if (!displayVersion) {
      console.log(`❌ No mapping found for build version: ${buildVersion}`);
      console.log('💡 Please update the version mapping in scripts/version-mapper.js');
      console.log('   Then run: npm run update-version <display-version>');
      process.exit(1);
    }
    console.log(`🎯 Mapped display version: ${displayVersion}`);

    // 3. Check current website version
    const currentVersion = getCurrentWebsiteVersion();
    console.log(`📝 Current website version: ${currentVersion}`);

    // 4. Compare versions
    if (currentVersion === displayVersion) {
      console.log('\n✅ Website is already up to date!');
      return;
    }

    console.log(`\n⚠️  VERSION UPDATE NEEDED:`);
    console.log(`   Current:  ${currentVersion}`);
    console.log(`   Latest:   ${displayVersion}`);

    // 5. Update the website
    console.log('\n🚀 Updating website...');
    await updateWebsiteVersion(displayVersion);
    console.log('✅ Website updated successfully!');

    // 6. Show next steps
    console.log('\n📋 NEXT STEPS:');
    console.log('   1. Review the changes: git diff');
    console.log('   2. Commit and push: git add -A && git commit -m "Update to Cursor ' + displayVersion + '" && git push');
    console.log('   3. Verify the deployment');

  } catch (error) {
    console.error('❌ Error during auto-update:', error.message);
    process.exit(1);
  }
}

// CLI usage
if (require.main === module) {
  autoUpdate();
}

module.exports = { autoUpdate, getCurrentWebsiteVersion };
