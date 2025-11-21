import React from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { ParallaxSection } from './ParallaxSection';

export const Gallery: React.FC = () => {
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