# 📧 Email Setup Instructions

## 🚨 Current Issue
Your contact form is failing because the email configuration needs to be set up properly with Gmail App Passwords.

## ✅ Quick Fix Applied
I've temporarily disabled email sending so your form works for testing. You'll see this message:
> "Your message has been received successfully! (Email sending is disabled in development mode)"

## 🔧 To Enable Real Email Sending

### Step 1: Generate Gmail App Password

1. **Go to Google Account Settings**: https://myaccount.google.com/security
2. **Enable 2-Step Verification** (if not already enabled)
3. **Generate App Password**:
   - Search for "App passwords" in security settings
   - Click "App passwords"
   - Select "Mail" and "Windows Computer" (or your device)
   - Copy the 16-character password (like: `abcd efgh ijkl mnop`)

### Step 2: Update Backend Configuration

Edit `backend/.env`:
```env
# Replace with your actual Gmail and app password
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop

# Where you want to receive contact form emails
RECIPIENT_EMAIL=info@azizjantrust.com
```

### Step 3: Test Email Configuration

```bash
# Test the email setup
curl http://localhost:3001/api/contact/test
```

## 🎯 Current Status

✅ **Backend**: Running on port 3001
✅ **Frontend**: Updated to use port 3001
✅ **Form Validation**: Fixed and working
✅ **Form Submission**: Working (without email)
⚠️ **Email Sending**: Disabled until proper Gmail App Password is configured

## 🧪 Test Your Form Now

1. **Restart your frontend** to pick up the new API URL:
   ```bash
   # Stop current frontend (Ctrl+C)
   # Then restart:
   npm run dev
   ```

2. **Test the contact form** at `http://localhost:5173/contact`

3. **You should see**: "Your message has been received successfully! (Email sending is disabled in development mode)"

## 🔍 Backend Logs

The backend will log the form data to console:
```
📧 Email would be sent to: info@azizjantrust.com
📝 Form data received: { fullName: 'muhammad shakir', email: '...', ... }
```

## 🚀 When Ready for Production

1. Set up proper Gmail App Password
2. Update `backend/.env` with real credentials
3. Remove the development bypass code
4. Deploy with proper email configuration

**Your form should now work for testing!** 🎉