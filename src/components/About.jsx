import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, MapPin, Brain } from 'lucide-react';
import aboutImg from '../assets/images/Samuel mostrando o robo na apresentacao do Recplay a uma crianca.jpeg';

const About = () => {
    const features = [
        {
            icon: <Brain className="w-6 h-6 text-primary" />,
            title: "Pensamento Computacional",
            description: "Desenvolvimento de lógica de programação de forma lúdica e acessível."
        },
        {
            icon: <Users className="w-6 h-6 text-primary" />,
            title: "Para Todos",
            description: "Foco em alunos do Ensino Fundamental I de escolas públicas."
        },
        {
            icon: <Lightbulb className="w-6 h-6 text-primary" />,
            title: "Desplugado",
            description: "Programação física sem necessidade de computadores ou telas."
        },
        {
            icon: <MapPin className="w-6 h-6 text-primary" />,
            title: "Cultura Local",
            description: "Tapetes pedagógicos inspirados na cultura pernambucana."
        }
    ];

    return (
        <section id="sobre" className="py-20 bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                            Sobre o Projeto <span className="text-primary">FRAME</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            O projeto FRAME (Framework Educacional Baseado em Robótica e Cultura Maker) nasceu da necessidade de mitigar as barreiras pedagógicas que limitam o uso de tecnologias em sala de aula.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Nossa missão é democratizar o acesso à robótica, criando uma ferramenta financeiramente viável e culturalmente relevante. O robô se move sobre um tapete temático do Recife, ensinando comandos sequenciais (frente, trás, esquerda, direita) enquanto as crianças exploram ícones como o Galo da Madrugada e o Manguebeat.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3 p-4 bg-surface rounded-lg hover:shadow-md transition-shadow">
                                    <div className="p-2 bg-light rounded-lg shadow-sm">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-dark">{feature.title}</h3>
                                        <p className="text-sm text-gray-500">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={aboutImg}
                                alt="Criança interagindo com o robô FRAME"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent">
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="font-bold text-lg">Aprendizado na Prática</p>
                                    <p className="text-sm opacity-90">Apresentação no Rec'n'Play</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-primary/10 rounded-2xl" />
                        <div className="absolute -z-10 -bottom-10 -left-10 w-full h-full bg-secondary/10 rounded-2xl" />
                    </motion.div>
                </div>
                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-dark mb-8 text-center">Nossa Abordagem e Tecnologia</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-surface p-6 rounded-xl">
                            <h4 className="font-bold text-xl mb-4 text-primary">Ficha Técnica</h4>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full"></div>Arduino (Processamento)</li>
                                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full"></div>Motores DC + Ponte H</li>
                                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full"></div>Interface de Botões Táteis</li>
                                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full"></div>Estrutura em MDF e Recicláveis</li>
                                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full"></div>Alimentação por Baterias</li>
                            </ul>
                        </div>

                        <div className="bg-surface p-6 rounded-xl">
                            <h4 className="font-bold text-xl mb-4 text-primary">O Diferencial</h4>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Diferente de soluções comerciais "caixa-preta" como o Blue-Bot, o FRAME é uma <strong>tecnologia aberta e reparável</strong>.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Priorizamos a soberania tecnológica, permitindo que escolas consertem e repliquem o robô, adaptando-o à sua realidade financeira.
                            </p>
                        </div>

                        <div className="bg-surface p-6 rounded-xl">
                            <h4 className="font-bold text-xl mb-4 text-primary">Metodologia</h4>
                            <ol className="list-decimal list-inside space-y-2 text-gray-600">
                                <li><strong>Estruturação:</strong> Hardware e design do robô.</li>
                                <li><strong>Capacitação:</strong> Preparo docente.</li>
                                <li><strong>Aplicação:</strong> Uso de tapetes pedagógicos.</li>
                                <li><strong>Monitoramento:</strong> Análise de viabilidade.</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <h3 className="text-2xl font-bold text-dark mb-6">Identidade Cultural</h3>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
                        O aprendizado acontece sobre um tapete temático que valoriza a cultura pernambucana.
                        O grid 5x5 apresenta ícones como o <strong>Galo da Madrugada</strong>, sombrinhas de frevo,
                        o <strong>Manguebeat</strong> (caranguejo) e máscaras de carnaval, conectando o raciocínio
                        lógico à geografia e história local.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
