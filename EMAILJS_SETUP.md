# EmailJS Contact Form Setup Guide

This guide explains how to set up the contact form using EmailJS to send emails to `info.sahirweb@gmail.com`.

## Why EmailJS?

EmailJS is a simple, free service that allows you to send emails directly from your frontend without needing a backend server. No complex setup required!

## Setup Steps

### 1. Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Click **Sign Up** and create a free account
3. Verify your email address

### 2. Add Gmail Service

1. Log in to your EmailJS dashboard
2. Go to **Email Services** (left sidebar)
3. Click **Add Service**
4. Select **Gmail**
5. Click **Connect Account**
6. Sign in with your Gmail account (the one receiving emails: info.sahirweb@gmail.com)
7. Allow EmailJS to access your Gmail
8. Copy the **Service ID** (looks like `service_xxxxx`)

### 3. Create Email Template

1. Go to **Email Templates** (left sidebar)
2. Click **Create New Template**
3. Name it: `template_contact`
4. Set the **To Email** to: `{{to_email}}`
5. Set the **Subject** to: `New Contact Form: {{subject}}`
6. Use this template content:

```
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}
```

7. Click **Save**
8. Copy the **Template ID** (looks like `template_xxxxx`)

### 4. Get Your Public Key

1. Go to **Account** (top right)
2. Click **API Keys**
3. Copy your **Public Key** (looks like `xxxxxxxxxxxxx`)

### 5. Update Contact.jsx

Open `src/pages/Contact.jsx` and replace the placeholder values at the top:

```javascript
// Replace these with your actual keys from EmailJS
emailjs.init('YOUR_PUBLIC_KEY_HERE');
```

Change to:

```javascript
emailjs.init('your-public-key-here');
```

Also update the service and template IDs in the handleSubmit function:

```javascript
await emailjs.send('service_contact', 'template_contact', templateParams);
```

Should be:

```javascript
await emailjs.send('your-service-id', 'your-template-id', templateParams);
```

### 6. Install Dependencies

Run:
```bash
npm install
```

### 7. Test the Form

1. Run `npm run dev`
2. Go to the Contact page
3. Fill out the form and click "Send Message"
4. Check your email at info.sahirweb@gmail.com

## Example Configuration

Here's what your Contact.jsx should look like at the top:

```javascript
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init('abc123def456ghi789');

// In handleSubmit function:
await emailjs.send('service_abc123', 'template_contact', templateParams);
```

## Troubleshooting

### "Failed to send message" error

1. **Check your keys**: Make sure you copied the correct Public Key, Service ID, and Template ID
2. **Template name**: Verify the template is named exactly `template_contact`
3. **Gmail connection**: Make sure Gmail service is connected in EmailJS dashboard
4. **Check browser console**: Open DevTools (F12) and look for error messages

### Email not received

1. Check your spam/junk folder
2. Verify the recipient email in EmailJS is correct
3. Check EmailJS dashboard for failed sends

### "Service not found" error

1. Make sure you created the Gmail service in EmailJS
2. Copy the correct Service ID from the dashboard
3. Verify the service is active (not disabled)

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Unlimited templates
- Full API access

If you need more, upgrade to a paid plan.

## Security Notes

- Your Public Key is safe to expose in frontend code
- Never expose your Private Key or API credentials
- EmailJS handles all email sending securely

## Production Deployment

EmailJS works great for production! Just make sure:
1. Your keys are correct
2. Gmail service is connected
3. Template is properly configured
4. You have enough monthly quota for your needs
