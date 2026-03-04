# Monorepo Deployment Guide

## 📦 Your Repository Structure

```
your-repo/
├── frontend/          # Angular app
├── backend/           # Express API
├── README.md
└── .gitignore
```

Both Netlify and Render can deploy from subdirectories in the same repository!

---

## 🚀 Step-by-Step Deployment

### Step 1: Prepare Your Repository

#### 1.1 Create Root .gitignore
Create `.gitignore` in the root directory:

```gitignore
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment variables
.env
.env.local
.env.production

# Build outputs
dist/
build/
.angular/

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo

# Logs
*.log
logs/
```

#### 1.2 Update Frontend Environment for Production

Edit `frontend/src/environments/environment.prod.ts`:
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://YOUR-BACKEND-URL.onrender.com/api'  // Update after backend deployment
};
```

#### 1.3 Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - PESO License Consultant Website"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push
git push -u origin main
```

---

## 🔧 Step 2: Deploy Backend to Render

### 2.1 Create Render Account
1. Go to https://render.com
2. Sign up with GitHub
3. Authorize Render to access your repositories

### 2.2 Create Web Service

1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository
3. Configure:

**Basic Settings:**
- **Name**: `peso-license-backend` (or your choice)
- **Region**: Choose closest to your users
- **Branch**: `main`
- **Root Directory**: `backend` ⚠️ IMPORTANT!
- **Runtime**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`

**Instance Type:**
- Select **"Free"** (or paid for better performance)

### 2.3 Add Environment Variables

Click **"Advanced"** → **"Add Environment Variable"**

Add these variables:

```
PORT=5000
MONGODB_URI=mongodb+srv://saibalaji:ymcamadras@saicluster.uy0mfdo.mongodb.net/peso-license?retryWrites=true&w=majority
JWT_SECRET=peso_license_jwt_secret_key_2024_secure_random_string_min_32_characters
JWT_EXPIRE=7d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@pesoconsultants.com
ADMIN_EMAIL=admin@pesoconsultants.com
ADMIN_PASSWORD=Admin@123
FRONTEND_URL=https://YOUR-FRONTEND-URL.netlify.app
```

⚠️ **Note**: You'll update `FRONTEND_URL` after deploying frontend

### 2.4 Deploy

1. Click **"Create Web Service"**
2. Wait 2-5 minutes for deployment
3. Your backend URL will be: `https://peso-license-backend.onrender.com`
4. **Copy this URL** - you'll need it for frontend!

### 2.5 Create Admin User

After deployment, go to Render dashboard:
1. Click on your service
2. Go to **"Shell"** tab
3. Run: `node scripts/createAdmin.js`

---

## 🎨 Step 3: Deploy Frontend to Netlify

### 3.1 Update Frontend Environment

Before deploying, update `frontend/src/environments/environment.prod.ts`:

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://peso-license-backend.onrender.com/api'  // Your Render URL
};
```

Commit and push:
```bash
git add frontend/src/environments/environment.prod.ts
git commit -m "Update production API URL"
git push
```

### 3.2 Create Netlify Account

1. Go to https://netlify.com
2. Sign up with GitHub
3. Authorize Netlify

### 3.3 Create New Site

1. Click **"Add new site"** → **"Import an existing project"**
2. Choose **"Deploy with GitHub"**
3. Select your repository
4. Configure build settings:

**Build Settings:**
- **Base directory**: `frontend` ⚠️ IMPORTANT!
- **Build command**: `npm run build`
- **Publish directory**: `frontend/dist/peso-license-frontend/browser`

**Advanced Settings:**
Click **"Show advanced"** → **"New variable"**

Add environment variable:
```
API_URL=https://peso-license-backend.onrender.com/api
```

### 3.4 Deploy

1. Click **"Deploy site"**
2. Wait 2-5 minutes
3. Your site will be live at: `https://random-name-12345.netlify.app`

### 3.5 Custom Domain (Optional)

1. Go to **"Domain settings"**
2. Click **"Add custom domain"**
3. Follow DNS configuration steps

---

## 🔄 Step 4: Update CORS and Frontend URL

### 4.1 Update Backend CORS

After frontend is deployed, update backend environment variable on Render:

1. Go to Render dashboard → Your service
2. **Environment** tab
3. Update `FRONTEND_URL` to your Netlify URL:
   ```
   FRONTEND_URL=https://your-site.netlify.app
   ```
