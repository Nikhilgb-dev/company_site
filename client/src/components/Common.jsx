import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 font-heading';
  
  const variants = {
    primary: 'bg-stelix-cyan text-stelix-deep hover:bg-stelix-purple hover:text-white hover:shadow-glow-purple',
    secondary: 'bg-transparent border-2 border-white text-white hover:border-stelix-cyan hover:text-stelix-cyan',
    dark: 'bg-stelix-graphite text-white hover:bg-stelix-deep hover:shadow-lg',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const Card = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`card-glow bg-stelix-graphite/30 backdrop-blur-sm rounded-2xl p-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const Container = ({ children, className = '' }) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export const Section = ({ children, className = '', id = '' }) => {
  return (
    <section
      id={id}
      className={`py-20 sm:py-24 lg:py-32 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
};

export default { Button, Card, Container, Section };
