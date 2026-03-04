# 📤 How to Publish Your Project to GitHub

## Step 1: Create GitHub Repository

### Option A: Via GitHub Website
1. Go to https://github.com
2. Click the **"+"** icon (top right) → **"New repository"**
3. Fill in details:
   - **Repository name**: `gsamuel-peso-licensing` (or your choice)
   - **Description**: `G Samuel & Co - PESO Licensing & Certification Website`
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README (we already have one)
4. Click **"Create repository"**
5. **Copy the repository URL** (e.g., `https://github.com/YOUR-USERNAME/gsamuel-peso-licensing.git`)

### Option B: Via GitHub CLI (if installed)
```bash
gh repo create gsamuel-peso-licensing --public --source=. --remote=origin
```

---

## Step 2: Initialize Git (if not already done)

```bash
# Check if git is initialized
git status

# If not initialized, run:
git init
```

---

## Step 3: Add All Files

```bash
# Add all files to staging
git add .

# Check what will be committed
git status
```

---

## Step 4: Create First Commit

```bash
git commit -m "Initial commit: G Samuel & Co PESO Licensing Website

- Angular 17+ frontend with lilac theme
- Express.js backend with MongoDB
- Admin panel with JWT authentication
- Lead generation forms
- Email notifications
- Responsive design
- Complete PESO licensing solution"
```

---

## Step 5: Connect to GitHub

```bash
# Add remote repository (replace with YOUR repository URL)
git remote add origin https://github.com/YOUR-USERNAME/gsamuel-peso-licensing.git

# Verify remote was added
git remote -v
```

---

## Step 6: Push to GitHub

```bash
# Push to main branch
git push -u origin main

# If you get an error about 'master' branch, rename it:
git branch -M main
git push -u origin main
```

---

## Step 7: Verify on GitHub

1. Go to your repository URL
2. Refresh the page
3. You should see all your files!

---

## 🔄 Making Updates Later

After making changes to your code:

```bash
# 1. Check what changed
git status

# 2. Add changed files
git add .

# 3. Commit with a message
git commit -m "Update: Description of what you changed"

# 4. Push to GitHub
git push
```

---

## 📋 Common Git Commands

### Check Status
```bash
git status
```

### View Commit History
```bash
git log --oneline
```

### Create a New Branch
```bash
git checkout -b feature/new-feature
```

### Switch Branches
```bash
git checkout main
```

### Pull Latest Changes
```bash
git pull origin main
```

### Undo Last Commit (keep changes)
```bash
git reset --soft HEAD~1
```

---

## 🚫 What NOT to Commit

Your `.gitignore` file already excludes:
- ✅ `node_modules/` - Dependencies (too large)
- ✅ `.env` - Environment variables (contains secrets)
- ✅ `dist/` - Build outputs
- ✅ `.DS_Store` - Mac system files

**Never commit:**
- Passwords
- API keys
- Database credentials
- Personal information

---

## 🔐 Protecting Sensitive Data

### If you accidentally committed `.env`:

```bash
# Remove from git but keep local file
git rm --cached backend/.env
git commit -m "Remove .env from tracking"
git push

# Add to .gitignore if not already there
echo "backend/.env" >> .gitignore
git add .gitignore
git commit -m "Update .gitignore"
git push
```

---

## 🌿 Branch Strategy (Optional)

### For Team Development:

```bash
# Create development branch
git checkout -b development

# Create feature branches
git checkout -b feature/admin-dashboard
git checkout -b feature/email-notifications

# Merge back to development
git checkout development
git merge feature/admin-dashboard

# Merge to main for production
git checkout main
git merge development
```

---

## 📱 GitHub Desktop (Alternative)

If you prefer a GUI:

1. Download **GitHub Desktop**: https://desktop.github.com
2. Open GitHub Desktop
3. **File** → **Add Local Repository**
4. Select your project folder
5. Click **Publish repository**
6. Choose public/private
7. Click **Publish**

---

## 🔗 Connect to Netlify & Render

After pushing to GitHub:

### Netlify (Frontend)
1. Go to https://netlify.com
2. **New site from Git**
3. Choose **GitHub**
4. Select your repository
5. Configure (see MONOREPO_DEPLOYMENT.md)

### Render (Backend)
1. Go to https://render.com
2. **New** → **Web Service**
3. Connect GitHub repository
4. Configure (see MONOREPO_DEPLOYMENT.md)

---

## 🆘 Troubleshooting

### "Permission denied (publickey)"
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your-email@example.com"

# Add to GitHub: Settings → SSH and GPG keys → New SSH key
cat ~/.ssh/id_ed25519.pub
```

### "Repository not found"
```bash
# Check remote URL
git remote -v

# Update if wrong
git remote set-url origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
```

### "Failed to push"
```bash
# Pull first, then push
git pull origin main --rebase
git push origin main
```

### Large files error
```bash
# Remove large files from history
git filter-branch --tree-filter 'rm -rf node_modules' HEAD
```

---

## ✅ Checklist Before Pushing

- [ ] `.gitignore` is configured
- [ ] No `.env` files in git
- [ ] No `node_modules/` folders
- [ ] README.md is updated
- [ ] Code is tested locally
- [ ] Commit message is descriptive

---

## 🎯 Quick Reference

```bash
# First time setup
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR-REPO-URL
git push -u origin main

# Regular updates
git add .
git commit -m "Your message"
git push

# Check status
git status

# View history
git log --oneline --graph
```

---

## 📚 Learn More

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

**Ready to push?** Follow the steps above and your code will be on GitHub in minutes! 🚀
