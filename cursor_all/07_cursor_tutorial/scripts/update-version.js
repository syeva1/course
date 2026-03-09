#!/usr/bin/env node

/**
 * Update Cursor version across the entire codebase
 * Usage: node scripts/update-version.js <new_version>
 */

const fs = require('fs');
const path = require('path');

const NEW_VERSION = process.argv[2];

if (!NEW_VERSION) {
  console.error('❌ Error: No version provided');
  console.error('Usage: node scripts/update-version.js <new_version>');
  process.exit(1);
}

// Validate version format (e.g., 1.7.39)
if (!/^\d+\.\d+\.\d+$/.test(NEW_VERSION)) {
  console.error('❌ Error: Invalid version format. Expected format: X.Y.Z (e.g., 1.7.39)');
  process.exit(1);
}

console.log(`🚀 Updating Cursor version to ${NEW_VERSION}...`);

// Files to update with their search/replace patterns
const filesToUpdate = [
  {
    path: 'src/components/Hero.tsx',
    replacements: [
      {
        pattern: /Cursor \d+\.\d+\.\d+/g,
        replacement: `Cursor ${NEW_VERSION}`
      }
    ]
  },
  {
    path: 'src/app/layout.tsx',
    replacements: [
      {
        pattern: /Cursor \d+\.\d+\.\d+/g,
        replacement: `Cursor ${NEW_VERSION}`
      },
      {
        pattern: /"Cursor \d+\.\d+\.\d+ guide"/g,
        replacement: `"Cursor ${NEW_VERSION} guide"`
      }
    ]
  },
  {
    path: 'src/app/tutorial/page.tsx',
    replacements: [
      {
        pattern: /Cursor \d+\.\d+\.\d+/g,
        replacement: `Cursor ${NEW_VERSION}`
      }
    ]
  },
  {
    path: 'src/app/tutorial/basics/lessons/getting-started/page.tsx',
    replacements: [
      {
        pattern: /Cursor \d+\.\d+\.\d+/g,
        replacement: `Cursor ${NEW_VERSION}`
      },
      {
        pattern: /Getting Started with Cursor \d+\.\d+\.\d+/g,
        replacement: `Getting Started with Cursor ${NEW_VERSION}`
      }
    ]
  },
  {
    path: 'src/components/StructuredData.tsx',
    replacements: [
      {
        pattern: /Cursor \d+\.\d+\.\d+/g,
        replacement: `Cursor ${NEW_VERSION}`
      }
    ]
  },
  {
    path: 'PROJECT_REVIEW.md',
    replacements: [
      {
        pattern: /Cursor Version:\*\* \d+\.\d+\.\d+/g,
        replacement: `Cursor Version:** ${NEW_VERSION}`
      },
      {
        pattern: /Cursor \(\d+\.\d+\.\d+\)/g,
        replacement: `Cursor (${NEW_VERSION})`
      }
    ]
  },
  {
    path: 'README.md',
    replacements: [
      {
        pattern: /Cursor \d+\.\d+\.\d+/g,
        replacement: `Cursor ${NEW_VERSION}`
      }
    ]
  }
];

let updatedFiles = 0;
let errors = 0;

for (const file of filesToUpdate) {
  const filePath = path.join(process.cwd(), file.path);
  
  try {
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  Skipping ${file.path} (file not found)`);
      continue;
    }
    
    // Read file content
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply all replacements for this file
    let fileChanged = false;
    for (const { pattern, replacement } of file.replacements) {
      const beforeReplace = content;
      content = content.replace(pattern, replacement);
      if (content !== beforeReplace) {
        fileChanged = true;
      }
    }
    
    // Write back if changed
    if (fileChanged && content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated ${file.path}`);
      updatedFiles++;
    } else {
      console.log(`ℹ️  No changes needed in ${file.path}`);
    }
  } catch (error) {
    console.error(`❌ Error updating ${file.path}:`, error.message);
    errors++;
  }
}

// Update the VERSION.txt file to track current version
const versionFilePath = path.join(process.cwd(), 'CURSOR_VERSION.txt');
fs.writeFileSync(versionFilePath, NEW_VERSION, 'utf8');
console.log(`✅ Updated CURSOR_VERSION.txt`);

console.log('\n' + '='.repeat(50));
console.log(`📊 Summary:`);
console.log(`   - Version updated to: ${NEW_VERSION}`);
console.log(`   - Files updated: ${updatedFiles}`);
console.log(`   - Errors: ${errors}`);
console.log('='.repeat(50));

if (errors > 0) {
  process.exit(1);
}

console.log('\n✨ Version update complete!');

