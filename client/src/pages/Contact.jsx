import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, Container, Section } from '../components/Common';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const industries = [
    { value: 'ecommerce', label: 'E-commerce & Retail' },
    { value: 'education', label: 'Education & EdTech' },
    { value: 'healthcare', label: 'Healthcare & Clinics' },
    { value: 'realestate', label: 'Real Estate' },
    { value: 'agencies', label: 'Agencies & Services' },
    { value: 'other', label: 'Other' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/contact', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        industry: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(
        err.response?.data?.error || 'Failed to submit form. Please try again later.'
      );
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="gradient-hero min-h-screen flex items-center">
        <div className="animate-slide-up max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Let's Build Something <span className="text-stelix-cyan">Amazing</span>
          </h1>
          <p className="text-2xl text-gray-300">
            Tell us what you want to build or automate – web or mobile applications, data & AI solutions, automation workflows, or cloud setup.
          </p>
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="bg-stelix-deep">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card>
              <div className="flex items-start gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="font-heading font-bold text-white mb-2">Email</h3>
                  <a
                    href="mailto:hello@stelix.io"
                    className="text-stelix-cyan hover:text-stelix-purple transition"
                  >
                    hello@stelix.io
                  </a>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="font-heading font-bold text-white mb-2">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-stelix-cyan hover:text-stelix-purple transition"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="font-heading font-bold text-white mb-2">Location</h3>
                  <p className="text-gray-300">San Francisco, CA</p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="text-3xl">⏱️</div>
                <div>
                  <h3 className="font-heading font-bold text-white mb-2">Response Time</h3>
                  <p className="text-gray-300">We respond within 2 business hours</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-3xl font-heading font-bold text-white mb-6">
                Tell Us About Your Project
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-stelix-lime/20 border border-stelix-lime rounded-lg">
                  <p className="text-stelix-lime font-heading font-bold">
                    ✓ Thank you! We've received your message and will be in touch shortly.
                  </p>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg">
                  <p className="text-red-400 font-heading font-bold">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-heading font-bold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-stelix-graphite/50 border border-stelix-cyan/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-stelix-cyan transition"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-white font-heading font-bold mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full bg-stelix-graphite/50 border border-stelix-cyan/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-stelix-cyan transition"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-white font-heading font-bold mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-stelix-graphite/50 border border-stelix-cyan/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-stelix-cyan transition"
                      placeholder="john@acme.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white font-heading font-bold mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-stelix-graphite/50 border border-stelix-cyan/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-stelix-cyan transition"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="industry" className="block text-white font-heading font-bold mb-2">
                    Industry *
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="w-full bg-stelix-graphite/50 border border-stelix-cyan/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-stelix-cyan transition"
                  >
                    <option value="">Select your industry</option>
                    {industries.map((ind) => (
                      <option key={ind.value} value={ind.value} className="bg-stelix-deep">
                        {ind.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-heading font-bold mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-stelix-graphite/50 border border-stelix-cyan/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-stelix-cyan transition resize-none"
                    placeholder="Describe the AI agent you want to build, your current challenges, and what you hope to achieve..."
                  />
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                  type="submit"
                >
                  {loading ? 'Submitting...' : 'Send Message'}
                </Button>

                <p className="text-gray-400 text-sm text-center">
                  * Required fields. We'll respond within 2 business hours.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-stelix-graphite/50">
        <h2 className="text-4xl font-heading font-bold text-white mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: 'How long does the initial consultation take?',
              a: 'Typically 30-45 minutes. We discuss your business goals, current challenges, and how AI automation can help.',
            },
            {
              q: 'Do you charge for consultations?',
              a: 'No, initial consultations are completely free. We want to understand your needs before discussing investment.',
            },
            {
              q: 'What information should I have before our call?',
              a: 'It helps to have information about your current processes, customer volume, and business metrics you want to improve.',
            },
            {
              q: 'How will you follow up with me?',
              a: 'We send a follow-up email within 24 hours with a custom proposal, timeline estimate, and next steps.',
            },
          ].map((faq, index) => (
            <Card key={index}>
              <h3 className="text-lg font-heading font-bold text-stelix-cyan mb-3">{faq.q}</h3>
              <p className="text-gray-300">{faq.a}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Contact;
