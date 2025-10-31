import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET(request: NextRequest) {
  try {
    // Check if email password is configured
    if (!process.env.EMAIL_PASS) {
      return NextResponse.json(
        { 
          status: 'error',
          message: 'Email password not configured',
          envCheck: {
            EMAIL_PASS: !!process.env.EMAIL_PASS,
            NODE_ENV: process.env.NODE_ENV
          }
        },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'tushardhokane12@gmail.com',
        pass: process.env.EMAIL_PASS,
      },
    });

    // Test connection
    await transporter.verify();

    return NextResponse.json(
      { 
        status: 'success',
        message: 'Email configuration is working',
        config: {
          service: 'gmail',
          user: 'tushardhokane12@gmail.com',
          hasPassword: !!process.env.EMAIL_PASS
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email test error:', error);
    
    return NextResponse.json(
      { 
        status: 'error',
        message: 'Email configuration failed',
        error: error instanceof Error ? error.message : 'Unknown error',
        envCheck: {
          EMAIL_PASS: !!process.env.EMAIL_PASS,
          NODE_ENV: process.env.NODE_ENV
        }
      },
      { status: 500 }
    );
  }
}
