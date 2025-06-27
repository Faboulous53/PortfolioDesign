
import React from 'react';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import Reveal from '../ui/Reveal';

const projects = [
  {
    title: 'Site officiel du Trail-Muco du pays de Vité',
    description: 'Parce qu\'il est important que chacun puisse s\'engager à sa manière, j\'ai conçu et je continue d\'entretenir, de façon totalement bénévole, ce site dédié à une association qui organise chaque année un trail solidaire. Tous les bénéfices de cet événement sont reversés à la lutte contre la mucoviscidose.',
    image: './assets/images/trailmuco.png',
    tags: ['React', 'MySql', 'Scss','Html'],
    liveUrl: 'https://trailmuco.fr/',
    githubUrl: '',
  },
  {
    title: 'Cooking App',
    description: 'Petite application créée à la suite de mon apprentissage afin de me perfectionner dans l\'appel d\'API et ainsi se familiariser avec le format JSON.',
    image: './assets/images/cookingapp.png',
    tags: ['Web App', 'API', 'React'],
    liveUrl: 'https://cookingapp-fabien-delpierre.netlify.app/',
    githubUrl: '',
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <Reveal>
          <span className="inline-block py-1 px-3 mb-6 text-xs font-medium bg-primary/10 rounded-full">
            Projets
          </span>
        </Reveal>
        
        <Reveal>
          <h2 className="section-title">
            Projets <span className="text-primary">Pro</span>
          </h2>
        </Reveal>
        
        <Reveal delay={100}>
          <p className="section-subtitle">
            J'ai réalisé plusieurs projets malheureusement pour la plupart, je n'ai pas l'autorisation de les présenter ici.<br></br>
            De plus, ayant rapidement trouvé un emploi dans le domaine, je n'ai plus besoin de m'exercer à titre personnel. Mon travail me permet largement de monter chaque jour un peu plus en compétences!<br></br> 
            Voici tout de même un petit échantillon!
          </p>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="project-card h-full flex flex-col">
                <div className="relative overflow-hidden w-full pt-[60%]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute top-0 left-0 w-50 h-50 object-cover transform transition-all duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-display font-bold">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="View GitHub repository"
                          className="p-1.5 rounded-full hover:bg-secondary transition-colors"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
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
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="py-1 px-2 text-xs font-medium bg-secondary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.liveUrl} 
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

export default Projects;
