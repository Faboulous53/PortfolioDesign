
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Projects from '@/components/home/Projects';
import Contact from '@/components/home/Contact';
import Loisirs  from '@/components/home/Loisirs';

const Index: React.FC = () => {
  useEffect(() => {
    document.title = 'Portfolio | Professional Designer & Developer';
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Loisirs/>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
