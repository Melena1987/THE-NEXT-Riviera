import React from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';

export const MenuQR: React.FC = () => {
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