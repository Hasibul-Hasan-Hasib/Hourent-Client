import CallToAction from '@/components/Home/CallToAction';
import HeroSection from '@/components/Home/HeroSection';
import HomeListingSection from '@/components/Home/HomeListingSection';
import Testimonials from '@/components/Home/Testimonials';
import WhyChooseUs from '@/components/Home/WhyChooseUs';
import React from 'react';

const Home = () => {
  return (
    <>
      <HeroSection />
      <HomeListingSection />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;