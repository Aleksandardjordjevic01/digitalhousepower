import nodemailer from 'nodemailer';

// Create a transporter using Gmail SMTP
// For production, use environment variables for credentials
export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER || 'office@digitalhousepower.com',
    pass: process.env.EMAIL_PASS || '', // App password for Gmail
  },
});

// Verify transporter configuration
export const verifyEmailConfig = async () => {
  try {
    await transporter.verify();
    console.log('Email server is ready to send messages');
    return true;
  } catch (error) {
    console.error('Email server configuration error:', error);
    return false;
  }
};
