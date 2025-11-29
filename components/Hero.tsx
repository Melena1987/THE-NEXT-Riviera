import React, { useState, useEffect } from 'react';
import { LocationIcon } from './icons/LocationIcon';
import { ClockIcon } from './icons/ClockIcon';
import { CocktailIcon } from './icons/CocktailIcon';
import { LogoImage } from './LogoImage';

export const Hero: React.FC = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const events = [
        { date: 'VIE 21/11', name: 'Flamenco Night', dj: 'con Hoffman' },
    ];

    return (
        <section 
            className="h-screen min-h-[700px] bg-cover flex items-start lg:items-center justify-center relative text-white pt-8 lg:pt-0 bg-gradient-to-br from-purple-900 to-black" 
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

                    <div className="mt-6 w-full">
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                             <a 
                                href="https://heyzine.com/flip-book/46058f4012.html" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex-1 inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-pink-600/80 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
                            >
                                <CocktailIcon className="w-5 h-5" />
                                <span>Menu</span>
                            </a>

                            <a 
                                href="https://maps.app.goo.gl/JXnNYcPMBTB5coJBA" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex-1 inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-lg shadow-purple-500/30"
                            >
                                <LocationIcon className="w-5 h-5" />
                                <span>Find Us</span>
                            </a>
                        </div>
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