'use client';

import React, { useState } from 'react';
import { Send, AlertCircle } from 'lucide-react';
import { z } from 'zod';

interface ContactFormProps {
    className?: string;
    onSubmit?: (e: React.FormEvent) => void;
    context?: string;
}

// Validation Schema
const formSchema = z.object({
    name: z.string().min(2, "Le nom doit comporter au moins 2 caractères"),
    company: z.string().min(2, "L'entreprise doit comporter au moins 2 caractères"),
    source: z.string().min(1, "Veuillez sélectionner une option"),
    budget: z.string().optional(),
    email: z.string().email("Email invalide"),
    phone: z.string().min(10, "Numéro de téléphone trop court"),
    message: z.string().min(10, "Le message doit comporter au moins 10 caractères"),
});

type FormData = z.infer<typeof formSchema>;

export const ContactForm: React.FC<ContactFormProps> = ({ className = '', onSubmit, context = '' }) => {
    const isTemplate = context.toLowerCase().includes('template');

    const [formData, setFormData] = useState<FormData>({
        name: '',
        company: '',
        source: '',
        budget: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        // Clear error when user types
        if (errors[id]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[id];
                return newErrors;
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Custom validation for Budget (required only if NOT template)
        const result = formSchema.safeParse(formData);
        const newErrors: Record<string, string> = {};

        if (!result.success) {
            result.error.issues.forEach(issue => {
                newErrors[String(issue.path[0])] = issue.message;
            });
        }

        // Manually check budget if not template
        if (!isTemplate && !formData.budget) {
            newErrors.budget = "Veuillez sélectionner un budget";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsSubmitting(false);
            return;
        }

        // Success
        console.log('Form validated successfully:', formData);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            if (onSubmit) onSubmit(e);
            alert('Formulaire envoyé avec succès ! (Simulation)');
        }, 1000);
    };

    const getInputClass = (fieldName: string) => `
        w-full bg-white/5 border rounded-sm p-4 text-white focus:outline-none transition-all
        ${errors[fieldName]
            ? 'border-red-500/50 focus:border-red-500 bg-red-500/5'
            : 'border-white/10 focus:border-vortex-accent focus:bg-white/10'
        }
    `;

    return (
        <form className={`space-y-6 relative z-10 ${className}`} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-vortex-accent uppercase tracking-widest">Nom</label>
                    <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className={getInputClass('name')}
                        placeholder="Votre nom"
                    />
                    {errors.name && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={12} /> {errors.name}</p>}
                </div>
                <div className="space-y-2">
                    <label htmlFor="company" className="text-xs font-bold text-vortex-accent uppercase tracking-widest">Entreprise</label>
                    <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className={getInputClass('company')}
                        placeholder="Votre entreprise"
                    />
                    {errors.company && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={12} /> {errors.company}</p>}
                </div>
            </div>

            <div className={`grid grid-cols-1 ${isTemplate ? '' : 'md:grid-cols-2'} gap-6`}>
                <div className="space-y-2">
                    <label htmlFor="source" className="text-xs font-bold text-vortex-accent uppercase tracking-widest">Comment vous nous avez connus ?</label>
                    <select
                        id="source"
                        value={formData.source}
                        onChange={handleChange}
                        className={`${getInputClass('source')} appearance-none cursor-pointer`}
                    >
                        <option value="" className="bg-vortex-dark text-gray-400">Sélectionnez...</option>
                        <option value="linkedin" className="bg-vortex-dark text-white">LinkedIn</option>
                        <option value="google" className="bg-vortex-dark text-white">Google</option>
                        <option value="referral" className="bg-vortex-dark text-white">Recommandation</option>
                        <option value="other" className="bg-vortex-dark text-white">Autre</option>
                    </select>
                    {errors.source && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={12} /> {errors.source}</p>}
                </div>
                {!isTemplate && (
                    <div className="space-y-2">
                        <label htmlFor="budget" className="text-xs font-bold text-vortex-accent uppercase tracking-widest">Budget Estimé</label>
                        <select
                            id="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className={`${getInputClass('budget')} appearance-none cursor-pointer`}
                        >
                            <option value="" className="bg-vortex-dark text-gray-400">Sélectionnez...</option>
                            <option value="sm" className="bg-vortex-dark text-white">Jusqu'à CHF 5k</option>
                            <option value="md" className="bg-vortex-dark text-white">CHF 5k - CHF 10k</option>
                            <option value="lg" className="bg-vortex-dark text-white">CHF 10k - CHF 20k</option>
                            <option value="xl" className="bg-vortex-dark text-white">+CHF 20k</option>
                        </select>
                        {errors.budget && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={12} /> {errors.budget}</p>}
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-vortex-accent uppercase tracking-widest">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={getInputClass('email')}
                        placeholder="votre@email.com"
                    />
                    {errors.email && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={12} /> {errors.email}</p>}
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold text-vortex-accent uppercase tracking-widest">Téléphone</label>
                    <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className={getInputClass('phone')}
                        placeholder="+41 79 000 00 00"
                    />
                    {errors.phone && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={12} /> {errors.phone}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-vortex-accent uppercase tracking-widest">Message</label>
                <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={getInputClass('message')}
                    placeholder="Décrivez votre projet..."
                ></textarea>
                {errors.message && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={12} /> {errors.message}</p>}
            </div>

            <button
                disabled={isSubmitting}
                className="w-full bg-vortex-accent text-black font-bold text-lg py-4 rounded-sm hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Envoi...' : 'Envoyer'}
                {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            </button>
        </form>
    );
};
