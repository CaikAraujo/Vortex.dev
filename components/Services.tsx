import React from 'react';
import { Code2, Rocket, Palette, BarChart3, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { Reveal } from './ui/Section';
import { ServiceItem } from '../types';

const iconMap = {
  code: Code2,
  rocket: Rocket,
  palette: Palette,
  chart: BarChart3,
};

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const Icon = iconMap[service.icon];

  return (
    <div className="h-full group">
      <div className="relative h-full p-8 md:p-10 rounded-xl border border-white/10 bg-vortex-dark/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-vortex-accent/40 hover:shadow-[0_0_40px_-10px_rgba(0,240,255,0.15)] hover:translate-y-[-4px]">

        {/* Gradient Overlay Effect - Aurora Style */}
        <div className="absolute inset-0 bg-gradient-to-br from-vortex-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"></div>

        {/* Decorative Blur Blob */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-vortex-accent/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            <div className="mb-8 flex justify-between items-start">
              <div className="w-14 h-14 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-vortex-text group-hover:bg-vortex-accent group-hover:text-black group-hover:scale-110 transition-all duration-500 ease-out shadow-lg">
                <Icon className="w-7 h-7" />
              </div>
            </div>

            <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-vortex-accent transition-colors duration-300">
              {service.title}
            </h3>

            <p className="text-vortex-muted text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
              {service.description}
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-2 text-sm font-bold text-vortex-muted uppercase tracking-wider group-hover:text-vortex-accent transition-colors duration-300">
            Saiba mais
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-vortex-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern bg-[length:60px_60px] opacity-[0.03] pointer-events-none"></div>

      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vortex-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-white/5 pb-8">
          <Reveal>
            <div className="space-y-2">
              <span className="text-vortex-accent font-mono text-xs tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-vortex-accent rounded-full animate-pulse"></span>
                System Capabilities
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight">
                Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Stack</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-vortex-muted max-w-md text-right md:text-left text-lg font-light leading-relaxed">
              Arquitetura de software de alta performance. Construímos o motor que impulsiona o seu negócio digital.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 100} className="h-full">
              <ServiceCard service={service} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};