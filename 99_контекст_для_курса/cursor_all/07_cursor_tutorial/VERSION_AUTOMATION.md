# Cursor Version Automation System

## 🎯 Overview

This system automatically detects and updates the Cursor version across the entire website daily, ensuring content is always current.

## 🚀 Quick Start

### Check for Latest Version
```bash
npm run check-version
```

### Update to a Specific Version
```bash
npm run update-version 1.7.39
```

### Manual Update Workflow
```bash
# 1. Check for updates
npm run check-version

# 2. Update if needed
npm run update-version 1.7.39

# 3. Commit and push
git add -A
git commit -m "Update Cursor version to 1.7.39"
git push
```

## 🤖 Automatic Updates

### GitHub Action
A GitHub Action runs daily at 2 AM UTC to:
1. Check for the latest Cursor version
2. Compare with current version in codebase
3. Update all files if version changed
4. Commit and push changes
5. Trigger Vercel deployment

**Location:** `.github/workflows/update-cursor-version.yml`

### Manual Trigger
You can manually trigger the workflow:
1. Go to GitHub repository
2. Click "Actions" tab
3. Select "Update Cursor Version" workflow
4. Click "Run workflow"

## 📂 Files Updated

When version is updated, these files are automatically modified:

| File | Update Pattern |
|------|----------------|
| `src/components/Hero.tsx` | `Cursor X.Y.Z` |
| `src/app/layout.tsx` | Title, description, keywords |
| `src/app/tutorial/page.tsx` | Tutorial descriptions |
| `src/app/tutorial/basics/lessons/getting-started/page.tsx` | Getting Started title and content |
| `src/components/StructuredData.tsx` | JSON-LD schema |
| `PROJECT_REVIEW.md` | Version documentation |
| `README.md` | Project description |
| `CURSOR_VERSION.txt` | Version tracking |

## 🔍 Version Detection Methods

The system tries multiple methods to find the latest version:

1. **Local Cursor Installation** (if installed)
   ```bash
   cursor --version
   ```

2. **Cursor API** (if available)
   ```
   https://api.cursor.sh/version
   ```

3. **Download Page Scraping**
   ```
   https://www.cursor.com/download
   ```

4. **GitHub Releases** (if published)
   ```
   https://api.github.com/repos/getcursor/cursor/releases/latest
   ```

The highest version number detected across all methods is used.

## 📊 Current Status

**Current Version:** 1.7.39  
**Last Updated:** October 8, 2025  
**Update Method:** Manual

View `CURSOR_VERSION.txt` for the currently deployed version.

## 🛠️ Technical Details

### Version Format
Must be in semantic versioning format: `MAJOR.MINOR.PATCH` (e.g., `1.7.39`)

### Update Script Logic
```javascript
// Regex pattern used for replacements
/Cursor \d+\.\d+\.\d+/g
// Replaced with
`Cursor ${NEW_VERSION}`
```

### GitHub Action Permissions
The action uses `GITHUB_TOKEN` with:
- Read access to repository content
- Write access to commit changes
- Workflow trigger permissions

### Commit Format
Automated commits follow this format:
```
🤖 Auto-update: Cursor version X.Y.Z
```

## 📝 Adding More Files

To add additional files to the update process:

1. Edit `scripts/update-version.js`
2. Add entry to `filesToUpdate` array:

```javascript
{
  path: 'path/to/your/file.tsx',
  replacements: [
    {
      pattern: /Cursor \d+\.\d+\.\d+/g,
      replacement: `Cursor ${NEW_VERSION}`
    },
    // Add more patterns as needed
    {
      pattern: /Getting Started with Cursor \d+\.\d+\.\d+/g,
      replacement: `Getting Started with Cursor ${NEW_VERSION}`
    }
  ]
}
```

3. Test locally:
```bash
npm run update-version 1.7.39
```

## 🐛 Troubleshooting

### Version Detection Fails
**Problem:** Script can't detect version automatically

**Solution:**
1. Visit https://www.cursor.com/download manually
2. Check release notes or changelog
3. Update manually: `npm run update-version X.Y.Z`

### GitHub Action Fails
**Problem:** Workflow fails to run or commit

**Solutions:**
- Check Actions logs in GitHub
- Verify `GITHUB_TOKEN` has write permissions
- Ensure branch protection rules allow bot commits
- Check if files are locked or have conflicts

### Files Not Updating
**Problem:** Some files don't get updated

**Solutions:**
- Verify file paths in `update-version.js`
- Check regex patterns match your content
- Ensure files exist and are not ignored by git
- Check file permissions

### Version Mismatch
**Problem:** Different version numbers across files

**Solutions:**
- Run: `npm run update-version <correct_version>`
- Check all files are included in the update script
- Manually search for version references: `grep -r "Cursor 1\.7\." src/`

## 🔒 Security

### API Rate Limits
The check script respects rate limits:
- GitHub API: 60 requests/hour (unauthenticated)
- Cursor API: No known limits
- Graceful fallbacks if APIs are unavailable

### Credentials
No credentials required for version checking. GitHub Action uses built-in `GITHUB_TOKEN`.

## 📈 Monitoring

### Check Last Update
```bash
cat CURSOR_VERSION.txt
```

### View Update History
```bash
git log --grep="Auto-update: Cursor" --oneline
```

### GitHub Action Status
Visit: `https://github.com/william-mush/cursor-tutorial/actions`

## 🚦 Testing

### Test Version Check (without updating)
```bash
npm run check-version
```

### Test Update (in a branch)
```bash
git checkout -b test-version-update
npm run update-version 1.7.40
git diff
# Review changes
git checkout main
git branch -D test-version-update
```

### Test GitHub Action Locally
Use [act](https://github.com/nektos/act):
```bash
act schedule -j update-version
```

## 📊 Analytics

Track update frequency and success:
- View GitHub Actions runs
- Check commit history for auto-updates
- Monitor Vercel deployment triggers

## 🔮 Future Enhancements

Planned improvements:
- [ ] Auto-detect Claude version updates
- [ ] Slack/Discord notifications on updates
- [ ] Automatic changelog generation
- [ ] Version comparison in PR comments
- [ ] Support for beta/preview versions
- [ ] Multi-language version tracking
- [ ] A/B testing for version messaging

## 📚 Resources

- [Cursor Website](https://www.cursor.com)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Semantic Versioning](https://semver.org/)
- [Vercel Deployment Hooks](https://vercel.com/docs/concepts/git/deploy-hooks)

## 🤝 Contributing

To improve the version automation system:
1. Test your changes locally
2. Update documentation
3. Submit a pull request
4. Include examples of before/after behavior

## 📞 Support

If you encounter issues:
1. Check this documentation
2. Review `scripts/README.md`
3. Check GitHub Actions logs
4. Search closed GitHub issues
5. Open a new issue with details

---

**Last Updated:** October 8, 2025  
**Automation Status:** ✅ Active  
**Current Version:** 1.7.39

