import React, { useState, useEffect } from 'react';
import { Legal } from './components/Legal';
import { CookieBanner } from './components/CookieBanner';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Events } from './components/Events';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { MenuQR } from './components/MenuQR';
import { Footer } from './components/Footer';


const App: React.FC = () => {
    const [showLegal, setShowLegal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [showLegal]);

    if (showLegal) {
        return <Legal onBack={() => setShowLegal(false)} />;
    }

    return (
        <div className="bg-black">
            <main>
                <Hero />
                <About />
                <Events />
                <Gallery />
                <Contact />
                <MenuQR />
            </main>
            <Footer onLegalClick={() => setShowLegal(true)} />
            <CookieBanner onLegalClick={() => setShowLegal(true)} />
        </div>
    );
};

export default App;