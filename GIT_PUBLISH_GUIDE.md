# 📤 How to Publish Your Code to GitHub

## Step 1: Check Git Status

First, let's see what files need to be committed:

```bash
git status
```

## Step 2: Initialize Git (If Not Already Done)

If you see "not a git repository", initialize git:

```bash
git init
```

## Step 3: Add All Files

Add all your files to git:

```bash
git add .
```

This adds:
- All frontend files
- All backend files
- Documentation files
- Configuration files

**Note**: `.gitignore` will automatically exclude:
- `node_modules/`
- `.env` files
- Build outputs
- OS files

## Step 4: Commit Your Changes

Create your first commit:

```bash
git commit -m "Initial commit: PESO License Consultant Website"
```

## Step 5: Create GitHub Repository

### Option A: Via GitHub Website (Recommended)

1. Go to https://github.com
2. Click the **"+"** icon (top right) → **"New repository"**
3. Fill in:
   - **Repository name**: `peso-license-website` (or your choice)
   - **Description**: "PESO License & Industrial Compliance Consultant Website - MEAN Stack"
   - **Visibility**: Choose Public or Private
   - **DO NOT** check "Initialize with README" (you already have one)
4. Click **"Create repository"**

### Option B: Via GitHub CLI (If Installed)

```bash
gh repo create peso-license-website --public --source=. --remote=origin
```

## Step 6: Connect to GitHub Repository

After creating the repo on GitHub, you'll see commands. Use these:

```bash
# Add remote repository
git remote add origin https://github.com/YOUR-USERNAME/peso-license-website.git

# Verify remote was added
git remote -v
```

**Replace `YOUR-USERNAME`** with your actual GitHub username!

## Step 7: Rename Branch to 'main' (If Needed)

GitHub uses 'main' as default branch:

```bash
# Check current branch
git branch

# If it's 'master', rename to 'main'
git branch -M main
```

## Step 8: Push to GitHub

Push your code to GitHub:

```bash
git push -u origin main
```

You'll be prompted for credentials:
- **Username**: Your GitHub username
- **Password**: Use a **Personal Access Token** (not your password)

### Creating a Personal Access Token

If you don't have a token:

1. Go to https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name: "PESO Website Deployment"
4. Select scopes:
   - ✅ `repo` (Full control of private repositories)
5. Click **"Generate token"**
6. **COPY THE TOKEN** (you won't see it again!)
7. Use this token as your password when pushing

## Step 9: Verify Upload

1. Go to your GitHub repository URL
2. You should see all your files!
3. Check that `.env` files are NOT visible (they're ignored)

---

## 🎉 Success! Your Code is on GitHub!

Your repository URL will be:
```
https://github.com/YOUR-USERNAME/peso-license-website
```

---

## 📝 Future Updates

After making changes, use these commands:

```bash
# Check what changed
git status

# Add all changes
git add .

# Commit with a message
git commit -m "Description of changes"

# Push to GitHub
git push
```

---

## 🔄 Common Git Commands

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
git checkout -b feature-name
```

### Switch Branches
```bash
git checkout main
```

### Pull Latest Changes
```bash
git pull origin main
```

### Undo Last Commit (Keep Changes)
```bash
git reset --soft HEAD~1
```

---

## 🚨 Important Notes

### Files That Should NOT Be Committed

These are already in `.gitignore`:
- ❌ `node_modules/` - Too large, can be reinstalled
- ❌ `.env` files - Contains secrets
- ❌ `dist/` or `build/` - Generated files
- ❌ `.DS_Store` - Mac OS files

### Files That SHOULD Be Committed

- ✅ All source code (`frontend/src/`, `backend/`)
- ✅ Configuration files (`package.json`, `angular.json`, etc.)
- ✅ Documentation (`.md` files)
- ✅ `.gitignore` file
- ✅ `.env.example` (template without secrets)

---

## 🐛 Troubleshooting

### "Permission denied (publickey)"

Use HTTPS instead of SSH:
```bash
git remote set-url origin https://github.com/YOUR-USERNAME/peso-license-website.git
```

### "Repository not found"

Check the URL is correct:
```bash
git remote -v
```

Update if needed:
```bash
git remote set-url origin https://github.com/YOUR-USERNAME/CORRECT-REPO-NAME.git
```

### "Failed to push some refs"

Pull first, then push:
```bash
git pull origin main --rebase
git push origin main
```

### Large Files Error

If you accidentally committed large files:
```bash
# Remove from git but keep locally
git rm --cached path/to/large/file

# Commit the removal
git commit -m "Remove large file"

# Push
git push
```

---

## 🔐 Security Checklist

Before pushing, verify:

- [ ] `.env` files are in `.gitignore`
- [ ] No passwords or API keys in code
- [ ] MongoDB connection string not hardcoded
- [ ] JWT secret not in source code
- [ ] Email credentials not exposed

Run this to check:
```bash
# Search for potential secrets
grep -r "password" --exclude-dir=node_modules --exclude-dir=.git .
grep -r "mongodb+srv" --exclude-dir=node_modules --exclude-dir=.git .
```

---

## ✅ Quick Checklist

- [ ] Git initialized (`git init`)
- [ ] Files added (`git add .`)
- [ ] Changes committed (`git commit -m "message"`)
- [ ] GitHub repo created
- [ ] Remote added (`git remote add origin URL`)
- [ ] Branch renamed to main (`git branch -M main`)
- [ ] Code pushed (`git push -u origin main`)
- [ ] Verified on GitHub website
- [ ] No sensitive files visible

---

## 🎯 Next Steps

After publishing to GitHub:

1. **Deploy Backend** - See `MONOREPO_DEPLOYMENT.md`
2. **Deploy Frontend** - See `MONOREPO_DEPLOYMENT.md`
3. **Set up CI/CD** - Auto-deploy on push
4. **Add collaborators** - If working in a team

---

**Need Help?** Check GitHub's official guide: https://docs.github.com/en/get-started
