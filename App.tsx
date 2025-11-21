
import React, { useState, useEffect, useRef } from 'react';
import { PhoneIcon } from './components/icons/PhoneIcon';
import { EmailIcon } from './components/icons/EmailIcon';
import { LocationIcon } from './components/icons/LocationIcon';
import { InstagramIcon } from './components/icons/InstagramIcon';
import { WhatsAppIcon } from './components/icons/WhatsAppIcon';
import { FacebookIcon } from './components/icons/FacebookIcon';
import { MusicNoteIcon } from './components/icons/MusicNoteIcon';
import { CocktailIcon } from './components/icons/CocktailIcon';
import { UsersIcon } from './components/icons/UsersIcon';
import { StarIcon } from './components/icons/StarIcon';
import { ClockIcon } from './components/icons/ClockIcon';
import { Legal } from './components/Legal';
import { CookieBanner } from './components/CookieBanner';

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


const AnimateOnScroll: React.FC<{ children: React.ReactNode; className?: string; animation: string; delay?: number }> = ({ children, className, animation, delay }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const style: React.CSSProperties = delay ? { '--animation-delay': `${delay}ms` } as React.CSSProperties : {};

    return (
        <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`animate-on-scroll ${animation} ${isVisible ? 'is-visible' : ''} ${className || ''}`}
            style={style}
        >
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
        { date: 'JUE 20/11', name: 'Noche Latina de Salsa y Bachata', dj: 'con JOSVALL' },
        { date: 'VIE 21/11', name: 'Flamenco Night', dj: 'con Hoffman' },
    ];

    return (
        <section 
            className="h-screen min-h-[700px] bg-cover flex items-start lg:items-center justify-center relative text-white pt-8 lg:pt-0" 
            style={{
                backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1762456508235_the_next.jpg?alt=media&token=a31ea93d-05f2-4e03-b8a5-41e9bbb1415b')",
                backgroundPosition: `center calc(50% + ${offsetY * 0.5}px)`
            }}>
            <div className="relative container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center w-full gap-2 lg:gap-8 z-10">
                <div className="flex justify-center lg:justify-start">
                     <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[600px] lg:h-[600px] flex items-center justify-center hero-logo-animate">
                        <LogoImage className="w-full h-full" />
                    </div>
                </div>
               
                <div className="flex flex-col items-center w-full max-w-sm hero-content-animate">
                    
                    <div className="w-full bg-black/40 backdrop-blur-md rounded-lg p-6 border border-white/20">
                        <h3 className="font-bebas text-3xl text-yellow-300 neon-text-yellow mb-4 tracking-wider">Upcoming Events</h3>
                        <div className="space-y-4">
                            {events.map((event, index) => (
                                <div key={index} className="flex items-center justify-between border-b border-white/10 pb-2 last:border-b-0">
                                    <div className="flex items-center">
                                        <div className="text-center border-r border-pink-400/50 pr-4 mr-4">
                                            <p className="font-bold text-lg leading-tight">{event.date.split(' ')[0]}</p>
                                            <p className="text-sm text-gray-300 leading-tight">{event.date.split(' ')[1]}</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-lg">{event.name}</p>
                                            <p className="text-sm text-gray-300">{event.dj}</p>
                                        </div>
                                    </div>
                                    <a 
                                        href="https://wa.link/thaxxn" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-xs font-bold bg-white/10 text-white py-1 px-3 rounded-full transition-colors hover:bg-pink-500 whitespace-nowrap"
                                    >
                                        Join
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <a 
                            href="https://maps.app.goo.gl/JXnNYcPMBTB5coJBA" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
                        >
                            <LocationIcon className="w-6 h-6" />
                            <span>Find Us</span>
                        </a>
                         <div className="mt-4 flex items-center justify-center space-x-2 text-gray-300">
                            <ClockIcon className="w-5 h-5 text-purple-400" />
                            <p className="text-sm font-light tracking-wide">Thursday to Sunday · Until 3am</p>
                        </div>
                    </div>
                </div>

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
            <div className="max-w-3xl mx-auto text-center">
                <AnimateOnScroll animation="fade-down">
                    <h2 className="font-bebas text-5xl md:text-6xl text-yellow-300 neon-text-yellow mb-4 tracking-wider">Experience the Night</h2>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fade-up" delay={200}>
                    <p className="text-gray-300 text-lg leading-relaxed mb-16">
                        THE NEXT Riviera is not just a venue; it's an experience. Nestled in the heart of Mijas, we bring you the ultimate nightlife destination with world-class DJs, electrifying light shows, and an atmosphere that's second to none. Get ready to dance until dawn.
                    </p>
                </AnimateOnScroll>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {featuresData.map((feature, index) => (
                    <AnimateOnScroll key={index} animation="zoom-in" delay={index * 150}>
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg text-center border border-white/10 feature-card transform transition-transform duration-300 hover:scale-105 h-full">
                             <div className={`relative w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-black/20 ${feature.glowClass}`}>
                                <feature.icon className={`w-10 h-10 ${feature.iconColorClass}`} />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white font-bebas tracking-wider">{feature.title}</h3>
                            <p className="text-gray-400 text-sm">{feature.description}</p>
                        </div>
                    </AnimateOnScroll>
                ))}
            </div>
        </ParallaxSection>
    );
};

const Events: React.FC = () => {
    const events = [
        {
            date: 'JUE 20/11',
            name: 'Noche Latina de Salsa y Bachata',
            details: 'Junto al gran JOSVALL',
            time: 'Desde las 18:00',
            image: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763317415007_noche_latina_de_Salsa_y_Bachata_en_THE_NEXT_Riviera__IG_.png?alt=media&token=482ad48d-bf23-4140-80f4-476064523d87'
        },
        {
            date: 'VIE 21/11',
            name: 'Hoffman: Flamenco Night',
            details: 'A mi manera. Guitarra: Ángel Fajardo & Percusión: Carlos Rubio',
            time: 'Desde las 21:00',
            image: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763316635663_Flamenco_Night_-_THE_NEXT.png?alt=media&token=ed7369f8-d882-447d-9ed9-7663dc7a12ed'
        }
    ];
    
    const parallaxBgUrl = 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

    return (
        <ParallaxSection imageUrl={parallaxBgUrl}>
            <div className="max-w-4xl mx-auto text-center mb-16">
                 <AnimateOnScroll animation="fade-down">
                    <h2 className="font-bebas text-5xl md:text-6xl text-yellow-300 neon-text-yellow mb-4 tracking-wider">Upcoming Events</h2>
                </AnimateOnScroll>
            </div>
            
            <div className="flex flex-wrap justify-center items-stretch gap-8 px-4">
                {events.map((event, index) => (
                    <AnimateOnScroll key={index} animation="fade-up" delay={index * 150}>
                        <div className="max-w-sm w-full bg-black/50 backdrop-blur-md rounded-lg overflow-hidden border-2 border-purple-500/50 transform transition-all duration-300 hover:scale-105 hover:border-pink-500 neon-shadow-purple flex flex-col h-full">
                            <img src={event.image} alt={event.name} className="w-full aspect-[4/5] object-cover" />
                            <div className="p-6 text-center flex flex-col flex-grow">
                                <div className="mb-4">
                                    <p className="font-bebas text-4xl md:text-5xl text-pink-400 tracking-widest">{event.date.split(' ')[0]}</p>
                                    <p className="text-lg md:text-xl text-gray-300">{event.date.split(' ')[1]}</p>
                                </div>
                        
                                <h3 className="font-bebas text-3xl md:text-4xl text-white mb-2 tracking-wide">{event.name}</h3>
                                <p className="text-gray-400 text-base md:text-lg mb-2 flex-grow">{event.details}</p>
                                <p className="text-gray-300 text-base md:text-lg">{event.time}</p>
                                
                                <div className="mt-6">
                                    <a 
                                        href="https://wa.link/thaxxn" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-2 px-8 rounded-lg transition-transform transform hover:scale-105"
                                    >
                                        Reservar
                                    </a>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>
                ))}
            </div>
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
            <div className="max-w-4xl mx-auto text-center mb-16">
                <AnimateOnScroll animation="fade-down">
                    <h2 className="font-bebas text-5xl md:text-6xl text-yellow-300 neon-text-yellow mb-4 tracking-wider">Our Vibe</h2>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fade-up" delay={200}>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Capture the energy, the moments, and the memories. This is what a night at THE NEXT Riviera feels like.
                    </p>
                </AnimateOnScroll>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
                {galleryImages.map((image, index) => (
                    <AnimateOnScroll key={index} animation="zoom-in" delay={index * 100}>
                        <div className="relative rounded-lg overflow-hidden group border-2 border-white/10 transform transition-transform duration-300 hover:scale-105 hover:border-pink-500">
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="w-full h-48 md:h-64 object-cover"
                            />
                        </div>
                    </AnimateOnScroll>
                ))}
            </div>
        </ParallaxSection>
    );
};

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-black text-white">
            <div className="container mx-auto px-6">
                <AnimateOnScroll animation="fade-down">
                    <h2 className="font-bebas text-5xl md:text-6xl text-yellow-300 neon-text-yellow mb-12 text-center tracking-wider">Contact Us</h2>
                </AnimateOnScroll>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <AnimateOnScroll animation="fade-right">
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
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fade-left" delay={200}>
                        <div>
                            <h3 className="font-bebas text-3xl text-white mb-4 tracking-wider">Follow & Contact</h3>
                            <p className="text-gray-400 mb-6">Stay updated on our social media or send us a message directly on WhatsApp for reservations.</p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
                                <a href="https://www.instagram.com/thenext.riviera" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto justify-center inline-flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105">
                                    <InstagramIcon className="w-6 h-6" />
                                    <span>@thenext.riviera</span>
                                </a>
                                <a href="https://www.facebook.com/people/The-NEXT-Riviera/61583273083847/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto justify-center inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105">
                                    <FacebookIcon className="w-6 h-6" />
                                    <span>Facebook</span>
                                </a>
                                <a href="https://wa.link/thaxxn" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto justify-center inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105">
                                    <WhatsAppIcon className="w-6 h-6" />
                                    <span>Chat on WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
};

const MenuQR: React.FC = () => {
    return (
        <section className="py-16 bg-black border-t border-white/10">
            <div className="container mx-auto px-6 text-center">
                <AnimateOnScroll animation="fade-up">
                    <h2 className="font-bebas text-4xl text-yellow-300 neon-text-yellow mb-8 tracking-wider">Our Menu</h2>
                    <div className="flex justify-center">
                        <a 
                            href="https://qrco.de/bgTRPJ" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-white/5 rounded-2xl border border-white/10 neon-shadow-purple transition-transform hover:scale-105 duration-300 inline-block"
                        >
                            <img 
                                src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763710706707_frame__1_.png?alt=media&token=d321584d-0068-42e8-986b-8ec40df0a0fd" 
                                alt="Scan for Menu"
                                className="w-64 h-64 md:w-80 md:h-80 object-contain"
                            />
                        </a>
                    </div>
                     <p className="text-gray-400 mt-6 tracking-wide text-sm uppercase">Scan or click the QR code to view our menu</p>
                </AnimateOnScroll>
            </div>
        </section>
    );
};

const Footer: React.FC<{ onLegalClick: () => void }> = ({ onLegalClick }) => {
    return (
        <footer className="bg-black border-t border-white/10 py-8 text-center text-gray-500">
            <div className="container mx-auto px-6">
                 <div className="flex justify-center mb-4">
                    <LogoImage className="h-20" />
                </div>
                <p>© {new Date().getFullYear()} THE NEXT Riviera. All Rights Reserved.</p>
                <p className="text-sm">Designed for an epic night.</p>
                <div className="mt-4">
                    <button onClick={onLegalClick} className="text-sm text-gray-400 hover:text-white transition-colors">
                        Terms and Privacy Policy
                    </button>
                </div>
            </div>
        </footer>
    );
};


const App: React.FC = () => {
    const [showLegal, setShowLegal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [showLegal]);

    if (showLegal) {
        return <Legal onBack={() => setShowLegal(false)} />;
    }

    return (
        <div className="bg-black">
            <main>
                <Hero />
                <About />
                <Events />
                <Gallery />
                <Contact />
                <MenuQR />
            </main>
            <Footer onLegalClick={() => setShowLegal(true)} />
            <CookieBanner onLegalClick={() => setShowLegal(true)} />
        </div>
    );
};

export default App;
