'use client';

import { Navbar } from '../../../components/Navbar';
import { Contact } from '../../../components/Contact';
import { TemplateGallery, TemplateProduct } from '../../../components/TemplateGallery';
import { Reveal } from '../../../components/ui/Section';

const MOCK_TEMPLATES: TemplateProduct[] = [
    {
        id: 'cyber-agency',
        name: 'Cyber Agency V1',
        category: 'Portfolio',
        price: 'R$ 890',
        description: 'Um portfólio futurista para agências e freelancers criativos. Inclui animações avançadas e seção de cases.',
        imageGradient: 'bg-gradient-to-br from-purple-600 to-blue-900',
        features: ['Next.js 14 + Tailwind', 'Animações Framer Motion', 'Modo Dark Nativo', 'Blog Integrado', 'SEO Otimizado']
    },
    {
        id: 'neon-saas',
        name: 'Neon SaaS Dashboard',
        category: 'Landing Page',
        price: 'R$ 1.200',
        description: 'Landing page de alta conversão para produtos SaaS. Seções de pricing, features e depoimentos otimizadas.',
        imageGradient: 'bg-gradient-to-br from-cyan-500 to-emerald-900',
        features: ['Design System Completo', 'Integração Stripe Pronta', 'Componentes Acessíveis', 'Performance 100/100', 'Suporte Multi-idioma']
    },
    {
        id: 'dark-commerce',
        name: 'Vortex Store',
        category: 'E-commerce',
        price: 'R$ 1.500',
        description: 'Template de loja virtual minimalista e luxuoso. Foco total nos produtos com UX de ponta.',
        imageGradient: 'bg-gradient-to-br from-neutral-800 to-black',
        features: ['Carrinho Inteligente', 'Checkout Otimizado', 'Filtros Avançados', 'Mobile First', 'Painel de Admin']
    }
];

export default function TemplatesPage() {
    return (
        <div className="bg-vortex-black min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-500/5 blur-[120px] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <Reveal>
                        <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
                            Loja de Códigos
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
                            Templates <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Premium</span>
                        </h1>
                        <p className="text-xl text-vortex-muted max-w-2xl mx-auto font-light leading-relaxed">
                            Acelere seu desenvolvimento com nossas bases de código prontas.
                            Qualidade de agência, preço de template.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-12 bg-vortex-black relative">
                <div className="max-w-7xl mx-auto px-6">
                    <TemplateGallery templates={MOCK_TEMPLATES} />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-vortex-black relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                            Precisa de algo <span className="text-vortex-accent">Exclusivo?</span>
                        </h2>
                        <p className="text-vortex-muted text-lg mb-8 max-w-2xl mx-auto">
                            Se os templates não atendem 100% da sua visão, nossa equipe pode criar um design sob medida para sua marca.
                        </p>
                        <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-sm bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-vortex-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                            Falar com Especialistas
                        </a>
                    </Reveal>
                </div>
            </section>

            <Contact />
        </div>
    );
}
