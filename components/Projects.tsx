'use client'

import { ExternalLink, Github, Image as ImageIcon } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Procura SP',
      description: 'Aplicação web desenvolvida para facilitar a busca e localização de serviços e estabelecimentos na cidade de São Paulo. O projeto utiliza tecnologias modernas para oferecer uma experiência de usuário fluida e intuitiva.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://procura-sp.vercel.app/',
      githubUrl: 'https://github.com/GuiGebaili78',
      imageUrl: '/projeto-procura-sp.jpg',
      featured: true
    }
  ]

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-accent-orange mx-auto mb-6"></div>
          <p className="text-lg text-primary-medium max-w-3xl mx-auto">
            Alguns dos projetos que desenvolvi, demonstrando minhas habilidades em diferentes tecnologias e frameworks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                {project.imageUrl && project.imageUrl !== '/project-placeholder.jpg' ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full group cursor-pointer"
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-4 py-2 rounded-lg">
                        <span className="text-secondary-900 font-medium flex items-center gap-2">
                          <ExternalLink size={16} />
                          Ver Projeto
                        </span>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="relative h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <ImageIcon className="w-16 h-16 text-primary-500 opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center bg-primary-50">
                      <div className="text-center p-8">
                        <ImageIcon className="w-12 h-12 text-primary-400 mx-auto mb-2" />
                        <p className="text-primary-600 text-sm">Imagem do projeto será adicionada aqui</p>
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-primary-700">
                  {project.featured ? 'Projeto Destaque' : 'Em Desenvolvimento'}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-primary-dark group-hover:text-accent-orange transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-accent-orange text-white rounded-lg hover:bg-primary-600 transition-colors"
                        title="Ver projeto ao vivo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-primary-dark text-white rounded-lg hover:bg-primary-darker transition-colors"
                        title="Ver código no GitHub"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-primary-medium mb-4 leading-relaxed">
                  {project.description}
                </p>

                {project.liveUrl !== '#' && (
                  <div className="mb-4 p-3 bg-light-cream rounded-lg">
                    <p className="text-sm text-primary-medium mb-1">Link do projeto:</p>
                    <div className="flex items-center gap-2">
                      <code className="text-sm text-primary-dark bg-white px-2 py-1 rounded flex-1 break-all">
                        {project.liveUrl}
                      </code>
                      <button
                        onClick={() => navigator.clipboard.writeText(project.liveUrl)}
                        className="text-xs bg-accent-orange text-white px-2 py-1 rounded hover:bg-primary-600 transition-colors flex-shrink-0"
                        title="Copiar link"
                      >
                        Copiar
                      </button>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                                              className="bg-light-cream text-primary-dark px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent-orange hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                  >
                    <ExternalLink size={18} />
                    Ver Projeto
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
