import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface AnimateOnScrollProps {
    children: React.ReactNode;
    className?: string;
    animation: string;
    delay?: number;
}

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ children, className, animation, delay }) => {
    const [setRef, isVisible] = useOnScreen({ threshold: 0.1 });
    const style: React.CSSProperties = delay ? { '--animation-delay': `${delay}ms` } as React.CSSProperties : {};

    return (
        <div
            ref={setRef}
            className={`animate-on-scroll ${animation} ${isVisible ? 'is-visible' : ''} ${className || ''}`}
            style={style}
        >
            {children}
        </div>
    );
};