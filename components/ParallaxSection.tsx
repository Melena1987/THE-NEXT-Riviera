import React from 'react';

interface ParallaxSectionProps {
    imageUrl: string;
    children: React.ReactNode;
    className?: string;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({ imageUrl, children, className }) => {
    return (
        <div
            className={`relative py-20 md:py-32 parallax bg-gray-900 ${className || ''}`}
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative container mx-auto px-6 z-10">
                {children}
            </div>
        </div>
    );
};