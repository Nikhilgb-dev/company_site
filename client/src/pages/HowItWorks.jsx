import React from 'react';
import { Button, Card, Container, Section } from '../components/Common';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Discovery & Strategy',
      description: 'We conduct in-depth discussions to understand your business model, pain points, and goals. We identify the highest-impact opportunities for AI automation.',
      details: [
        'Business process analysis',
        'Current workflow documentation',
        'Success metrics definition',
        'AI opportunity assessment',
      ],
      duration: '1-2 weeks',
    },
    {
      number: 2,
      title: 'Data & Setup',
      description: 'We prepare and organize your data, set up secure integrations with your existing systems, and establish the foundation for AI training.',
      details: [
        'Data collection and cleaning',
        'System integration setup',
        'API configuration',
        'Security audit and compliance check',
      ],
      duration: '2-3 weeks',
    },
    {
      number: 3,
      title: 'Design & Integration',
      description: 'Our AI engineers design and build your custom agent, training it on your data to ensure it understands your unique business requirements.',
      details: [
        'AI model customization',
        'Business logic implementation',
        'Integration testing',
        'Performance optimization',
      ],
      duration: '3-5 weeks',
    },
    {
      number: 4,
      title: 'Testing & Training',
      description: 'We rigorously test the AI agent under real-world scenarios, refining responses and improving accuracy. We also train your team on using and managing the system.',
      details: [
        'Comprehensive quality assurance',
        'Real-world scenario testing',
        'Team training & documentation',
        'Accuracy tuning & optimization',
      ],
      duration: '2-3 weeks',
    },
    {
      number: 5,
      title: 'Launch & Optimization',
      description: 'We deploy your AI agent to production and continuously monitor, optimize, and improve performance based on real-world usage patterns.',
      details: [
        'Production deployment',
        ' 24/7 monitoring setup',
        'Performance analytics dashboard',
        'Monthly optimization reviews',
      ],
      duration: 'Ongoing',
    },
  ];

  const timeline = {
    start: 'First consultation',
    demo: '4 weeks',
    production: '8-10 weeks',
    optimization: 'Ongoing',
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="gradient-hero min-h-screen flex items-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            How We Build Your <span className="text-stelix-cyan">AI Agent</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-2xl">
            A proven 5-step process from concept to deployment
          </p>
        </div>
      </Section>

      {/* Process Overview */}
      <Section className="bg-stelix-deep">
        <h2 className="text-4xl font-heading font-bold text-white mb-12 text-center">
          Our Proven Implementation Process
        </h2>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {index % 2 === 0 ? (
                  <>
                    <Card className="flex flex-col justify-center">
                      <div className="w-16 h-16 bg-stelix-cyan text-stelix-deep rounded-2xl flex items-center justify-center font-heading font-bold text-3xl mb-6">
                        {step.number}
                      </div>
                      <h3 className="text-3xl font-heading font-bold text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-300 mb-6">{step.description}</p>

                      <div className="mb-6">
                        <h4 className="font-heading font-bold text-stelix-cyan mb-3">Key Activities:</h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-300">
                              <span className="text-stelix-lime mt-1">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-stelix-cyan font-heading font-bold">
                        Timeline: {step.duration}
                      </p>
                    </Card>

                    <div className="flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">⚙️</div>
                        <p className="text-gray-400">Step {step.number} Visualization</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-center order-last lg:order-first">
                      <div className="text-center">
                        <div className="text-6xl mb-4">⚙️</div>
                        <p className="text-gray-400">Step {step.number} Visualization</p>
                      </div>
                    </div>

                    <Card className="flex flex-col justify-center">
                      <div className="w-16 h-16 bg-stelix-cyan text-stelix-deep rounded-2xl flex items-center justify-center font-heading font-bold text-3xl mb-6">
                        {step.number}
                      </div>
                      <h3 className="text-3xl font-heading font-bold text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-300 mb-6">{step.description}</p>

                      <div className="mb-6">
                        <h4 className="font-heading font-bold text-stelix-cyan mb-3">Key Activities:</h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-300">
                              <span className="text-stelix-lime mt-1">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-stelix-cyan font-heading font-bold">
                        Timeline: {step.duration}
                      </p>
                    </Card>
                  </>
                )}
              </div>

              {index < steps.length - 1 && (
                <div className="flex justify-center my-8">
                  <div className="w-1 h-12 bg-stelix-cyan/30"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline Summary */}
      <Section className="bg-stelix-graphite/50">
        <h2 className="text-4xl font-heading font-bold text-white mb-12 text-center">
          Timeline at a Glance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Initial Consultation', value: 'Day 1', icon: '📞' },
            { label: 'To Working Demo', value: '4-5 weeks', icon: '🤖' },
            { label: 'To Production', value: '8-10 weeks', icon: '🚀' },
            { label: 'Ongoing Support', value: 'Lifetime', icon: '💪' },
          ].map((item, index) => (
            <Card key={index} className="text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <p className="text-gray-400 mb-2">{item.label}</p>
              <p className="text-2xl font-heading font-bold text-stelix-cyan">{item.value}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Example Journey */}
      <Section className="bg-stelix-deep">
        <h2 className="text-4xl font-heading font-bold text-white mb-12 text-center">
          Example: E-Commerce Customer Support Agent
        </h2>

        <Card className="max-w-4xl mx-auto p-12">
          <div className="space-y-8">
            <div className="border-l-4 border-stelix-cyan pl-6">
              <h3 className="text-xl font-heading font-bold text-stelix-cyan mb-2">Week 1-2: Discovery</h3>
              <p className="text-gray-300">
                We analyze your customer support volume (2,000 inquiries/month), common issues (shipping, returns, product info), and integration with Shopify and Zendesk.
              </p>
            </div>

            <div className="border-l-4 border-stelix-cyan pl-6">
              <h3 className="text-xl font-heading font-bold text-stelix-cyan mb-2">Week 3-4: Data & Setup</h3>
              <p className="text-gray-300">
                We collect your product catalog, FAQ, past tickets, and integrate with Shopify API and Zendesk to enable order lookup and ticket creation.
              </p>
            </div>

            <div className="border-l-4 border-stelix-cyan pl-6">
              <h3 className="text-xl font-heading font-bold text-stelix-cyan mb-2">Week 5-8: Build & Test</h3>
              <p className="text-gray-300">
                Your AI agent is trained to handle returns inquiries, shipping questions, and product recommendations. It can check order status, initiate returns, and escalate complex issues.
              </p>
            </div>

            <div className="border-l-4 border-stelix-cyan pl-6">
              <h3 className="text-xl font-heading font-bold text-stelix-cyan mb-2">Week 9: Launch</h3>
              <p className="text-gray-300">
                Your AI agent goes live on your website chat. Within 2 weeks, it's handling 70% of support inquiries automatically, reducing response time from 4 hours to instant.
              </p>
            </div>

            <div className="border-l-4 border-stelix-lime pl-6">
              <h3 className="text-xl font-heading font-bold text-stelix-lime mb-2">Ongoing: Optimization</h3>
              <p className="text-gray-300">
                We monitor performance, refine responses, and continuously improve accuracy. Monthly reviews ensure the agent stays aligned with your business needs.
              </p>
            </div>
          </div>
        </Card>
      </Section>

      {/* CTA */}
      <Section className="bg-stelix-graphite/50 text-center">
        <h2 className="text-4xl font-heading font-bold text-white mb-6">
          Ready to Start Your AI Journey?
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Let's discuss which process fits your timeline and business needs
        </p>
        <Button variant="primary" size="lg" asChild>
          <Link to="/contact">Schedule a Consultation</Link>
        </Button>
      </Section>
    </div>
  );
};

export default HowItWorks;
