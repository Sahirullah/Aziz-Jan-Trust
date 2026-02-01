# Backend & Frontend Setup Guide

This project now has a separate backend server for handling contact form emails. Follow these steps to get everything running.

## Project Structure

```
project-root/
├── backend/                 # Node.js/Express backend server
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   ├── .env                # Backend environment variables (create this)
│   ├── .env.example        # Example environment file
│   └── README.md           # Backend documentation
├── src/                    # React frontend
│   ├── pages/
│   │   └── Contact.jsx     # Contact form component
│   └── ...
├── package.json            # Frontend dependencies
└── vite.config.js          # Frontend build config
```

## Setup Instructions

### Step 1: Backend Setup

1. Navigate to the backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from the example:
```bash
cp .env.example .env
```

4. Update `.env` with your Gmail credentials:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
RECIPIENT_EMAIL=info@azizjantrust.com
PORT=5000
NODE_ENV=development
```

### Step 2: Get Gmail App Password

1. Go to https://myaccount.google.com/security
2. Enable 2-Step Verification (if not already enabled)
3. Search for "App passwords" in security settings
4. Select "Mail" and "Windows Computer"
5. Google will generate a 16-character password (e.g., `abcd efgh ijkl mnop`)
6. Copy and paste it in your backend `.env` file as `EMAIL_PASSWORD`

### Step 3: Frontend Setup

1. Go back to the root directory:
```bash
cd ..
```

2. Install frontend dependencies (if not already done):
```bash
npm install
```

3. Create `.env` file in the root (if not already done):
```bash
cp .env.example .env
```

4. Update `.env` with frontend configuration:
```
VITE_API_URL=http://localhost:5000
```

## Running the Application

### Option 1: Run Both Servers in Separate Terminals

**Terminal 1 - Backend Server:**
```bash
cd backend
npm run dev
```
You should see: `✅ Backend server running on http://localhost:5000`

**Terminal 2 - Frontend Server:**
```bash
npm run dev
```
You should see: `VITE v... ready in ... ms`

### Option 2: Run Backend in Production Mode

If you want to run the backend without auto-reload:
```bash
cd backend
npm start
```

## Testing the Contact Form

1. Open your browser to `http://localhost:5173` (or the URL shown by Vite)
2. Navigate to the Contact page
3. Fill out the form with:
   - Full Name
   - Email Address
   - Phone Number (optional)
   - Subject
   - Message
4. Click "Send Message"
5. You should see a success message
6. Check your email inbox for the confirmation email

## Troubleshooting

### Backend won't start
- Make sure you're in the `backend` folder
- Check that `.env` file exists with correct credentials
- Verify Gmail app password is exactly 16 characters
- Check if port 5000 is already in use

### "Failed to send message" error
- Verify backend is running on `http://localhost:5000`
- Check backend console for error messages
- Confirm Gmail credentials are correct
- Make sure 2-Step Verification is enabled on Gmail account

### CORS errors
- Backend should be running on `http://localhost:5000`
- Frontend should be running on `http://localhost:5173`
- If using different ports, update CORS settings in `backend/server.js`

### Port already in use
- Change `PORT` in `backend/.env` to a different port (e.g., 5001)
- Or kill the process using the port

## Environment Variables

### Backend (.env in backend folder)
- `EMAIL_USER` - Your Gmail address
- `EMAIL_PASSWORD` - 16-character Gmail app password
- `RECIPIENT_EMAIL` - Where to send contact form submissions
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment mode (development/production)

### Frontend (.env in root folder)
- `VITE_API_URL` - Backend API URL (default: http://localhost:5000)

## Production Deployment

### Backend Deployment
1. Deploy to a service like Heroku, Railway, or AWS
2. Set environment variables on the hosting platform
3. Update CORS origin to your frontend domain
4. Use HTTPS for all communications

### Frontend Deployment
1. Build the frontend: `npm run build`
2. Deploy to Vercel, Netlify, or similar
3. Update `VITE_API_URL` to your backend URL

## Security Notes

- Never commit `.env` files to version control
- Keep Gmail app password secure
- Use HTTPS in production
- Consider adding rate limiting to prevent abuse
- Validate all user inputs on both frontend and backend

## Support

For issues with the backend, check `backend/README.md` for detailed documentation.
