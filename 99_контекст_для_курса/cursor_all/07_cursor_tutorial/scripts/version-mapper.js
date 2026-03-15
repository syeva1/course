#!/usr/bin/env node

/**
 * Cursor Version Mapper
 * Maps build versions (0.x.x) to display versions (1.7.x)
 * This mapping needs to be updated manually when new versions are released
 */

const VERSION_MAP = {
  // Build Version -> Display Version
  '0.45.14': '1.7.52',
  '0.45.15': '1.7.53', // Example - update when new versions are released
  '0.45.16': '1.7.54', // Example - update when new versions are released
  // Add new mappings here as Cursor releases new versions
};

/**
 * Get the display version for a given build version
 * @param {string} buildVersion - The build version (0.x.x format)
 * @returns {string|null} - The display version (1.7.x format) or null if not found
 */
function getDisplayVersion(buildVersion) {
  return VERSION_MAP[buildVersion] || null;
}

/**
 * Get all known version mappings
 * @returns {Object} - The complete version mapping object
 */
function getAllMappings() {
  return VERSION_MAP;
}

/**
 * Add a new version mapping
 * @param {string} buildVersion - The build version (0.x.x format)
 * @param {string} displayVersion - The display version (1.7.x format)
 */
function addMapping(buildVersion, displayVersion) {
  VERSION_MAP[buildVersion] = displayVersion;
}

/**
 * Get the latest known display version
 * @returns {string|null} - The latest display version or null if no mappings exist
 */
function getLatestDisplayVersion() {
  const versions = Object.values(VERSION_MAP);
  if (versions.length === 0) return null;
  
  // Sort versions and return the latest
  return versions.sort((a, b) => {
    const [aMajor, aMinor, aPatch] = a.split('.').map(Number);
    const [bMajor, bMinor, bPatch] = b.split('.').map(Number);
    
    if (aMajor !== bMajor) return bMajor - aMajor;
    if (aMinor !== bMinor) return bMinor - aMinor;
    return bPatch - aPatch;
  })[0];
}

// CLI usage
if (require.main === module) {
  const buildVersion = process.argv[2];
  
  if (!buildVersion) {
    console.log('Usage: node scripts/version-mapper.js <build-version>');
    console.log('Example: node scripts/version-mapper.js 0.45.14');
    console.log('\nAvailable mappings:');
    Object.entries(VERSION_MAP).forEach(([build, display]) => {
      console.log(`  ${build} → ${display}`);
    });
    process.exit(1);
  }
  
  const displayVersion = getDisplayVersion(buildVersion);
  
  if (displayVersion) {
    console.log(displayVersion);
  } else {
    console.error(`❌ No mapping found for build version: ${buildVersion}`);
    console.log('\nAvailable mappings:');
    Object.entries(VERSION_MAP).forEach(([build, display]) => {
      console.log(`  ${build} → ${display}`);
    });
    process.exit(1);
  }
}

module.exports = {
  getDisplayVersion,
  getAllMappings,
  addMapping,
  getLatestDisplayVersion,
  VERSION_MAP
};