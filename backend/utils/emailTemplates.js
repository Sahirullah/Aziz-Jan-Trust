const generateEmailTemplate = {
  // Admin notification email template
  adminNotification: ({ fullName, email, phoneNumber, subject, message, timestamp }) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 4px solid #4CAF50; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
                <div class="field">
                    <div class="label">Full Name:</div>
                    <div class="value">${fullName}</div>
                </div>
                <div class="field">
                    <div class="label">Email Address:</div>
                    <div class="value">${email}</div>
                </div>
                ${phoneNumber ? `
                <div class="field">
                    <div class="label">Phone Number:</div>
                    <div class="value">${phoneNumber}</div>
                </div>
                ` : ''}
                <div class="field">
                    <div class="label">Subject:</div>
                    <div class="value">${subject}</div>
                </div>
                <div class="field">
                    <div class="label">Message:</div>
                    <div class="value">${message}</div>
                </div>
                <div class="field">
                    <div class="label">Submitted At:</div>
                    <div class="value">${timestamp}</div>
                </div>
            </div>
            <div class="footer">
                <p>This email was sent from your website's contact form.</p>
            </div>
        </div>
    </body>
    </html>
    `;
  },

  // User confirmation email template
  userConfirmation: ({ fullName, subject }) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting Us</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 30px; text-align: center; }
            .message { font-size: 16px; margin-bottom: 20px; }
            .highlight { color: #4CAF50; font-weight: bold; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Thank You!</h1>
            </div>
            <div class="content">
                <div class="message">
                    <p>Dear <span class="highlight">${fullName}</span>,</p>
                    <p>Thank you for reaching out to us! We have received your message regarding "<span class="highlight">${subject}</span>" and will get back to you as soon as possible.</p>
                    <p>Our team typically responds within 24-48 hours during business days.</p>
                    <p>We appreciate your interest and look forward to assisting you!</p>
                </div>
            </div>
            <div class="footer">
                <p>Best regards,<br>Your Company Team</p>
                <p>This is an automated confirmation email.</p>
            </div>
        </div>
    </body>
    </html>
    `;
  }
};

module.exports = { generateEmailTemplate };