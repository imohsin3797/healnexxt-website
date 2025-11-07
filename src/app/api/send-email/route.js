import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Set SendGrid API key from environment variable
const sendGridApiKey = process.env.SENDGRID_API_KEY;
const recipientEmail = process.env.CONTACT_FORM_EMAIL || 'Referrals@healnexxt.com';
const senderEmail = process.env.SENDGRID_FROM_EMAIL || 'Referrals@healnexxt.com';

if (!sendGridApiKey) {
  console.error('SENDGRID_API_KEY is not set in environment variables');
}

sgMail.setApiKey(sendGridApiKey || '');

export async function POST(request) {
  try {
    const { name, email, subject, phone, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate SendGrid API key is set
    if (!sendGridApiKey) {
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Create email message
    const msg = {
      to: recipientEmail,
      from: senderEmail, // Must be a verified sender in SendGrid
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #23343B; border-bottom: 2px solid #F26F62; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #23343B; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="color: #23343B; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e9ecef; color: #6c757d; font-size: 14px;">
            <p>This email was sent from the Healnexxt contact form.</p>
            <p>Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
      replyTo: email, // This allows you to reply directly to the sender
    };

    // Send email
    await sgMail.send(msg);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    
    // Handle SendGrid specific errors
    if (error.response) {
      console.error('SendGrid error details:', error.response.body);
    }

    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
