import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

const galleryData = [
    // Images - Rescues (hidden: /media/ files not available on Vercel deployment)
    // { id: 1, type: 'image', category: 'rescues', src: '/media/IMG-20250610-WA0009.jpg', alt: 'Rescue dog' },
    // { id: 2, type: 'image', category: 'rescues', src: '/media/IMG-20250612-WA0012.jpg', alt: 'Rescued animal care' },
    // { id: 3, type: 'image', category: 'rescues', src: '/media/IMG-20250823-WA0085.jpg', alt: 'Sanctuary resident' },

    // Images - Feeding
    // { id: 4, type: 'image', category: 'feeding', src: '/media/IMG_20250614_175158.jpg', alt: 'Feeding time' }, // hidden: not available on Vercel
    { id: 5, type: 'image', category: 'feeding', src: '/media/IMG_20250615_175716_271.webp', alt: 'Animals eating' },

    // Videos (YouTube embeds — reliable on all hosting platforms)
    { id: 6, type: 'video', category: 'videos', src: 'https://img.youtube.com/vi/ENEVAjcsDAU/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/ENEVAjcsDAU', alt: 'Rescue Video 1' },
    { id: 7, type: 'video', category: 'videos', src: 'https://img.youtube.com/vi/iMW0wijYt-c/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/iMW0wijYt-c', alt: 'Feeding Video' },
    { id: 8, type: 'video', category: 'videos', src: 'https://img.youtube.com/vi/6cWZ66c1yzU/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/6cWZ66c1yzU', alt: 'Rescue Video 3' },
];

const categories = ['All', /* 'rescues', // hidden: no working images */ 'feeding', 'videos'];

function Gallery() {
    const [filter, setFilter] = useState('All');
    const [lightboxData, setLightboxData] = useState(null);

    const filteredData = filter === 'All'
        ? galleryData
        : galleryData.filter(item => item.category === filter);

    return (
        <section id="gallery" className="py-24 bg-orange-50/50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-6xl">

                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Our Work in Action</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${filter === cat
                                ? 'bg-primary text-white shadow-md'
                                : 'bg-white dark:bg-dark-surface text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filteredData.map(item => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="relative group cursor-pointer aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
                                onClick={() => setLightboxData(item)}
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay layer for Video Icon */}
                                {(item.type === 'video' || item.type === 'local_video') && (
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-all">
                                        <div className="bg-primary text-white p-4 rounded-full drop-shadow-md group-hover:scale-110 transition-transform">
                                            <Play size={32} className="ml-1" />
                                        </div>
                                    </div>
                                )}

                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxData && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
                        onClick={() => setLightboxData(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 p-2 rounded-full transition-colors"
                            onClick={() => setLightboxData(null)}
                        >
                            <X size={32} />
                        </button>

                        <div
                            className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl bg-black"
                            onClick={e => e.stopPropagation()} // Prevent closing when clicking content
                        >
                            {lightboxData.type === 'image' ? (
                                <img
                                    src={lightboxData.src}
                                    alt={lightboxData.alt}
                                    className="w-full h-full object-contain"
                                />
                            ) : lightboxData.type === 'local_video' ? (
                                <video
                                    src={lightboxData.videoUrl}
                                    controls
                                    autoPlay
                                    className="w-full h-full object-contain"
                                ></video>
                            ) : (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`${lightboxData.videoUrl}?autoplay=1`}
                                    title={lightboxData.alt}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}

export default Gallery;
