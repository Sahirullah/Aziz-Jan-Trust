<<<<<<< HEAD
# Contact Form Backend API

A Node.js Express backend with Nodemailer integration for handling contact form submissions.

## Features

- ✅ Contact form submission handling
- ✅ Email notifications with Nodemailer
- ✅ Input validation and sanitization
- ✅ Rate limiting for security
- ✅ CORS configuration
- ✅ Professional email templates
- ✅ Error handling and logging
- ✅ Environment-based configuration
=======
# Aziz Jan Welfare Trust - Backend Server

This is the backend server for handling contact form submissions using Node.js, Express, and Nodemailer.
>>>>>>> 7f510343506543107adf5ab263fe5a77e200a285

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

<<<<<<< HEAD
### 2. Environment Configuration

Copy `.env.example` to `.env` and configure your email settings:

=======
### 2. Configure Environment Variables

1. Copy `.env.example` to `.env`:
>>>>>>> 7f510343506543107adf5ab263fe5a77e200a285
```bash
cp .env.example .env
```

<<<<<<< HEAD
Update the following variables in `.env`:

```env
# Email Configuration (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Recipient Email
RECIPIENT_EMAIL=info@azizjantrust.com
```

### 3. Gmail Setup (Recommended)

For Gmail, you need to:

1. Enable 2-Factor Authentication
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
   - Use this password in `EMAIL_PASS`

### 4. Start the Server

Development mode:
=======
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
>>>>>>> 7f510343506543107adf5ab263fe5a77e200a285
```bash
npm run dev
```

<<<<<<< HEAD
Production mode:
=======
**Production mode:**
>>>>>>> 7f510343506543107adf5ab263fe5a77e200a285
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

<<<<<<< HEAD
### POST /api/contact/send
Submit a contact form message.

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phoneNumber": "+1234567890",
  "subject": "General Inquiry",
  "message": "Hello, I have a question..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your message has been sent successfully! We will get back to you soon."
}
```

### GET /api/contact/test
Test email configuration.

**Response:**
```json
{
  "success": true,
  "message": "Email configuration is working correctly"
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Email Templates

The system sends two emails for each submission:

1. **Admin Notification**: Sent to `RECIPIENT_EMAIL` with form details
2. **User Confirmation**: Sent to the user confirming receipt

## Security Features

- Rate limiting (5 requests per 15 minutes per IP)
- Input validation and sanitization
- CORS protection
- Helmet security headers
- Environment-based configuration

## Error Handling

- Comprehensive error logging
- User-friendly error messages
- Validation error details
- Development vs production error responses

## Testing

Test the email configuration:
```bash
curl http://localhost:5000/api/contact/test
```

Test form submission:
```bash
curl -X POST http://localhost:5000/api/contact/send \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "subject": "Test Message",
    "message": "This is a test message"
  }'
```

## Deployment

1. Set `NODE_ENV=production` in your environment
2. Configure production email settings
3. Update `FRONTEND_URL` to your production domain
4. Ensure all environment variables are set
5. Start with `npm start`

## Troubleshooting

### Email Not Sending

1. Check email credentials in `.env`
2. Verify Gmail app password (if using Gmail)
3. Test configuration: `GET /api/contact/test`
4. Check server logs for detailed errors

### CORS Issues

1. Verify `FRONTEND_URL` in `.env`
2. Ensure frontend is running on the specified URL
3. Check browser console for CORS errors

### Rate Limiting

If you're getting rate limited during testing:
1. Increase `RATE_LIMIT_MAX_REQUESTS` in `.env`
2. Decrease `RATE_LIMIT_WINDOW_MS` for shorter windows
3. Restart the server after changes
=======
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
>>>>>>> 7f510343506543107adf5ab263fe5a77e200a285
