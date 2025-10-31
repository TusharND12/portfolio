import nodemailer from 'nodemailer';
import { personalInfo } from './data';

// Email configuration - Fixed sender email
const createTransporter = () => {
  // Check if email password is configured
  if (!process.env.EMAIL_PASS) {
    console.warn('Email password not configured. Emails will not be sent.');
    return null;
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tushardhokane12@gmail.com', // Fixed sender email
      pass: process.env.EMAIL_PASS, // Only password needs to be configured
    },
  });
};

// HTML template for thank you email with premium business card design
const createThankYouEmailHTML = (name: string) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You - ${personalInfo.name}</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #333;
            line-height: 1.6;
            min-height: 100vh;
        }
        .email-container {
            max-width: 700px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        .header-section {
            text-align: center;
            margin-bottom: 40px;
            background: rgba(255, 255, 255, 0.95);
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        .logo {
            font-size: 32px;
            font-weight: 800;
            background: linear-gradient(45deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 10px;
            letter-spacing: -1px;
        }
        .welcome-message {
            font-size: 24px;
            color: #667eea;
            margin: 20px 0;
            font-weight: 600;
        }
        .business-card {
            background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
            border-radius: 25px;
            padding: 40px;
            margin: 30px 0;
            box-shadow: 
                0 25px 50px rgba(0, 0, 0, 0.15),
                0 0 0 1px rgba(255, 255, 255, 0.8);
            position: relative;
            overflow: hidden;
        }
        .business-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
        }
        .profile-section {
            text-align: center;
            margin-bottom: 35px;
            position: relative;
        }
        .profile-image {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            margin: 0 auto 20px;
            border: 4px solid #667eea;
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
            background: linear-gradient(45deg, #667eea, #764ba2);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 48px;
            color: white;
        }
        .name-title {
            margin-bottom: 15px;
        }
        .name {
            font-size: 32px;
            font-weight: 800;
            color: #1a202c;
            margin: 0 0 8px 0;
            letter-spacing: -0.5px;
        }
        .title {
            font-size: 18px;
            color: #667eea;
            font-weight: 600;
            margin: 0;
        }
        .achievements {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin: 20px 0;
            flex-wrap: wrap;
        }
        .achievement-badge {
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }
        .contact-item {
            background: rgba(102, 126, 234, 0.05);
            border: 2px solid rgba(102, 126, 234, 0.1);
            border-radius: 15px;
            padding: 25px;
            text-align: center;
            transition: all 0.3s ease;
        }
        .contact-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(102, 126, 234, 0.2);
        }
        .contact-icon {
            font-size: 32px;
            margin-bottom: 15px;
            display: block;
        }
        .contact-label {
            font-size: 14px;
            color: #667eea;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 8px;
        }
        .contact-value {
            font-size: 16px;
            color: #2d3748;
            font-weight: 500;
            word-break: break-word;
        }
        .contact-value a {
            color: #667eea;
            text-decoration: none;
            font-weight: 600;
        }
        .social-section {
            text-align: center;
            margin: 40px 0;
        }
        .social-title {
            font-size: 18px;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 20px;
        }
        .social-links {
            display: flex;
            justify-content: center;
            gap: 20px;
        }
        .social-link {
            display: inline-block;
            width: 50px;
            height: 50px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            border-radius: 50%;
            text-align: center;
            line-height: 50px;
            color: white;
            text-decoration: none;
            font-size: 20px;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }
        .social-link:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
        }
        .footer {
            text-align: center;
            margin-top: 50px;
            padding: 30px;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .signature {
            font-size: 16px;
            color: #2d3748;
            margin-bottom: 20px;
        }
        .signature-name {
            font-weight: 700;
            color: #667eea;
            font-size: 18px;
        }
        .credentials {
            font-size: 13px;
            color: #718096;
            line-height: 1.8;
        }
        .credentials strong {
            color: #667eea;
        }
        @media (max-width: 600px) {
            .email-container {
                padding: 20px 15px;
            }
            .business-card {
                padding: 25px;
            }
            .name {
                font-size: 26px;
            }
            .contact-grid {
                grid-template-columns: 1fr;
            }
            .social-links {
                flex-wrap: wrap;
                gap: 15px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header-section">
            <div class="logo">Full Stack Developer</div>
            <div class="welcome-message">🎉 Thank You ${name}! 🎉</div>
            <div style="margin-top: 20px; font-size: 16px; color: #4a5568; line-height: 1.8;">
                <p><strong>Dear ${name},</strong></p>
                <p>Thank you for reaching out to me through my portfolio! I'm absolutely thrilled to connect with you and excited about the possibility of working together.</p>
                <p>Your message has been received and I'll respond within 24 hours. In the meantime, I'd like to share my "Connect With Me" card with you, which contains all my professional details and achievements.</p>
                <p style="margin-bottom: 0;"><em>Looking forward to our collaboration!</em></p>
            </div>
        </div>
        
        <div class="business-card">
            <div class="profile-section">
                <div class="profile-image">👨‍💻</div>
                <div class="name-title">
                    <h1 class="name">${personalInfo.name}</h1>
                    <p class="title">${personalInfo.title}</p>
                </div>
                <div class="achievements">
                    <span class="achievement-badge">🏆 Hackathon Winner</span>
                    <span class="achievement-badge">🔬 Research Intern</span>
                    <span class="achievement-badge">🧠 ML Expert</span>
                </div>
            </div>
            
            <div class="contact-grid">
                <div class="contact-item">
                    <span class="contact-icon">📧</span>
                    <div class="contact-label">Email</div>
                    <div class="contact-value">
                        <a href="mailto:${personalInfo.email}">${personalInfo.email}</a>
                    </div>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">📍</span>
                    <div class="contact-label">Location</div>
                    <div class="contact-value">${personalInfo.location}</div>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">🏆</span>
                    <div class="contact-label">Achievement</div>
                    <div class="contact-value">1st Place - Fusion Hackathon 2025</div>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">🔬</span>
                    <div class="contact-label">Research</div>
                    <div class="contact-value">Binghamton University</div>
                </div>
            </div>
            
            <div class="social-section">
                <div class="social-title">Connect With Me</div>
                <div class="social-links">
                    <a href="${personalInfo.github}" class="social-link" title="GitHub">🔗</a>
                    <a href="${personalInfo.linkedin}" class="social-link" title="LinkedIn">💼</a>
                    <a href="mailto:${personalInfo.email}" class="social-link" title="Email">📧</a>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <div class="signature">
                <p style="font-size: 16px; margin-bottom: 15px; color: #2d3748;">I'm excited about the opportunity to discuss how we can work together to achieve your goals. Please don't hesitate to reach out if you have any questions or would like to schedule a meeting.</p>
                <p style="margin-bottom: 10px;">Best regards,</p>
                <p class="signature-name">${personalInfo.name}</p>
                <p style="color: #667eea; font-weight: 600; margin-top: 5px;">Full-Stack Developer & ML Engineer</p>
            </div>
            <div class="credentials">
                <div style="margin-bottom: 20px; padding: 15px; background: rgba(102, 126, 234, 0.05); border-radius: 10px;">
                    <strong style="color: #667eea; font-size: 14px;">KEY ACHIEVEMENTS & EXPERTISE:</strong>
                </div>
                <strong>🏆 1st Place Winner</strong> - Fusion National Level Hackathon 2025 (AIML Domain)<br>
                <strong>🔬 Research Intern</strong> - Binghamton University (VUxBU Centre)<br>
                <strong>🧠 ML Specialist</strong> - 95% accuracy in disease detection models<br>
                <strong>💻 Full-Stack Developer</strong> - React, Node.js, Python, TensorFlow<br>
                <strong>🚀 Innovation Focus</strong> - AI/ML solutions, Web applications, Edge computing<br><br>
                <div style="border-top: 1px solid rgba(102, 126, 234, 0.2); padding-top: 15px; margin-top: 20px; font-size: 12px; color: #718096;">
                    <em>This email was sent because you contacted me through my portfolio. If you didn't expect this email, please ignore it.</em>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
`;

// Send email to you (notification)
export async function sendNotificationEmail(formData: { name: string; email: string; message: string }) {
  try {
    const transporter = createTransporter();
    if (!transporter) {
      console.log('Email service not configured - skipping notification email');
      return false;
    }

    const mailOptions = {
      from: 'tushardhokane12@gmail.com', // Fixed sender
      to: 'tushardhokane12@gmail.com', // Notification goes to you
      subject: `📧 New Portfolio Contact from ${formData.name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%); color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h2 style="color: #3a86ff; margin: 0; font-size: 24px;">🚀 New Portfolio Contact</h2>
            <p style="color: #06ffa5; margin: 5px 0;">Someone reached out through your portfolio!</p>
          </div>
          
          <div style="background: rgba(58, 134, 255, 0.1); padding: 25px; border-radius: 15px; margin: 20px 0; border: 1px solid rgba(58, 134, 255, 0.3);">
            <h3 style="color: #3a86ff; margin-top: 0; font-size: 18px;">👤 Contact Details:</h3>
            <div style="background: rgba(0, 0, 0, 0.3); padding: 15px; border-radius: 10px; margin: 15px 0;">
              <p style="margin: 8px 0;"><strong style="color: #06ffa5;">Name:</strong> <span style="color: #ffffff;">${formData.name}</span></p>
              <p style="margin: 8px 0;"><strong style="color: #06ffa5;">Email:</strong> <span style="color: #3a86ff;">${formData.email}</span></p>
            </div>
            
            <h4 style="color: #8338ec; margin: 20px 0 10px 0;">💬 Message:</h4>
            <div style="background: rgba(0, 0, 0, 0.4); padding: 20px; border-radius: 10px; border-left: 4px solid #3a86ff; margin: 15px 0;">
              <p style="margin: 0; line-height: 1.6; color: #ffffff;">${formData.message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          
          <div style="background: rgba(6, 255, 165, 0.1); padding: 15px; border-radius: 10px; margin: 20px 0; border: 1px solid rgba(6, 255, 165, 0.3); text-align: center;">
            <p style="margin: 0; color: #06ffa5; font-size: 14px;">
              <strong>⚡ Action Required:</strong> Please respond to this inquiry at your earliest convenience.
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid rgba(255, 255, 255, 0.1); margin: 30px 0;">
          <p style="color: #888; font-size: 12px; text-align: center; margin: 0;">
            📱 This email was sent from your portfolio contact form at ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Notification email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending notification email:', error);
    return false;
  }
}

// Send thank you email to user
export async function sendThankYouEmail(formData: { name: string; email: string; message: string }) {
  try {
    const transporter = createTransporter();
    if (!transporter) {
      console.log('Email service not configured - skipping thank you email');
      return false;
    }

    const mailOptions = {
      from: 'tushardhokane12@gmail.com', // Fixed sender
      to: formData.email, // Thank you goes to the user
      subject: `Thank You ${formData.name}! - Connect With Me | Tushar Dhokane`,
      html: createThankYouEmailHTML(formData.name),
    };

    await transporter.sendMail(mailOptions);
    console.log('Thank you email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending thank you email:', error);
    return false;
  }
}

// Send both emails
export async function sendContactEmails(formData: { name: string; email: string; message: string }) {
  try {
    // Send notification to you
    const notificationSent = await sendNotificationEmail(formData);
    
    // Send thank you to user
    const thankYouSent = await sendThankYouEmail(formData);
    
    return {
      notificationSent,
      thankYouSent,
      success: notificationSent && thankYouSent
    };
  } catch (error) {
    console.error('Error sending contact emails:', error);
    return {
      notificationSent: false,
      thankYouSent: false,
      success: false
    };
  }
}
