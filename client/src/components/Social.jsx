import React from 'react';
import { Instagram, Youtube, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

function Social() {
    const socialLinks = [
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/pawsome_foundation/',
            icon: Instagram,
            color: 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400',
            hoverColor: 'hover:bg-pink-200 dark:hover:bg-pink-900/50'
        },
        {
            name: 'YouTube',
            url: 'https://www.youtube.com/@pawsomefoundation5297',
            icon: Youtube,
            color: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
            hoverColor: 'hover:bg-red-200 dark:hover:bg-red-900/50'
        },
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/pawsomefoundationindia',
            icon: Facebook,
            color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
            hoverColor: 'hover:bg-blue-200 dark:hover:bg-blue-900/50'
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-dark-bg transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-4xl text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Connect With Us</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-12" />

                    <div className="flex flex-wrap justify-center gap-8">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className={`p-6 rounded-2xl transition-all duration-300 ${social.color} ${social.hoverColor} shadow-sm hover:shadow-md cursor-pointer`}
                                    aria-label={`Follow us on ${social.name}`}
                                >
                                    <Icon size={48} strokeWidth={1.5} />
                                </motion.a>
                            );
                        })}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default Social;
