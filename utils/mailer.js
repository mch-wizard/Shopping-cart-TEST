const nodemailer = require('nodemailer');

// SMTP configuration
const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false,
    auth: {
      user: 'your-email@example.com',
      pass: 'your-password',
    },
});

// If you are using SSL/TLS, use the lines below
  // tls: {
  //   rejectUnauthorized: false
  // }

// Email sending function
const sendEmail = async (to, subject, html) => {
    try {
      const info = await transporter.sendMail({
        from: 'your-email@example.com',
        to,
        subject,
        html,
      });
  
      console.log('Email sent:', info.messageId);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  };
  
  module.exports = { sendEmail };