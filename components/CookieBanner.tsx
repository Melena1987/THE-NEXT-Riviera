import React, { useState, useEffect } from 'react';

interface CookieBannerProps {
    onLegalClick: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onLegalClick }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookiesAccepted');
        if (consent !== 'true') {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-black/70 backdrop-blur-md p-4 text-white z-50 animate-fade-in">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-center sm:text-left text-gray-300">
                    We use cookies to enhance your experience. By continuing to browse, you agree to our use of cookies. 
                    <button onClick={onLegalClick} className="underline hover:text-white ml-1">
                        Read more
                    </button>
                </p>
                <button 
                    onClick={handleAccept}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-105 whitespace-nowrap"
                >
                    Accept
                </button>
            </div>
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
};