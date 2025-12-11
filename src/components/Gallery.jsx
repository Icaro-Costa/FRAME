import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Importing gallery images
import img1 from '../assets/images/Frente do v3.jpeg';
import img2 from '../assets/images/V3-Frame.jpeg';
import img3 from '../assets/images/Tapete 1.png';
import img4 from '../assets/images/Ajeitando os botes do robo - Icaro fazendo isso.jpeg';
import img5 from '../assets/images/Samuel furando o local do encode.jpeg';
import img6 from '../assets/images/Ideacao do tapete e co frame.jpeg';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { src: img1, caption: "Robô FRAME V3" },
        { src: img3, caption: "Tapete Pedagógico - Cultura Recife" },
        { src: img2, caption: "Design Final" },
        { src: img4, caption: "Processo de Montagem" },
        { src: img5, caption: "Fabricação do Chassi" },
        { src: img6, caption: "Ideação e Planejamento" },
    ];

    return (
        <section id="galeria" className="py-20 bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12 text-center">
                    Galeria do Projeto
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative aspect-square overflow-hidden rounded-xl bg-gray-200 cursor-pointer"
                            onClick={() => setSelectedImage(img)}
                        >
                            <img
                                src={img.src}
                                alt={img.caption}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                                <p className="text-white text-center font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {img.caption}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative max-w-5xl max-h-[90vh] w-full"
                            onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.caption}
                                className="w-full h-full object-contain rounded-lg max-h-[85vh] mx-auto"
                            />
                            <p className="text-white text-center mt-4 text-lg font-medium">
                                {selectedImage.caption}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
