'use client';

import React from 'react';
import { ArrowRight, ShoppingCart, Layout, Smartphone, Zap } from 'lucide-react';
import { Reveal } from './ui/Section';

export interface TemplateProduct {
    id: string;
    name: string;
    category: string;
    price: string;
    description: string;
    imageGradient: string; // CSS gradient for placeholder
    features: string[];
}

interface TemplateCardProps {
    template: TemplateProduct;
    index: number;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, index }) => {
    return (
        <div className="group relative bg-vortex-dark/50 border border-white/5 rounded-2xl overflow-hidden hover:border-vortex-accent/40 hover:shadow-[0_0_40px_-10px_rgba(0,240,255,0.15)] transition-all duration-500 h-full flex flex-col">
            {/* Image / Preview Placeholder */}
            <div className={`h-48 w-full ${template.imageGradient} relative overflow-hidden group-hover:scale-105 transition-transform duration-700`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10">
                    {template.category}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-vortex-accent transition-colors">{template.name}</h3>
                    <p className="text-vortex-muted text-sm line-clamp-2">{template.description}</p>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                    {template.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-400">
                            <Zap size={14} className="text-vortex-accent" />
                            {feature}
                        </li>
                    ))}
                </ul>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                    <span className="text-2xl font-display font-bold text-white">{template.price}</span>
                    <button className="bg-white text-black hover:bg-vortex-accent font-bold py-2 px-4 rounded-lg flex items-center gap-2 text-sm transition-all duration-300 cursor-pointer">
                        Comprar
                        <ShoppingCart size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

interface TemplateGalleryProps {
    templates: TemplateProduct[];
}

export const TemplateGallery: React.FC<TemplateGalleryProps> = ({ templates }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => (
                <Reveal key={template.id} delay={index * 100}>
                    <TemplateCard template={template} index={index} />
                </Reveal>
            ))}
        </div>
    );
};
