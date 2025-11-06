
import React, { useState, useEffect, useRef } from 'react';
import { PhoneIcon } from './components/icons/PhoneIcon';
import { EmailIcon } from './components/icons/EmailIcon';
import { LocationIcon } from './components/icons/LocationIcon';
import { InstagramIcon } from './components/icons/InstagramIcon';

// Custom hook for observing elements
const useOnScreen = (options: IntersectionObserverInit) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return [ref, isVisible];
};


const AnimatedSection: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className || ''}`}>
            {children}
        </div>
    );
};

const ParallaxSection: React.FC<{ imageUrl: string; children: React.ReactNode; className?: string }> = ({ imageUrl, children, className }) => {
    return (
        <div
            className={`relative py-20 md:py-32 parallax ${className || ''}`}
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative container mx-auto px-6 z-10">
                {children}
            </div>
        </div>
    );
};

const LogoImage: React.FC<{ className?: string }> = ({ className }) => {
    const imageUrl = "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1762410970906_THE_NEXT_logo_web.png?alt=media&token=db1aeaec-37a0-4049-8830-14c59efe6f0f";
    return (
        <img src={imageUrl} alt="THE NEXT Riviera Logo" className={`object-contain ${className || ''}`} />
    );
};

const Hero: React.FC = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const events = [
        { date: 'FRI 24/08', name: 'NEON NIGHTS', dj: 'DJ Alex' },
        { date: 'SAT 25/08', name: 'IBIZA VIBES', dj: 'Special Guest' },
        { date: 'SUN 26/08', name: 'LATIN SUNDAYS', dj: 'DJ Rico' },
    ];

    return (
        <section 
            className="h-screen min-h-[700px] bg-cover flex items-center justify-center relative text-white" 
            style={{
                backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1762411624248_the_next_riviera.png?alt=media&token=824ae56b-396d-4713-b6aa-14bb1d3acc5d')",
                backgroundPosition: `center calc(50% + ${offsetY * 0.5}px)`
            }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
            <div className="relative container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center w-full gap-8">
                <div className="flex justify-center lg:justify-start">
                     <div className="w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] flex items-center justify-center">
                        <LogoImage className="w-full h-full" />
                    </div>
                </div>
               
                <div className="w-full max-w-sm bg-black/40 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <h3 className="font-bebas text-3xl text-yellow-300 neon-text-yellow mb-4 tracking-wider">Upcoming Events</h3>
                    <div className="space-y-4">
                        {events.map((event, index) => (
                            <div key={index} className="flex items-center border-b border-white/10 pb-2 last:border-b-0">
                                <div className="text-center border-r border-pink-400/50 pr-4 mr-4">
                                    <p className="font-bold text-lg leading-tight">{event.date.split(' ')[0]}</p>
                                    <p className="text-sm text-gray-300 leading-tight">{event.date.split(' ')[1]}</p>
                                </div>
                                <div>
                                    <p className="font-bold text-white text-lg">{event.name}</p>
                                    <p className="text-sm text-gray-300">{event.dj}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
             <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
        </section>
    );
};

const About: React.FC = () => (
    <ParallaxSection imageUrl="https://picsum.photos/1920/1080?random=2">
        <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center bg-black/50 backdrop-blur-sm p-8 rounded-lg">
                <h2 className="font-bebas text-5xl md:text-6xl text-yellow-300 neon-text-yellow mb-4 tracking-wider">Experience the Night</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                    THE NEXT Riviera is not just a venue; it's an experience. Nestled in the heart of Mijas, we bring you the ultimate nightlife destination with world-class DJs, electrifying light shows, and an atmosphere that's second to none. Get ready to dance until dawn.
                </p>
            </div>
        </AnimatedSection>
    </ParallaxSection>
);

const Gallery: React.FC = () => {
    const images = Array.from({ length: 8 }, (_, i) => `https://picsum.photos/600/600?random=${i + 10}`);

    return (
        <section className="py-20 bg-[#050214]">
            <div className="container mx-auto px-6 text-center">
                 <AnimatedSection>
                    <h2 className="font-bebas text-5xl md:text-6xl text-yellow-300 neon-text-yellow mb-10 tracking-wider">Our Vibe</h2>
                </AnimatedSection>
                <AnimatedSection>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {images.map((src, index) => (
                            <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
                                <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
                            </div>
                        ))}
                    </div>
                 </AnimatedSection>
            </div>
        </section>
    );
};

const Footer: React.FC = () => {
    const address = "C. Libra, 11, 29649 Mijas, Málaga";
    const mapsUrl = "https://maps.app.goo.gl/JXnNYcPMBTB5coJBA";

    return (
        <footer className="bg-black text-white pt-12 pb-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 text-center md:text-left">
                    {/* Left Column: Logo */}
                    <div className="flex flex-col items-center">
                        <div className="w-56"> 
                            <LogoImage className="w-full h-auto" />
                        </div>
                    </div>

                    {/* Right Column: Social, Contact & Location */}
                    <div className="flex flex-col items-center md:items-start space-y-3">
                        <a href="https://www.instagram.com/thenext.riviera" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-colors duration-300">
                            <InstagramIcon className="w-8 h-8"/>
                        </a>
                        <h4 className="font-bebas text-xl text-yellow-300 tracking-wider">MAKE YOUR RESERVATION</h4>
                        <a href="tel:+34692970200" className="flex items-center justify-center md:justify-start gap-3 group text-sm">
                            <PhoneIcon className="w-5 h-5 text-yellow-300"/>
                            <span className="group-hover:text-yellow-300 transition-colors">+34 692 97 02 00</span>
                        </a>
                        <a href="mailto:info@the-next.es" className="flex items-center justify-center md:justify-start gap-3 group text-sm">
                            <EmailIcon className="w-5 h-5 text-yellow-300"/>
                            <span className="group-hover:text-yellow-300 transition-colors">info@the-next.es</span>
                        </a>
                         <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 group text-sm">
                            <LocationIcon className="w-5 h-5 text-yellow-300 flex-shrink-0"/>
                            <span className="group-hover:text-yellow-300 transition-colors">{address}</span>
                        </a>
                    </div>
                </div>
                <div className="mt-10 text-center text-xs text-gray-500">
                    <p>&copy; 2025 THE NEXT Riviera. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};


function App() {
    return (
        <main>
            <Hero />
            <About />
            <Gallery />
            <Footer />
        </main>
    );
}

export default App;
