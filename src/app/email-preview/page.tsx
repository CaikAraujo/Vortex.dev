'use client';

import React from 'react';
import { IncomingTransmission } from '../../../components/IncomingTransmission';
import { ClientData, ProjectType, BudgetRange } from '../../../types';

// Mock data representing a real client submission for Vortex
const PREVIEW_DATA: ClientData = {
    name: "Caik Araujo",
    email: "caik.dantas007@gmail.com",
    company: "Tech Ventures Ltda",
    projectType: ProjectType.WEB_APP,
    budget: BudgetRange.MID,
    deadline: "Urgent (30 Jours)",
    description: "Bonjour, je suis le travail de Vortex.dev depuis un moment et j'aimerais un devis pour un système SaaS. J'ai besoin d'un panneau d'administration avec un design dark/néon, similaire à votre style. Le système doit avoir une connexion sociale et un tableau de bord de métriques en temps réel.",
    timestamp: new Date().toLocaleString('fr-CH', { dateStyle: 'full', timeStyle: 'short' })
};

export default function EmailPreviewPage() {
    return (
        <div className="min-h-screen w-full relative flex flex-col items-center justify-center p-4 md:p-8 bg-black">

            {/* Background (Simplified VortexBackground) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-20%] w-[70%] h-[70%] bg-neon-purple/20 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-[-20%] right-[-20%] w-[70%] h-[70%] bg-neon-blue/20 blur-[150px] rounded-full"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            <header className="absolute top-6 left-6 z-20">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 border-2 border-white/50 flex items-center justify-center rounded-sm rotate-45">
                        <div className="w-3 h-3 bg-neon-blue rounded-full animate-pulse" />
                    </div>
                    <h1 className="font-display text-xl font-bold tracking-widest text-white/80">
                        PREVIEW<span className="text-neon-blue">.MODE</span>
                    </h1>
                </div>
            </header>

            <main className="relative z-10 w-full flex items-center justify-center">
                <IncomingTransmission data={PREVIEW_DATA} />
            </main>

        </div>
    );
}
