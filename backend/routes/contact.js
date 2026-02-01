const express = require('express');
const { body, validationResult } = require('express-validator');
const { createTransporter } = require('../config/emailConfig');
const { generateEmailTemplate } = require('../utils/emailTemplates');

const router = express.Router();

// Validation rules
const contactValidation = [
  body('fullName')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Full name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s.'-]+$/)
    .withMessage('Full name can only contain letters, spaces, dots, apostrophes, and hyphens'),
  
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  
  body('phoneNumber')
    .optional({ checkFalsy: true })
    .isLength({ min: 10, max: 20 })
    .withMessage('Phone number must be between 10 and 20 characters')
    .matches(/^[\d\s\-\+\(\)]+$/)
    .withMessage('Phone number can only contain digits, spaces, hyphens, plus signs, and parentheses'),
  
  body('subject')
    .trim()
    .isLength({ min: 1, max: 200 })
    .withMessage('Subject is required and must be less than 200 characters')
    .notEmpty()
    .withMessage('Please select a subject'),
  
  body('message')
    .trim()
    .isLength({ min: 5, max: 1000 })
    .withMessage('Message must be between 5 and 1000 characters')
    .notEmpty()
    .withMessage('Message is required')
];

// POST /api/contact/send
router.post('/send', contactValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { fullName, email, phoneNumber, subject, message } = req.body;

    // For development/testing - skip email sending if no proper email config
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD || 
        process.env.EMAIL_PASSWORD.includes('(') || process.env.EMAIL_PASSWORD.includes('your-')) {
      console.log('📧 Email would be sent to:', process.env.RECIPIENT_EMAIL);
      console.log('📝 Form data received:', { fullName, email, phoneNumber, subject, message });
      
      return res.status(200).json({
        success: true,
        message: 'Your message has been received successfully! (Email sending is disabled in development mode)'
      });
    }

    // Create transporter
    const transporter = createTransporter();

    // Email to admin
    const adminMailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      html: generateEmailTemplate.adminNotification({
        fullName,
        email,
        phoneNumber,
        subject,
        message,
        timestamp: new Date().toLocaleString()
      })
    };

    // Confirmation email to user
    const userMailOptions = {
      from: `"Your Company" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting us!',
      html: generateEmailTemplate.userConfirmation({
        fullName,
        subject
      })
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully! We will get back to you soon.'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// GET /api/contact/test
router.get('/test', async (req, res) => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    
    res.status(200).json({
      success: true,
      message: 'Email configuration is working correctly'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Email configuration error',
      error: error.message
    });
  }
});

module.exports = router;