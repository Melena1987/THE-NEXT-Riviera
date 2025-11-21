import React from 'react';
import { LogoImage } from './LogoImage';

interface FooterProps {
    onLegalClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onLegalClick }) => {
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