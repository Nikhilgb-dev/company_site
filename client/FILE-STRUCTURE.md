# 📁 Complete File Structure Guide

## Project Root: `e:\company_site\`

```
stelix-website/
│
├── 📄 ROOT FILES
├── server.js                 ← Express backend server (REST API)
├── package.json              ← Backend dependencies
├── .env.example              ← Environment variables template
├── .gitignore               ← Git ignore rules
│
├── 📚 DOCUMENTATION FILES
├── README.md                 ← Project overview & quick start
├── SETUP-GUIDE.md           ← Detailed setup & deployment instructions
├── SETUP-IMPLEMENTATION.md  ← Implementation checklist
├── COLOR-PALETTE.md         ← Color system documentation
│
├── 🎨 DESIGN SYSTEM FILES
├── design-tokens.json       ← Design tokens specification
├── styles/
│   └── colors.css          ← Global CSS variables and utilities
│
├── 🔧 SETUP SCRIPTS
├── setup.sh                 ← macOS/Linux quick setup
├── setup.bat                ← Windows quick setup
│
└── ⚛️  CLIENT (React Frontend)
    └── client/
        │
        ├── 📄 CONFIG FILES
        ├── package.json          ← React dependencies
        ├── tailwind.config.js    ← Tailwind CSS configuration
        ├── postcss.config.js     ← PostCSS configuration
        │
        ├── 📂 PUBLIC
        └── public/
            ├── index.html        ← HTML entry point
            └── favicon.ico       ← (optional) favicon
        │
        └── 📂 SOURCE CODE
            └── src/
                │
                ├── index.js          ← React app entry point
                ├── index.css         ← Global styles (Tailwind + animations)
                ├── App.js            ← Main app with routing
                │
                ├── 🧩 COMPONENTS
                └── components/
                    ├── Common.jsx    ← Reusable: Button, Card, Container, Section
                    ├── Navbar.jsx    ← Navigation bar
                    └── Footer.jsx    ← Footer with links
                │
                └── 📄 PAGES
                    └── pages/
                        ├── Home.jsx           ← Hero, services, process, industries
                        ├── Services.jsx       ← Service details & FAQ
                        ├── HowItWorks.jsx    ← 5-step process with timeline
                        ├── Industries.jsx    ← Industry-specific solutions
                        ├── Pricing.jsx       ← 3-tier pricing plans
                        ├── About.jsx         ← Company mission & values
                        └── Contact.jsx       ← Contact form & info
```

---

## 📊 File Count Summary

| Category | Count | Files |
|----------|-------|-------|
| Root Config | 4 | server.js, package.json, .env.example, .gitignore |
| Documentation | 4 | README.md, SETUP-GUIDE.md, IMPLEMENTATION-CHECKLIST.md, COLOR-PALETTE.md |
| Design System | 2 | colors.css, design-tokens.json |
| Setup Scripts | 2 | setup.sh, setup.bat |
| React Config | 3 | package.json, tailwind.config.js, postcss.config.js |
| HTML | 1 | index.html |
| React Core | 2 | index.js, index.css, App.js |
| Components | 3 | Common.jsx, Navbar.jsx, Footer.jsx |
| Pages | 7 | Home.jsx, Services.jsx, HowItWorks.jsx, Industries.jsx, Pricing.jsx, About.jsx, Contact.jsx |
| **TOTAL** | **28+** | - |

---

## 🔗 File Dependencies & Relationships

```
App.js (Main Router)
├── Navbar.jsx (in all pages)
│   ├── Link to all pages
│   └── Links to Common.jsx (Button, Container)
│
├── pages/Home.jsx
│   ├── Button (Common.jsx)
│   ├── Card (Common.jsx)
│   ├── Container (Common.jsx)
│   ├── Section (Common.jsx)
│   └── Link (React Router)
│
├── pages/Services.jsx
│   └── [Same component structure]
│
├── pages/HowItWorks.jsx
│   └── [Same component structure]
│
├── pages/Industries.jsx
│   └── [Same component structure]
│
├── pages/Pricing.jsx
│   └── [Same component structure]
│
├── pages/About.jsx
│   └── [Same component structure]
│
├── pages/Contact.jsx
│   ├── Button (Common.jsx)
│   ├── Card (Common.jsx)
│   ├── Container (Common.jsx)
│   ├── axios (API calls)
│   └── Form validation
│
└── Footer.jsx (in all pages)
    ├── Link (React Router)
    └── Links to all pages
```

---

## 🎨 Styling Hierarchy

