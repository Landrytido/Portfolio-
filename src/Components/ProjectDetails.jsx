import React from 'react';
import { X, Globe, Github, ExternalLink } from 'lucide-react';

const ProjectDetails = ({ project, isOpen, onClose }) => {
    if (!isOpen) return null;

    const projectImages = [
        project.image,
        `/Projects/Projects${project.id}/Capture2.png`,
        `/Projects/Projects${project.id}/Capture3.png`,
        `/Projects/Projects${project.id}/Capture4.png`
    ];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-zinc-900 w-full max-w-6xl rounded-lg shadow-xl overflow-hidden relative">
                {/* Header avec le titre et bouton fermer */}
                <div className="p-6 border-b border-zinc-700 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-zinc-700 rounded-full transition-colors"
                    >
                        <X className="h-6 w-6 text-zinc-400" />
                    </button>
                </div>

                {/* Contenu principal */}
                <div className="max-h-[70vh] overflow-y-auto">
                    {/* Galerie d'images */}
                    <div className="grid grid-cols-2 gap-4 p-6">
                        {projectImages.map((img, index) => (
                            <div
                                key={index}
                                className={`relative rounded-lg overflow-hidden ${index === 0 ? 'col-span-2 aspect-video' : 'aspect-square'}`}
                            >
                                <img
                                    src={img}
                                    alt={`${project.title} - Vue ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => e.target.src = '/path/to/placeholder-image.png'}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Description et détails */}
                    <div className="p-6 space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
                            <p className="text-zinc-300 leading-relaxed">{project.description}</p>
                        </div>

                        {/* Technologies utilisées */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-full text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Liens du projet */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">Liens</h3>
                            <div className="flex gap-4">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
                                >
                                    <Globe className="h-5 w-5" />
                                    Site web
                                </a>
                                <a
                                    href={project.github || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
                                >
                                    <Github className="h-5 w-5" />
                                    Code source
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer avec bouton de fermeture */}
                <div className="p-6 border-t border-zinc-700 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
                    >
                        Fermer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;