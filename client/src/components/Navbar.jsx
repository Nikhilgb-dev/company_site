import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from './Common';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navItems = [
    { name: 'Services', href: '/services' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Industries', href: '/industries' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { label: 'AI + AUTOMATION', href: '/services/ai-automation' },
    { label: 'APPLICATION MODERNIZATION', href: '/services/application-modernization' },
    { label: 'CLOUD + INFRASTRUCTURE', href: '/services#cloud-infrastructure' },
    { label: 'DATA + ANALYTICS', href: '/services#data-analytics' },
    { label: 'MANAGED SUPPORT', href: '/services#managed-support' },
    { label: 'TALENT ON DEMAND', href: '/services#talent-on-demand' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-sky-600/95 backdrop-blur-sm border-b border-white/10">
      <Container className="flex items-center justify-between h-20">

        {/* Logo (only image, no company text) */}
        <Link to="/" className="flex items-center gap-3" aria-label="Home">
          <img
            src={logo}
            alt="Aeternafortis Logo"
            className="w-56 sm:w-64 md:w-72 h-auto object-contain transition-transform duration-200"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            if (item.name === 'Services') {
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to={item.href}
                    className="text-white/90 hover:text-white transition duration-200 font-medium px-1 py-1 inline-flex items-center gap-1"
                  >
                    {item.name}
                    <span className="text-xs opacity-80">v</span>
                  </Link>

                  <div
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className={`absolute left-0 top-full pt-2 w-72 rounded-xl bg-sky-700/95 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-200 ${
                      servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="py-2">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.label}
                          to={service.href}
                          className="block px-4 py-2 text-xs font-semibold tracking-wide text-white/90 hover:text-white hover:bg-white/10 transition"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                to={item.href}
                className="text-white/90 hover:text-white transition duration-200 font-medium px-1 py-1"
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Button (desktop) */}
        <div className="hidden md:block">
          <Button variant="primary" size="md" asChild>
            <Link to="/contact">Book a Demo</Link>
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          {/* CTA as icon to save space on very small screens */}
          <Link to="/contact" className="hidden sm:inline-block">
            <Button variant="primary" size="sm">Demo</Button>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen((s) => !s)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
            className="p-2 rounded-md bg-white/6 hover:bg-white/12 transition"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile panel: slides down and does not overlap the logo */}
      <div
        className={`md:hidden overflow-hidden transition-max-height duration-300 ease-in-out bg-sky-600/98 border-t border-white/6 ${mobileOpen ? 'max-h-screen' : 'max-h-0'}`}
        style={{ willChange: 'max-height' }}
      >
        <Container className="py-4">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              if (item.name === 'Services') {
                return (
                  <div key={item.name} className="flex flex-col gap-2">
                    <Link
                      to={item.href}
                      className="block text-white/95 font-medium py-3 px-2 rounded-md hover:bg-white/6 transition"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <div className="ml-3 pl-2 border-l border-white/12 flex flex-col gap-1 pb-2">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.label}
                          to={service.href}
                          className="text-xs font-semibold tracking-wide text-white/80 hover:text-white transition"
                          onClick={() => setMobileOpen(false)}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-white/95 font-medium py-3 px-2 rounded-md hover:bg-white/6 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="pt-2">
              <Button variant="primary" size="md" className="w-full">
                <Link to="/contact" className="w-full block text-center">Book a Demo</Link>
              </Button>
            </div>

            <div className="pt-3 border-t border-white/6 mt-3">
              <p className="text-white/70 text-sm">Tailored solutions for your industry.</p>
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
}
