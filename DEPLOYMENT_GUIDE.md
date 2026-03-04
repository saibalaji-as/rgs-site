# Deployment Guide - PESO License Consultant Website

## 🌐 Production Deployment Architecture

```
Frontend (Angular) → Netlify/Vercel
Backend (Express) → Render/Railway  
Database → MongoDB Atlas
```

## 📋 Pre-Deployment Checklist

- [ ] All features tested locally
- [ ] Environment variables documented
- [ ] MongoDB Atlas cluster created
- [ ] Email service configured
- [ ] Admin credentials secured
- [ ] CORS configured for production domain
- [ ] SSL certificates ready (handled by platforms)

## 🗄️ Step 1: Deploy Database (MongoDB Atlas)

### Setup MongoDB Atlas

1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account
3. Create new cluster (Free M0 tier available)
4. Database Access → Add Database User
   - Username: `peso_admin`
   - Password: Generate secure password
   - Save credentials securely
5. Network Access → Add IP Address
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
   - For production, restrict to your backend server IPs
6. Connect → Get connection string:
   ```
   mongodb+srv://peso_admin:<password>@cluster0.xxxxx.mongodb.net/peso-license?retryWrites=true&w=majority
   ```
7. Replace `<password>` with your database password

## 🔧 Step 2: Deploy Backend (Render)

### Option A: Render (Recommended)

1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. New → Web Service
4. Connect your repository
5. Configure:
   - Name: `peso-license-backend`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Instance Type: Free

6. Add Environment Variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb+srv://peso_admin:password@cluster0.xxxxx.mongodb.net/peso-license
   JWT_SECRET=your_super_secure_random_string_min_32_chars
   JWT_EXPIRE=7d
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_FROM=noreply@pesoconsultants.com
   ADMIN_EMAIL=admin@pesoconsultants.com
   ADMIN_PASSWORD=SecurePassword123!
   FRONTEND_URL=https://your-frontend-domain.netlify.app
   ```

7. Deploy
8. Note your backend URL: `https://peso-license-backend.onrender.com`

9. Create admin user (one-time):
   - Go to Shell tab in Render dashboard
   - Run: `node scripts/createAdmin.js`

### Option B: Railway

1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. New Project → Deploy from GitHub repo
4. Select backend folder
5. Add environment variables (same as above)
6. Deploy
7. Note your backend URL

## 🎨 Step 3: Deploy Frontend (Netlify)

### Option A: Netlify (Recommended)

