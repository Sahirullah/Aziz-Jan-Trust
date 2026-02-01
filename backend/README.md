# Aziz Jan Welfare Trust - Backend Server

This is the backend server for handling contact form submissions using Node.js, Express, and Nodemailer.

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Update `.env` with your Gmail credentials:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
RECIPIENT_EMAIL=info@azizjantrust.com
PORT=5000
NODE_ENV=development
```

### 3. Get Gmail App Password

1. Go to https://myaccount.google.com/security
2. Enable 2-Step Verification (if not already enabled)
3. Search for "App passwords" in security settings
4. Select "Mail" and "Windows Computer"
5. Google will generate a 16-character password
6. Copy and paste it in your `.env` file as `EMAIL_PASSWORD`

### 4. Run the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Health Check
- **GET** `/api/health`
- Returns server status

### Contact Form
- **POST** `/api/contact`
- **Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "03191954292",
  "subject": "General Inquiry",
  "message": "Your message here"
}
```
- **Response:**
```json
{
  "success": true,
  "message": "Email sent successfully. We will get back to you soon."
}
```

## Features

- ✅ Sends emails to admin inbox
- ✅ Sends confirmation email to user
- ✅ Input validation
- ✅ HTML email formatting
- ✅ CORS enabled for frontend communication
- ✅ Error handling and logging
- ✅ Environment-based configuration

## Troubleshooting

### "Failed to send email" error
1. Check your Gmail app password is correct (16 characters)
2. Verify 2-Step Verification is enabled on your Gmail account
3. Check that EMAIL_USER and EMAIL_PASSWORD are set in `.env`
4. Look at console logs for detailed error messages

### CORS errors
- Make sure the frontend is running on `http://localhost:5173` (Vite default)
- Update CORS origin in `server.js` if using a different frontend URL

### Port already in use
- Change `PORT` in `.env` to a different port (e.g., 5001)
- Or kill the process using port 5000

## Production Deployment

Before deploying to production:

1. Set `NODE_ENV=production` in `.env`
2. Update CORS origin to your actual frontend domain
3. Use a secure method to store environment variables
4. Consider using a service like SendGrid or AWS SES for higher email volume
5. Add rate limiting to prevent abuse
6. Enable HTTPS

## Security Notes

- Never commit `.env` file to version control
- Keep your Gmail app password secure
- Validate and sanitize all user inputs
- Use HTTPS in production
- Consider adding rate limiting for the contact endpoint
