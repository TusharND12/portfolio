import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmails } from '@/lib/emailService';

// Contact form API endpoint
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Log the submission
    console.log('Contact form submission:', { name, email, message });

    // Send emails
    const emailResult = await sendContactEmails({ name, email, message });
    
    if (emailResult.success) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Message sent successfully! Check your email for confirmation and my digital business card.',
          emailsSent: {
            notification: emailResult.notificationSent,
            thankYou: emailResult.thankYouSent
          }
        },
        { status: 200 }
      );
    } else {
      // Still return success if form was submitted, but note email issues
      console.warn('Email sending failed, but form was submitted:', emailResult);
      return NextResponse.json(
        { 
          success: true, 
          message: 'Message received! I\'ll get back to you soon.',
          emailsSent: {
            notification: emailResult.notificationSent,
            thankYou: emailResult.thankYouSent
          },
          warning: 'Email delivery may have issues'
        },
        { status: 200 }
      );
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

