'use client';

import { Navbar } from '../../../components/Navbar';
import { Contact } from '../../../components/Contact';
import { ServicePricingSection, PricingTier } from '../../../components/ServicePricingSection';
import { Reveal } from '../../../components/ui/Section';

const webDevTiers: PricingTier[] = [
    {
        name: 'Site Vitrine',
        description: 'Parfait pour présenter votre activité en ligne.',
        price: 'CHF 2.490',
        features: ['Design réactif sur mesure', 'Jusqu\'à 5 pages', 'Optimisation SEO de base', 'Formulaire de contact', 'Hébergement 1 an inclus', 'Support 3 mois'],
        buttonText: 'Choisir ce Plan',
    },
    {
        name: 'Site Business',
        description: 'Solution complète pour développer votre entreprise.',
        price: 'CHF 3.990',
        features: ['Design premium personnalisé', 'Jusqu\'à 10 pages', 'SEO avancé + Blog', 'Système de réservation', 'Intégrations (CRM, Email)', 'Analyses avancées', 'Support 6 mois'],
        buttonText: 'Choisir ce Plan',
        highlight: true,
    },
    {
        name: 'E-commerce',
        description: 'Boutique en ligne complète avec ventes intégrées.',
        price: 'CHF 5.990',
        features: ['Design e-commerce exclusif', 'Produits illimités', 'Paiement sécurisé (Stripe/TWINT)', 'Gestion des stocks', 'Panneau d\'administration', 'SEO pour e-commerce', 'Support 12 mois'],
        buttonText: 'Lancer ma Boutique',
    },
];

const seoTiers: PricingTier[] = [
    {
        name: 'SEO Essentiel',
        description: 'Idéal pour commencer votre référencement.',
        price: 'CHF 790',
        period: '/mois',
        features: ['Audit SEO initial', 'Optimisation technique de base', '5 mots-clés cibles', 'Rapport mensuel', 'Support par email'],
        buttonText: 'Choisir ce Plan',
    },
    {
        name: 'SEO Avancé',
        description: 'Stratégie complète de croissance organique.',
        price: 'CHF 1.390',
        period: '/mois',
        features: ['Audit SEO complet', 'Optimisation technique avancée', '15 mots-clés cibles', 'Création de contenu (2 articles/mois)', 'Netlinking de base', 'Rapport détaillé'],
        buttonText: 'Choisir ce Plan',
        highlight: true,
    },
    {
        name: 'SEO Premium',
        description: 'Pour les entreprises aux grandes ambitions.',
        price: 'CHF 2.490',
        period: '/mois',
        features: ['Stratégie SEO 360º', 'Mots-clés illimités', 'Contenu premium (4 articles/mois)', 'Netlinking avancé', 'Analyse des concurrents', 'Consultant dédié', 'Support prioritaire'],
        buttonText: 'Choisir ce Plan',
    },
];

const adsTiers: PricingTier[] = [
    {
        name: 'Google Ads Essentiel',
        description: 'Idéal pour débuter avec le trafic payant.',
        price: 'CHF 590',
        period: '/mois',
        features: ['Configuration du compte', 'Campagne Search (3 groupes)', 'Géolocalisation précise', 'Rapport mensuel', 'Support par email'],
        buttonText: 'Lancer une Campagne',
    },
    {
        name: 'Google Ads Avancé',
        description: 'Stratégie complète de croissance.',
        price: 'CHF 1.190',
        period: '/mois',
        features: ['Gestion complète des campagnes', 'Search + Display', 'Remarketing dynamique', 'Optimisation hebdomadaire', 'Rapport bimensuel', 'Consultant dédié'],
        buttonText: 'Choisir ce Plan',
        highlight: true,
    },
    {
        name: 'Google Ads Premium',
        description: 'Solution d\'entreprise pour grande échelle.',
        price: 'CHF 2.190',
        period: '/mois',
        features: ['Stratégie multi-canal', 'Shopping + Vidéo (YouTube)', 'Optimisation IA', 'Tests A/B continus', 'Tableau de bord personnalisé', 'Support 24/7'],
        buttonText: 'Contactez-nous',
    },
];

