import React from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

function Adopt() {
    return (
        <div className="py-20 px-4 min-h-[80vh] flex items-center justify-center bg-background dark:bg-dark-bg transition-colors duration-300">
            <div className="max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">Adopt a Pet</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                        Ready to give a loving animal a forever home? Please contact us directly to learn about the wonderful dogs, cats, and other rescues currently available for adoption at our sanctuary.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {/* Contact Details Card */}
                    <div className="bg-white dark:bg-dark-surface p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Our Sanctuary</h3>
                                    <p className="text-gray-600 dark:text-gray-400">Lucknow, Uttar Pradesh, India</p>
                                    <p className="text-sm text-gray-500 mt-1">Visits by appointment only.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Call or WhatsApp</h3>
                                    <p className="text-gray-600 dark:text-gray-400">+91 (Add Phone Here)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Email Us</h3>
                                    <p className="text-gray-600 dark:text-gray-400">contact@pawsomefoundation.org</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Card */}
                    <div className="bg-white dark:bg-dark-surface p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">Connect With Us</h2>
                        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
                            Follow our daily rescue stories and see the animals available for adoption on our social media channels.
                        </p>

                        <div className="flex justify-center gap-6">
                            <a href="https://www.instagram.com/pawsome_foundation/" target="_blank" rel="noopener noreferrer"
                                className="p-4 bg-gray-50 dark:bg-gray-800 rounded-full text-pink-600 hover:scale-110 hover:bg-pink-50 transition-all duration-300">
                                <Instagram size={32} />
                            </a>
                            <a href="https://www.youtube.com/@pawsomefoundation5297" target="_blank" rel="noopener noreferrer"
                                className="p-4 bg-gray-50 dark:bg-gray-800 rounded-full text-red-600 hover:scale-110 hover:bg-red-50 transition-all duration-300">
                                <Youtube size={32} />
                            </a>
                            <a href="https://www.facebook.com/pawsomefoundationindia" target="_blank" rel="noopener noreferrer"
                                className="p-4 bg-gray-50 dark:bg-gray-800 rounded-full text-blue-600 hover:scale-110 hover:bg-blue-50 transition-all duration-300">
                                <Facebook size={32} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Adopt;
