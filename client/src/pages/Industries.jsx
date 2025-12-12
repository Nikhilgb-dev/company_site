import React from 'react';
import { Button, Card, Container, Section } from '../components/Common';
import { Link } from 'react-router-dom';

const Industries = () => {
  const industries = [
    {
      name: 'Startups & Product Companies',
      icon: '🚀',
      description: 'Accelerate your journey from concept to scalable product with modern technology and data-driven insight.',
      usecases: [
        'Rapid MVP & full-stack web/app launches',
        'Cloud-native deployment and scaling',
        'User analytics and engagement flows',
        'Data automation for growth marketing',
      ],
      benefit: 'Build, deploy, and scale products faster with a technology partner who delivers.',
    },
    {
      name: 'Retail & E-commerce',
      icon: '🛒',
      description: 'Drive conversions and streamline operations with automation, advanced analytics, and retail media.',
      usecases: [
        'Omnichannel storefront and mobile app',
        'Advanced data analytics & dashboards',
        'Retail media/ad network integration',
        'Inventory, logistics & RPA workflow',
      ],
      benefit: 'Grow your digital revenue while reducing manual workload.',
    },
    {
      name: 'Healthcare & Clinics',
      icon: '🏥',
      description: 'Transform patient experience and improve clinical operations with data, RPA, and secure cloud.',
      usecases: [
        'Digital consultation and scheduling apps',
        'Patient data analytics and dashboards',
        'Workflow automation/RPA for admin',
        'HIPAA-compliant cloud deployment',
      ],
      benefit: 'Automate, analyze, and scale with a healthcare technology partner.',
    },
    {
      name: 'Education & Training',
      icon: '🎓',
      description: 'Modernize learning with mobile, data, and workflow automation for schools & EdTech.',
      usecases: [
        'Mobile/web classroom platforms',
        'AI-driven student analytics',
        'Automated enrollment and support',
        'Cloud and API integration',
      ],
      benefit: 'Free up educators and enable student success with smart systems.',
    },
    {
      name: 'Enterprises & SMEs',
      icon: '💼',
      description: 'Achieve business transformation through process automation, advanced data, and robust cloud solutions.',
      usecases: [
        'RPA for back-office and ops',
        'Enterprise analytics dashboards',
        'Legacy-to-cloud migration',
        'Automation across apps & workflows',
      ],
      benefit: 'Increase productivity and visibility while reducing cost.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="gradient-hero min-h-screen flex items-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Solutions for Every <span className="text-stelix-cyan">Industry</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-2xl">
            Proven AI automation strategies tailored to your industry's unique challenges
          </p>
        </div>
      </Section>

      {/* Industries */}
      <Section className="bg-stelix-deep">
        <div className="space-y-16">
          {industries.map((industry, index) => (
            <div key={industry.name} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {index % 2 === 0 ? (
                <>
                  <Card>
                    <div className="text-6xl mb-6">{industry.icon}</div>
                    <h2 className="text-3xl font-heading font-bold text-white mb-4">
                      {industry.name}
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">{industry.description}</p>

                    <div className="mb-8">
                      <h3 className="font-heading font-bold text-stelix-cyan mb-4">Key Use Cases:</h3>
                      <ul className="space-y-3">
                        {industry.usecases.map((usecase, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300">
                            <span className="text-stelix-lime text-lg mt-0.5">✓</span>
                            {usecase}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Card className="bg-stelix-cyan/10 border-stelix-cyan/40 p-4">
                      <p className="font-heading font-bold text-stelix-cyan text-center">
                        {industry.benefit}
                      </p>
                    </Card>
                  </Card>

                  <div className="flex items-center justify-center h-80 bg-gradient-accent/10 rounded-2xl">
                    <div className="text-center text-gray-500">
                      <p className="text-5xl mb-4">{industry.icon}</p>
                      <p>Industry Focus Area</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-center h-80 bg-gradient-accent/10 rounded-2xl">
                    <div className="text-center text-gray-500">
                      <p className="text-5xl mb-4">{industry.icon}</p>
                      <p>Industry Focus Area</p>
                    </div>
                  </div>

                  <Card>
                    <div className="text-6xl mb-6">{industry.icon}</div>
                    <h2 className="text-3xl font-heading font-bold text-white mb-4">
                      {industry.name}
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">{industry.description}</p>

                    <div className="mb-8">
                      <h3 className="font-heading font-bold text-stelix-cyan mb-4">Key Use Cases:</h3>
                      <ul className="space-y-3">
                        {industry.usecases.map((usecase, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300">
                            <span className="text-stelix-lime text-lg mt-0.5">✓</span>
                            {usecase}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Card className="bg-stelix-cyan/10 border-stelix-cyan/40 p-4">
                      <p className="font-heading font-bold text-stelix-cyan text-center">
                        {industry.benefit}
                      </p>
                    </Card>
                  </Card>
                </>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-stelix-graphite/50 text-center">
        <h2 className="text-4xl font-heading font-bold text-white mb-6">
          Don't See Your Industry?
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          We work across all sectors. Let's discuss your specific needs.
        </p>
        <Button variant="primary" size="lg" asChild>
          <Link to="/contact">Get a Custom Consultation</Link>
        </Button>
      </Section>
    </div>
  );
};

export default Industries;
