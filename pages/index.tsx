import React from 'react';
import Container from '../src/components/layout/Container';
import Header from '../src/components/layout/Header';
import Footer from '../src/components/layout/Footer';
import Hero from '../src/components/sections/Hero';
import Skills from '../src/components/sections/Skills';
import Showcase from '../src/components/sections/Showcase';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Container>
        <Hero />
        <Skills />
        <Showcase />
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;