import { Outfit, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import type { Metadata, Viewport } from 'next';
import './globals.css';

import { WhatsAppButton } from '../../components/WhatsAppButton';
import { ModalProvider } from '../context/ModalContext';
import StructuredData from '../../components/StructuredData';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#000000',
};

export const metadata: Metadata = {
    metadataBase: new URL('https://vortex-dev.com'),
    title: {
        default: 'VORTEX.DEV | Agence Web & Développement Next.js Suisse',
        template: '%s | VORTEX.DEV'
    },
    description: 'Transformez votre présence en ligne avec VORTEX.DEV. Agence spécialisée en développement Next.js haute performance, design UI/UX et solutions digitales à Genève.',
    keywords: [
        'Agence Web Genève', 'Développement Next.js', 'Création Site Web Suisse', 'React Developer',
        'SEO Technique', 'Application Mobile', 'Vortex Dev', 'Agence digitale Suisse', 'Web Design Genève',
        'Développeur Freelance Suisse', 'Refonte site internet', 'Création site e-commerce',
        'Site vitrine premium', 'Agence SEO Genève', 'Optimisation performance web', 'Expertise React',
        'Développement application web', 'Logiciel sur mesure', 'Design System', 'Transformation digitale',
        'Next.js Expert', 'Agence création site web', 'Maintenance site web', 'Sécurité web',
        'Hébergement web Suisse', 'Site internet professionnel', 'Identité visuelle', 'UX Research',
        'Prototypage Figma', 'Développement Front-end', 'Développement Back-end', 'API Integration',
        'Web App Progressive (PWA)', 'Consulting Tech', 'Agence marketing digital', 'Growth Hacking',
        'Référencement Google', 'Lausanne', 'Zurich', 'Vaud'
    ],
    authors: [{ name: 'VORTEX.DEV Team' }],
    creator: 'VORTEX.DEV',
    openGraph: {
        type: 'website',
        locale: 'fr_CH',
        url: 'https://vortex-dev.com',
        title: 'VORTEX.DEV | L\'élite du Développement Web Suisse',
        description: 'Nous construisons des produits numériques ultra-rapides et sécurisés qui convertissent.',
        siteName: 'VORTEX.DEV',
        images: [{
            url: '/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'VORTEX.DEV Digital Agency',
        }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'VORTEX.DEV | Agence Web Next.js',
        description: 'Performance, Design, Résultat. Votre partenaire technologique en Suisse.',
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'votre-code-google-verification', // Placeholder
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr-CH" className={`${outfit.variable} ${spaceGrotesk.variable}`}>
            <body className="bg-vortex-black antialiased">
                {/* Google Analytics / Ads Scripts */}
                {/* <Script
                    src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-XXXXXXXXX');
                    `}
                </Script> */}

                <ModalProvider>
                    {children}
                    <WhatsAppButton />
                </ModalProvider>
                <StructuredData />
            </body>
        </html>
    );
}
