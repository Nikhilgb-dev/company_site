import React from 'react';
import { Button, Card, Container, Section } from '../components/Common';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      title: 'Strength',
      description: 'We engineer robust solutions that empower your business with reliability and resilience—your technology backbone.',
      icon: '💪',
    },
    {
      title: 'Excellence',
      description: 'Our work meets the highest standards of quality, from UX and security to infrastructure and automation.',
      icon: '🏆',
    },
    {
      title: 'Reliability',
      description: 'Stelix delivers consistent results and ongoing support, so your business runs with certainty and control.',
      icon: '🛡️',
    },
    {
      title: 'Innovation',
      description: 'Constantly advancing—from data science to mobile, cloud, and AI—we future-proof your business with cutting-edge services.',
      icon: '🚀',
    },
    {
      title: 'Partnership',
      description: 'From discovery to launch and beyond, we work as an extension of your team to achieve your biggest ambitions.',
      icon: '🤝',
    },
  ];

  const stats = [
    { number: '50+', label: 'AI Agents Deployed' },
    { number: '100M+', label: 'Interactions Handled' },
    { number: '200%', label: 'Avg. ROI in 6 Months' },
    { number: '98%', label: 'Customer Satisfaction' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="gradient-hero min-h-screen flex items-center">
        <div className="animate-slide-up max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            About <span className="text-stelix-cyan">Stelix</span>
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Where strength shapes technological excellence
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Stelix is a company where strength, reliability, and technological excellence meet. We specialize in engineering powerful digital foundations for our clients—including full-stack web and mobile apps, data science and analytics, AI-driven workflows, RPA, and secure cloud solutions.
          </p>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-stelix-deep">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <h2 className="text-3xl font-heading font-bold text-stelix-cyan mb-4">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              To empower organizations of all sizes with robust engineering, advanced data, AI, and automation workflows, so they can achieve digital transformation, reach new markets, and grow with confidence.
            </p>
          </Card>
          <Card>
            <h2 className="text-3xl font-heading font-bold text-stelix-cyan mb-4">Our Vision</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              A world where every company—from startups to global enterprises—has access to premium technology, analytics, and cloud infrastructure that enables them to thrive.
            </p>
          </Card>
        </div>
      </Section>

      {/* Our Story */}
      <Section className="bg-stelix-graphite/50">
        <h2 className="text-4xl font-heading font-bold text-white mb-12 text-center">
          Our Story
        </h2>
        <div className="max-w-3xl mx-auto space-y-8 text-gray-300 leading-relaxed">
          <p>
            Stelix was founded by a team of engineers and strategists who saw that most businesses lacked a reliable technology partner to help them build, grow, and automate. We bring decades of experience in web/mobile development, process automation, enterprise analytics, and cloud systems—so clients can focus on what matters most.
          </p>
          <p>
            Our commitment: harness industry best practices and next-gen tools in everything we do. From rapid prototyping for startups to multi-cloud managed services for the enterprise, Stelix builds resilient foundations for digital success.
          </p>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-stelix-lime text-2xl">✓</span>
              Delivered 100+ digital solutions across five industries
            </li>
            <li className="flex items-start gap-3">
              <span className="text-stelix-lime text-2xl">✓</span>
              Automated thousands of hours of manual work for clients using RPA and AI
            </li>
            <li className="flex items-start gap-3">
              <span className="text-stelix-lime text-2xl">✓</span>
              Enabled secure, scalable cloud migration and management
            </li>
            <li className="flex items-start gap-3">
              <span className="text-stelix-lime text-2xl">✓</span>
              Built next-gen analytics and data science pipelines for intelligent business growth
            </li>
          </ul>
          <p>
            Stelix is proud to stand as a trusted, long-term technology & AI partner for businesses aiming high.
          </p>
        </div>
      </Section>

      {/* Stats */}
      <Section className="bg-stelix-deep">
        <h2 className="text-4xl font-heading font-bold text-white mb-12 text-center">
          By the Numbers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <p className="text-5xl font-heading font-bold text-stelix-cyan mb-3">{stat.number}</p>
              <p className="text-lg text-gray-300 font-heading">{stat.label}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-stelix-graphite/50">
        <h2 className="text-4xl font-heading font-bold text-white mb-12 text-center">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-heading font-bold text-stelix-cyan mb-3">{value.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Choose Stelix */}
      <Section className="bg-stelix-deep">
        <h2 className="text-4xl font-heading font-bold text-white mb-12 text-center">
          Why Choose Stelix?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Proven Track Record',
              desc: 'We have successfully deployed 50+ AI agents with 98% customer satisfaction rates.',
            },
            {
              title: 'End-to-End Partnership',
              desc: 'From discovery to deployment to ongoing optimization, we partner with you every step.',
            },
            {
              title: 'Industry Expertise',
              desc: 'Deep understanding of e-commerce, healthcare, education, real estate, and service industries.',
            },
            {
              title: 'Custom Solutions',
              desc: 'No cookie-cutter approach. Every AI agent is built specifically for your business.',
            },
            {
              title: 'Transparent Pricing',
              desc: 'Clear pricing structure with no surprises. Flexible engagement models that scale with you.',
            },
            {
              title: 'Enterprise Security',
              desc: 'GDPR, CCPA, and HIPAA compliant. Your data security is our top priority.',
            },
          ].map((item, index) => (
            <Card key={index}>
              <h3 className="text-xl font-heading font-bold text-stelix-cyan mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-stelix-graphite/50 text-center">
        <h2 className="text-4xl font-heading font-bold text-white mb-6">
          Ready to Partner With Stelix?
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          Let's discuss how we can bring AI-powered automation to your business
        </p>
        <Button variant="primary" size="lg" asChild>
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </Section>
    </div>
  );
};

export default About;
