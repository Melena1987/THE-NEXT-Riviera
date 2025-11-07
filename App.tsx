import React, { useState, useEffect, useRef } from 'react';
import { PhoneIcon } from './components/icons/PhoneIcon';
import { EmailIcon } from './components/icons/EmailIcon';
import { LocationIcon } from './components/icons/LocationIcon';
import { InstagramIcon } from './components/icons/InstagramIcon';
import { MusicNoteIcon } from './components/icons/MusicNoteIcon';
import { CocktailIcon } from './components/icons/CocktailIcon';
import { UsersIcon } from './components/icons/UsersIcon';
import { StarIcon } from './components/icons/StarIcon';
import { ClockIcon } from './components/icons/ClockIcon';

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
                backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1762456508235_the_next.jpg?alt=media&token=a31ea93d-05f2-4e03-b8a5-41e9bbb1415b')",
                backgroundPosition: `center calc(50% + ${offsetY * 0.5}px)`
            }}>
            <div className="relative container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center w-full gap-8 z-10">
                <div className="flex justify-center lg:justify-start">
                     <div className="w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] flex items-center justify-center">
                        <LogoImage className="w-full h-full" />
                    </div>
                </div>
               
                {/* ----- CÓDIGO MODIFICADO ----- */}
                {/* Contenedor para la columna derecha (Eventos + Botón) */}
                <div className="flex flex-col items-center w-full max-w-sm">
                    
                    {/* Caja de Eventos */}
                    <div className="w-full bg-black/40 backdrop-blur-md rounded-lg p-6 border border-white/20">
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

                    {/* Botón CTA (Ahora fuera de la caja de eventos) */}
                    <div className="mt-6 text-center">
                        <a 
                            href="https://maps.app.goo.gl/JXnNYcPMBTB5coJBA" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
                        >
                            <LocationIcon className="w-6 h-6" />
                            <span>Cómo Llegar</span>
                        </a>
                    </div>
                </div>
                {/* ----- FIN CÓDIGO MODIFICADO ----- */}

            </div>
             <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
        </section>
    );
};

