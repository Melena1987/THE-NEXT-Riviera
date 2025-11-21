import React from 'react';

export const LogoImage: React.FC<{ className?: string }> = ({ className }) => {
    const imageUrl = "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1762410970906_THE_NEXT_logo_web.png?alt=media&token=db1aeaec-37a0-4049-8830-14c59efe6f0f";
    return (
        <img src={imageUrl} alt="THE NEXT Riviera Logo" className={`object-contain ${className || ''}`} />
    );
};