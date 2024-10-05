import React from 'react';
import { BackgroundBeams } from '../ui/background-beams';

const Hero: React.FC = () => {
  return (
    <section className="relative hero p-8 h-screen flex items-center justify-center">
      <BackgroundBeams className="absolute inset-0 z-0 bg-black-500" />
      <div className="relative z-10 max-w-2xl mx-auto p-4 text-center">
        <h2 className="text-4xl text-gray-900 dark:text-gray-100">Welcome to My WebApp</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">This is the introduction section of the web application.</p>
      </div>
    </section>
  );
};

export default Hero;