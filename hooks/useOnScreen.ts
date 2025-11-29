import { useState, useEffect, useMemo } from 'react';

export const useOnScreen = (options: IntersectionObserverInit) => {
    const [ref, setRef] = useState<Element | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const memoizedOptions = useMemo(() => options, [JSON.stringify(options)]);

    useEffect(() => {
        if (!ref) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, memoizedOptions);

        observer.observe(ref);

        return () => {
            observer.disconnect();
        };
    }, [ref, memoizedOptions]);

    return [setRef, isVisible] as const;
};