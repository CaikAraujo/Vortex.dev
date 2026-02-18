import dynamic from 'next/dynamic';
import { Navbar } from '../../components/Navbar';
import { Hero } from '../../components/Hero';
import { Metadata } from 'next';

// Lazy load components below the fold for better initial load performance
const Services = dynamic(() => import('../../components/Services').then(mod => mod.Services));
const Testimonials = dynamic(() => import('../../components/Testimonials').then(mod => mod.Testimonials));
const WhyChooseUs = dynamic(() => import('../../components/WhyChooseUs').then(mod => mod.WhyChooseUs));
const Contact = dynamic(() => import('../../components/Contact').then(mod => mod.Contact));

export const metadata: Metadata = {
    title: 'Agence de Développement & Design Premium',
    description: 'Agence de développement web premium en Suisse. Experts Next.js pour des sites ultra-rapides et des applications web sur mesure.',
};

export default function Home() {
    return (
        <div className="bg-athana-black min-h-screen text-athana-text selection:bg-athana-accent selection:text-black">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <WhyChooseUs />
                <Testimonials />
                <Contact />
            </main>
        </div>
    );
}
