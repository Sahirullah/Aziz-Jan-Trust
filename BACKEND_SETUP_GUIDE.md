# Backend Setup Guide - Contact Form with Nodemailer

This guide will help you set up the complete backend system for the contact form with email functionality.

## 🚀 Quick Start

### 1. Install All Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
npm run backend:install
```

### 2. Configure Email Settings

#### Option A: Using Gmail (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Click "2-Step Verification" → "App passwords"
   - Select "Mail" and your device
   - Copy the 16-character password

3. **Update Backend Environment**:
   ```bash
   cd backend
   cp .env.example .env
   ```
   
   Edit `backend/.env`:
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-character-app-password
   RECIPIENT_EMAIL=info@azizjantrust.com
   ```

#### Option B: Using Other Email Providers

**Outlook/Hotmail:**
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

**Yahoo:**
```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@yahoo.com
EMAIL_PASS=your-app-password
```

### 3. Start the Application

#### Development Mode (Both Frontend & Backend):
```bash
npm run dev:full
```

#### Or Start Separately:

**Frontend:**
```bash
npm run dev
```

**Backend:**
```bash
npm run backend:dev
```

## 📁 Project Structure

```
project/
├── backend/                 # Backend API
│   ├── config/
│   │   └── emailConfig.js   # Email configuration
│   ├── routes/
│   │   └── contact.js       # Contact form routes
│   ├── utils/
│   │   └── emailTemplates.js # Email templates
│   ├── .env                 # Environment variables
│   ├── server.js           # Main server file
│   └── package.json        # Backend dependencies
├── src/                    # Frontend React app
│   └── pages/
│       └── Contact.jsx     # Updated contact form
└── package.json           # Main project file
```

## 🔧 API Endpoints

### POST /api/contact/send
Submit contact form data.

**Request:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phoneNumber": "+1234567890",
  "subject": "General Inquiry",
  "message": "Hello, I need help with..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your message has been sent successfully!"
}
```

### GET /api/contact/test
Test email configuration.

### GET /api/health
Server health check.

## 🧪 Testing

### 1. Test Email Configuration
```bash
curl http://localhost:5000/api/contact/test
```

### 2. Test Contact Form Submission
```bash
curl -X POST http://localhost:5000/api/contact/send \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'
```

### 3. Test in Browser
1. Start both frontend and backend
2. Go to `http://localhost:5173/contact`
3. Fill out and submit the contact form
4. Check your email for notifications

## 📧 Email Features

### Admin Notification Email
- Sent to `RECIPIENT_EMAIL`
- Contains all form details
- Professional HTML template
- Includes timestamp

### User Confirmation Email
- Sent to form submitter
- Confirms message receipt
- Professional branding
- Thank you message

## 🔒 Security Features

- **Rate Limiting**: 5 requests per 15 minutes per IP
- **Input Validation**: Server-side validation for all fields
- **CORS Protection**: Configured for frontend domain
- **Security Headers**: Helmet middleware
- **Environment Variables**: Sensitive data protection

## 🚨 Troubleshooting

### Email Not Sending

1. **Check Gmail App Password**:
   - Ensure 2FA is enabled
   - Use app password, not regular password
   - Copy password exactly (no spaces)

2. **Test Configuration**:
   ```bash
   curl http://localhost:5000/api/contact/test
   ```

3. **Check Logs**:
   - Backend console shows detailed error messages
   - Look for authentication or connection errors

### CORS Issues

1. **Check Frontend URL**:
   - Ensure `FRONTEND_URL` in `backend/.env` matches your frontend
   - Default: `http://localhost:5173`

2. **Browser Console**:
   - Look for CORS-related error messages
   - Ensure API calls use correct backend URL

### Form Validation Errors

Common validation requirements:
- **Full Name**: 2-100 characters, letters and spaces only
- **Email**: Valid email format
- **Phone**: Valid phone number format (optional)
- **Subject**: 5-200 characters
- **Message**: 10-1000 characters

## 🌐 Production Deployment

### Backend Deployment

1. **Environment Variables**:
   ```env
   NODE_ENV=production
   PORT=5000
   FRONTEND_URL=https://yourdomain.com
   EMAIL_USER=your-production-email@gmail.com
   EMAIL_PASS=your-production-app-password
   RECIPIENT_EMAIL=admin@yourdomain.com
   ```

2. **Start Production Server**:
   ```bash
   cd backend
   npm start
   ```

### Frontend Deployment

Update `.env` with production backend URL:
```env
VITE_API_URL=https://your-backend-domain.com
```

## 📞 Support

If you encounter issues:

1. Check this guide first
2. Verify all environment variables
3. Test email configuration endpoint
4. Check server logs for detailed errors
5. Ensure all dependencies are installed

## 🎯 Next Steps

- [ ] Configure your email provider
- [ ] Test the contact form
- [ ] Customize email templates
- [ ] Set up production environment
- [ ] Configure domain and SSL

The contact form is now fully functional with professional email notifications!