const performanceTiers: PricingTier[] = [
    {
        name: 'Optimisation de Base',
        description: 'Améliorez la vitesse essentielle du site.',
        price: 'CHF 790',
        features: ['Audit de performance', 'Optimisation des images', 'Cache navigateur', 'Minification CSS/JS', 'Rapport avant/après'],
        buttonText: 'Optimiser Maintenant',
    },
    {
        name: 'Optimisation Avancée',
        description: 'Performance maximale (Core Web Vitals).',
        price: 'CHF 1.490',
        features: ['Audit complet', 'Optimisation des images (WebP)', 'Cache avancé (Redis/Varnish)', 'Configuration CDN', 'Lazy loading intelligent', 'Garantie de score vert'],
        buttonText: 'Optimiser Maintenant',
        highlight: true,
    },
    {
        name: 'Optimisation Premium',
        description: 'Solution définitive de vitesse.',
        price: 'CHF 2.490',
        features: ['Analyse d\'architecture', 'Refactorisation de code critique', 'CDN Enterprise', 'Monitoring RUM', 'Conseil technique', 'Formation équipe'],
        buttonText: 'Contactez-nous',
    },
];

const maintenanceTiers: PricingTier[] = [
    {
        name: 'Basique',
        description: 'Maintenance essentielle pour la sécurité.',
        price: 'CHF 99',
        period: '/mois',
        features: ['Mises à jour plugins/core', 'Sauvegarde hebdomadaire', 'Monitoring 24/7', 'Support par email'],
        buttonText: 'Souscrire',
    },
    {
        name: 'Pro',
        description: 'Sécurité et performance garanties.',
        price: 'CHF 229',
        period: '/mois',
        features: ['Mises à jour prioritaires', 'Sauvegarde quotidienne', 'Monitoring avancé', 'Heures de développement (2h)', 'Optimisation de performance', 'Support prioritaire'],
        buttonText: 'Souscrire',
        highlight: true,
    },
    {
        name: 'Enterprise',
        description: 'Gestion complète de votre environnement numérique.',
        price: 'Sur Devis',
        period: '/mois',
        features: ['Mises à jour en temps réel', 'Sauvegardes multi-sites', 'Monitoring de sécurité proactif', 'Développement continu', 'SLA Garanti', 'Gestionnaire de compte'],
        buttonText: 'Contactez-nous',
    },
];

export default function ServicesPage() {
    return (
        <div className="bg-vortex-black min-h-screen">
            <Navbar />

            {/* Page Header */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-vortex-accent/5 blur-[120px] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <Reveal>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
                            Nos <span className="text-vortex-accent">Services</span>
                        </h1>
                        <p className="text-xl text-vortex-muted max-w-2xl mx-auto font-light leading-relaxed">
                            Solutions complètes pour développer votre présence numérique.
                            Choisissez le forfait idéal pour votre étape actuelle.
                        </p>
                    </Reveal>
                </div>
            </section>

            <ServicePricingSection
                category="Développement"
                title="Création de Sites & Apps"
                subtitle="Choisissez la solution qui correspond à vos besoins et à votre budget."
                tiers={webDevTiers}
                colorTheme="vortex"
            />

            <ServicePricingSection
                category="Visibilité"
                title="Optimisation SEO"
                subtitle="Augmentez votre visibilité sur Google avec nos stratégies de recherche."
                tiers={seoTiers}
                colorTheme="green"
            />

            <ServicePricingSection
                category="Trafic Payant"
                title="Google Ads & Performance"
                subtitle="Générez plus de leads et de ventes avec des campagnes optimisées."
                tiers={adsTiers}
                colorTheme="orange"
            />

            <ServicePricingSection
                category="Vitesse"
                title="Optimisation de Performance"
                subtitle="Accélérez votre site pour une meilleure expérience utilisateur et un meilleur SEO."
                tiers={performanceTiers}
                colorTheme="blue"
            />

            <ServicePricingSection
                category="Support"
                title="Maintenance & Sécurité"
                subtitle="Gardez votre site toujours à jour, sécurisé et rapide."
                tiers={maintenanceTiers}
                colorTheme="purple"
            />

            <Contact />
        </div>
    );
}
