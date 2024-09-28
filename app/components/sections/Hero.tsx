import React from 'react';

const Hero: React.FC = () => {
  return (
	<section className="hero bg-blue-500 text-white p-8">
	  <h2 className="text-4xl">Welcome to My WebApp</h2>
	  <p className="mt-4">This is the introduction section of the web application.</p>
	</section>
  );
};

export default Hero;