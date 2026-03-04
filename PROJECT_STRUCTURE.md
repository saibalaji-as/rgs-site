# Project Structure

## 📁 Complete Directory Structure

```
peso-license-website/
├── README.md
├── SETUP_GUIDE.md
├── DEPLOYMENT_GUIDE.md
├── PROJECT_STRUCTURE.md
│
├── frontend/                          # Angular 17+ Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/                 # Core services and guards
│   │   │   │   ├── guards/
│   │   │   │   │   └── auth.guard.ts
│   │   │   │   ├── interceptors/
│   │   │   │   │   └── auth.interceptor.ts
│   │   │   │   └── services/
│   │   │   │       ├── auth.service.ts
│   │   │   │       └── inquiry.service.ts
│   │   │   │
│   │   │   ├── shared/               # Shared components
│   │   │   │   └── components/
│   │   │   │       ├── header/
│   │   │   │       │   └── header.component.ts
│   │   │   │       ├── footer/
│   │   │   │       │   └── footer.component.ts
│   │   │   │       ├── whatsapp-button/
│   │   │   │       │   └── whatsapp-button.component.ts
│   │   │   │       └── lead-form/
│   │   │   │           └── lead-form.component.ts
│   │   │   │
│   │   │   ├── features/             # Feature modules (lazy-loaded)
│   │   │   │   ├── home/
│   │   │   │   │   ├── home.component.ts
│   │   │   │   │   └── home.component.html
│   │   │   │   ├── services/
│   │   │   │   │   └── service-detail.component.ts
│   │   │   │   ├── about/
│   │   │   │   │   └── about.component.ts
│   │   │   │   ├── industries/
│   │   │   │   │   └── industries.component.ts
│   │   │   │   ├── contact/
│   │   │   │   │   └── contact.component.ts
│   │   │   │   └── admin/
│   │   │   │       ├── login/
│   │   │   │       │   └── login.component.ts
│   │   │   │       └── dashboard/
│   │   │   │           └── dashboard.component.ts
│   │   │   │
│   │   │   ├── app.component.ts      # Root component
│   │   │   ├── app.config.ts         # App configuration
│   │   │   └── app.routes.ts         # Route definitions
│   │   │
│   │   ├── environments/
│   │   │   ├── environment.ts        # Development config
│   │   │   └── environment.prod.ts   # Production config
│   │   │
│   │   ├── styles.css                # Global styles with Tailwind
│   │   ├── index.html                # Main HTML file
│   │   └── main.ts                   # Application entry point
│   │
│   ├── angular.json                  # Angular CLI configuration
│   ├── tailwind.config.js            # Tailwind CSS configuration
│   ├── postcss.config.js             # PostCSS configuration
│   ├── tsconfig.json                 # TypeScript configuration
│   ├── tsconfig.app.json             # App-specific TS config
│   ├── package.json                  # Frontend dependencies
│   ├── netlify.toml                  # Netlify deployment config
│   └── .gitignore
│
└── backend/                           # Express.js API
    ├── models/
    │   ├── User.js                   # User model (Admin)
    │   └── Inquiry.js                # Inquiry model
    │
    ├── routes/
    │   ├── auth.routes.js            # Authentication routes
    │   └── inquiry.routes.js         # Inquiry CRUD routes
    │
    ├── middleware/
    │   └── auth.middleware.js        # JWT authentication middleware
    │
    ├── utils/
    │   └── email.js                  # Email service (Nodemailer)
    │
    ├── scripts/
    │   └── createAdmin.js            # Admin user creation script
    │
    ├── server.js                     # Express server entry point
    ├── package.json                  # Backend dependencies
    ├── .env.example                  # Environment variables template
    └── .gitignore
```

## 🎯 Key Features by Module

### Frontend Features

#### Core Module
- **AuthGuard**: Protects admin routes
- **AuthInterceptor**: Adds JWT token to requests
- **AuthService**: Login, logout, token management
- **InquiryService**: CRUD operations for inquiries

#### Shared Components
- **Header**: Sticky navigation with mobile menu
- **Footer**: Site footer with links
- **WhatsApp Button**: Floating WhatsApp CTA
- **Lead Form**: Reusable inquiry form with validation

#### Feature Modules

