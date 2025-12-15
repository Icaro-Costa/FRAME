import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

// Importing images
import icaroImg from '../assets/images/Membro-Icaro.jpeg';
import samuelImg from '../assets/images/Membro-Saumuel.jpeg';
import beatrizImg from '../assets/images/Membro-Beatriz.jpeg';
import lucasImg from '../assets/images/Membro-Lucas.jpeg';
import liviaImg from '../assets/images/Membro-Livia.jpeg';
import ystefaniImg from '../assets/images/Membro-Ystefani.jpeg';

const Team = () => {
    const members = [
        {
            name: "Sammuel Victor",
            role: "Liderança Técnica & Pedagógica",
            image: samuelImg,
            desc: "Programação Arduino, eletrônica e ideação pedagógica."
        },
        {
            name: "Icaro Costa",
            role: "Desenvolvedor & Maker",
            image: icaroImg,
            desc: "Programação, eletrônica e montagem do protótipo."
        },
        {
            name: "Beatriz Sales",
            role: "Design & Prototipagem",
            image: beatrizImg,
            desc: "Design visual, estrutura física e experiência do usuário."
        },
        {
            name: "Lucas Pires",
            role: "Maker & Design",
            image: lucasImg,
            desc: "Prototipagem rápida e suporte em eletrônica."
        },
        {
            name: "Lívia Ariane",
            role: "Pedagogia",
            image: liviaImg,
            desc: "Alinhamento com BNCC e estratégias educacionais."
        },
        {
            name: "Ystefani",
            role: "Ideação",
            image: ystefaniImg,
            desc: "Contribuição criativa e suporte pedagógico."
        }
    ];

    return (
        <section id="equipe" className="py-20 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                        Grupo Arquimedes
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Uma equipe multidisciplinar unida pela paixão por tecnologia e educação.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {members.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-light rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                        >
                            <div className="h-64 overflow-hidden relative bg-gray-200">
                                {member.image ? (
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                        <User className="w-20 h-20 text-gray-300" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-dark mb-1">{member.name}</h3>
                                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                                <p className="text-gray-500 text-sm">{member.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
