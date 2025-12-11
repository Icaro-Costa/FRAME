import React from 'react';
import { FileText, Download } from 'lucide-react';

const Docs = () => {
    const docs = [
        {
            name: "Relatório Técnico",
            type: "DOCX",
            size: "207 KB",
            url: "/docs/RELATÓRIO TÉCNICO.docx"
        },
        {
            name: "Apresentação FRAME",
            type: "PDF",
            size: "7.8 MB",
            url: "/docs/ApresentaçãoFRAME.pdf"
        },
        {
            name: "Documento de Ideação",
            type: "PDF",
            size: "75 KB",
            url: "/docs/documentoDeIdeação.pdf"
        }
    ];

    return (
        <section id="docs" className="py-20 bg-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Documentação
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Acesse os relatórios técnicos e apresentações detalhadas do projeto.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {docs.map((doc, index) => (
                        <a
                            key={index}
                            href={doc.url}
                            download
                            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-primary/20 rounded-lg text-primary group-hover:scale-110 transition-transform">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{doc.name}</h3>
                                    <span className="text-xs text-gray-400 uppercase tracking-wider">{doc.type} • {doc.size}</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between text-sm font-medium text-gray-300 group-hover:text-white mt-4">
                                <span>Fazer download</span>
                                <Download size={16} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Docs;
