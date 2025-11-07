import React from 'react';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';

interface LegalProps {
    onBack: () => void;
}

export const Legal: React.FC<LegalProps> = ({ onBack }) => {
    return (
        <div className="bg-black text-white min-h-screen py-12 md:py-20">
            <div className="container mx-auto px-6 relative">
                <button 
                    onClick={onBack}
                    className="absolute top-0 left-6 md:left-0 -mt-4 md:mt-2 flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                    aria-label="Back to main page"
                >
                    <ArrowLeftIcon className="w-5 h-5" />
                    <span>Back</span>
                </button>

                <div className="max-w-4xl mx-auto">
                    <h1 className="font-bebas text-5xl md:text-6xl text-yellow-300 neon-text-yellow mb-12 text-center tracking-wider">
                        Terms and Policies
                    </h1>

                    <div className="space-y-12 text-gray-300 leading-relaxed">
                        <section>
                            <h2 className="font-bebas text-3xl text-pink-400 mb-4 tracking-wider">Terms and Conditions</h2>
                            <p className="mb-4">
                                Welcome to THE NEXT Riviera. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions of use. Please review them carefully.
                            </p>
                            <ul className="list-disc list-inside space-y-2 pl-4">
                                <li><strong>Minimum age:</strong> Access to our venue is restricted to individuals over 18 years of age. A valid official ID will be required.</li>
                                <li><strong>Dress code:</strong> We reserve the right of admission. Appropriate attire for the club's atmosphere is expected.</li>
                                <li><strong>Behavior:</strong> Respectful behavior towards other customers and staff is expected. No form of harassment or violence will be tolerated.</li>
                                <li><strong>Intellectual property:</strong> All content on this website, including logos, images, and texts, is the property of THE NEXT Riviera and may not be reproduced without explicit permission.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-bebas text-3xl text-pink-400 mb-4 tracking-wider">Privacy Policy</h2>
                            <p className="mb-4">
                                At THE NEXT Riviera, we are committed to protecting your privacy. This policy details how we collect, use, and protect your personal information.
                            </p>
                             <p className="mb-2"><strong>Data Controller:</strong></p>
                            <ul className="list-disc list-inside space-y-2 pl-4 mb-4">
                               <li><strong>Name:</strong> THE NEXT Riviera</li>
                               <li><strong>Address:</strong> C. Libra, 11, 29649 Mijas, Málaga</li>
                               <li><strong>Email:</strong> info@the-next.es</li>
                               <li><strong>Phone:</strong> +34 692 97 02 00</li>
                            </ul>
                            <p className="mb-2"><strong>Information we collect:</strong></p>
                            <ul className="list-disc list-inside space-y-2 pl-4 mb-4">
                                <li>Contact information (name, email, phone) when making a reservation or contacting us.</li>
                                <li>Browsing data through cookies to improve the user experience on our website.</li>
                            </ul>
                            <p className="mb-2"><strong>Purpose of processing:</strong></p>
                            <ul className="list-disc list-inside space-y-2 pl-4 mb-4">
                                <li>To manage reservations and information requests.</li>
                                <li>To send commercial communications about events and promotions, provided we have your consent.</li>
                                <li>To improve the functionality and performance of our website.</li>
                            </ul>
                            <p>
                                You have the right to access, rectify, cancel, or oppose the processing of your personal data. To exercise your rights, please contact us via our contact email.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-bebas text-3xl text-pink-400 mb-4 tracking-wider">Cookie Policy</h2>
                            <p className="mb-4">
                                Our website uses cookies to enhance your browsing experience. A cookie is a small text file stored in your browser.
                            </p>
                            <p className="mb-2"><strong>Types of cookies we use:</strong></p>
                            <ul className="list-disc list-inside space-y-2 pl-4 mb-4">
                                <li><strong>Technical cookies:</strong> Essential for the website's operation, such as maintaining a session.</li>
                                <li><strong>Analytics cookies:</strong> Allow us to anonymously analyze user behavior to improve our services (e.g., Google Analytics).</li>
                                <li><strong>Personalization cookies:</strong> Allow us to remember your preferences, such as language.</li>
                            </ul>
                            <p>
                                You can configure your browser to reject cookies, although this may limit the functionality of some parts of our website. By continuing to browse without changing your settings, you accept the use of cookies.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};