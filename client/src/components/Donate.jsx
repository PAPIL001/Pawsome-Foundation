import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, CheckCircle2 } from 'lucide-react';

function Donate() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [copiedField, setCopiedField] = useState(null);

    const bankDetails = [
        { label: 'Account Number', value: '9879000100037910', id: 'acc' },
        { label: 'IFSC Code', value: 'PUNB0987900', id: 'ifsc' },
        { label: 'UPI ID', value: 'chatterjeevis-1@okaxis', id: 'upi' }
    ];

    const handleCopy = (id, text) => {
        navigator.clipboard.writeText(text);
        setCopiedField(id);
        setTimeout(() => setCopiedField(null), 2000);
    };

    return (
        <section id="donate" className="py-24 bg-orange-100 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-4xl text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Support Our Mission</h2>
                    <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                        Your generous contribution directly buys food, medicine, and shelter for our 280+ rescued animals. Make a difference today.
                    </p>

                    <button
                        onClick={() => setIsPopupOpen(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-xl font-bold transition-all hover:scale-105 shadow-xl"
                    >
                        Donate Now
                    </button>
                </motion.div>

            </div>

            {/* Donation Modal Popup */}
            <AnimatePresence>
                {isPopupOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                        onClick={() => setIsPopupOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-white dark:bg-dark-surface rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsPopupOpen(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 p-2 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <h3 className="text-2xl font-bold text-center text-primary mb-6">Support Our Animals ❤️</h3>

                            <div className="flex justify-center mb-8">
                                <div className="bg-white p-4 rounded-2xl border-2 border-gray-100 shadow-sm relative min-h-[200px] min-w-[200px] flex items-center justify-center overflow-hidden">
                                    <img
                                        src="/Qr.svg"
                                        alt="Donation QR Code"
                                        className="w-48 h-48 object-contain"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = '<span class="text-sm text-gray-500 font-medium">QR Code unavailable.<br/>Please use Bank/UPI details below.</span>';
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-center">Bank Transfer Details</h4>

                                <div className="space-y-4">
                                    {bankDetails.map(detail => (
                                        <div key={detail.id} className="flex justify-between items-center group">
                                            <div>
                                                <span className="block text-xs text-gray-500 uppercase font-semibold tracking-wider">{detail.label}</span>
                                                <span className="text-gray-900 dark:text-gray-200 font-mono text-sm sm:text-base">{detail.value}</span>
                                            </div>
                                            <button
                                                onClick={() => handleCopy(detail.id, detail.value)}
                                                className={`p-2 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium ${copiedField === detail.id
                                                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-800/50'
                                                    }`}
                                            >
                                                {copiedField === detail.id ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                                                {copiedField === detail.id ? 'Copied' : 'Copy'}
                                            </button>
                                        </div>
                                    ))}

                                    <div className="pt-2 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 flex justify-between">
                                        <span>Bank: <strong className="text-gray-900 dark:text-gray-200">Punjab National Bank</strong></span>
                                        <span>Branch: <strong className="text-gray-900 dark:text-gray-200">Lucknow</strong></span>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}

export default Donate;
