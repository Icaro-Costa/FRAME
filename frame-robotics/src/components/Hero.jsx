import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu } from 'lucide-react';
import heroBg from '../assets/images/V3-Frame.jpeg'; // Using V3 robot image

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Robô FRAME V3"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/40" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6">
                        <Cpu size={16} className="text-primary" />
                        <span className="text-sm font-medium">Robótica Educacional & Cultura Maker</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        FRAME
                        <span className="block text-primary text-2xl md:text-4xl mt-2 font-normal">
                            Framework Educacional Baseado em Robótica
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                        Uma solução de baixo custo para ensinar pensamento computacional e lógica de programação de forma desplugada, conectando tecnologia e cultura.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                        <a
                            href="#sobre"
                            className="px-8 py-4 bg-primary hover:bg-orange-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105"
                        >
                            Conheça o Projeto
                            <ArrowRight size={20} />
                        </a>
                        <a
                            href="#docs"
                            className="px-8 py-4 bg-white hover:bg-gray-100 text-dark rounded-xl font-semibold transition-all"
                        >
                            Ver Relatórios
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
