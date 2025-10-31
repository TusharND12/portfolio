import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, preferredDate, preferredTime, timezone, message } = await request.json();

    // Validate required fields
    if (!name || !email || !preferredDate || !preferredTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if email password is configured
    if (!process.env.EMAIL_PASS) {
      console.error('Email password not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Create transporter (using same config as existing email service)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'tushardhokane12@gmail.com', // Fixed sender email
        pass: process.env.EMAIL_PASS, // Only password needs to be configured
      },
    });

    // Email to you (Tushar)
    const adminEmailContent = `
New Call Scheduling Request

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Preferred Date: ${preferredDate}
Preferred Time: ${preferredTime}
Timezone: ${timezone || 'Not specified'}
Message: ${message || 'No additional message'}

Please respond to confirm the meeting time.
    `;

    // Email to the user
    const userEmailContent = `
Hi ${name},

Thank you for scheduling a call with Tushar Dhokane!

Your meeting request details:
- Date: ${preferredDate}
- Time: ${preferredTime}
- Timezone: ${timezone || 'Not specified'}

Tushar will review your request and respond within 24 hours to confirm the meeting time.

If you have any questions, feel free to reach out at tushardhokane12@gmail.com

Best regards,
Tushar Dhokane
Full-Stack Developer & ML Engineer
    `;

    // Send email to you
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'tushardhokane12@gmail.com',
      subject: `New Call Scheduling Request from ${name}`,
      text: adminEmailContent,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Call Scheduling Confirmation - Tushar Dhokane',
      text: userEmailContent,
    });

    return NextResponse.json(
      { message: 'Call scheduling request sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending schedule request:', error);
    
    // More detailed error logging
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to send schedule request',
        details: process.env.NODE_ENV === 'development' ? error instanceof Error ? error.message : 'Unknown error' : 'Internal server error'
      },
      { status: 500 }
    );
  }
}
