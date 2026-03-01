import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 py-8 text-center mt-auto">
            <div className="container mx-auto px-4">
                <p className="text-sm font-medium">
                    Made with <span className="text-red-500">❤️</span> by Pawsome Foundation &copy; {currentYear}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                    Together, we can give every animal the love and care they deserve.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
