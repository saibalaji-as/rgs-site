# 🚀 Quick Deployment Reference

## One Repository → Two Deployments

```
GitHub Repo (monorepo)
├── frontend/  → Deploy to Netlify
└── backend/   → Deploy to Render
```

---

## 📋 Deployment Order

1. **Backend First** (Render) → Get backend URL
2. **Frontend Second** (Netlify) → Use backend URL
3. **Update Backend** → Add frontend URL for CORS

---

## 🔧 Render (Backend) Configuration

```
Root Directory: backend
Build Command: npm install
Start Command: npm start
```

**Environment Variables:**
```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
FRONTEND_URL=https://your-site.netlify.app
```

---

## 🎨 Netlify (Frontend) Configuration

```
Base Directory: frontend
Build Command: npm run build
Publish Directory: frontend/dist/peso-license-frontend/browser
```

**Before deploying, update:**
`frontend/src/environments/environment.prod.ts`
```typescript
apiUrl: 'https://your-backend.onrender.com/api'
```

---

## ⚡ Quick Commands

### Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Create Admin User (Render Shell)
```bash
node scripts/createAdmin.js
```

### Test Backend
```bash
curl https://your-backend.onrender.com/api/health
```

---

## ✅ Deployment Checklist

**Backend (Render):**
- [ ] Set root directory to `backend`
- [ ] Add environment variables
- [ ] Deploy and copy URL
- [ ] Create admin user via Shell

**Frontend (Netlify):**
- [ ] Update `environment.prod.ts` with backend URL
- [ ] Commit and push
- [ ] Set base directory to `frontend`
- [ ] Deploy and copy URL

**Final Steps:**
- [ ] Update `FRONTEND_URL` on Render
- [ ] Test the live site
- [ ] Submit a form
- [ ] Login to admin panel

---

## 🔗 Your URLs

After deployment, you'll have:

- **Frontend**: `https://your-site.netlify.app`
- **Backend**: `https://your-backend.onrender.com`
- **Admin Panel**: `https://your-site.netlify.app/admin/login`

---

## 💡 Pro Tips

1. **Deploy backend first** - You need the URL for frontend
2. **Free tier cold starts** - Render free tier sleeps after 15 min
3. **Auto-deploy** - Both platforms auto-deploy on git push
4. **Environment variables** - Never commit `.env` files
5. **MongoDB Atlas** - Already cloud-hosted, no deployment needed

---

## 🆘 Common Issues

**CORS Error:**
- Update `FRONTEND_URL` on Render with your Netlify URL

**API Not Found:**
- Check `environment.prod.ts` has correct backend URL
- Verify backend is running on Render

**Build Failed:**
- Check deployment logs
- Verify `package.json` dependencies
- Ensure correct Node version

---

## 📱 Test Your Deployment

1. Visit frontend URL
2. Browse pages
3. Submit contact form
4. Login: `admin@pesoconsultants.com` / `Admin@123`
5. Check inquiry in dashboard

---

**Full Guide**: See `MONOREPO_DEPLOYMENT.md` for detailed instructions!
