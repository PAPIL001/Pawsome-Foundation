import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Activity, Home } from 'lucide-react';

function Counter({ end, duration = 2000, label, icon: Icon }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let startTime = null;
            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                setCount(Math.floor(progress * end));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [isInView, end, duration]);

    return (
        <div ref={ref} className="text-center p-6 bg-white dark:bg-dark-surface rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:-translate-y-2 transition-transform duration-300">
            <div className="inline-flex p-4 rounded-full bg-orange-100 dark:bg-orange-900/30 text-primary mb-4">
                <Icon size={32} />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                {count}+
            </h3>
            <p className="text-gray-600 dark:text-gray-400 font-medium text-lg">{label}</p>
        </div>
    );
}

function About() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-dark-bg transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-6xl">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">About Us</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
                    <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Based in Lucknow, we are a dedicated team that rescues, feeds, and rehabilitates abandoned, injured, and sick animals.
                        Every donation directly supports food, vital medical care, and safe shelter for voiceless souls needing our help.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Counter end={280} label="Animals in Sanctuary" icon={Home} />
                    <Counter end={5000} label="Meals Served Monthly" icon={Activity} />
                    <Counter end={1200} label="Lives Saved" icon={Heart} />
                </div>

            </div>
        </section>
    );
}

export default About;
