import React from 'react';

import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Domain from '../components/Domain';
import Portfolio from '../components/Portfolio';
import Team from '../components/Team';
import Cta from '../components/Cta';
// import ReachUs from '../components/ReachUs';

import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />

      {/* Give Services section an id */}
      <section id="services">
        <Services />
      </section>

      <Domain />

      {/* Give Portfolio section an id — assuming Portfolio lists your products */}
      <section id="products">
        <Portfolio />
      </section>

      <Team />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