1. Go to [netlify.com](https://www.netlify.com)
2. Sign up with GitHub
3. New site from Git
4. Connect repository
5. Configure:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `dist/peso-license-frontend/browser`

6. Before deploying, update `frontend/src/environments/environment.prod.ts`:
   ```typescript
   export const environment = {
     production: true,
     apiUrl: 'https://peso-license-backend.onrender.com/api'
   };
   ```

7. Deploy site
8. Custom domain (optional):
   - Domain settings → Add custom domain
   - Follow DNS configuration steps

### Option B: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to frontend folder: `cd frontend`
3. Update production environment file
4. Run: `vercel --prod`
5. Follow prompts

## 🔐 Step 4: Configure CORS

Update `backend/server.js` for production:

```javascript
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:4200',
  credentials: true
};

app.use(cors(corsOptions));
```

## 📧 Step 5: Email Configuration

### Gmail Setup (Production)

1. Create dedicated Gmail account for the application
2. Enable 2-Factor Authentication
3. Generate App Password:
   - Google Account → Security → 2-Step Verification
   - App passwords → Select app: Mail, Device: Other
   - Copy generated password
4. Use in `EMAIL_PASS` environment variable

### Alternative: SendGrid (Recommended for Production)

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create API key
3. Update backend email config:
   ```javascript
   EMAIL_HOST=smtp.sendgrid.net
   EMAIL_PORT=587
   EMAIL_USER=apikey
   EMAIL_PASS=your_sendgrid_api_key
   ```

## 🧪 Step 6: Testing Production

### Test Backend
```bash
curl https://your-backend-url.onrender.com/api/health
```

Expected response:
```json
{"status":"OK","message":"Server is running"}
```

### Test Frontend
1. Visit your frontend URL
2. Test navigation
3. Submit lead form
4. Check email received
5. Login to admin panel
6. Verify inquiry appears

### Test Admin Panel
1. Go to `https://your-domain.netlify.app/admin/login`
2. Login with admin credentials
3. Verify dashboard loads
4. Check inquiries display correctly

## 🔒 Security Hardening

### Backend Security

1. Update CORS to specific domain:
   ```javascript
   origin: 'https://your-exact-domain.netlify.app'
   ```

2. Add rate limiting:
   ```bash
   npm install express-rate-limit
   ```
   ```javascript
   const rateLimit = require('express-rate-limit');
   
   const limiter = rateLimit({
     windowMs: 15 * 60 * 1000, // 15 minutes
     max: 100 // limit each IP to 100 requests per windowMs
   });
   
   app.use('/api/', limiter);
   ```

3. Add helmet for security headers:
   ```bash
   npm install helmet
   ```
   ```javascript
   const helmet = require('helmet');
   app.use(helmet());
   ```

### MongoDB Security

1. Network Access → Remove 0.0.0.0/0
2. Add specific IPs of your backend servers
3. Enable MongoDB authentication
4. Regular backups (Atlas handles this)

### Environment Variables

- Never commit `.env` files
- Use platform-specific secret management
- Rotate JWT_SECRET periodically
- Use strong passwords (16+ characters)

## 📊 Monitoring & Maintenance

### Render Monitoring
- Check logs in Render dashboard
- Set up email alerts for downtime
- Monitor resource usage

### Netlify Monitoring
- Check build logs
- Monitor bandwidth usage
- Set up form notifications

### MongoDB Atlas Monitoring
- Monitor connection count
- Check storage usage
- Review slow queries

## 🚀 Performance Optimization

### Frontend
1. Enable Angular production mode (automatic)
2. Lazy load routes (already implemented)
3. Optimize images
4. Enable Netlify CDN (automatic)

### Backend
1. Add Redis caching (optional):
   ```bash
   npm install redis
   ```
2. Enable compression:
   ```bash
   npm install compression
   ```
   ```javascript
   const compression = require('compression');
   app.use(compression());
   ```

### Database
1. Create indexes:
   ```javascript
   // In backend/models/Inquiry.js
   inquirySchema.index({ createdAt: -1 });
   inquirySchema.index({ serviceRequired: 1 });
   inquirySchema.index({ contacted: 1 });
   ```

## 🔄 Continuous Deployment

### Auto-Deploy on Git Push

Both Netlify and Render support automatic deployments:

1. Push to main branch
2. Platform detects changes
3. Runs build automatically
4. Deploys if successful

### Branch Previews

Netlify provides preview deployments for pull requests automatically.

## 📱 Custom Domain Setup

### Netlify Custom Domain

1. Domain settings → Add custom domain
2. Add DNS records at your registrar:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```
3. Enable HTTPS (automatic with Let's Encrypt)

### Render Custom Domain

1. Settings → Custom Domain
2. Add your domain
3. Update DNS:
   ```
   Type: CNAME
   Name: api (or your subdomain)
   Value: your-app.onrender.com
   ```

## 🆘 Troubleshooting

### Backend Issues

**Error: Cannot connect to MongoDB**
- Check MongoDB Atlas IP whitelist
- Verify connection string
- Check network access settings

**Error: CORS policy**
- Update CORS origin in backend
- Check FRONTEND_URL environment variable

### Frontend Issues

**API calls failing**
- Verify backend URL in environment.prod.ts
- Check backend is running
- Inspect browser console for errors

**Build failing**
- Check Node version compatibility
- Clear cache and rebuild
- Review build logs

## 📞 Post-Deployment

1. Update README with live URLs
2. Document admin credentials securely
3. Set up monitoring alerts
4. Schedule regular backups
5. Plan maintenance windows
6. Create runbook for common issues

## 🎉 Go Live Checklist

- [ ] Backend deployed and healthy
- [ ] Frontend deployed and accessible
- [ ] Database connected and seeded
- [ ] Admin user created
- [ ] Email notifications working
- [ ] Forms submitting successfully
- [ ] Admin panel accessible
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificates active
- [ ] Monitoring set up
- [ ] Backups configured
- [ ] Documentation updated

## 📚 Resources

- [Render Documentation](https://render.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com)
- [Angular Deployment Guide](https://angular.io/guide/deployment)
