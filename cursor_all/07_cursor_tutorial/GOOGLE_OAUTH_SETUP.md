# Google OAuth Setup Guide

## Step 1: Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API (if needed)
4. Go to **APIs & Services** → **Credentials**
5. Click **"Create Credentials"** → **"OAuth 2.0 Client ID"**

## Step 2: Configure OAuth Consent Screen

1. Click **"Configure Consent Screen"**
2. Choose **External** user type
3. Fill in the required fields:
   - App name: **Cursor Tutorial**
   - User support email: Your email
   - Developer contact email: Your email
4. Add scopes (email, profile)
5. Save and continue

## Step 3: Create OAuth Client ID

1. Application type: **Web application**
2. Name: **Cursor Tutorial Web Client**
3. **Authorized JavaScript origins**:
   - `http://localhost:3000`
   - `https://cursortutorial.ai`
   - `https://www.cursortutorial.ai`
4. **Authorized redirect URIs**:
   - `http://localhost:3000/api/auth/callback/google`
   - `https://cursortutorial.ai/api/auth/callback/google`
   - `https://www.cursortutorial.ai/api/auth/callback/google`
5. Click **Create**
6. **Copy the Client ID and Client Secret**

## Step 4: Generate NextAuth Secret

Run this command to generate a secure secret:
```bash
openssl rand -base64 32
```

## Step 5: Add Environment Variables

### Local Development (.env.local):
```env
GOOGLE_CLIENT_ID=your_google_client_id_here.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_generated_secret_here
```

### Vercel Production:
Add these environment variables in Vercel Dashboard → Settings → Environment Variables:

1. **GOOGLE_CLIENT_ID**: Your Google Client ID
2. **GOOGLE_CLIENT_SECRET**: Your Google Client Secret
3. **NEXTAUTH_URL**: `https://cursortutorial.ai`
4. **NEXTAUTH_SECRET**: Your generated secret

## Step 6: Test the Integration

1. Run `npm run dev` locally
2. Click "Continue with Google" button
3. Sign in with your Google account
4. You should see the success message
5. Check your email for the signup notification

## Troubleshooting

### Error: "redirect_uri_mismatch"
- Make sure the redirect URI in Google Console matches exactly
- Check that NEXTAUTH_URL is set correctly

### Error: "Access blocked: This app's request is invalid"
- Configure the OAuth consent screen
- Add test users if in testing mode

### Google sign-in popup closes immediately
- Check browser console for errors
- Verify Client ID is correct
- Make sure JavaScript origins are configured

## Security Notes

- Never commit `.env.local` to git
- Rotate your Client Secret periodically
- Use different credentials for development and production
- Keep NEXTAUTH_SECRET secure (it's used for session encryption)