4. Service will auto-redeploy

### 4.2 Update Backend CORS Code (Optional)

For better security, edit `backend/server.js`:

```javascript
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true
};

app.use(cors(corsOptions));
```

Commit and push - Render will auto-deploy.

---

## ✅ Step 5: Verify Deployment

### Test Backend
```bash
curl https://peso-license-backend.onrender.com/api/health
```

Should return: `{"status":"OK","message":"Server is running"}`

### Test Frontend
1. Visit your Netlify URL
2. Browse all pages
3. Submit contact form
4. Login to admin panel
5. Verify inquiries appear

---

## 🔄 Continuous Deployment

Both platforms support automatic deployments:

### Netlify (Frontend)
- Push to `main` branch → Auto-deploys frontend
- Build time: ~2-3 minutes

### Render (Backend)
- Push to `main` branch → Auto-deploys backend
- Build time: ~2-5 minutes

---

## 📁 Alternative: Separate Repositories

If you prefer separate repos:

### Option 1: Split into Two Repos

```bash
# Create frontend repo
cd frontend
git init
git add .
git commit -m "Frontend only"
git remote add origin https://github.com/YOU/frontend-repo.git
git push -u origin main

# Create backend repo
cd ../backend
git init
git add .
git commit -m "Backend only"
git remote add origin https://github.com/YOU/backend-repo.git
git push -u origin main
```

Then deploy:
- Netlify: Connect to frontend repo (no base directory needed)
- Render: Connect to backend repo (no root directory needed)

---

## 🛠️ Deployment Configuration Files

### For Netlify (Already Created)

`frontend/netlify.toml`:
```toml
[build]
  publish = "dist/peso-license-frontend/browser"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### For Render (Optional)

Create `backend/render.yaml`:
```yaml
services:
  - type: web
    name: peso-license-backend
    runtime: node
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
```

---

## 🐛 Troubleshooting

### Backend Issues

**Build fails on Render:**
- Check Node version compatibility
- Verify `package.json` has all dependencies
- Check build logs for specific errors

**Can't connect to MongoDB:**
- Verify MongoDB Atlas IP whitelist includes `0.0.0.0/0`
- Check connection string is correct
- Ensure database user has proper permissions

**CORS errors:**
- Update `FRONTEND_URL` in Render environment variables
- Check CORS configuration in `server.js`

### Frontend Issues

**Build fails on Netlify:**
- Check Angular version compatibility
- Verify all dependencies in `package.json`
- Check build command is correct

**API calls failing:**
- Verify `environment.prod.ts` has correct backend URL
- Check Network tab in browser DevTools
- Ensure backend is running

**404 on page refresh:**
- Verify `netlify.toml` redirects are configured
- Check publish directory is correct

---

## 💰 Cost Breakdown

### Free Tier Limits

**Netlify (Frontend):**
- ✅ 100GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Automatic HTTPS
- ✅ Custom domain

**Render (Backend):**
- ✅ 750 hours/month (enough for 1 service)
- ⚠️ Spins down after 15 min inactivity (free tier)
- ⚠️ Cold start: 30-60 seconds
- ✅ Automatic HTTPS

**MongoDB Atlas:**
- ✅ 512MB storage
- ✅ Shared cluster
- ✅ Perfect for development/small production

### Paid Options (If Needed)

**Render:**
- Starter: $7/month (no spin down, faster)
- Standard: $25/month (more resources)

**Netlify:**
- Pro: $19/month (more bandwidth, build minutes)

---

## 🎯 Quick Deployment Checklist

- [ ] Push code to GitHub
- [ ] Deploy backend to Render
  - [ ] Set root directory to `backend`
  - [ ] Add all environment variables
  - [ ] Create admin user via Shell
- [ ] Update frontend `environment.prod.ts` with backend URL
- [ ] Deploy frontend to Netlify
  - [ ] Set base directory to `frontend`
  - [ ] Set correct publish directory
- [ ] Update backend `FRONTEND_URL` on Render
- [ ] Test entire application
- [ ] Configure custom domain (optional)

---

## 📚 Additional Resources

- [Netlify Docs](https://docs.netlify.com)
- [Render Docs](https://render.com/docs)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com)

---

**Need Help?** Check the deployment logs on both platforms for detailed error messages!
