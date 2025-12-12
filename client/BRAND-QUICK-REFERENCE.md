# 🎨 Stelix Brand & Design Quick Reference

## 🎯 Brand Essence

**Name:** Stelix
**Tagline:** "Where strength shapes technological excellence"
**Industry:** Premium AI Services
**Positioning:** Enterprise-grade AI automation for growing businesses

---

## 🌈 Color Palette Quick Reference

### Primary Colors
```
Deep Space Blue        Electric Neon Cyan
#0A1A2F               #14E9E2
rgb(10, 26, 47)       rgb(20, 233, 226)
🎨 Hero backgrounds   🎨 Buttons & highlights
```

### Secondary Colors
```
Graphite Black        Silver Tech Grey
#121212               #D9D9D9
rgb(18, 18, 18)       rgb(217, 217, 217)
🎨 Footers & text    🎨 Cards & surfaces
```

### Accent Colors
```
Stellar Purple        Lime Neon Green
#7A3CF4               #7DFF80
rgb(122, 60, 244)     rgb(125, 255, 128)
🎨 Hovers & CTAs     🎨 Success & status
```

---

## 📝 Typography

### Heading Font: Poppins
- **Bold Weight:** 700 (button text, accents)
- **Sizes:** 48px (h1), 36px (h2), 24px (h3)
- **Usage:** Main headings, CTAs, emphasis
- **Character:** Bold, geometric, modern, confident

### Body Font: Inter
- **Regular Weight:** 400 (body text)
- **Medium Weight:** 500 (labels, secondary text)
- **Semi-Bold Weight:** 600 (small headings)
- **Sizes:** 16px (body), 18px (large), 14px (small)
- **Usage:** All body text, descriptions, UI labels
- **Character:** Clean, highly readable, professional

---

## 🎨 Component Colors

### Buttons

**Primary Button**
```
Background: Electric Neon Cyan (#14E9E2)
Text: Deep Space Blue (#0A1A2F)
Hover: Stellar Purple (#7A3CF4)
Hover Text: White
Shadow: 0 8px 30px rgba(122, 60, 244, 0.2)
```

**Secondary Button**
```
Background: Transparent
Border: 2px solid White (with opacity)
Text: White
Hover: Cyan background + text
```

**Dark Button**
```
Background: Deep Space Blue (#0A1A2F)
Text: White
Hover: Graphite Black (#121212)
```

### Cards
```
Background: Graphite Black (#121212) with 30% opacity
Border: 1px Cyan with 20% opacity
Hover Border: Cyan with 40% opacity
Hover Shadow: 0 12px 24px rgba(20, 233, 226, 0.15)
Border Radius: 16px (rounded-2xl)
Padding: 2rem
```

### Text Colors
```
Primary Text: White (#FFFFFF)
Secondary Text: Light Gray (#B3B3B3)
Muted Text: Gray (#808080)
Links: Cyan (#14E9E2)
Link Hover: Purple (#7A3CF4)
```

---

## 🎬 Animations

### Fade In
```css
animation: fadeIn 0.6s ease-out
```

### Slide Up
```css
animation: slideInUp 0.6s ease-out
from: translateY(30px) opacity 0
to: translateY(0) opacity 1
```

### Glow Effect
```css
animation: glow 2s ease-in-out infinite
box-shadow: 0 0 15px rgba(20, 233, 226, 0.6)
```

### Hover Scale
```css
transition: all 0.3s ease
:hover { scale: 1.05; }
```

---

## 📐 Spacing System

**Base Unit:** 8px (0.5rem in Tailwind)

```
xs: 4px (0.25rem)
sm: 8px (0.5rem)
md: 16px (1rem)
lg: 24px (1.5rem)
xl: 32px (2rem)
2xl: 48px (3rem)
3xl: 64px (4rem)
```

### Common Patterns
- **Button padding:** 12px 20px (md horizontal, sm vertical)
- **Card padding:** 32px (2rem)
- **Section padding:** 80px vertical, 24px horizontal
- **Element gap:** 16px (md), 24px (lg)

---

## 📱 Responsive Breakpoints

```
Mobile:  < 640px   (sm) - Single column
Tablet:  640-1024px (md, lg) - 2 columns
Desktop: > 1024px  (xl) - 3+ columns
```

### Tailwind Prefixes
```
(none)  = Mobile first
sm:     = 640px+
md:     = 768px+
lg:     = 1024px+
xl:     = 1280px+
```

---

## 🔲 Component Specifications

### Button
```
Height: 40px (md), 44px (lg)
Min Width: 120px
Border Radius: 12px (rounded-lg)
Font Weight: 600-700
Transition: 150ms ease
```

### Card
```
Border Radius: 16px (rounded-2xl)
Padding: 32px (2rem)
Min Height: 200px
Max Width: 350px (on grids)
Box Shadow: 0 2px 8px rgba(0,0,0,0.08)
Hover Shadow: 0 12px 24px rgba(0,0,0,0.12)
```

### Input/Form
```
Height: 44px
Border Radius: 8px (rounded-lg)
Padding: 12px 16px
Border: 1px Cyan 20% opacity
Focus Border: Cyan 100%
Focus Shadow: 0 0 0 3px rgba(20,233,226,0.1)
Font Size: 16px
```

