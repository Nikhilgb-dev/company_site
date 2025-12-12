# Stelix MERN Stack Website - Setup & Deployment Guide

## 📋 Overview

This is a complete **MERN stack** (MongoDB, Express, React, Node.js) website for Stelix, a professional AI services company.

**Project Structure:**
```
stelix-website/
├── server.js              # Express backend server
├── package.json           # Backend dependencies
├── .env.example          # Environment variables template
├── client/               # React frontend
│   ├── public/
│   │   └── index.html    # HTML entry point
│   ├── src/
│   │   ├── index.js      # React entry point
│   │   ├── index.css     # Global styles
│   │   ├── App.js        # Main app with routing
│   │   ├── components/   # Reusable components
│   │   │   ├── Common.jsx    # Button, Card, Container, Section
│   │   │   ├── Navbar.jsx    # Navigation bar
│   │   │   └── Footer.jsx    # Footer component
│   │   └── pages/        # Page components
│   │       ├── Home.jsx
│   │       ├── Services.jsx
│   │       ├── HowItWorks.jsx
│   │       ├── Industries.jsx
│   │       ├── Pricing.jsx
│   │       ├── About.jsx
│   │       └── Contact.jsx
│   ├── package.json      # React dependencies
│   ├── tailwind.config.js    # Tailwind CSS config
│   └── postcss.config.js     # PostCSS config
├── styles/
│   └── colors.css        # Global color system
├── design-tokens.json    # Design tokens spec
└── COLOR-PALETTE.md      # Color palette documentation
```

---

## 🚀 Getting Started

### Prerequisites

