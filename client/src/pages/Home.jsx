import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Donate from '../components/Donate';
import Social from '../components/Social';

function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <About />
            <Gallery />
            <Donate />
            <Social />
        </div>
    );
}

export default Home;
