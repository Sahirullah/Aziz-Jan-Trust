# Quick Start - Contact Form Setup

## Step 1: Get Your Gmail App Password

1. Go to https://myaccount.google.com/security
2. Click on "2-Step Verification" and enable it if not already enabled
3. Go back to Security settings and look for "App passwords"
4. Select:
   - App: **Mail**
   - Device: **Windows Computer** (or your device)
5. Google will show you a 16-character password like: `abcd efgh ijkl mnop`
6. Copy this password (without spaces)

## Step 2: Update .env File

Open the `.env` file in the root directory and replace:

```env
EMAIL_USER=your-actual-gmail@gmail.com
EMAIL_PASSWORD=your-16-character-password-without-spaces
PORT=5000
```

Example:
```env
EMAIL_USER=john.doe@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
PORT=5000
```

## Step 3: Install Dependencies

```bash
npm install
```

## Step 4: Start the Backend Server

Open a terminal and run:

```bash
npm run server
```

You should see:
```
Server running on port 5000
Email configured for: your-email@gmail.com
Transporter is ready to send emails
```

## Step 5: Start the Frontend (in another terminal)

```bash
npm run dev
```

## Step 6: Test the Contact Form

1. Open http://localhost:5173 in your browser
2. Go to the Contact page
3. Fill out the form and click "Send Message"
4. Check if the email arrives at info.sahirweb@gmail.com

## Troubleshooting

### Error: "Cannot connect to server"
- Make sure you ran `npm run server` in a separate terminal
- Check that the backend is running on port 5000

### Error: "Failed to send email"
- Check your `.env` file has the correct Gmail credentials
- Make sure you're using an app-specific password, not your regular Gmail password
- Verify 2-Step Verification is enabled on your Google Account

### Error: "Missing required fields"
- Make sure you filled out all required fields (Name, Email, Subject, Message)

## Running Both Together

If you want to run frontend and backend in one command:

```bash
npm run dev:all
```

This requires `concurrently` to be installed (it should be from `npm install`).
