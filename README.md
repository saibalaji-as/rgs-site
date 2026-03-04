# PESO License Consultant Website

A modern, enterprise-ready corporate website for PESO License & Industrial Compliance Consulting built with MEAN stack.

![Lilac Theme](https://img.shields.io/badge/Theme-Lilac-C8A2C8)
![Angular](https://img.shields.io/badge/Angular-17+-red)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)

## ✨ Features

- 🎨 Beautiful lilac-themed responsive design
- 📱 Mobile-first approach with smooth animations
- 📝 Lead generation forms with email notifications
- 🔐 Secure admin panel with JWT authentication
- 📊 Inquiry management dashboard
- 🚀 SEO optimized
- ⚡ Fast loading with lazy-loaded routes
- 💬 WhatsApp integration
- 📧 Email notifications via Nodemailer

## 🛠️ Tech Stack

### Frontend
- **Angular 17+** (Standalone Components)
- **TailwindCSS** (Custom lilac theme)
- **RxJS** for reactive programming
- **Angular Router** with lazy loading

### Backend
- **Node.js + Express.js**
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Nodemailer** for email notifications
- **bcryptjs** for password hashing

### Database
- **MongoDB Atlas** (Cloud)

## 🎨 Color Palette (Lilac Corporate Theme)

- **Primary Lilac**: `#C8A2C8`
- **Deep Violet**: `#6A4C93`
- **Soft Lavender**: `#E6D6F2`
- **White**: `#FFFFFF`
- **Light Grey**: `#F7F7FA`
- **Dark Charcoal**: `#2E2E2E`

## 📁 Project Structure

```
peso-license-website/
├── frontend/                 # Angular 17+ Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/        # Services, guards, interceptors
│   │   │   ├── shared/      # Shared components
│   │   │   └── features/    # Feature modules (lazy-loaded)
│   │   └── environments/    # Environment configs
│   └── package.json
│
├── backend/                  # Express.js API
│   ├── models/              # MongoDB models
│   ├── routes/              # API routes
│   ├── middleware/          # Auth middleware
│   ├── utils/               # Email service
│   ├── scripts/             # Admin creation script
│   └── package.json
│
├── SETUP_GUIDE.md           # Detailed setup instructions
├── MONGODB_SETUP.md         # MongoDB connection guide
├── MONOREPO_DEPLOYMENT.md   # Deployment guide
└── README.md                # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- MongoDB Atlas account (free tier)

### 1. Clone Repository
```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO
```

### 2. Setup Backend
```bash
cd backend
npm install

# Create .env file
cp .env.example .env
# Edit .env with your MongoDB URI and other configs

# Create admin user
node scripts/createAdmin.js

# Start server
npm run dev
```

Backend runs on: `http://localhost:5001`

### 3. Setup Frontend
```bash
cd frontend
npm install

# Start development server
npm start
```

Frontend runs on: `http://localhost:4200` (or similar)

### 4. Access Application

- **Website**: http://localhost:4200
- **Admin Panel**: http://localhost:4200/admin/login
- **Default Credentials**:
  - Email: `admin@pesoconsultants.com`
  - Password: `Admin@123`

## 📚 Documentation

- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Complete setup instructions
- **[MONGODB_SETUP.md](MONGODB_SETUP.md)** - MongoDB Atlas setup (5 minutes)
- **[MONOREPO_DEPLOYMENT.md](MONOREPO_DEPLOYMENT.md)** - Deploy to Netlify & Render
- **[DEPLOYMENT_QUICK_REFERENCE.md](DEPLOYMENT_QUICK_REFERENCE.md)** - Quick deployment checklist
- **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)** - Detailed architecture
- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Production deployment

## 🌐 Deployment

### Deploy from Single Repository

Both frontend and backend can be deployed from the same GitHub repository!

**Backend → Render:**
- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `npm start`

**Frontend → Netlify:**
- Base Directory: `frontend`
- Build Command: `npm run build`
- Publish Directory: `frontend/dist/peso-license-frontend/browser`

See **[MONOREPO_DEPLOYMENT.md](MONOREPO_DEPLOYMENT.md)** for step-by-step instructions.

## 🎯 Pages

1. **Home** - Hero, services, process, testimonials, contact form
2. **Services** - Dynamic service detail pages
3. **About** - Company information and mission
4. **Industries** - Industries served
5. **Contact** - Contact information and form
6. **Admin Login** - Secure authentication
7. **Admin Dashboard** - Inquiry management

## 🔐 Admin Features

- View all inquiries
- Filter by service type and status
- Mark inquiries as contacted
- Delete inquiries
- Statistics dashboard
- Secure JWT authentication

## 🎨 Customization

### Change Colors
Edit `frontend/tailwind.config.js`:
```javascript
colors: {
  lilac: {
    DEFAULT: '#C8A2C8',
    light: '#E6D6F2',
    dark: '#6A4C93',
  }
}
```

### Update Content
- **Services**: `frontend/src/app/features/services/service-detail.component.ts`
- **Home**: `frontend/src/app/features/home/home.component.ts`
- **Contact**: `frontend/src/app/features/contact/contact.component.ts`

### Configure Email
Update `backend/.env`:
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 🧪 Testing

### Test Contact Form
1. Go to homepage
2. Fill and submit contact form
3. Check admin dashboard for inquiry

### Test Admin Panel
1. Go to `/admin/login`
2. Login with default credentials
3. View inquiries dashboard

## 🐛 Troubleshooting

### Backend won't start
- Check MongoDB connection string in `.env`
- Verify MongoDB Atlas IP whitelist
- Ensure port 5001 is available

### Frontend won't start
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear Angular cache: `rm -rf .angular`

### Forms not submitting
- Check backend is running
- Verify API URL in `frontend/src/environments/environment.ts`
- Check browser console for errors

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues or questions:
- Check documentation files
- Review error logs
- Open an issue on GitHub

## 🎉 Acknowledgments

- Angular Team for the amazing framework
- TailwindCSS for the utility-first CSS
- MongoDB for the database solution
- All open-source contributors

---

**Built with ❤️ using MEAN Stack**
