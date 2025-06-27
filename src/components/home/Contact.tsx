
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Reveal from '../ui/Reveal';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formState);
    alert('Merci pour votre message, je reviendrai vers vous dans les plus brefs délais.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="section-container">
        <Reveal>
          <span className="inline-block py-1 px-3 mb-6 text-xs font-medium bg-primary/10 rounded-full">
            Contacte
          </span>
        </Reveal>
        
        <Reveal>
          <h2 className="section-title">
              N'hésitez pas <span className="text-primary">à me contacter!</span>
          </h2>
        </Reveal>
        
        <Reveal delay={100}>
          <p className="section-subtitle">
            Si vous avez un projet ou une demande de collaboration, voici comment me contacter:
          </p>
        </Reveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <Reveal>
            <div>
              <div className="bg-black rounded-2xl shadow-md p-8">
                <h3 className="text-xl font-display font-bold mb-6">Informations de contact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center bg-primary/10 rounded-full p-3 mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Email</h4>
                      <a href="mailto:hello@example.com" className="hover:text-primary">
                        fab.delpierre@gmail.com
                      </a>
                    </div>
                  </div>                  
                 
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center bg-primary/10 rounded-full p-3 mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Localisation</h4>
                      <p>Saint Pierre La Cour, Mayenne</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          
          <Reveal direction="left">
            <form onSubmit={handleSubmit} className="bg-black rounded-2xl shadow-md p-8">
              <h3 className="text-xl font-display font-bold mb-6">Envoyez moi un message:</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Votre Nom et prénom:
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Nom et prénom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Votre mail:
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="mail@exemple.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Votre message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Bonjour, je vous propose 50k net par mois..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center h-12 px-6 font-medium tracking-wide bg-primary text-primary-foreground rounded-md transition duration-200 hover:bg-primary/90 focus:shadow-outline focus:outline-none"
                >
                 Envoyer le message <Send size={16} className="ml-2" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