### Navbar
```
Height: 80px (h-20)
Position: Fixed, top-0, z-50
Backdrop: Blur with 95% opacity
Border Bottom: Cyan 20% opacity
```

### Section
```
Padding: 80px vertical, 24px horizontal
Min Height: 100vh (for hero)
Max Width: 1280px (container)
Backgrounds: Alternate dark/light
```

---

## 🌐 Web Safe Font Stack

```css
/* Fallback if Google Fonts fail */
font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

---

## ♿ Accessibility

### Color Contrast
```
White (#FFF) on Deep Space: 17.5:1 (AAA) ✓
White (#FFF) on Graphite: 16.35:1 (AAA) ✓
Black (#000) on Silver: 8.59:1 (AAA) ✓
Cyan on Deep Space: 4.25:1 (AA) ✓
```

### Guidelines
✓ Buttons minimum 44×44px for touch
✓ Text minimum 14px size
✓ Line height minimum 1.5
✓ Focus indicators visible
✓ Semantic HTML structure
✓ Alt text for images
✓ Color not only indicator

---

## 🎨 CSS Variables (in index.css)

```css
/* Colors */
--stelix-deep-space: #0A1A2F;
--stelix-cyan: #14E9E2;
--stelix-graphite: #121212;
--stelix-silver: #D9D9D9;
--stelix-purple: #7A3CF4;
--stelix-lime: #7DFF80;

/* Text */
--text-primary: #FFFFFF;
--text-secondary: #B3B3B3;
--text-muted: #808080;

/* Backgrounds */
--bg-primary: #0A1A2F;
--bg-secondary: #121212;
--bg-tertiary: #081726;

/* Effects */
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
--shadow-lg: 0 8px 30px rgba(0, 0, 0, 0.16);
```

---

## 🎯 Design Principles

1. **Strength** - Bold colors, confident typography
2. **Premium** - Generous spacing, high quality
3. **Modern** - Smooth animations, clean lines
4. **Trustworthy** - High contrast, clear hierarchy
5. **Minimal** - Only necessary elements
6. **Consistent** - Same patterns throughout
7. **Accessible** - High contrast, semantic HTML

---

## 📋 Brand Voice & Tone

- **Professional** - Not casual or playful
- **Confident** - "We know what we're doing"
- **Trustworthy** - Reliable, stable, proven
- **Forward-thinking** - Modern, innovative, future-focused
- **Helpful** - Customer-centric, solving real problems
- **Direct** - Clear benefits, no jargon (or explain jargon)

---

## 🎬 Page Hierarchy

1. **Homepage** - Best design, most polished
2. **Services** - Secondary importance
3. **How It Works** - Educational
4. **Industries** - Reference
5. **Pricing** - Action-oriented
6. **About** - Trust-building
7. **Contact** - Conversion focus

---

## 📊 Content Structure

**Hero Section**
- Bold headline (5-7 words)
- Subheading (1-2 lines)
- 2 CTA buttons
- Background: Gradient or image

**Content Section**
- Headline (3-5 words)
- 2-3 paragraph description
- Visual (image, icon, or animation)
- Optional list of benefits

**CTA Section**
- Question or statement
- 1-2 button options
- Minimal distraction

---

## 🚀 Optimization Tips

### Performance
- Use Tailwind utilities (no custom CSS if possible)
- Lazy load images
- Optimize images (WebP format)
- Minify CSS/JS
- Cache static assets

### SEO
- Semantic HTML tags
- Meta descriptions
- Header hierarchy (h1 > h2 > h3)
- Alt text for images
- Internal linking

### Conversion
- Clear CTAs (not "Submit", use "Get Started")
- Progress indicators (step 1 of 3)
- Social proof (testimonials, logos)
- Trust signals (security, privacy)
- Limited form fields

---

## 🎓 Design System Files

- **colors.css** - CSS variables
- **tailwind.config.js** - Tailwind configuration
- **design-tokens.json** - Design specifications
- **COLOR-PALETTE.md** - Full documentation

---

## 🔧 Commonly Used Tailwind Classes

```
Colors
- bg-stelix-cyan, bg-stelix-deep, bg-stelix-purple
- text-stelix-cyan, text-white, text-gray-300
- border-stelix-cyan

Sizing
- w-full, w-1/2, max-w-7xl
- h-80, min-h-screen, px-4, py-8

Layout
- grid, grid-cols-1, md:grid-cols-2, lg:grid-cols-3
- flex, items-center, justify-between, gap-8

Effects
- rounded-lg, rounded-2xl
- shadow-lg, shadow-glow-cyan
- hover:scale-105, transition

Responsive
- hidden, md:flex, lg:block
- text-base, md:text-lg, lg:text-2xl
- px-4, md:px-6, lg:px-8
```

---

## 📝 Copy Guidelines

**Headlines**
- Action-oriented ("Automate Your...", "Build Your...")
- Benefit-focused ("70% Cost Reduction")
- Specific numbers/results

**CTAs**
- Action verbs ("Get Started", "Book a Demo", "Learn More")
- Clear benefit ("Start Free Trial", "See How")
- Urgency optional ("Get Started Today")

**Body Copy**
- Short sentences (< 20 words)
- Active voice
- Concrete benefits
- Remove jargon
- Use questions to engage

---

**Last Updated:** December 2025
**Version:** 1.0.0
**Status:** Ready for Use ✅
