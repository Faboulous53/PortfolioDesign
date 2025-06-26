
import React from 'react';
import { ArrowDownCircle } from 'lucide-react';
import Reveal from '../ui/Reveal';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/50 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <span className="inline-block py-1 px-3 mb-6 text-xs font-medium bg-secondary rounded-full">
                Hello, I'm a Professional Designer
              </span>
            </Reveal>
            
            <Reveal delay={100}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold leading-tight mb-6">
                Creating digital <br /> 
                <span className="text-primary">experiences</span> 
                <br /> that matter
              </h1>
            </Reveal>
            
            <Reveal delay={200}>
              <p className="text-lg text-muted-foreground mb-8 max-w-md">
                I craft beautiful, functional interfaces and experiences that blend aesthetics with intuitive usability
              </p>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#projects" 
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide bg-primary text-primary-foreground rounded-md transition duration-200 hover:bg-primary/90 focus:shadow-outline focus:outline-none"
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide bg-transparent text-primary border border-primary rounded-md transition duration-200 hover:bg-primary/5 focus:shadow-outline focus:outline-none"
                >
                  Contact Me
                </a>
              </div>
            </Reveal>
          </div>
          
          <div className="relative">
            <Reveal delay={400} direction="left">
              <div className="relative z-10">
                <div className="relative rounded-2xl overflow-hidden glass-card shadow-xl animate-image-glow">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                    alt="Developer working on code" 
                    className="w-full h-auto object-cover"
                    loading="lazy" 
                  />
                </div>
              </div>
            </Reveal>
            
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/50 rounded-full blur-3xl animate-float" />
          </div>
        </div>
        
        <a 
          href="#about" 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="mb-2">Scroll Down</span>
          <ArrowDownCircle size={24} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
