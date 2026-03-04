# PESO License Consultant Website - Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- MongoDB (local or Atlas)
- Git

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/peso-license
JWT_SECRET=your_secure_random_string_here
JWT_EXPIRE=7d

# Email Configuration (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@pesoconsultants.com

# Admin Credentials
ADMIN_EMAIL=admin@pesoconsultants.com
ADMIN_PASSWORD=Admin@123

FRONTEND_URL=http://localhost:4200
```

5. Create admin user:
```bash
node scripts/createAdmin.js
```

6. Start the server:
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Update API URL in `src/environments/environment.ts` if needed

4. Start development server:
```bash
npm start
```

Frontend will run on `http://localhost:4200`

## 📧 Email Configuration

### Gmail Setup
1. Enable 2-Factor Authentication in your Google Account
2. Generate App Password: Google Account → Security → 2-Step Verification → App passwords
3. Use the generated password in `EMAIL_PASS`

### Other Email Providers
Update `EMAIL_HOST` and `EMAIL_PORT` accordingly:
- Outlook: smtp-mail.outlook.com:587
- Yahoo: smtp.mail.yahoo.com:587
- SendGrid: smtp.sendgrid.net:587

## 🗄️ MongoDB Setup

### Local MongoDB
```bash
# Install MongoDB
# macOS
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community
```

### MongoDB Atlas (Cloud)
1. Create account at mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env`

## 🎨 Customization

### Colors
Edit `frontend/tailwind.config.js`:
```javascript
colors: {
  lilac: {
    DEFAULT: '#C8A2C8',  // Change primary color
    light: '#E6D6F2',
    dark: '#6A4C93',
  }
}
```

### Content
- Home page: `frontend/src/app/features/home/home.component.ts`
- Services: `frontend/src/app/features/services/service-detail.component.ts`
- Contact info: `frontend/src/app/features/contact/contact.component.ts`

### WhatsApp Number
Update in:
- `frontend/src/app/shared/components/whatsapp-button/whatsapp-button.component.ts`
- `frontend/src/app/features/home/home.component.html`

## 🚀 Deployment

### Frontend (Netlify)
1. Push code to GitHub
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist/peso-license-frontend/browser`
4. Add environment variable: `API_URL=your-backend-url`

### Frontend (Vercel)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### Backend (Render)
1. Create account at render.com
2. New Web Service → Connect repository
3. Settings:
   - Build Command: `npm install`
   - Start Command: `npm start`
4. Add environment variables from `.env`

### Backend (Railway)
1. Create account at railway.app
2. New Project → Deploy from GitHub
3. Add environment variables

### Database (MongoDB Atlas)
1. Already cloud-hosted
2. Update `MONGODB_URI` in production environment variables

## 🔒 Security Checklist

- [ ] Change default admin password
- [ ] Use strong JWT_SECRET (32+ random characters)
- [ ] Enable CORS only for your frontend domain in production
- [ ] Use HTTPS in production
- [ ] Keep dependencies updated
- [ ] Enable MongoDB authentication
- [ ] Use environment variables for all secrets

## 📱 Testing

### Test Admin Panel
1. Navigate to `http://localhost:4200/admin/login`
2. Login with credentials from `.env`
3. View inquiries dashboard

### Test Lead Form
1. Fill form on homepage
2. Check email notification
3. Verify inquiry appears in admin panel

## 🐛 Troubleshooting

### Backend won't start
- Check MongoDB is running
- Verify `.env` file exists and is configured
- Check port 5000 is not in use

### Frontend won't start
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear Angular cache: `rm -rf .angular`

### Email not sending
- Verify email credentials
- Check firewall/antivirus settings
- Try different SMTP provider

## 📚 Additional Resources

- [Angular Documentation](https://angular.io/docs)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)

## 🆘 Support

For issues or questions:
- Check existing documentation
- Review error logs
- Search GitHub issues
- Contact development team
