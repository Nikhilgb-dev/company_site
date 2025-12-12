import React from 'react';
import { Button, Card, Container, Section } from '../components/Common';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      description: 'Ideal for new businesses and startups looking to implement digital solutions and automation.',
      price: 'Custom',
      period: '(Based on project scope)',
      features: [
        'Single web or mobile app developed',
        'Starter data analytics dashboard',
        'Basic automation (AI workflow or RPA)',
        'Cloud infrastructure setup',
        '3rd party integrations (up to 2)',
        'Email support',
      ],
      notIncluded: [
        'Enterprise-scale analytics',
        'Advanced automation or multiple flows',
        '24/7 SLA & support',
      ],
      cta: 'Request Quote',
      highlighted: false,
    },
    {
      name: 'Growth',
      description: 'For scaling businesses leveraging advanced data, automation, and robust multi-app solutions.',
      price: 'Custom',
      period: '(Based on needs)',
      features: [
        'Multiple web/mobile apps developed',
        'Advanced data analytics and visualizations',
        'Multi-system process automation (AI & RPA)',
        'Automated marketing & retail media setup',
        'Cloud optimization & scaling',
        'Weekly strategy & review call',
        'Priority support',
      ],
      notIncluded: [
        'Dedicated technical manager',
        'Unlimited custom code/integrations',
      ],
      cta: 'Request Quote',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'For established companies & enterprises seeking full-stack digital transformation, full automation, and ongoing partnership.',
      price: 'Custom',
      period: '(Contact us)',
      features: [
        'Unlimited bespoke web/mobile apps',
        'Enterprise data analytics & reporting',
        'Full RPA & agentic AI workflow automation',
        'Retail media network management',
        'Hybrid/multi-cloud setup & ops',
        'Dedicated account & technical manager',
        '24/7 response support',
        'Quarterly innovation/strategy review',
      ],
      notIncluded: [],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  const faqs = [
    {
      q: 'What\'s included in the implementation timeline?',
      a: 'Discovery, data preparation, agent development, testing, training, and deployment. Additional customizations may extend the timeline.',
    },
    {
      q: 'How is pricing calculated?',
      a: 'Pricing depends on agent complexity, integrations needed, and expected monthly interactions. We provide custom quotes after initial discovery.',
    },
    {
      q: 'Are there long-term contracts?',
      a: 'We offer flexible engagement models. Most clients sign annual agreements with quarterly reviews and optimization opportunities.',
    },
    {
      q: 'What\'s included in support?',
      a: 'All plans include monitoring, optimization, and support. Growth and Enterprise include dedicated support channels with faster response times.',
    },
    {
      q: 'Can we upgrade our plan later?',
      a: 'Absolutely. Many clients start with Starter and upgrade as they add more agents or increase interaction volume.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="gradient-hero min-h-screen flex items-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Simple, Transparent <span className="text-stelix-cyan">Pricing</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-2xl">
            Choose the plan that fits your business. All include implementation and ongoing support.
          </p>
        </div>
      </Section>

      {/* Pricing Cards */}
      <Section className="bg-stelix-deep">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col relative ${
                plan.highlighted
                  ? 'border-stelix-cyan/50 scale-105 md:scale-100 ring-2 ring-stelix-cyan'
                  : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-stelix-cyan text-stelix-deep px-4 py-1 rounded-full text-sm font-heading font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-8 pt-4">
                <h3 className="text-2xl font-heading font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                <div>
                  <p className="text-4xl font-heading font-bold text-stelix-cyan">
                    {plan.price}
                  </p>
                  <p className="text-gray-400 text-sm">{plan.period}</p>
                </div>
              </div>

              <div className="flex-grow mb-8">
                <h4 className="font-heading font-bold text-white mb-4">Includes:</h4>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <span className="text-stelix-lime text-lg mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.notIncluded.length > 0 && (
                  <>
                    <h4 className="font-heading font-bold text-gray-400 mb-4">Not included:</h4>
                    <ul className="space-y-2">
                      {plan.notIncluded.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-500">
                          <span className="text-lg mt-0.5">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <Button
                variant={plan.highlighted ? 'primary' : 'secondary'}
                size="lg"
                className="w-full"
                asChild
              >
                <Link to="/contact">{plan.cta}</Link>
              </Button>
            </Card>
          ))}
        </div>

        {/* Note */}
        <div className="bg-stelix-graphite/30 rounded-lg p-8 text-center">
          <p className="text-gray-300">
            💡 <span className="font-heading font-bold text-white">All prices are custom quotes</span> based on your specific
            needs. We provide a free consultation to discuss your requirements and provide an accurate quote.
          </p>
        </div>
      </Section>

      {/* What's Included */}
      <Section className="bg-stelix-graphite/50">
        <h2 className="text-4xl font-heading font-bold text-white mb-12 text-center">
          What Every Plan Includes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: '🔧',
              title: 'Custom Implementation',
              desc: 'Tailored setup designed for your workflows and integrations.',
            },
            {
              icon: '📊',
              title: 'Performance Analytics',
              desc: 'Track ROI, agent performance, and key business metrics.',
            },
            {
              icon: '🔄',
              title: 'Continuous Optimization',
              desc: 'Regular updates and improvements based on real-world usage.',
            },
            {
              icon: '👥',
              title: 'Team Training',
              desc: 'Comprehensive documentation and training for your team.',
            },
            {
              icon: '🔒',
              title: 'Security & Compliance',
              desc: 'Enterprise-grade security with GDPR and CCPA compliance.',
            },
            {
              icon: '🚀',
              title: 'Scalable Infrastructure',
              desc: 'Grow from thousands to millions of interactions seamlessly.',
            },
            {
              icon: '🤝',
              title: 'Expert Consultation',
              desc: 'Access to AI and automation experts throughout your journey.',
            },
            {
              icon: '📱',
              title: 'Multi-Channel Support',
              desc: 'Deploy across web, mobile, chat, email, WhatsApp, and more.',
            },
          ].map((item, index) => (
            <Card key={index} className="text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-heading font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-stelix-deep">
        <h2 className="text-4xl font-heading font-bold text-white mb-12 text-center">
          Pricing FAQs
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <h3 className="text-lg font-heading font-bold text-stelix-cyan mb-3">
                {faq.q}
              </h3>
              <p className="text-gray-300">{faq.a}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-stelix-graphite/50 text-center">
        <h2 className="text-4xl font-heading font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          Schedule a free consultation to discuss your needs and get a custom quote
        </p>
        <Button variant="primary" size="lg" asChild>
          <Link to="/contact">Book Your Free Consultation</Link>
        </Button>
      </Section>
    </div>
  );
};

export default Pricing;
