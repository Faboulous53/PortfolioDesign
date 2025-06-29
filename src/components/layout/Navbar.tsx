import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Poste occupé', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Loisirs', href: '#loisirs' },
    { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
                isScrolled
                    ? 'py-4 bg-white/80 backdrop-blur-lg shadow-sm text-black'
                    : 'py-6 bg-transparent text-black'
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link
                        to="/"
                        className="text-xl font-display font-bold tracking-tight"
                    >
                        <img
                            src="./assets/images/fab-logo-200.webp"
                            alt="Logo faboulous developpement"
                        />
                    </Link>

                    {/* Desktop navigation */}
                    <nav className={cn("hidden md:flex space-x-8",isScrolled? 'text-black' : 'text-white' )}>
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="nav-item"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
<button
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  className={cn(
    'md:hidden focus:outline-none',
    isScrolled ? 'text-black' : 'text-white'
  )}
  aria-label="Toggle menu"
>
  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
</button>
                </div>
            </div>

            {/* Mobile navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-md animate-fade-in">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block py-3 text-base font-medium border-b border-gray-100"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
