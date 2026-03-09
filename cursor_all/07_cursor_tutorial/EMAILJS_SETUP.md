# EmailJS Setup Guide

## Step 1: Sign up for EmailJS
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create your account
3. Verify your email address

## Step 2: Create an Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** (you'll need this)

## Step 3: Create an Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Cursor Tutorial Signup

**Content:**
```
New email signup from Cursor Tutorial website!

Email: {{from_email}}
Name: {{from_name}}
Timestamp: {{timestamp}}
Website: {{website}}

This person wants to receive Cursor tutorial updates!
```

4. **Copy the Template ID** (you'll need this)

## Step 4: Get Your Public Key
1. Go to "Account" in your dashboard
2. Find "Public Key" section
3. **Copy the Public Key** (you'll need this)

## Step 5: Update Your Environment Variables
1. Create a `.env.local` file in your project root
2. Add these variables with your actual values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Step 6: Update the Email Address
1. Open `src/lib/emailjs.ts`
2. Find line 30: `to_email: 'your-email@example.com'`
3. Replace with your actual email address

## Step 7: Test the Setup
1. Run your development server: `npm run dev`
2. Go to your website
3. Try signing up with a test email
4. Check your email inbox for the notification

## Troubleshooting
- Make sure all environment variables are set correctly
- Check that your email service is properly connected
- Verify the template variables match what's in the code
- Check the browser console for any error messages

## Free Tier Limits
- 200 emails per month
- Perfect for getting started
- Upgrade as you grow
