
import React from 'react';
import { Github, Linkedin, Mail, Twitter , Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-display font-bold">Portfolio Delpierre Fabien</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Design et création fromscratch
            </p>
          </div>
          
          {/* <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Facebook profile"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter profile"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:hello@example.com" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email contact"
            >
              <Mail size={20} />
            </a>
          </div>*/}
          <p className="text-sm text-center text-muted-foreground">
            © {currentYear} delpierre-fabien.fr, tous droits réservés.
          </p>
        </div> 
        
        <div className="mt-8 pt-8 border-t border-border">
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
