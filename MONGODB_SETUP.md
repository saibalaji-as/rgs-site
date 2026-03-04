# MongoDB Setup Guide

## Quick Setup with MongoDB Atlas (Recommended - 5 minutes)

MongoDB Atlas is a free cloud database that's perfect for development and production.

### Step 1: Create Account
1. Go to https://www.mongodb.com/cloud/atlas/register
2. Sign up with Google/GitHub or email
3. Choose the FREE tier (M0 Sandbox)

### Step 2: Create Cluster
1. After login, click "Build a Database"
2. Choose "M0 FREE" tier
3. Select a cloud provider (AWS recommended)
4. Choose a region close to you
5. Click "Create Deployment"

### Step 3: Create Database User
1. You'll see "Security Quickstart"
2. Create a username: `peso_admin`
3. Click "Autogenerate Secure Password" and SAVE IT
4. Click "Create Database User"

### Step 4: Set Network Access
1. Click "Add My Current IP Address"
2. Or click "Allow Access from Anywhere" (0.0.0.0/0) for development
3. Click "Finish and Close"

### Step 5: Get Connection String
1. Click "Connect" on your cluster
2. Choose "Drivers"
3. Select "Node.js" and version "5.5 or later"
4. Copy the connection string, it looks like:
   ```
   mongodb+srv://peso_admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<password>` with your actual password
6. Add database name: `peso-license`
   ```
   mongodb+srv://peso_admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/peso-license?retryWrites=true&w=majority
   ```

### Step 6: Update Backend
1. Open `backend/.env`
2. Replace the MONGODB_URI line with your connection string:
   ```
   MONGODB_URI=mongodb+srv://peso_admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/peso-license?retryWrites=true&w=majority
   ```
3. Save the file

### Step 7: Restart Backend
The backend will automatically reconnect to MongoDB Atlas!

### Step 8: Create Admin User
```bash
cd backend
node scripts/createAdmin.js
```

## ✅ You're Done!

Your application is now fully functional with:
- ✅ MongoDB Atlas (cloud database)
- ✅ Backend API connected
- ✅ Admin user created
- ✅ Ready to accept form submissions

## Test It

1. Go to http://localhost:49386/
2. Fill out the contact form
3. Go to http://localhost:49386/admin/login
4. Login with:
   - Email: admin@pesoconsultants.com
   - Password: Admin@123
5. See your inquiry in the dashboard!

---

## Alternative: Local MongoDB (If you prefer)

If MongoDB installation via Homebrew completes, you can use local MongoDB:

### Start MongoDB
```bash
brew services start mongodb-community
```

### Check Status
```bash
brew services list | grep mongodb
```

### Stop MongoDB
```bash
brew services stop mongodb-community
```

### Use Local Connection
Keep the default in `.env`:
```
MONGODB_URI=mongodb://localhost:27017/peso-license
```

---

## Troubleshooting

### Can't connect to Atlas?
- Check your password is correct (no special characters that need encoding)
- Verify IP whitelist includes your IP or 0.0.0.0/0
- Check connection string format

### Backend still showing error?
- Make sure you saved the `.env` file
- Restart the backend server (it should auto-restart with nodemon)
- Check for typos in the connection string

### Need to encode password?
If your password has special characters, encode them:
- @ becomes %40
- : becomes %3A
- / becomes %2F
- ? becomes %3F
- # becomes %23
- [ becomes %5B
- ] becomes %5D
- % becomes %25

Example:
- Password: `Pass@123#`
- Encoded: `Pass%40123%23`
