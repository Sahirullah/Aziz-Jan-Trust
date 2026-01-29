# Contact Form Setup - Quick Start

Your contact form is now configured to use a backend email service. Follow these steps to get it working:

## Step 1: Get Gmail App Password

1. Go to https://myaccount.google.com/security
2. Enable **2-Step Verification** (if not already enabled)
3. Search for **App passwords** in security settings
4. Select **Mail** and **Windows Computer** (or your device)
5. Google will generate a 16-character password
6. Copy this password

## Step 2: Update .env File

Open `.env` and replace:
```
EMAIL_USER=info.sahirweb@gmail.com
EMAIL_PASSWORD=your-app-password-here
```

With your actual Gmail app password:
```
EMAIL_USER=info.sahirweb@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
```

## Step 3: Install Dependencies

Run:
```bash
npm install
```

## Step 4: Start the Backend Server

In a terminal, run:
```bash
npm run server
```

You should see:
```
Server running on port 5000
Email configured for: info.sahirweb@gmail.com
Transporter is ready to send emails
```

## Step 5: Start the Frontend (New Terminal)

In another terminal, run:
```bash
npm run dev
```

## Step 6: Test the Contact Form

1. Go to the Contact page
2. Fill out the form
3. Click "Send Message"
4. Check info.sahirweb@gmail.com for the email

## Troubleshooting

**"Failed to send message" error:**
- Make sure the backend server is running (`npm run server`)
- Check that EMAIL_PASSWORD is correct
- Verify 2-Step Verification is enabled on Gmail

**"Cannot connect to server":**
- Make sure backend is running on port 5000
- Check that VITE_API_URL in .env is correct

**Email not received:**
- Check spam/junk folder
- Verify EMAIL_USER is correct
- Check backend console for error messages

## Production Deployment

When deploying to production:
1. Update VITE_API_URL to your production backend URL
2. Set EMAIL_PASSWORD as an environment variable (never commit it)
3. Make sure your backend server is running on the production server
