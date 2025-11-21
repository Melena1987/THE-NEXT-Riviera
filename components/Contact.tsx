import React from 'react';
import { PhoneIcon } from './icons/PhoneIcon';
import { EmailIcon } from './icons/EmailIcon';
import { LocationIcon } from './icons/LocationIcon';
import { ClockIcon } from './icons/ClockIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { AnimateOnScroll } from './AnimateOnScroll';

export const Contact: React.FC = () => {
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