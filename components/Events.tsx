import React from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { ParallaxSection } from './ParallaxSection';

export const Events: React.FC = () => {
    const events = [
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