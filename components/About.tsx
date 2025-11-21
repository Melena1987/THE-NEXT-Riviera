import React from 'react';
import { MusicNoteIcon } from './icons/MusicNoteIcon';
import { CocktailIcon } from './icons/CocktailIcon';
import { UsersIcon } from './icons/UsersIcon';
import { StarIcon } from './icons/StarIcon';
import { AnimateOnScroll } from './AnimateOnScroll';
import { ParallaxSection } from './ParallaxSection';

export const About: React.FC = () => {
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
            link: 'https://heyzine.com/flip-book/46058f4012.html'
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
                {featuresData.map((feature, index) => {
                    const cardContent = (
                        <>
                             <div className={`relative w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-black/20 ${feature.glowClass}`}>
                                <feature.icon className={`w-10 h-10 ${feature.iconColorClass}`} />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white font-bebas tracking-wider">{feature.title}</h3>
                            <p className="text-gray-400 text-sm">{feature.description}</p>
                        </>
                    );

                    const className = "bg-white/5 backdrop-blur-sm p-6 rounded-lg text-center border border-white/10 feature-card transform transition-transform duration-300 hover:scale-105 h-full block w-full cursor-pointer";

                    return (
                        <AnimateOnScroll key={index} animation="zoom-in" delay={index * 150}>
                            {feature.link ? (
                                <a 
                                    href={feature.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={className}
                                >
                                    {cardContent}
                                </a>
                            ) : (
                                <div className={className}>
                                    {cardContent}
                                </div>
                            )}
                        </AnimateOnScroll>
                    );
                })}
            </div>
        </ParallaxSection>
    );
};