**Home Page**
- Hero section with gradient background
- Services grid (6 cards)
- Why Choose Us (animated counters)
- Process timeline
- Industries served
- Testimonials slider
- Lead generation form

**Service Detail Pages**
- Dynamic routing (/services/:slug)
- Service description
- Who needs it section
- Documents required
- Application process
- FAQ accordion
- Embedded lead form

**About Page**
- Company overview
- Mission & vision
- Why choose us section

**Industries Page**
- Grid of industries served
- Industry descriptions
- CTA buttons

**Contact Page**
- Contact information
- Google Maps embed
- Contact form

**Admin Panel**
- Login page with JWT authentication
- Dashboard with statistics
- Inquiries table with filters
- Mark as contacted
- Delete inquiries
- Export functionality (future)

### Backend Features

#### Authentication
- JWT-based authentication
- Secure password hashing (bcrypt)
- Token expiration handling
- Protected routes

#### Inquiry Management
- Create inquiry (public)
- List inquiries (protected)
- Filter by service/status
- Mark as contacted
- Delete inquiry
- Email notifications

#### Email Service
- Nodemailer integration
- Inquiry notification emails
- Configurable SMTP
- HTML email templates

## 🎨 Design System

### Color Palette (Lilac Theme)
```css
Primary Lilac: #C8A2C8
Deep Violet: #6A4C93
Soft Lavender: #E6D6F2
White: #FFFFFF
Light Grey: #F7F7FA
Dark Charcoal: #2E2E2E
```

### Typography
- Font Family: Poppins
- Headings: Bold (600-700)
- Body: Regular (400)
- Small Text: Light (300)

### Components
- Cards: Rounded corners, soft shadows
- Buttons: Primary (lilac), Secondary (outlined)
- Forms: Clean inputs with focus states
- Animations: Smooth transitions (300ms)

## 🔌 API Endpoints

### Public Endpoints
```
POST /api/inquiries          # Submit inquiry
```

### Protected Endpoints (Require JWT)
```
POST   /api/auth/login       # Admin login
GET    /api/inquiries        # Get all inquiries
PATCH  /api/inquiries/:id/contacted  # Mark as contacted
DELETE /api/inquiries/:id    # Delete inquiry
```

### Health Check
```
GET /api/health              # Server status
```

## 📦 Dependencies

### Frontend
- @angular/core: ^17.3.0
- @angular/router: ^17.3.0
- @angular/forms: ^17.3.0
- tailwindcss: ^3.4.3
- rxjs: ~7.8.0

### Backend
- express: ^4.18.2
- mongoose: ^8.0.3
- jsonwebtoken: ^9.0.2
- bcryptjs: ^2.4.3
- nodemailer: ^6.9.7
- cors: ^2.8.5
- dotenv: ^16.3.1

## 🚀 Build & Deploy

### Development
```bash
# Frontend
cd frontend && npm start

# Backend
cd backend && npm run dev
```

### Production Build
```bash
# Frontend
cd frontend && npm run build

# Backend
cd backend && npm start
```

### Deployment Targets
- Frontend: Netlify / Vercel
- Backend: Render / Railway
- Database: MongoDB Atlas

## 🔐 Security Features

- JWT authentication
- Password hashing (bcrypt)
- CORS protection
- Input validation
- SQL injection prevention (Mongoose)
- XSS protection
- Environment variable security
- HTTPS enforcement (production)

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
- Touch-friendly UI
- Optimized images
- Fast loading times

## ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus indicators
- Alt text for images
- Color contrast compliance
- Screen reader friendly

## 🧪 Testing Strategy

### Frontend Testing
- Unit tests: Jasmine/Karma
- E2E tests: Cypress (future)
- Component testing

### Backend Testing
- API tests: Jest/Supertest (future)
- Integration tests
- Database tests

## 📈 Performance Optimization

### Frontend
- Lazy loading routes
- Tree shaking
- AOT compilation
- Minification
- CDN delivery

### Backend
- Database indexing
- Query optimization
- Caching (future)
- Compression
- Rate limiting

## 🔄 Future Enhancements

- [ ] Blog section
- [ ] Client testimonials management
- [ ] Document upload functionality
- [ ] Payment gateway integration
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Email templates customization
- [ ] SMS notifications
- [ ] Calendar integration
- [ ] PDF report generation
