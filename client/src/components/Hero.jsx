import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
    const scrollToDonate = (e) => {
        e.preventDefault();
        document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative h-screen flex flex-col justify-end overflow-hidden bg-orange-50 dark:bg-gray-900 transition-colors duration-300">

            {/* Background Banner Image */}
            <div className="absolute inset-0 z-0 h-[65vh] w-full">
                <motion.div
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 6, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <img
                        src="/Banner1 (1920 x 1080 px).svg"
                        alt="Happy animals banner"
                        className="w-full h-full object-cover origin-top"
                    />
                    {/* Gradient Overlay to blend with bottom section */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-50 dark:to-gray-900 pointer-events-none" />
                </motion.div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full bg-white dark:bg-dark-bg p-8 md:p-12 pb-20 text-center rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.5)] transition-colors duration-300">
                <div className="container mx-auto max-w-4xl">

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6"
                    >
                        Pawsome Foundation <span className="text-3xl md:text-5xl">🐾</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
                    >
                        Together, we can give every animal the love, care, and second chance they deserve.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <button
                            onClick={scrollToDonate}
                            className="bg-primary hover:bg-accent text-white px-10 py-4 rounded-full text-xl font-bold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,107,53,0.4)] shadow-lg"
                        >
                            Support Our Mission
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default Hero;
