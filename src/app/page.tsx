import { Navbar } from '../../components/Navbar';
import { Hero } from '../../components/Hero';
import { WhyChooseUs } from '../../components/WhyChooseUs';
import { Services } from '../../components/Services';
import { Pricing } from '../../components/Pricing';
import { Testimonials } from '../../components/Testimonials';
import { Contact } from '../../components/Contact';
import { Workflow } from '../../components/Workflow';

export default function Home() {
    return (
        <div className="bg-vortex-black min-h-screen text-vortex-text selection:bg-vortex-accent selection:text-black">
            <Navbar />
            <main>
                <Hero />
                <Pricing />
                <Testimonials />
                <WhyChooseUs />
                <Contact />
            </main>
        </div>
    );
}
