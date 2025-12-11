import React from 'react';
import { Bot, Mail, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark border-t border-white/10 py-12 text-white/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4 text-white">
                            <Bot className="h-6 w-6 text-primary" />
                            <span className="font-bold text-lg">FRAME</span>
                        </div>
                        <p className="text-sm leading-relaxed max-w-sm">
                            Projeto desenvolvido pelo Grupo Arquimedes na Residência Tecnológica em Robótica. Focado em inovação educacional e cultura maker.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Links Rápidos</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre o Projeto</a></li>
                            <li><a href="#equipe" className="hover:text-primary transition-colors">Nossa Equipe</a></li>
                            <li><a href="#galeria" className="hover:text-primary transition-colors">Galeria</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Contato</h4>
                        <div className="flex gap-4">
                            <a href="mailto:icaro.developerr@gmail.com" className="hover:text-primary transition-colors" title="Email"><Mail size={20} /></a>
                            <a href="https://github.com/Icaro-Costa" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="GitHub"><Github size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center text-sm">
                    <p>© 2024 Projeto FRAME. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
