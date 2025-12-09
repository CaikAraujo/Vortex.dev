import type { Metadata } from 'next';
import './globals.css';

import { WhatsAppButton } from '../../components/WhatsAppButton';
import { ModalProvider } from '../context/ModalContext';

export const metadata: Metadata = {
    title: 'VORTEX.DEV | Agência Digital',
    description: 'Transformamos código em resultados.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr-CH">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700&family=Space+Grotesk:wght@300;400;600;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <ModalProvider>
                    {children}
                    <WhatsAppButton />
                </ModalProvider>
            </body>
        </html>
    );
}
