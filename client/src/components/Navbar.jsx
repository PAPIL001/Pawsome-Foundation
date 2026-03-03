import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar({ darkMode, toggleDarkMode }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/#about', isAnchor: true },
        { name: 'Gallery', path: '/#gallery', isAnchor: true },
        { name: 'Adopt a Pet', path: '/adopt' },
    ];

    const handleNavClick = (e, link) => {
        if (link.isAnchor && location.pathname === '/') {
            e.preventDefault();
            const element = document.getElementById(link.path.replace('/#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-md py-3'
                : 'bg-transparent py-5 dark:bg-dark-bg/50'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="bg-primary text-white p-2 rounded-xl group-hover:bg-accent transition-colors">
                        <Heart size={24} className={isScrolled ? "scale-100" : "scale-110 transition-transform"} />
                    </div>
                    <span className={`font-serif text-xl md:text-2xl font-bold ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white drop-shadow-sm'
                        }`}>
                        Pawsome Foundation
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        link.isAnchor ? (
                            <a
                                key={link.name}
                                href={link.path}
                                onClick={(e) => handleNavClick(e, link)}
                                className={`font-medium transition-colors hover:text-primary ${isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-gray-800 dark:text-gray-200 drop-shadow-sm'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' :
                                    isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-gray-800 dark:text-gray-200 drop-shadow-sm'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        )
                    ))}

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className={`p-2 rounded-full transition-colors ${isScrolled
                            ? 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
                            : 'bg-white/20 hover:bg-white/30 text-gray-800 dark:text-white backdrop-blur-sm'
                            }`}
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    {/* Donate CTA */}
                    <button
                        onClick={() => window.dispatchEvent(new CustomEvent('open-donate'))}
                        className="bg-primary hover:bg-accent text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:scale-105 shadow-md shadow-primary/30"
                    >
                        Donate Now
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex md:hidden items-center gap-4">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-800 dark:text-gray-200"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`p-2 rounded-lg ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white'
                            }`}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-dark-bg border-t border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                link.isAnchor ? (
                                    <a
                                        key={link.name}
                                        href={link.path}
                                        onClick={(e) => {
                                            handleNavClick(e, link);
                                            setMobileMenuOpen(false);
                                        }}
                                        className="text-lg font-medium py-3 border-b border-gray-100 dark:border-gray-800 text-gray-800 dark:text-gray-200"
                                    >
                                        {link.name}
                                    </a>
                                ) : (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className="text-lg font-medium py-3 border-b border-gray-100 dark:border-gray-800 text-gray-800 dark:text-gray-200"
                                    >
                                        {link.name}
                                    </Link>
                                )
                            ))}
                            <button
                                onClick={() => {
                                    window.dispatchEvent(new CustomEvent('open-donate'));
                                    setMobileMenuOpen(false);
                                }}
                                className="mt-4 bg-primary text-white text-center py-4 rounded-xl font-bold text-lg"
                            >
                                Donate Now
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Navbar;
