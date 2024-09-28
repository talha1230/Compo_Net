import React from 'react';
import Container from '../app/components/layout/Container';
import Header from '../app/components/layout/Header';
import Footer from '../app/components/layout/Footer';
import Hero from '../app/components/sections/Hero';
import Skills from '../app/components/sections/Skills';
import Showcase from '../app/components/sections/Showcase';

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