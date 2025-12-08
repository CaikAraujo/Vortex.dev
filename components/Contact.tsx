'use client';

import React from 'react';
import { Send, Mail, MapPin, Phone, Terminal } from 'lucide-react';
import { Reveal } from './ui/Section';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-vortex-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div className="space-y-12">
            <Reveal>
              <h2 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight">
                LET'S BUILD <br />
                THE <span className="text-vortex-accent">IMPOSSIBLE.</span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-xl text-vortex-muted font-light">
                Tem um desafio técnico complexo ou uma ideia disruptiva? Nossa equipe de engenharia está pronta.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-300 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center text-vortex-accent group-hover:bg-vortex-accent group-hover:text-black transition-colors">
                    <Mail size={20} />
                  </div>
                  <span className="group-hover:text-vortex-accent transition-colors">hello@vortex.dev</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center text-vortex-accent group-hover:bg-vortex-accent group-hover:text-black transition-colors">
                    <Phone size={20} />
                  </div>
                  <span className="group-hover:text-vortex-accent transition-colors">+55 (11) 98888-7777</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center text-vortex-accent group-hover:bg-vortex-accent group-hover:text-black transition-colors">
                    <MapPin size={20} />
                  </div>
                  <span className="group-hover:text-vortex-accent transition-colors">Av. Faria Lima, 3000 - SP</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={400} className="bg-vortex-black p-8 md:p-12 rounded-sm border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Terminal size={120} />
            </div>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-vortex-accent uppercase tracking-widest">Nome</label>
                  <input id="name" type="text" className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-white focus:border-vortex-accent focus:bg-white/10 focus:outline-none transition-all" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-xs font-bold text-vortex-accent uppercase tracking-widest">Empresa</label>
                  <input id="company" type="text" className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-white focus:border-vortex-accent focus:bg-white/10 focus:outline-none transition-all" placeholder="Sua empresa" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="source" className="text-xs font-bold text-vortex-accent uppercase tracking-widest">Como nos conheceu?</label>
                  <select id="source" className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-white focus:border-vortex-accent focus:bg-white/10 focus:outline-none transition-all appearance-none cursor-pointer">
                    <option value="" className="bg-vortex-dark text-gray-400">Selecione...</option>
                    <option value="linkedin" className="bg-vortex-dark text-white">LinkedIn</option>
                    <option value="google" className="bg-vortex-dark text-white">Google</option>
                    <option value="referral" className="bg-vortex-dark text-white">Indicação</option>
                    <option value="other" className="bg-vortex-dark text-white">Outro</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="budget" className="text-xs font-bold text-vortex-accent uppercase tracking-widest">Orçamento Estimado</label>
                  <select id="budget" className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-white focus:border-vortex-accent focus:bg-white/10 focus:outline-none transition-all appearance-none cursor-pointer">
                    <option value="" className="bg-vortex-dark text-gray-400">Selecione...</option>
                    <option value="sm" className="bg-vortex-dark text-white">Até R$ 5k</option>
                    <option value="md" className="bg-vortex-dark text-white">R$ 5k - R$ 10k</option>
                    <option value="lg" className="bg-vortex-dark text-white">R$ 10k - R$ 20k</option>
                    <option value="xl" className="bg-vortex-dark text-white">+R$ 20k</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold text-vortex-accent uppercase tracking-widest">Email</label>
                <input id="email" type="email" className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-white focus:border-vortex-accent focus:bg-white/10 focus:outline-none transition-all" placeholder="seu@email.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-vortex-accent uppercase tracking-widest">Mensagem</label>
                <textarea id="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-white focus:border-vortex-accent focus:bg-white/10 focus:outline-none transition-all" placeholder="Descreva seu projeto..."></textarea>
              </div>

              <button className="w-full bg-vortex-accent text-black font-bold text-lg py-4 rounded-sm hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group">
                Enviar Dados
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </Reveal>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-vortex-muted text-sm">
        <p>&copy; 2024 VORTEX.DEV. All systems operational.</p>
        <div className="flex gap-6 mt-4 md:mt-0 font-mono">
          <a href="#" className="hover:text-vortex-accent transition-colors">GITHUB</a>
          <a href="#" className="hover:text-vortex-accent transition-colors">LINKEDIN</a>
          <a href="#" className="hover:text-vortex-accent transition-colors">TWITTER</a>
        </div>
      </div>
    </section>
  );
};