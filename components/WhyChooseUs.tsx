'use client';

import React from 'react';
import { Shield, Zap, UserCheck, Check, X, ArrowRight } from 'lucide-react';
import { Reveal } from './ui/Section';

export const WhyChooseUs = () => {
    return (
        <section className="py-32 bg-vortex-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-vortex-accent/5 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <Reveal className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        Performance d'Élite & <span className="text-vortex-accent">Gestion Concierge.</span>
                    </h2>
                    <h3 className="text-xl text-vortex-muted max-w-3xl mx-auto font-light leading-relaxed">
                        Nous ne sommes pas seulement une agence web. Nous sommes votre département technologique.
                        Nous allions la vitesse de <span className="text-white font-semibold">Next.js</span> à un service de gestion complet.
                        Vous vous concentrez sur votre activité, nous nous occupons de chaque pixel et de chaque ligne de code.
                    </h3>
                </Reveal>

                {/* 3 Differentials Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {/* Card 1 */}
                    <Reveal delay={100} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-vortex-accent/30 transition-all group">
                        <div className="w-14 h-14 bg-vortex-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Zap className="text-vortex-accent" size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-4">Technologie de Pointe (Adieu, WordPress)</h4>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Alors que le marché s'accroche à des technologies anciennes et lentes, nous bâtissons l'avenir avec Next.js — l'infrastructure utilisée par Netflix et Uber.
                        </p>
                        <div className="border-t border-white/5 pt-4">
                            <p className="text-vortex-accent text-xs font-bold uppercase tracking-wider">
                                Le Résultat :
                            </p>
                            <p className="text-white text-sm mt-1">
                                Des sites qui chargent instantanément et dominent le SEO Google.
                            </p>
                        </div>
                    </Reveal>

                    {/* Card 2 */}
                    <Reveal delay={200} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-vortex-accent/30 transition-all group">
                        <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <UserCheck className="text-purple-400" size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-4">La Fin du "Faites-le Vous-même"</h4>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Fatigué d'essayer d'éditer votre site et de "casser" la mise en page ? Avec notre modèle Concierge Digital, plus besoin de toucher au code ou à des tableaux de bord complexes.
                        </p>
                        <div className="border-t border-white/5 pt-4">
                            <p className="text-purple-400 text-xs font-bold uppercase tracking-wider">
                                Comment ça marche :
                            </p>
                            <p className="text-white text-sm mt-1">
                                Un changement ? Envoyez-le nous. Nous l'exécutons sans compromettre le design.
                            </p>
                        </div>
                    </Reveal>

                    {/* Card 3 */}
                    <Reveal delay={300} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-vortex-accent/30 transition-all group">
                        <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Shield className="text-emerald-400" size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-4">Sécurité et Stabilité Suisse</h4>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Les sites ordinaires dépendent de plugins vulnérables. Notre architecture est statique et blindée.
                        </p>
                        <div className="border-t border-white/5 pt-4">
                            <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
                                La Garantie :
                            </p>
                            <p className="text-white text-sm mt-1">
                                Pas de virus, pas de plugins obsolètes. Précision d'une horloge suisse 24/7.
                            </p>
                        </div>
                    </Reveal>
                </div>

                {/* Comparison Table */}
                <Reveal delay={400} className="max-w-5xl mx-auto">
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10">
                                    <th className="p-6 text-gray-400 font-medium uppercase text-xs tracking-widest w-1/3">Critère</th>
                                    <th className="p-6 text-gray-400 font-medium uppercase text-xs tracking-widest w-1/3">Agences Traditionnelles (WP/Wix)</th>
                                    <th className="p-6 text-vortex-accent font-bold uppercase text-xs tracking-widest w-1/3 bg-vortex-accent/5">VORTEX.DEV (Next.js)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                <tr>
                                    <td className="p-6 text-white font-bold">Vitesse</td>
                                    <td className="p-6 text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-red-500"></div> Lente/Moyenne (Perte de clients)
                                        </div>
                                    </td>
                                    <td className="p-6 text-white bg-vortex-accent/5">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-vortex-accent shadow-[0_0_8px_cyan]"></div> Instantanée (Fidélise les clients)
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-6 text-white font-bold">Maintenance</td>
                                    <td className="p-6 text-gray-400">Vous la faites (Risque d'erreur)</td>
                                    <td className="p-6 text-white bg-vortex-accent/5">
                                        <div className="flex items-center gap-2">
                                            Nous la faisons (Concierge)
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-6 text-white font-bold">Sécurité</td>
                                    <td className="p-6 text-gray-400">Vulnérable aux Plugins/Hackers</td>
                                    <td className="p-6 text-white bg-vortex-accent/5">
                                        <div className="flex items-center gap-2">
                                            Blindée (Architecture Sécurisée)
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-6 text-white font-bold">SEO Google</td>
                                    <td className="p-6 text-gray-400">Optimisation Basique</td>
                                    <td className="p-6 text-white bg-vortex-accent/5 font-bold text-vortex-accent">Natif & Prioritaire</td>
                                </tr>
                                <tr>
                                    <td className="p-6 text-white font-bold">Focus</td>
                                    <td className="p-6 text-gray-400">Livrer le site et disparaître</td>
                                    <td className="p-6 text-white bg-vortex-accent/5">Partenariat à Long Terme</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Reveal>

                {/* CTA */}
                <Reveal delay={500} className="text-center mt-20">
                    <a href="#contact" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-vortex-accent transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] cursor-pointer group">
                        Je veux un site Haute Performance sans maux de tête
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <p className="text-gray-500 mt-4 text-sm uppercase tracking-widest">
                        Réservez une consultation gratuite et découvrez le potentiel de votre projet.
                    </p>
                </Reveal>

            </div>
        </section>
    );
};
