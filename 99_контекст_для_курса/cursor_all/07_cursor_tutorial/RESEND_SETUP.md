# Resend Setup Guide

## Step 1: Sign up for Resend
1. Go to [https://resend.com/](https://resend.com/)
2. Click "Get Started" and create your account
3. Verify your email address

## Step 2: Get Your API Key
1. In your Resend dashboard, go to "API Keys"
2. Click "Create API Key"
3. Give it a name like "Cursor Tutorial"
4. **Copy the API Key** (starts with `re_`)

## Step 3: Add Domain (Optional but Recommended)
1. Go to "Domains" in your dashboard
2. Click "Add Domain"
3. Add `cursortutorial.ai` (or your domain)
4. Follow the DNS setup instructions

## Step 4: Update Environment Variables
1. Open `.env.local` in your project root
2. Replace `your_resend_api_key_here` with your actual API key:

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

## Step 5: Test the Setup
1. Run your development server: `npm run dev`
2. Go to your website
3. Try signing up with a test email
4. Check `emailjs@aboutus.org` inbox for the notification

## Benefits of Resend over EmailJS:
- ✅ More reliable delivery
- ✅ Better error handling
- ✅ No CORS issues
- ✅ Works on localhost and production
- ✅ Better documentation
- ✅ 3,000 free emails/month

## Troubleshooting
- Make sure your API key is correct
- Check that the domain is verified (if using custom domain)
- Check the browser console for any error messages
- Verify the email is going to the right address

## Free Tier Limits
- 3,000 emails per month
- 100 emails per day
- Perfect for getting started
