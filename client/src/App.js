import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';   // 👈 new import

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import HowItWorks from './pages/HowItWorks';
import Industries from './pages/Industries';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import { AiHeroCarousel } from './pages/AiHero';
import ApplicationMordernization from './pages/ApplicationMordernization';

function App() {
  return (
    <Router basename="/company_site">
      <ScrollToTop />   {/* 👈 always keep this just inside Router */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/ai-automation" element={<AiHeroCarousel />} />
        <Route path="/services/application-modernization" element={<ApplicationMordernization />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