const About: React.FC = () => {
    const featuresData = [
        {
            icon: MusicNoteIcon,
            title: 'Live Music',
            description: 'The best DJs and live music every weekend.',
            iconColorClass: 'text-purple-400',
            glowClass: 'music-glow',
        },
        {
            icon: CocktailIcon,
            title: 'Premium Cocktails',
            description: 'An extensive menu of premium cocktails and drinks prepared by experts.',
            iconColorClass: 'text-pink-400',
            glowClass: 'cocktail-glow',
        },
        {
            icon: UsersIcon,
            title: 'Unique Atmosphere',
            description: 'A space designed to enjoy with friends in an exclusive atmosphere.',
            iconColorClass: 'text-blue-400',
            glowClass: 'users-glow',
        },
        {
            icon: StarIcon,
            title: 'VIP Experience',
            description: 'Table service and VIP areas for an unforgettable experience.',
            iconColorClass: 'text-yellow-300',
            glowClass: 'star-glow',
        },
    ];

    return (
        <ParallaxSection imageUrl="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1762411624248_the_next_riviera.png?alt=media&token=824ae56b-396d-4713-b6aa-14bb1d3acc5d">
            <AnimatedSection>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-bebas text-5xl md:text-6xl text-yellow-300 neon-text-yellow mb-4 tracking-wider">Experience the Night</h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-16">
                        THE NEXT Riviera is not just a venue; it's an experience. Nestled in the heart of Mijas, we bring you the ultimate nightlife destination with world-class DJs, electrifying light shows, and an atmosphere that's second to none. Get ready to dance until dawn.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {featuresData.map((feature, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-lg text-center border border-white/10 feature-card transform transition-transform duration-300 hover:scale-105">
                             <div className={`relative w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-black/20 ${feature.glowClass}`}>
                                <feature.icon className={`w-10 h-10 ${feature.iconColorClass}`} />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white font-bebas tracking-wider">{feature.title}</h3>
                            <p className="text-gray-400 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </AnimatedSection>
        </ParallaxSection>
    );
};

const Events: React.FC = () => {
    const events = [
        { date: 'FRI 24/08', name: 'NEON NIGHTS', dj: 'DJ Alex' },
        { date: 'SAT 25/08', name: 'IBIZA VIBES', dj: 'Special Guest' },
        { date: 'SUN 26/08', name: 'LATIN SUNDAYS', dj: 'DJ Rico' },
    ];
    
    const parallaxBgUrl = 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

    return (
        <ParallaxSection imageUrl={parallaxBgUrl}>
            <AnimatedSection>
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="font-bebas text-5xl md:text-6xl text-yellow-300 neon-text-yellow mb-4 tracking-wider">This Week's Lineup</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {events.map((event, index) => (
                         <div key={index} className="bg-black/50 backdrop-blur-md p-8 rounded-lg text-center border-2 border-purple-500/50 transform transition-all duration-300 hover:scale-105 hover:border-pink-500 neon-shadow-purple flex flex-col justify-between">
                            <div>
                                <p className="font-bebas text-5xl text-pink-400 tracking-widest">{event.date.split(' ')[0]}</p>
                                <p className="text-xl text-gray-300 mb-4">{event.date.split(' ')[1]}</p>
                           
                                <h3 className="font-bebas text-4xl text-white mb-2 tracking-wide">{event.name}</h3>
                                <p className="text-gray-400 text-lg">with {event.dj}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </AnimatedSection>
        </ParallaxSection>
    );
};

const Gallery: React.FC = () => {
    const galleryImages = [
        { src: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Live concert at THE NEXT Riviera' },
        { src: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Crowd dancing and enjoying the music' },
        { src: 'https://images.pexels.com/photos/3358707/pexels-photo-3358707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Bartender crafting a premium cocktail' },
        { src: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'DJ performing a set on the main stage' },
        { src: 'https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Guests socializing in the VIP area' },
        { src: 'https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Stunning light show on the dance floor' },
    ];
    
    const parallaxBgUrl = 'https://images.pexels.com/photos/2114365/pexels-photo-2114365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

    return (
        <ParallaxSection imageUrl={parallaxBgUrl}>
            <AnimatedSection>
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="font-bebas text-5xl md:text-6xl text-yellow-300 neon-text-yellow mb-4 tracking-wider">Our Vibe</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Capture the energy, the moments, and the memories. This is what a night at THE NEXT Riviera feels like.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
                    {galleryImages.map((image, index) => (
                         <div key={index} className="relative rounded-lg overflow-hidden group border-2 border-white/10 transform transition-transform duration-300 hover:scale-105 hover:border-pink-500">
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="w-full h-48 md:h-64 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </AnimatedSection>
        </ParallaxSection>
    );
};

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-black text-white">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <h2 className="font-bebas text-5xl md:text-6xl text-yellow-300 neon-text-yellow mb-12 text-center tracking-wider">Contact Us</h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="font-bebas text-3xl text-white tracking-wider">Get in Touch</h3>
                            <p className="text-gray-400">
                                Have questions or want to make a reservation? Reach out to us. We're here to make your night unforgettable.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <PhoneIcon className="w-6 h-6 text-pink-400" />
                                    <a href="tel:+34692970200" className="text-gray-300 hover:text-white transition-colors">+34 692 97 02 00</a>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <EmailIcon className="w-6 h-6 text-pink-400" />
                                    <a href="mailto:info@the-next.es" className="text-gray-300 hover:text-white transition-colors">info@the-next.es</a>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <LocationIcon className="w-6 h-6 text-pink-400" />
                                    <a href="https://maps.app.goo.gl/JXnNYcPMBTB5coJBA" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                        C. Libra, 11, 29649 Mijas, Málaga
                                    </a>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <ClockIcon className="w-6 h-6 text-pink-400" />
                                    <span className="text-gray-300">Thursday to Sunday from 5:00 PM</span>
                                </div>
                            </div>
                        </div>
                         <div>
                            <h3 className="font-bebas text-3xl text-white mb-4 tracking-wider">Follow Us</h3>
                            <p className="text-gray-400 mb-6">Stay updated with our latest events and behind-the-scenes moments on our social media.</p>
                            <a href="https://www.instagram.com/thenext.riviera" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105">
                                <InstagramIcon className="w-6 h-6" />
                                <span>@thenext.riviera</span>
                            </a>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="bg-black border-t border-white/10 py-8 text-center text-gray-500">
            <div className="container mx-auto px-6">
                 <div className="flex justify-center mb-4">
                    <LogoImage className="h-20" />
                </div>
                <p>© {new Date().getFullYear()} THE NEXT Riviera. All Rights Reserved.</p>
                <p className="text-sm">Designed for an epic night.</p>
            </div>
        </footer>
    );
};

// Fix: The original App.tsx was incomplete and was missing a default export.
// The App component renders all the page sections and is exported as default, resolving the error in index.tsx.
const App: React.FC = () => {
    return (
        <div className="bg-black">
            <main>
                <Hero />
                <About />
                <Events />
                <Gallery />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;