import React, { useState } from 'react';
import { Check, Sparkles, Zap } from 'lucide-react';
import { PRICING } from '../constants';
import { Reveal } from './ui/Section';

export const Pricing: React.FC = () => {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section id="pricing" className="py-32 bg-vortex-black border-y border-white/5 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-vortex-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal className="text-center mb-24">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Investimento <span className="text-vortex-accent">.</span>
          </h2>
          <p className="text-vortex-muted text-lg max-w-2xl mx-auto font-light">
            Transparência total. Escolha a arquitetura ideal para o estágio atual do seu negócio.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {PRICING.map((tier, index) => {
            // O plano do meio (Scale) é o destaque por padrão se nenhum estiver hovered, ou se hover lógico customizado fosse necessário.
            // Aqui usamos a prop 'highlight' do objeto.
            const isHighlighted = tier.highlight;

            return (
              <Reveal key={tier.id} delay={index * 150} className={`h-full ${isHighlighted ? 'lg:-mt-4 lg:-mb-4 z-20' : 'z-10'}`}>
                <div
                  onMouseEnter={() => setHoveredPlan(tier.id)}
                  onMouseLeave={() => setHoveredPlan(null)}
                  className={`
                    h-full relative p-8 md:p-10 flex flex-col transition-all duration-500 ease-out
                    ${isHighlighted
                      ? 'bg-vortex-dark/80 border-vortex-accent shadow-[0_0_50px_-10px_rgba(0,240,255,0.15)] rounded-2xl border'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/10 rounded-xl border'
                    }
                    backdrop-blur-xl
                  `}
                >
                  {/* Recommended Badge */}
                  {isHighlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-vortex-accent text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                      <Sparkles className="w-3 h-3 fill-current" />
                      Recommended
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-8 border-b border-white/5 pb-8">
                    <h3 className={`font-display text-xl font-bold mb-4 flex items-center gap-2 ${isHighlighted ? 'text-vortex-accent' : 'text-white'}`}>
                      {tier.name}
                      {isHighlighted && <span className="w-2 h-2 rounded-full bg-vortex-accent animate-pulse"></span>}
                    </h3>

                    <div className="flex items-baseline gap-1">
                      <span className="text-vortex-muted text-lg font-light">R$</span>
                      <span className={`text-5xl md:text-6xl font-bold font-display tracking-tight ${isHighlighted ? 'text-white' : 'text-white/80'}`}>
                        {tier.price.replace('R$ ', '')}
                      </span>
                    </div>
                    <p className="text-vortex-muted text-sm mt-4 leading-relaxed">{tier.description}</p>
                  </div>

                  {/* Features */}
                  <div className="flex-grow space-y-5 mb-10">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 group/item">
                        <div className={`
                            mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors
                            ${feature.included
                            ? (isHighlighted ? 'bg-vortex-accent text-black' : 'bg-white/10 text-white')
                            : 'bg-transparent border border-white/5 text-white/20'
                          }
                        `}>
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </div>
                        <span className={`text-sm transition-colors ${feature.included ? 'text-gray-300 group-hover/item:text-white' : 'text-gray-600 line-through'}`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    aria-label={`Select ${tier.name} Plan`}
                    className={`
                      w-full py-5 rounded-lg font-bold text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 group
                      ${isHighlighted
                        ? 'bg-vortex-accent text-black hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]'
                        : 'bg-white/5 text-white hover:bg-white hover:text-black border border-white/5 hover:border-white'
                      }
                    `}
                  >
                    Select Plan
                    <span className="group-hover:translate-x-1 transition-transform">_&gt;</span>
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={400} className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-vortex-accent" />
            <p className="text-vortex-muted text-sm">
              Enterprise? <a href="#contact" className="text-white font-bold hover:text-vortex-accent transition-colors border-b border-transparent hover:border-vortex-accent ml-1">Fale com nossos engenheiros</a> para uma solução customizada.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};