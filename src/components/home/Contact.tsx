
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
    alert('Thank you for your message! I will get back to you soon.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="section-container">
        <Reveal>
          <span className="inline-block py-1 px-3 mb-6 text-xs font-medium bg-primary/10 rounded-full">
            Contact Me
          </span>
        </Reveal>
        
        <Reveal>
          <h2 className="section-title">
            Let's <span className="text-primary">Connect</span>
          </h2>
        </Reveal>
        
        <Reveal delay={100}>
          <p className="section-subtitle">
            Have a project in mind or want to discuss potential collaborations? I'd love to hear from you.
          </p>
        </Reveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <Reveal>
            <div>
              <div className="bg-white rounded-2xl shadow-md p-8">
                <h3 className="text-xl font-display font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center bg-primary/10 rounded-full p-3 mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Email</h4>
                      <a href="mailto:hello@example.com" className="hover:text-primary">
                        hello@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center bg-primary/10 rounded-full p-3 mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Phone</h4>
                      <a href="tel:+1234567890" className="hover:text-primary">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center bg-primary/10 rounded-full p-3 mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Location</h4>
                      <p>San Francisco, California</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          
          <Reveal direction="left">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="text-xl font-display font-bold mb-6">Send Me a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Hello, I'd like to discuss a project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center h-12 px-6 font-medium tracking-wide bg-primary text-primary-foreground rounded-md transition duration-200 hover:bg-primary/90 focus:shadow-outline focus:outline-none"
                >
                  Send Message <Send size={16} className="ml-2" />
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
