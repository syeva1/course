# Version Management Scripts

This directory contains scripts to automatically check and update the Cursor version across the website.

## 📋 Scripts

### 1. `check-cursor-version.js`
Checks for the latest Cursor version from multiple sources.

**Usage:**
```bash
npm run check-version
# or
node scripts/check-cursor-version.js
```

**What it does:**
- Checks local Cursor installation (if available)
- Queries Cursor API
- Scrapes Cursor download page
- Checks GitHub releases
- Compares with current version in codebase
- Provides update instructions if needed

### 2. `update-version.js`
Updates Cursor version across all files in the codebase.

**Usage:**
```bash
npm run update-version 1.7.39
# or
node scripts/update-version.js 1.7.39
```

**What it does:**
- Updates version in:
  - `src/components/Hero.tsx`
  - `src/app/layout.tsx`
  - `src/app/tutorial/page.tsx`
  - `src/app/tutorial/basics/lessons/getting-started/page.tsx`
  - `src/components/StructuredData.tsx`
  - `PROJECT_REVIEW.md`
  - `README.md`
  - `CURSOR_VERSION.txt`
- Shows summary of files updated
- Validates version format (X.Y.Z)

## 🤖 GitHub Action

### `.github/workflows/update-cursor-version.yml`
Automated daily version check and update.

**Schedule:** Daily at 2 AM UTC

**What it does:**
1. Checks for latest Cursor version
2. Compares with current version in codebase
3. If different, runs update script
4. Commits and pushes changes automatically
5. Triggers Vercel deployment

**Manual trigger:**
You can manually trigger the workflow from GitHub Actions tab.

## 📝 Version Tracking

### `CURSOR_VERSION.txt`
Simple text file tracking the current Cursor version used in the website.

**Current Version:** 1.7.39

## 🔄 Workflow

### Manual Update
1. Check for latest version:
   ```bash
   npm run check-version
   ```

2. If update needed, run:
   ```bash
   npm run update-version 1.7.39
   ```

3. Commit and push:
   ```bash
   git add -A
   git commit -m "Update Cursor version to 1.7.39"
   git push
   ```

### Automatic Update
The GitHub Action runs daily and automatically updates the version if a new one is detected.

## 🛠️ Adding More Files to Update

To add more files to the version update script, edit `scripts/update-version.js`:

```javascript
const filesToUpdate = [
  {
    path: 'path/to/your/file.tsx',
    replacements: [
      {
        pattern: /Cursor \d+\.\d+\.\d+/g,
        replacement: `Cursor ${NEW_VERSION}`
      }
    ]
  },
  // ... add more files
];
```

## ⚠️ Important Notes

1. **Version Format:** Must be in format `X.Y.Z` (e.g., `1.7.39`)
2. **Commit Messages:** Automatic commits use emoji prefix: `🤖 Auto-update: Cursor version X.Y.Z`
3. **Vercel Deployment:** Updates automatically trigger Vercel deployment
4. **Rate Limits:** The check script respects API rate limits and has fallback methods

## 🐛 Troubleshooting

### Script can't find version
If the automatic detection fails:
1. Manually visit https://www.cursor.com/download
2. Check the version number
3. Run: `npm run update-version <version>`

### GitHub Action fails
1. Check GitHub Actions logs
2. Verify GitHub token has write permissions
3. Ensure all scripts are executable: `chmod +x scripts/*.js`

### Files not updating
1. Verify file paths in `update-version.js`
2. Check regex patterns match your content
3. Ensure files exist in the repository

## 📊 Version History

| Date | Version | Method |
|------|---------|--------|
| Oct 8, 2025 | 1.7.39 | Manual update |
| Oct 7, 2025 | 1.7.38 | Manual update |

## 🚀 Future Enhancements

Potential improvements:
- [ ] Add Claude version auto-detection
- [ ] Send Slack/Discord notifications on version updates
- [ ] Create changelog entry automatically
- [ ] Add version comparison in PR comments
- [ ] Support for beta/canary versions
- [ ] Integration with npm version bumping

