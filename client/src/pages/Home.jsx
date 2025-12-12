import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Container, Section } from '../components/Common';

const Home = () => {
  const services = [
    { icon: '🌐', title: 'Web Application Development', description: 'Custom web applications engineered for scale, security, and long-term growth.' },
    { icon: '📱', title: 'Mobile Application Development', description: 'iOS and Android app solutions to engage your customers or empower your team anywhere.' },
    { icon: '📊', title: 'Data Science', description: 'Enable predictive and prescriptive analytics with advanced data modeling and ML.' },
    { icon: '📈', title: 'Data Analytics', description: 'Modern dashboards and real-time reporting for intelligent business strategy.' },
    { icon: '🤖', title: 'AI Agentic Workflow', description: 'Automate decisions and business flows with advanced, agent-driven AI solutions.' },
    { icon: '🔎', title: 'SEO', description: 'Drive traffic, leads, and conversions with advanced SEO and search marketing.' },
    { icon: '📢', title: 'Retail Media Network (Digital Marketing)', description: 'Enterprise retail media and digital ads to grow your ecommerce success.' },
    { icon: '🤖', title: 'Robotic Process Automation (RPA)', description: 'Streamline operations and boost productivity through automated workflows.' },
    { icon: '☁️', title: 'Cloud', description: 'Accelerate innovation with robust, flexible, and secure cloud platforms.' },
  ];

  const process = [
    { number: 1, title: 'Discovery & Strategy', description: 'We understand your business needs and goals.' },
    { number: 2, title: 'Data & Setup', description: 'Prepare data and integrate with your systems.' },
    { number: 3, title: 'Design & Integration', description: 'Create and configure your AI agent.' },
    { number: 4, title: 'Testing & Training', description: 'Optimize performance and fine-tune responses.' },
    { number: 5, title: 'Launch & Optimization', description: 'Deploy and continuously improve your AI agent.' },
  ];

  const industries = [
    {
      name: 'Startups & Product Companies',
      usecases: ['Rapid MVP and product launches', 'Data-driven feature prioritization', 'Mobile/web user experience excellence', 'Cloud native transformation'],
    },
    {
      name: 'Retail & E-commerce',
      usecases: ['Omnichannel storefronts & apps', 'Personalized recommendations & analytics', 'Retail media & targeted advertising', 'Inventory and supply chain automation'],
    },
    {
      name: 'Healthcare & Clinics',
      usecases: ['HIPAA-compliant cloud data', 'Patient scheduling & digital intake', 'Predictive analytics for care outcomes', 'Medical RPA/document automation'],
    },
    {
      name: 'Education & Training',
      usecases: ['eLearning & mobile classroom apps', 'Learning analytics dashboards', 'Admissions and inquiry automation', 'AI chatbots for student helpdesks'],
    },
    {
      name: 'Enterprises & SMEs',
      usecases: ['Legacy process modernization', 'RPA for back-office automation', 'Analytics for operations insight', 'Cloud migration & infrastructure setup'],
    },
  ];

  const testimonials = [
    {
      quote: 'Stelix transformed how we handle customer inquiries. The AI agent handled 80% of support tickets independently.',
      author: 'Sarah Johnson',
      company: 'TechFlow Inc.',
    },
    {
      quote: 'Implementation was smooth and professional. The team understood our business deeply.',
      author: 'Michael Chen',
      company: 'GrowthPartners',
    },
    {
      quote: 'The ROI was evident within the first month. Highly recommend Stelix.',
      author: 'Emma Davis',
      company: 'RetailMax',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="gradient-hero min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              Building Strong, Intelligent Digital Solutions for Your Business
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Stelix is a technology partner where strength meets innovation. We design and build high-performance web & mobile apps, data and AI solutions, automation workflows, and cloud infrastructure that help your business grow with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" asChild>
                <Link to="/contact">Start a Project</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">Book a Free Consultation</Link>
              </Button>
            </div>
          </div>
          <div className="animate-fade-in hidden lg:block">
            <div className="relative w-full h-96 bg-gradient-accent rounded-2xl opacity-20 blur-xl"></div>
          </div>
        </div>
      </Section>

      {/* What We Do Section */}
      <Section className="bg-stelix-deep" id="overview">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stelix delivers end-to-end technology and AI solutions: web/mobile apps, data analytics, agentic workflows, automation, and cloud. With strength and expertise, we engineer digital foundations for future-ready businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{ title: 'Engineering Strength', desc: 'Solutions designed for reliability, scale, and security.' },
            { title: 'Intelligent Decisions', desc: 'Leverage AI & analytics to make smarter business moves.' },
            { title: 'Automation & Growth', desc: 'Accelerate results with streamlined, automated workflows.' }
          ].map((item, index) => (
            <Card key={index} className="hover:scale-105 transition">
              <h3 className="text-2xl font-heading font-bold text-stelix-cyan mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Services Preview */}
      <Section className="bg-stelix-graphite/50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Discover how Stelix can transform your business
          </p>
          <Button variant="secondary" size="md" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:scale-105 transition text-center">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-heading font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-stelix-deep" id="how-it-works">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            From concept to deployment in 5 strategic steps
          </p>
          <Button variant="secondary" size="md" asChild>
            <Link to="/how-it-works">Learn More</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-12">
          {process.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center h-full flex flex-col justify-center">
                <div className="w-12 h-12 bg-stelix-cyan text-stelix-deep rounded-full flex items-center justify-center font-heading font-bold text-lg mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-heading font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </Card>
              {index < process.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-stelix-cyan/30"></div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section className="bg-stelix-graphite/50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Proven expertise across diverse sectors
          </p>
          <Button variant="secondary" size="md" asChild>
            <Link to="/industries">Explore All Industries</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {industries.map((industry, index) => (
            <Card key={index}>
              <h3 className="text-lg font-heading font-bold text-stelix-cyan mb-4">{industry.name}</h3>
              <ul className="space-y-2">
                {industry.usecases.map((usecase, idx) => (
                  <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-stelix-lime mt-1">✓</span>
                    {usecase}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Trust Section */}
      <Section className="bg-stelix-deep">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Trusted by Leading Businesses
          </h2>
          <p className="text-xl text-gray-400">
            Reliability, security, and expertise you can count on
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between">
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-heading font-bold text-white">{testimonial.author}</p>
                <p className="text-stelix-cyan text-sm">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-stelix-graphite/50">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Ready to Build Your First AI Agent?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join leading companies automating their operations with Stelix
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Home;
