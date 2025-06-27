
import React from 'react';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import Reveal from '../ui/Reveal';

const loisirs = [
  {
    title: 'Gaming',
    description: 'Passionné de jeux vidéo depuis mon enfance!',
    image: '../public/assets/images/gaming.webp',
    tags: ['Jeux de rôle', 'Jeux de simulations', 'RPG'],
    liveUrl: '',
    githubUrl: '',
  },
  {
    title: 'Fan du RC LENS',
    description: 'Fidèle supporter du club de foot emblématique des Hauts de France!',
    image: '../public/assets/images/logo rc lens.webp',
    tags: [],
    liveUrl: '',
    githubUrl: '',
  },
  {
    title: 'Impression 3D',
    description: 'Passionné par la technologie numérique, j\'occupe beaucoup de mon temps libre afin de me perfectionner dans ce domaine, aussi bien dans la modélisation que dans l\'impression 3D.',
    image: '../public/assets/images/What-is-3D-Printing.jpg',
    tags: ['Bambulab X1C', 'Elegoo', 'Fusion 360', 'Blender','Lychee'],
    liveUrl: '',
    githubUrl: '',
  },
  {
    title: 'Éleveur d\'inséparables',
    description: 'Depuis 2013, j\'élève des inséprables principalement l\'agapornis taranta à titre amateur (Et oui, l\'on compte 9 espèces différentes d\'inséparable).',
    image: '../public/assets/images/aga1.webp',
    tags: ['Plusieurs fois champion de France', 'Articles rédigés dans des revues spécialisées'],
    liveUrl: '',
    githubUrl: '',
  },
];

export const Loisirs: React.FC = () => {
  return (
    <section id="loisirs" className="py-24">
      <div className="section-container">
        <Reveal>
          <span className="inline-block py-1 px-3 mb-6 text-xs font-medium bg-primary/10 rounded-full">
            Loisirs
          </span>
        </Reveal>
        
        <Reveal>
          <h2 className="section-title">
            En dehors <span className="text-primary">du dev</span>
          </h2>
        </Reveal>
        
        <Reveal delay={100}>
          <p className="section-subtitle">
            Voici les principales activités que je pratique.
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
