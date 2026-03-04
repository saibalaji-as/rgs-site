# 🚀 Quick Steps to Publish to GitHub

## 1️⃣ Create GitHub Repository

Go to: https://github.com/new

- **Name**: `gsamuel-peso-licensing`
- **Description**: `G Samuel & Co - PESO Licensing & Certification Website`
- **Public** or **Private**: Your choice
- **DO NOT** check "Initialize with README"
- Click **Create repository**

## 2️⃣ Copy Your Repository URL

Example: `https://github.com/YOUR-USERNAME/gsamuel-peso-licensing.git`

## 3️⃣ Run These Commands

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: G Samuel & Co PESO Licensing Website"

# Connect to GitHub (replace with YOUR URL)
git remote add origin https://github.com/YOUR-USERNAME/gsamuel-peso-licensing.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## ✅ Done!

Visit your repository URL to see your code on GitHub!

---

## 🔄 To Update Later

```bash
git add .
git commit -m "Your update message"
git push
```

---

## 🚀 Deploy to Production

After pushing to GitHub:

1. **Backend (Render)**:
   - Go to https://render.com
   - New Web Service → Connect GitHub
   - Root Directory: `backend`

2. **Frontend (Netlify)**:
   - Go to https://netlify.com
   - New Site → Connect GitHub
   - Base Directory: `frontend`

See `MONOREPO_DEPLOYMENT.md` for detailed steps!

---

**Need help?** Check `GIT_PUBLISH_GUIDE.md` for detailed instructions.
