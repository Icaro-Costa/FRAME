import React, { useState } from 'react';
import { Menu, X, Bot, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'Sobre', href: '#sobre' },
        { name: 'Equipe', href: '#equipe' },
        { name: 'Galeria', href: '#galeria' },
        { name: 'Docs', href: '#docs' },
    ];

    return (
        <nav className="fixed w-full bg-[#FDFBF7]/90 backdrop-blur-sm z-50 shadow-sm transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Bot className="h-8 w-8 text-primary" />
                        <span className="font-bold text-xl text-dark">FRAME</span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {menuItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <a
                                href="/Manual-do-Professor.pdf"
                                download
                                className="bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-orange-400 transition-colors text-sm font-medium"
                            >
                                <Download size={16} />
                                Baixar Manual
                            </a>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-dark hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#FDFBF7] border-t border-gray-100"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {menuItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-dark hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <a
                                href="/Manual-do-Professor.pdf"
                                download
                                className="w-full mt-4 bg-primary text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-orange-400 transition-colors text-base font-medium"
                            >
                                <Download size={18} />
                                Baixar Manual
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
