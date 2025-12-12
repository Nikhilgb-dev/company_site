# Stelix - Premium AI Services Website

A production-ready **MERN Stack** website for Stelix, a professional AI services company specializing in custom AI agents for business automation.

## 🎯 What's Included

### 🎨 Design System
- **Color Palette:** Deep Space Blue, Electric Neon Cyan, Stellar Purple, and more
- **Typography:** Poppins (headings) + Inter (body)
- **Components:** Pre-built buttons, cards, sections with smooth animations
- **Responsive:** Mobile-first design for all devices
- **Accessibility:** WCAG 2.1 AA compliant color contrasts

### 📄 Pages
1. **Home** - Hero, services preview, process, industries, testimonials
2. **Services** - Detailed breakdown of AI services with integrations
3. **How It Works** - 5-step process with timeline and example journey
4. **Industries** - Use cases for e-commerce, education, healthcare, real estate, agencies, B2B
5. **Pricing** - 3-tier pricing structure with features comparison
6. **About** - Company mission, vision, story, values, team
7. **Contact** - Contact form with validation and database integration

### 🔧 Backend
- **Node.js + Express** - REST API server
- **MongoDB** - Lead capture and storage
- **Contact Form API** - POST `/api/contact` with validation
- **Admin Endpoints** - GET `/api/leads` to view submissions

### ⚛️ Frontend
- **React 18** - Modern component-based UI
- **React Router** - Client-side navigation
- **Tailwind CSS** - Utility-first styling
- **Axios** - API communication
- **Responsive Design** - Works on mobile, tablet, desktop

---

## 📦 Quick Start

### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)

### Installation

```bash
# 1. Install backend dependencies
npm install

# 2. Install frontend dependencies
cd client
npm install
cd ..

# 3. Create .env file
cp .env.example .env
# Edit .env with your MongoDB URI

# 4. Start MongoDB
mongod

# 5. Start backend (from root)
npm run dev

# 6. Start frontend (new terminal, from root)
npm run client
```

Visit `http://localhost:3000` in your browser.

For detailed setup instructions, see **[SETUP-GUIDE.md](./SETUP-GUIDE.md)**

---

## 🗂️ Project Structure

```
stelix-website/
├── server.js                  # Express backend
├── package.json               # Backend dependencies
├── .env.example              # Environment template
│
├── client/                    # React frontend
│   ├── public/
│   ├── src/
│   │   ├── App.js            # Main app + routing
│   │   ├── index.js          # Entry point
│   │   ├── index.css         # Global styles
│   │   ├── components/       # Reusable components
│   │   │   ├── Common.jsx    # Button, Card, Section
│   │   │   ├── Navbar.jsx    # Navigation
│   │   │   └── Footer.jsx    # Footer
│   │   └── pages/            # Page components
│   │       ├── Home.jsx
│   │       ├── Services.jsx
│   │       ├── HowItWorks.jsx
│   │       ├── Industries.jsx
│   │       ├── Pricing.jsx
│   │       ├── About.jsx
│   │       └── Contact.jsx
│   ├── tailwind.config.js    # Tailwind config
│   └── package.json          # React dependencies
│
├── styles/
│   └── colors.css            # CSS variables
├── design-tokens.json        # Design tokens
└── COLOR-PALETTE.md          # Color documentation
```

---

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Space Blue | `#0A1A2F` | Primary backgrounds |
| Electric Neon Cyan | `#14E9E2` | Buttons, highlights |
| Graphite Black | `#121212` | Secondary backgrounds |
| Silver Tech Grey | `#D9D9D9` | Cards, surfaces |
| Stellar Purple | `#7A3CF4` | Accents, hovers |
| Lime Neon Green | `#7DFF80` | Success, status |

---

## 🔌 API Endpoints

### Health Check
```
GET /api/health
```

### Submit Contact Form
```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "company": "Acme Inc.",
  "email": "john@acme.com",
  "phone": "+1234567890",
  "industry": "ecommerce",
  "message": "I want to build an AI customer support agent..."
}
```

### Get All Leads (Admin)
```
GET /api/leads
```

---

## 🚀 Features

✅ **Production-Ready**
- Clean, maintainable code
- Proper error handling
- Input validation
- Security best practices

✅ **Fully Responsive**
- Mobile-first design
- Touch-friendly buttons
- Optimized for all screen sizes

✅ **Smooth Animations**
- Fade-in effects
- Slide-up animations
- Hover transitions
- Glow effects

✅ **Easy to Customize**
- Change colors in one place
- Update company info easily
- Add/remove pages quickly
- Modify content without code changes

✅ **SEO Friendly**
- Semantic HTML
- Meta tags
- Clean URLs
- Fast performance

---

## 📖 Documentation

- **[SETUP-GUIDE.md](./SETUP-GUIDE.md)** - Complete setup and deployment guide
- **[COLOR-PALETTE.md](./COLOR-PALETTE.md)** - Color system documentation
- **[design-tokens.json](./design-tokens.json)** - Design tokens and specs

---

## 🔒 Security

- Input validation on contact form
- MongoDB schema validation
- CORS enabled for safe API calls
- Environment variables for sensitive data
- Ready for HTTPS deployment

---

## 🎯 Customization Examples

### Update Contact Email
Edit `client/src/components/Footer.jsx`:
```jsx
<a href="mailto:your-email@company.com">
  your-email@company.com
</a>
```

### Change Logo
Replace logo file and update `client/src/components/Navbar.jsx`:
```jsx
<img src="/assets/your-logo.png" alt="Logo" />
```

### Update Pricing
Edit `client/src/pages/Pricing.jsx`:
```jsx
const plans = [
  { name: 'Starter', price: '$2,000', ... },
  ...
]
```

---

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd client
vercel
```

### Backend (Heroku)
```bash
heroku create your-app-name
git push heroku main
```

See [SETUP-GUIDE.md](./SETUP-GUIDE.md#-deployment-options) for detailed deployment instructions.

---

## 🛠️ Tech Stack

**Frontend:**
- React 18
- React Router v6
- Tailwind CSS 3
- Axios
- Google Fonts (Poppins, Inter)

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- CORS
- Dotenv

**Tools:**
- Tailwind CSS
- PostCSS
- Autoprefixer

---

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

All components are fully responsive and tested across all breakpoints.

---

## 🤝 Support & Contributing

For questions or improvements:
1. Check [SETUP-GUIDE.md](./SETUP-GUIDE.md)
2. Review code comments
3. Test in different browsers

---

## 📄 License

MIT License - Free to use, modify, and deploy.

---

**Built for Stelix** | Premium AI Services Company
**Version:** 1.0.0 | **Updated:** December 2025
