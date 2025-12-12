import React from 'react';
import { Button, Card, Container, Section } from '../components/Common';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '🌐',
      title: 'Web Application Development',
      description: 'Custom web applications engineered for scale, security, and long-term growth.',
      includes: [
        'Full-stack web development',
        'UI/UX design and prototyping',
        'RESTful & GraphQL APIs',
        'Enterprise-grade security',
      ],
    },
    {
      id: 2,
      icon: '📱',
      title: 'Mobile Application Development',
      description: 'iOS and Android app solutions to engage your customers or empower your team anywhere.',
      includes: [
        'Native & cross-platform builds',
        'App store publishing guidance',
        'Push notifications & analytics',
        'Device integration & support',
      ],
    },
    {
      id: 3,
      icon: '📊',
      title: 'Data Science',
      description: 'Enable predictive and prescriptive analytics with advanced data modeling and ML.',
      includes: [
        'Data cleaning & preparation',
        'Machine learning models',
        'Recommendation systems',
        'Deployment & monitoring',
      ],
    },
    {
      id: 4,
      icon: '📈',
      title: 'Data Analytics',
      description: 'Modern dashboards and real-time reporting for intelligent business strategy.',
      includes: [
        'Interactive BI dashboards',
        'Automated data pipelines',
        'Custom KPI tracking',
        'Visualization & insight delivery',
      ],
    },
    {
      id: 5,
      icon: '🤖',
      title: 'AI Agentic Workflow',
      description: 'Automate decisions and business flows with advanced, agent-driven AI solutions.',
      includes: [
        'End-to-end AI workflow automation',
        'NLP, vision, and custom LLM agents',
        'Integrations with web/mobile/RPA',
        'Continuous improvement/monitoring',
      ],
    },
    {
      id: 6,
      icon: '🔎',
      title: 'SEO',
      description: 'Drive traffic, leads, and conversions with advanced SEO and search marketing.',
      includes: [
        'Technical website audits',
        'On-page & content optimization',
        'Link-building strategies',
        'SEO analytics & reporting',
      ],
    },
    {
      id: 7,
      icon: '📢',
      title: 'Retail Media Network (Digital Marketing)',
      description: 'Enterprise retail media and digital ads to grow your ecommerce success.',
      includes: [
        'Retail media setup & activation',
        'Audience targeting & segmentation',
        'Campaign analytics & optimization',
        'Multi-channel ad delivery',
      ],
    },
    {
      id: 8,
      icon: '🤖',
      title: 'Robotic Process Automation (RPA)',
      description: 'Streamline operations and boost productivity through automated workflows.',
      includes: [
        'Process analysis & mapping',
        'Bots for repetitive tasks',
        'ERP/CRM and legacy integrations',
        'Compliance logging & audit',
      ],
    },
    {
      id: 9,
      icon: '☁️',
      title: 'Cloud',
      description: 'Accelerate innovation with robust, flexible, and secure cloud platforms.',
      includes: [
        'Cloud migration & strategy',
        'DevOps & automation pipelines',
        'Managed hosting & monitoring',
        'Hybrid/multi-cloud deployment',
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="gradient-hero min-h-screen flex items-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Our <span className="text-stelix-cyan">Technology & AI Services</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-2xl">
            End-to-end technology, data, and AI services — tailored to transform your business with strength and innovation.
          </p>
        </div>
      </Section>

      {/* Services Details */}
      <Section className="bg-stelix-deep">
        {services.map((service, index) => (
          <div key={service.id} className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {index % 2 === 0 ? (
                <>
                  <div>
                    <div className="text-6xl mb-6">{service.icon}</div>
                    <h2 className="text-4xl font-heading font-bold text-white mb-6">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">{service.description}</p>
                    <div className="mb-8">
                      <h3 className="text-xl font-heading font-bold text-stelix-cyan mb-4">Includes</h3>
                      <ul className="space-y-3">
                        {service.includes.map((inc, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300">
                            <span className="text-stelix-lime text-xl mt-1">✓</span>
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="primary" size="lg" asChild>
                      <Link to="/contact">Start Project</Link>
                    </Button>
                  </div>
                  <Card className="h-80 bg-gradient-accent/10 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <p className="text-4xl mb-4">{service.icon}</p>
                      <p>Service Preview</p>
                    </div>
                  </Card>
                </>
              ) : (
                <>
                  <Card className="h-80 bg-gradient-accent/10 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <p className="text-4xl mb-4">{service.icon}</p>
                      <p>Service Preview</p>
                    </div>
                  </Card>
                  <div>
                    <div className="text-6xl mb-6">{service.icon}</div>
                    <h2 className="text-4xl font-heading font-bold text-white mb-6">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">{service.description}</p>
                    <div className="mb-8">
                      <h3 className="text-xl font-heading font-bold text-stelix-cyan mb-4">Includes</h3>
                      <ul className="space-y-3">
                        {service.includes.map((inc, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300">
                            <span className="text-stelix-lime text-xl mt-1">✓</span>
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="primary" size="lg" asChild>
                      <Link to="/contact">Start Project</Link>
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </Section>

      {/* FAQ */}
      <Section className="bg-stelix-graphite/50">
        <h2 className="text-4xl font-heading font-bold text-white mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: 'How long does it take to deploy an AI agent?',
              a: 'Typically 4-8 weeks depending on complexity and integration requirements. We follow a phased approach: Discovery (1 week), Development (2-4 weeks), Testing (1-2 weeks), Deployment (1 week).',
            },
            {
              q: 'What data do you need to build our AI agent?',
              a: 'We need samples of customer interactions, documentation, FAQs, and system integration details. All data is processed securely with encryption and compliance to GDPR/CCPA standards.',
            },
            {
              q: 'Can the AI agents be customized for our specific workflows?',
              a: 'Absolutely. Every AI agent is custom-built for your unique business needs. We integrate with your existing systems and train the AI on your specific data and processes.',
            },
            {
              q: 'What happens if the AI needs to escalate to a human?',
              a: 'Our agents are designed with smart escalation logic. Complex issues are automatically routed to your human team with full context, ensuring seamless handoff.',
            },
            {
              q: 'Do you provide ongoing support and updates?',
              a: 'Yes, we provide 24/7 monitoring, regular optimization, and continuous improvement. Our team reviews performance metrics monthly and makes enhancements based on real usage data.',
            },
            {
              q: 'What\'s the pricing structure?',
              a: 'Pricing is based on complexity and usage volume. We offer tiered packages from Starter (custom quote) to Enterprise (custom). View our Pricing page for more details.',
            },
          ].map((faq, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-lg font-heading font-bold text-stelix-cyan mb-4">{faq.q}</h3>
              <p className="text-gray-300">{faq.a}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-stelix-deep text-center">
        <h2 className="text-4xl font-heading font-bold text-white mb-6">
          Ready to Automate Your Business?
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Let's discuss which AI service is right for your organization
        </p>
        <Button variant="primary" size="lg" asChild>
          <Link to="/contact">Start a Free Consultation</Link>
        </Button>
      </Section>
    </div>
  );
};

export default Services;
