
import React from 'react';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import Reveal from '../ui/Reveal';

const loisirs = [
  {
    title: 'E-Commerce Redesign',
    description: 'A complete redesign of an e-commerce platform focused on improving user experience and conversion rates.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    tags: ['UI/UX Design', 'Frontend Development', 'E-Commerce'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Finance Dashboard',
    description: 'An intuitive dashboard for tracking financial metrics with real-time data visualization.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    tags: ['Web App', 'Data Visualization', 'React'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Travel App',
    description: 'A mobile-first web application designed to help users discover and plan their perfect trip.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    tags: ['React', 'Mobile Design', 'API Integration'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Design System',
    description: 'A comprehensive design system built for scaling design across multiple products and platforms.',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
    tags: ['Design Systems', 'Documentation', 'Component Library'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export const Loisirs: React.FC = () => {
  return (
    <section id="loisirs" className="py-24">
      <div className="section-container">
        <Reveal>
          <span className="inline-block py-1 px-3 mb-6 text-xs font-medium bg-primary/10 rounded-full">
            My Work
          </span>
        </Reveal>
        
        <Reveal>
          <h2 className="section-title">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </Reveal>
        
        <Reveal delay={100}>
          <p className="section-subtitle">
            A selection of my recent work, demonstrating my skills in design and development.
          </p>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {loisirs.map((loisirs, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="project-card h-full flex flex-col">
                <div className="relative overflow-hidden w-full pt-[60%]">
                  <img 
                    src={loisirs.image} 
                    alt={loisirs.title} 
                    className="absolute top-0 left-0 w-full h-full object-cover transform transition-all duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-display font-bold">{loisirs.title}</h3>
                    <div className="flex gap-2">
                      {loisirs.githubUrl && (
                        <a 
                          href={loisirs.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="View GitHub repository"
                          className="p-1.5 rounded-full hover:bg-secondary transition-colors"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {loisirs.liveUrl && (
                        <a 
                          href={loisirs.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="View live project"
                          className="p-1.5 rounded-full hover:bg-secondary transition-colors"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {loisirs.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-2 mb-4">
                    {loisirs.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="py-1 px-2 text-xs font-medium bg-secondary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={loisirs.liveUrl} 
                    className="mt-auto flex items-center text-sm font-medium hover:underline"
                  >
                    View Project <ArrowUpRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loisirs;
