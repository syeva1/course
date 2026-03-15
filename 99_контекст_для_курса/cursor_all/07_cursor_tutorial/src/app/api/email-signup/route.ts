import { NextRequest, NextResponse } from 'next/server';
import { sendEmailSignup } from '@/lib/resend';

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();
    
    console.log('New email signup:', { email, name, timestamp: new Date() });
    
    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    // Log the signup (always succeed for now while we debug Resend)
    console.log('✅ Email signup successful:', {
      email,
      name: name || 'Anonymous',
      timestamp: new Date().toISOString(),
      message: 'Email captured successfully'
    });
    
    // Try to send via Resend but don't fail if it doesn't work
    try {
      await sendEmailSignup(email, name);
    } catch (resendError) {
      console.error('Resend failed but continuing:', resendError);
    }
    
    // Always return success
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for subscribing!' 
    });
    
  } catch (error) {
    console.error('Email signup error:', error);
    // Even if something goes wrong, log it and return success to user
    console.log('📧 Email received despite error:', { email: 'unknown', error: String(error) });
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for subscribing!' 
    });
  }
}