You need to have installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (local or MongoDB Atlas cloud) - [Setup](https://www.mongodb.com/docs/manual/installation/)
- **Git** (optional)

### Step 1: Clone/Download the Project

```bash
# If using git:
git clone <your-repo-url>
cd stelix-website

# If using file explorer:
# Just navigate to the project directory
```

### Step 2: Install Backend Dependencies

```bash
# From the root directory (stelix-website/)
npm install
```

This installs: `express`, `mongoose`, `cors`, `dotenv`, `nodemailer`, and `nodemon`.

### Step 3: Set Up Environment Variables

Create a `.env` file in the root directory (copy from `.env.example`):

```bash
# Copy the example file
cp .env.example .env
```

Edit `.env` with your configuration:

```env
# Server Port
PORT=5000

# MongoDB Configuration
# Option 1: Local MongoDB
MONGODB_URI=mongodb://localhost:27017/stelix

# Option 2: MongoDB Atlas (Cloud)
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/stelix

# Email Configuration (Optional - for future email notifications)
# SMTP_HOST=smtp.gmail.com
# SMTP_PORT=587
# SMTP_USER=your-email@gmail.com
# SMTP_PASS=your-app-password
# NOTIFY_EMAIL=hello@stelix.io
```

### Step 4: Install Frontend Dependencies

```bash
cd client
npm install
```

This installs React, React Router, Axios, Tailwind CSS, and related dependencies.

### Step 5: Run MongoDB (Local Setup)

If using **local MongoDB**:

```bash
# Windows:
mongod

# macOS/Linux:
mongod
```

If using **MongoDB Atlas**:
- Create a cluster at [mongodb.com/atlas](https://mongodb.com/atlas)
- Get your connection string and add it to `.env`

### Step 6: Run the Backend

```bash
# From the root directory
npm run dev
```

You should see:
```
✅ MongoDB connected successfully
🚀 Stelix backend server running on http://localhost:5000
```

### Step 7: Run the Frontend (New Terminal)

```bash
# From the root directory
npm run client

# Or manually:
cd client
npm start
```

React will open at `http://localhost:3000`

---

## 🌐 Accessing the Website

Once both backend and frontend are running:

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000/api/

### Available Pages:

- **Home:** `/`
- **Services:** `/services`
- **How It Works:** `/how-it-works`
- **Industries:** `/industries`
- **Pricing:** `/pricing`
- **About:** `/about`
- **Contact:** `/contact`

### Test Contact Form:

1. Navigate to `/contact`
2. Fill out the form
3. Submit
4. Check backend console for confirmation
5. Lead is saved to MongoDB in `leads` collection

---

## 🛠️ Backend API Endpoints

### Health Check
```
GET /api/health
Response: { status: 'Backend is running ✅' }
```

### Submit Contact Form
```
POST /api/contact
Body: {
  name: string (required),
  company: string (required),
  email: string (required),
  phone: string (required),
  industry: string (required),
  message: string (required)
}
Response: {
  success: true,
  message: 'Thank you for reaching out! We will contact you shortly.',
  leadId: string
}
```

### Get All Leads (Admin)
```
GET /api/leads
Response: {
  success: true,
  count: number,
  data: [ { _id, name, company, email, phone, industry, message, createdAt } ]
}
```

---

## 📦 Project Scripts

### Backend Scripts (from root)
```bash
npm start        # Run backend (production mode)
npm run dev      # Run backend with auto-reload (development)
npm run client   # Start React frontend
npm run build    # Build React for production
npm run install-all  # Install both backend and frontend deps
```

### Frontend Scripts (from client/)
```bash
npm start        # Start development server
npm run build    # Build for production
npm test         # Run tests
```

---

## 🎨 Styling & Customization

### Color Scheme

All colors are defined in Tailwind config and CSS variables:

**Primary Colors:**
- Deep Space Blue: `#0A1A2F` (primary backgrounds)
- Electric Neon Cyan: `#14E9E2` (buttons, highlights)
- Graphite Black: `#121212` (secondary backgrounds)
- Silver Tech Grey: `#D9D9D9` (cards, surfaces)
- Stellar Purple: `#7A3CF4` (accents, hovers)
- Lime Neon Green: `#7DFF80` (success, status)

**Using in components:**
```jsx
// With Tailwind:
<div className="bg-stelix-cyan text-stelix-deep">Button</div>

// With CSS variables:
<div style={{ color: 'var(--stelix-cyan)' }}>Text</div>
```

### Fonts

Configured in Tailwind:
- **Heading Font:** Poppins (bold, geometric, modern)
- **Body Font:** Inter (clean, readable, sans-serif)

Load from Google Fonts in `client/public/index.html`.

### Responsive Design

All components use Tailwind's responsive breakpoints:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid
</div>
```

---

## 🔒 Security & Production Setup

### Before Deploying to Production:

1. **Environment Variables:**
   - Use strong MongoDB passwords
   - Never commit `.env` to git
   - Use environment-specific secrets

2. **CORS Configuration:**
   ```js
   // Update in server.js for your domain:
   app.use(cors({ origin: 'https://yourdomain.com' }));
   ```

3. **Rate Limiting:**
   ```bash
   npm install express-rate-limit
   ```
   Add rate limiting to contact endpoint to prevent abuse.

4. **Input Validation:**
   - Already implemented in backend for contact form
   - Consider adding validation library like `joi` for stricter checks

5. **HTTPS:**
   - Use SSL/TLS certificate when deploying
   - Redirect HTTP to HTTPS

6. **API Authentication:**
   - Add authentication to `/api/leads` endpoint
   - Consider JWT tokens for admin access

---

## 📊 Database Schema

### Leads Collection

```javascript
{
  _id: ObjectId,
  name: String,
  company: String,
  email: String,
  phone: String,
  industry: String (enum: ['ecommerce', 'education', 'healthcare', 'realestate', 'agencies', 'other']),
  message: String,
  source: String (default: 'website'),
  createdAt: Date,
  updatedAt: Date
}
```

### Querying Leads (from database)

```javascript
// Using MongoDB Compass or mongosh:
db.leads.find({})
db.leads.findOne({ email: 'user@example.com' })
db.leads.deleteOne({ _id: ObjectId('...') })
```

---

## 🚀 Deployment Options

### Option 1: Deploy Frontend to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# From client/ directory:
cd client
vercel
```

### Option 2: Deploy Backend to Heroku

```bash
# Install Heroku CLI
npm install -g heroku

# From root directory:
heroku login
heroku create your-app-name
git push heroku main
```

### Option 3: Deploy Both to AWS/DigitalOcean/Render

- Use services like AWS EC2, DigitalOcean App Platform, or Render
- Follow their guides for deploying Node.js apps
- Use MongoDB Atlas for cloud database

### Option 4: Docker Deployment

Create `Dockerfile` in root:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

WORKDIR /app/client
RUN npm install && npm run build

WORKDIR /app
EXPOSE 5000

CMD ["node", "server.js"]
```

---

## 🐛 Troubleshooting

### "Cannot find module 'express'"
```bash
# Reinstall dependencies:
npm install
```

### "MongoDB connection failed"
- Check if MongoDB is running
- Verify MONGODB_URI in `.env`
- Check MongoDB Atlas firewall rules

### "React won't start"
```bash
cd client
rm -rf node_modules
npm install
npm start
```

### "Port 3000 or 5000 already in use"
```bash
# Change port in .env:
PORT=5001

# Or kill process on port:
# Windows: netstat -ano | findstr :3000
# macOS/Linux: lsof -i :3000
```

### "CORS errors when submitting form"
- Ensure backend is running on correct port
- Check `proxy` in `client/package.json` points to backend
- In production, update CORS origin in `server.js`

---

## 📝 Customization Guide

### Changing Company Info

1. **Logo:** Replace with your logo at `client/src/assets/logo.png`
   ```jsx
   // In Navbar.jsx:
   <img src="/assets/logo.png" alt="Logo" />
   ```

2. **Contact Info:** Update in `components/Footer.jsx` and `pages/Contact.jsx`
   ```jsx
   hello@stelix.io → your-email@company.com
   +1 (234) 567-890 → your-phone
   ```

3. **Pricing:** Update in `pages/Pricing.jsx`
   ```jsx
   const plans = [
     { name: 'Starter', price: 'your-price', ... }
   ]
   ```

4. **Testimonials:** Update in `pages/Home.jsx`
   ```jsx
   const testimonials = [
     { quote: 'Your quote...', author: 'Name', company: 'Co.' }
   ]
   ```

### Adding New Pages

1. Create component in `client/src/pages/NewPage.jsx`
2. Add route in `client/src/App.js`:
   ```jsx
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add navigation link in `components/Navbar.jsx`

### Changing Colors

Update in `client/tailwind.config.js`:
```js
colors: {
  stelix: {
    'deep': '#YOUR-COLOR',
    'cyan': '#YOUR-COLOR',
    // ...
  }
}
```

---

## 🤝 Support

For issues or questions:
- Check troubleshooting section above
- Review API endpoints documentation
- Consult Tailwind CSS docs: [tailwindcss.com](https://tailwindcss.com/)
- React docs: [react.dev](https://react.dev)
- MongoDB docs: [mongodb.com/docs](https://mongodb.com/docs)

---

## 📄 License

MIT License - Free to use and modify for your business.

---

**Last Updated:** December 2025
**Version:** 1.0.0
