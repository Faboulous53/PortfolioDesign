
import React from 'react';
import { Code, Layout, Lightbulb, UsersRound } from 'lucide-react';
import Reveal from '../ui/Reveal';

const skills = [
  'HTML',
  'CSS/SCSS',
  'Javascript',
  'TypeScript',
  'KnockoutJS',
  'C#',
  'VB.NET',
  'SSMS',
];

const services = [
  {
    icon: <Layout className="w-6 h-6" />,
    title: 'Organisation',
    description: 'Respect des cahiers des charges, organisation de travail à l\'aide d\'outils de type planner.'
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Veille technologique',
    description: 'Se tenir à jour des évolutions constantes qui régissent l\'univers du développement.'
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Créativité',
    description: 'Savoir faire force de proposition afin de proposer des solutions adaptées à la problématique.'
  },
  {
    icon: <UsersRound  className="w-6 h-6" />,
    title: 'Collaboration',
    description: 'Le travail collaboratif est indispensable dans cet environnement. Git l\'indétronable dans le domaine fait partit de mon quotidien.'
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="section-container">
        <Reveal>
          <span className="inline-block py-1 px-3 mb-6 text-xs font-medium bg-primary/10 rounded-full">
            Actuellement
          </span>
        </Reveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <h2 className="section-title">
                Analyste <span className="text-primary">Développeur Informatique</span>
              </h2>
            </Reveal>
            
            <Reveal delay={100}>
              <p className="text-lg text-muted-foreground mb-6">
                Mon travail consiste à développer et maintenir des configurateurs de produits sur mesure utilisés par l'ADV interne mais aussi par les clients B2B.
              </p>
            </Reveal>
            
            <Reveal delay={200}>
              <p className="text-lg text-muted-foreground mb-8">
                La complexité implémentée, indispensable pour ce genre de projet, me permet de me perfectionner chaque jour et d'en apprendre d'avantage dans le monde du développement informatique. 
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
                  src="../public/assets/images/maxresdefault.jpg" 
                  alt="Logo Cf group" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
        
        <Reveal>
          <h3 className="text-2xl md:text-3xl font-display font-bold mt-20 mb-10">
            Soft skills
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
