import { Resend } from 'resend';

// Initialize Resend with error handling
let resend: Resend | null = null;
if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== '') {
  try {
    resend = new Resend(process.env.RESEND_API_KEY);
    console.log('Resend initialized successfully');
  } catch (error) {
    console.error('Failed to initialize Resend:', error);
    resend = null;
  }
} else {
  console.log('Resend API key not configured');
}

export async function sendEmailSignup(email: string, name?: string) {
  try {
    console.log('Resend API key check:', {
      hasKey: !!process.env.RESEND_API_KEY,
      keyLength: process.env.RESEND_API_KEY?.length,
      keyPrefix: process.env.RESEND_API_KEY?.substring(0, 10)
    });

    // Check if we have a valid API key
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === '') {
      console.log('Resend API key not configured, using fallback email service');
      
      // Fallback: Send a simple notification email using a webhook or external service
      // For now, we'll just log it and return success
      console.log('Email signup received:', { 
        email, 
        name: name || 'Anonymous', 
        timestamp: new Date().toISOString(),
        website: 'Cursor Tutorial'
      });
      
      // In a real implementation, you could:
      // 1. Send to a webhook service like Zapier
      // 2. Use a different email service
      // 3. Store in a database
      
      return true;
    }

    console.log('Sending email with Resend to:', email);
    
    // Check if resend is properly initialized
    if (!resend) {
      console.error('Resend not properly initialized, falling back to logging');
      console.log('Email signup received (fallback):', { 
        email, 
        name: name || 'Anonymous', 
        timestamp: new Date().toISOString(),
        website: 'Cursor Tutorial'
      });
      return true;
    }
    
    const { data, error } = await resend.emails.send({
      from: 'Cursor Tutorial <onboarding@resend.dev>',
      to: ['mushkin@aboutus.org'],
      subject: 'New Cursor Tutorial Signup',
      html: `
        <h2>New email signup from Cursor Tutorial website!</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Name:</strong> ${name || 'Anonymous'}</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Website:</strong> Cursor Tutorial</p>
        <p>This person wants to receive Cursor tutorial updates!</p>
      `,
    });

    if (error) {
      console.error('Resend error details:', {
        error,
        message: error.message,
        name: error.name
      });
      return false;
    }

    console.log('Email sent successfully with Resend:', data);
    return true;
  } catch (error) {
    console.error('Resend error:', error);
    return false;
  }
}
