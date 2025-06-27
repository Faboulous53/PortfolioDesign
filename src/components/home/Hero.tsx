import React from 'react';
import { ArrowDownCircle } from 'lucide-react';
import Reveal from '../ui/Reveal';

export const Hero: React.FC = () => {
    return (
        <section
            id="accueil"
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/50 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />

            <div className="section-container relative z-10 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <Reveal>
                            <span className="inline-block py-1 px-3 mb-6 text-xs font-medium bg-secondary rounded-full">
                                Delpierre Fabien
                            </span>
                        </Reveal>

                        <Reveal delay={100}>
                            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold leading-tight mb-6">
                                Animé par la passion et la création digitale{' '}
                                <br />
                            </h1>
                        </Reveal>

                        <Reveal delay={200}>
                            <p className="text-lg text-muted-foreground mb-8 max-w-md">
                                "Depuis 2022 date de ma reconversion et
                                l'obtention de mon titre professionnel de
                                développeur web, je transforme le café en code
                                et ma passion en métier."
                            </p>
                        </Reveal>

                        <Reveal delay={300}>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="../public/assets/Documents/CV Delpierre Fabien 2025.pdf"
                                    target="_blank"
                                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide bg-primary text-primary-foreground rounded-md transition duration-200 hover:bg-primary/90 focus:shadow-outline focus:outline-none"
                                >
                                    Télécharger mon CV
                                </a>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide bg-transparent text-primary border border-primary rounded-md transition duration-200 hover:bg-primary/5 focus:shadow-outline focus:outline-none"
                                >
                                    Contactez moi
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    <div className="relative w-full flex justify-center">
                        <Reveal delay={400} direction="left">
                            <div className="relative z-10">
                                <div className="rounded-2xl overflow-hidden animate-image-glow inline-block">
                                    <img
                                        src="../public/assets/images/IMG_6240.webp"
                                        alt="photo Delpierre Fabien"
                                        loading="lazy"
                                        className="h-auto w-auto max-w-full"
                                    />
                                </div>
                            </div>
                        </Reveal>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/50 rounded-full blur-3xl animate-float -z-10" />
                    </div>
                </div>

                <a
                    href="#about"
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    <span className="mb-2">Descendre en bas</span>
                    <ArrowDownCircle size={24} className="animate-bounce" />
                </a>
            </div>
        </section>
    );
};

export default Hero;