```
index.html
├── Link to Google Fonts (Poppins, Inter)
└── <div id="root">

index.css
├── @tailwind directives
├── Global styles
├── Animations (@keyframes)
└── Utility classes

tailwind.config.js
├── Stelix color palette
├── Font family extensions
├── Shadow extensions
└── Gradient definitions

components/*.jsx
├── Inline className (Tailwind utilities)
├── Responsive breakpoints
└── Hover/active states
```

---

## 🔌 API Integration Points

```
Backend (server.js)
├── GET /api/health
├── POST /api/contact
│   ├── Validation
│   ├── MongoDB save
│   └── Response
└── GET /api/leads

Frontend (pages/Contact.jsx)
├── axios.post('/api/contact', formData)
│   ├── Error handling
│   ├── Loading state
│   ├── Success message
│   └── Form reset
```

---

## 📦 Dependencies Breakdown

### Backend Dependencies
```json
{
  "express": "^4.18.2",
  "mongoose": "^7.5.0",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1",
  "nodemailer": "^6.9.5"
}
```

### Frontend Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.16.0",
  "axios": "^1.5.0",
  "tailwindcss": "^3.3.3",
  "postcss": "^8.4.31",
  "autoprefixer": "^10.4.16"
}
```

---

## 🌳 Component Tree

```
<App>
  <Router>
    <Navbar />
    <Routes>
      <Route "/" element={<Home />} />
      <Route "/services" element={<Services />} />
      <Route "/how-it-works" element={<HowItWorks />} />
      <Route "/industries" element={<Industries />} />
      <Route "/pricing" element={<Pricing />} />
      <Route "/about" element={<About />} />
      <Route "/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
</App>
```

---

## 📝 Code Organization Patterns

### Page Components Pattern
Each page follows this structure:
```jsx
import React from 'react';
import { Button, Card, Container, Section } from '../components/Common';
import { Link } from 'react-router-dom';

const PageName = () => {
  // Data
  const data = [];

  // Render
  return (
    <div>
      <Section>Hero Section</Section>
      <Section>Content Section</Section>
      <Section>CTA Section</Section>
    </div>
  );
};

export default PageName;
```

### Component Export Pattern
```jsx
export const Button = ({ variant = 'primary', size = 'md', ...props }) => {
  // Implementation
};

export const Card = ({ children, ...props }) => {
  // Implementation
};

export { Button, Card, Container, Section };
```

---

## 🎯 Key File Purposes

| File | Purpose |
|------|---------|
| `server.js` | Node/Express server, API endpoints, MongoDB setup |
| `App.js` | React routing, page navigation |
| `Common.jsx` | Reusable UI components (Button, Card, Section) |
| `Navbar.jsx` | Navigation menu with responsive mobile menu |
| `Footer.jsx` | Footer links, contact info, social icons |
| `Home.jsx` | Landing page with hero, services, process |
| `Services.jsx` | Detailed service descriptions |
| `HowItWorks.jsx` | 5-step process visualization |
| `Industries.jsx` | Industry-specific use cases |
| `Pricing.jsx` | Pricing tiers and comparison |
| `About.jsx` | Company mission, values, story |
| `Contact.jsx` | Contact form with validation |
| `colors.css` | CSS variables for colors and utilities |
| `tailwind.config.js` | Tailwind configuration for colors |
| `design-tokens.json` | Design specifications |

---

## 🚀 Running the Application

### File Access Order

1. **HTML Entry Point**
   - `client/public/index.html` (loads Google Fonts)

2. **React Bootstrap**
   - `client/src/index.js` (mounts React)
   - `client/src/App.js` (loads routing)

3. **Styling**
   - `client/src/index.css` (global styles)
   - `client/tailwind.config.js` (Tailwind config)

4. **Components**
   - All components load as needed via routing

5. **Backend**
   - `server.js` starts Express server
   - Listens on `/api/*` endpoints

---

## 📋 Template for New Pages

To add a new page:

1. Create `client/src/pages/NewPage.jsx`
2. Copy this template:
```jsx
import React from 'react';
import { Button, Card, Container, Section } from '../components/Common';
import { Link } from 'react-router-dom';

const NewPage = () => {
  return (
    <div className="pt-20">
      <Section className="gradient-hero min-h-screen flex items-center">
        <h1>Your Page Title</h1>
      </Section>
      <Section className="bg-stelix-deep">
        {/* Content */}
      </Section>
    </div>
  );
};

export default NewPage;
```

3. Add route to `App.js`:
```jsx
<Route path="/new-page" element={<NewPage />} />
```

4. Add link to `Navbar.jsx`

---

**Last Updated:** December 2025 | **Total Files:** 28+ | **Status:** ✅ Production Ready
