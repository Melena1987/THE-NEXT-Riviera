import React from 'react';

export const CocktailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 22v-8" />
        <path d="M12 7L2 2" />
        <path d="M22 2L12 7" />
        <path d="M12 7v-5" />
        <path d="M2 2h20" />
        <circle cx="5" cy="5" r="2" fill="currentColor" />
    </svg>
);
