#!/usr/bin/env node

/**
 * FULLY AUTOMATED CURSOR VERSION UPDATE
 * No manual steps required - automatically detects and updates to the latest version
 */

const { detectVersion } = require('./smart-version-detector');
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
 * Check if we should update (avoid too frequent updates)
 */
function shouldUpdate(currentVersion, newVersion) {
  if (currentVersion === newVersion) {
    return false;
  }

  // Parse versions for comparison
  const parseVersion = (v) => v.split('.').map(Number);
  const current = parseVersion(currentVersion);
  const latest = parseVersion(newVersion);

  // Only update if it's a significant version change
  // (major.minor.patch - update for any change)
  for (let i = 0; i < 3; i++) {
    if (latest[i] > current[i]) {
      return true;
    } else if (latest[i] < current[i]) {
      return false; // Don't downgrade
    }
  }

  return false;
}

/**
 * Main fully automated update function
 */
async function fullyAutomatedUpdate() {
  console.log('🚀 FULLY AUTOMATED CURSOR VERSION UPDATE\n');
  console.log('='.repeat(60));

  try {
    // 1. Detect latest display version automatically
    console.log('🔍 Auto-detecting latest Cursor version...');
    const latestVersion = await detectVersion();
    
    if (!latestVersion) {
      console.log('❌ Could not detect latest version');
      console.log('💡 This might be a temporary issue. Try again later.');
      process.exit(1);
    }

    // 2. Get current website version
    const currentVersion = getCurrentWebsiteVersion();
    console.log(`📝 Current website version: ${currentVersion || 'Unknown'}`);

    // 3. Check if update is needed
    if (!shouldUpdate(currentVersion, latestVersion)) {
      console.log('\n✅ Website is already up to date!');
      console.log(`   Current: ${currentVersion}`);
      console.log(`   Latest:  ${latestVersion}`);
      return;
    }

    console.log(`\n⚠️  VERSION UPDATE NEEDED:`);
    console.log(`   Current:  ${currentVersion}`);
    console.log(`   Latest:   ${latestVersion}`);

    // 4. Update the website
    console.log('\n🚀 Updating website...');
    await updateWebsiteVersion(latestVersion);
    console.log('✅ Website updated successfully!');

    // 5. Auto-commit and push (if in CI environment)
    if (process.env.CI || process.env.GITHUB_ACTIONS) {
      console.log('\n📤 Auto-committing and pushing changes...');
      
      // Configure git
      exec('git config --local user.email "action@github.com"');
      exec('git config --local user.name "GitHub Action"');
      
      // Add, commit, and push
      exec('git add -A', (error) => {
        if (error) {
          console.error('❌ Git add failed:', error.message);
          return;
        }
        
        exec(`git commit -m "Auto-update Cursor version to ${latestVersion}"`, (error) => {
          if (error) {
            console.error('❌ Git commit failed:', error.message);
            return;
          }
          
          exec('git push', (error) => {
            if (error) {
              console.error('❌ Git push failed:', error.message);
            } else {
              console.log('✅ Changes pushed successfully!');
            }
          });
        });
      });
    } else {
      console.log('\n📋 MANUAL STEPS (if not in CI):');
      console.log('   1. Review changes: git diff');
      console.log('   2. Commit: git add -A && git commit -m "Update to Cursor ' + latestVersion + '"');
      console.log('   3. Push: git push');
    }

    console.log('\n🎉 Update completed successfully!');
    console.log(`   Website now shows Cursor ${latestVersion}`);

  } catch (error) {
    console.error('❌ Error during automated update:', error.message);
    process.exit(1);
  }
}

// CLI usage
if (require.main === module) {
  fullyAutomatedUpdate();
}

module.exports = { fullyAutomatedUpdate };
