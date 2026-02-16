import React from 'react';
import { Navbar } from '../../../components/Navbar';
import { Projects } from '../../../components/Projects';
import { Reveal } from '../../../components/ui/Section';
import { Contact } from '../../../components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Nos Projets | VORTEX.DEV',
    description: 'Découvrez nos réalisations en développement web, applications SaaS et solutions digitales sur mesure.',
};

export default function ProjectsPage() {
    return (
        <div className="bg-vortex-black min-h-screen text-vortex-text selection:bg-vortex-accent selection:text-black">
            <Navbar />

            {/* Page Header */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/5 blur-[120px] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <Reveal>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
                            Nos <span className="text-vortex-accent">Projets</span>
                        </h1>
                        <p className="text-xl text-vortex-muted max-w-2xl mx-auto font-light leading-relaxed">
                            Une sélection de nos meilleures réalisations, du site vitrine à l'application SaaS complexe.
                        </p>
                    </Reveal>
                </div>
            </section>

            <main>
                <Projects />
                <Contact />
            </main>
        </div>
    );
}
