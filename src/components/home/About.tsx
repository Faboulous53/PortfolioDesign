
import React from 'react';
import { Code, Layout, Lightbulb, Sparkles } from 'lucide-react';
import Reveal from '../ui/Reveal';

const skills = [
  'UI/UX Design',
  'Web Development',
  'React',
  'TypeScript',
  'Figma',
  'Tailwind CSS',
  'Next.js',
  'Motion Design',
];

const services = [
  {
    icon: <Layout className="w-6 h-6" />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful interfaces that enhance user experience and engagement.'
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Web Development',
    description: 'Building responsive, accessible, and performant websites and web applications.'
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Brand Identity',
    description: 'Crafting cohesive visual languages that communicate brand values and personality.'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Interaction Design',
    description: 'Designing meaningful animations and micro-interactions to delight users.'
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="section-container">
        <Reveal>
          <span className="inline-block py-1 px-3 mb-6 text-xs font-medium bg-primary/10 rounded-full">
            About Me
          </span>
        </Reveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <h2 className="section-title">
                Passionate about creating <span className="text-primary">impactful designs</span>
              </h2>
            </Reveal>
            
            <Reveal delay={100}>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a designer and developer with a passion for creating digital experiences that are both beautiful and functional. With a keen eye for detail and a commitment to user-centered design, I strive to create work that makes a lasting impression.
              </p>
            </Reveal>
            
            <Reveal delay={200}>
              <p className="text-lg text-muted-foreground mb-8">
                My approach combines strategic thinking with creative execution, ensuring that every project not only looks great but also achieves its objectives.
              </p>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="py-1 px-3 text-sm font-medium bg-secondary rounded-full border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
          
          <div className="relative">
            <Reveal direction="left">
              <div className="glass-card rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Designer working" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
        
        <Reveal>
          <h3 className="text-2xl md:text-3xl font-display font-bold mt-20 mb-10">
            Services I Offer
          </h3>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="glass-card p-6 rounded-2xl h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl mb-4">
                  {service.icon}
                </div>
                <h4 className="text-xl font-display font-bold mb-2">{service.title}</h4>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
