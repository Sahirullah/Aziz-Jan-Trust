# Contact Form Setup Guide

This guide explains how to set up the contact form to send emails to `info.sahirweb@gmail.com`.

## Prerequisites

- Node.js installed on your system
- A Gmail account

## Setup Steps

### 1. Install Dependencies

Run the following command to install all required packages:

```bash
npm install
```

This will install:
- `express` - Backend server framework
- `nodemailer` - Email sending library
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variable management
- `concurrently` - Run multiple commands simultaneously

### 2. Configure Gmail App Password

The contact form uses Gmail's SMTP server to send emails. You need to create an app-specific password:

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** if not already enabled
3. Search for and go to **App passwords**
4. Select:
   - App: **Mail**
   - Device: **Windows Computer** (or your device type)
5. Google will generate a 16-character password
6. Copy this password

### 3. Update Environment Variables

Open the `.env` file in the root directory and update:

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
PORT=5000
```

Replace:
- `your-gmail@gmail.com` with your actual Gmail address
- `your-16-character-app-password` with the password generated in step 2

### 4. Run the Application

You have two options:

**Option A: Run both frontend and backend together**
```bash
npm run dev:all
```

This will start:
- Vite development server on `http://localhost:5173`
- Express backend on `http://localhost:5000`

**Option B: Run them separately**

Terminal 1 - Frontend:
```bash
npm run dev
```

Terminal 2 - Backend:
```bash
npm run server
```

### 5. Test the Contact Form

1. Open your browser and go to `http://localhost:5173`
2. Navigate to the Contact page
3. Fill out the contact form
4. Click "Send Message"
5. The email should be sent to `info.sahirweb@gmail.com`

## How It Works

1. **Frontend (React)**: The contact form collects user information and sends it to the backend API
2. **Backend (Express)**: Receives the form data and uses Nodemailer to send an email via Gmail's SMTP server
3. **Email**: The message is formatted as HTML and sent to the specified recipient

## Troubleshooting

### "Failed to send email" error

1. **Check Gmail credentials**: Verify that `EMAIL_USER` and `EMAIL_PASSWORD` are correct in `.env`
2. **App password**: Make sure you're using an app-specific password, not your regular Gmail password
3. **2-Step Verification**: Ensure 2-Step Verification is enabled on your Google Account
4. **Less secure apps**: If using an older Gmail account, you may need to enable "Less secure app access"

### Backend not connecting

1. Ensure the backend is running on port 5000
2. Check that `http://localhost:5000/api/contact` is accessible
3. Look for errors in the backend terminal

### CORS errors

The backend is configured to accept requests from the frontend. If you get CORS errors:
1. Ensure the backend is running
2. Check that the frontend is making requests to `http://localhost:5000`

## Production Deployment

For production, you'll need to:

1. Deploy the backend to a server (Heroku, AWS, DigitalOcean, etc.)
2. Update the frontend API endpoint from `http://localhost:5000` to your production backend URL
3. Set environment variables on your production server
4. Consider using a more robust email service like SendGrid or AWS SES for better reliability

## Security Notes

- Never commit the `.env` file to version control
- The `.env` file is already in `.gitignore`
- Use environment variables for all sensitive data
- Consider adding rate limiting to prevent spam
- Add email validation on both frontend and backend
