'use client'

import { Mail, MessageCircle, MapPin, Github, Linkedin, Download } from 'lucide-react'

export default function Contact() {
  const handleDownloadCV = () => {
    try {
      const link = document.createElement('a')
      link.href = '/curriculo_guilherme_gebaili.pdf'
      link.download = 'curriculo_guilherme_gebaili.pdf'
      link.setAttribute('target', '_blank')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      // Fallback: abrir em nova aba se o download falhar
      window.open('/curriculo_guilherme_gebaili.pdf', '_blank')
    }
  }
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'E-mail',
      value: 'guilhermecorretor@gmail.com',
      link: 'mailto:guilhermecorretor@gmail.com',
      description: ''
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'WhatsApp',
      value: '+55 (11) 99911-2525',
      link: 'https://wa.me/5511999112525',
      description: ''
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Localização',
      value: 'São Paulo, SP',
      link: '#',
      description: 'Brasil'
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/GuiGebaili78',
      color: 'hover:bg-gray-800'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      color: 'hover:bg-blue-600'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-accent-orange mx-auto mb-6"></div>
          <p className="text-lg text-light-cream max-w-3xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes. 
            Fique à vontade para entrar em contato!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Informações de Contato</h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-orange rounded-lg flex items-center justify-center text-white group-hover:bg-primary-600 transition-colors">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{method.title}</h4>
                      {method.link !== '#' ? (
                        <a
                          href={method.link}
                          target={method.link.startsWith('http') ? '_blank' : method.title === 'E-mail' ? '_blank' : '_self'}
                          rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="text-accent-orange hover:text-primary-400 transition-colors font-medium"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span className="text-accent-orange font-medium">{method.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Redes Sociais</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-secondary-700 rounded-lg flex items-center justify-center text-white transition-all duration-300 ${social.color} hover:scale-110`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form / Call to Action */}
          <div className="bg-primary-medium p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 text-white">Vamos Trabalhar Juntos?</h3>
            
            <div className="space-y-6">
              <p className="text-light-cream leading-relaxed">
                Se você tem um projeto em mente ou está procurando um desenvolvedor para sua equipe, 
                adoraria ouvir sobre suas ideias e discutir como posso contribuir.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-light-cream">
                  <div className="w-2 h-2 bg-accent-orange rounded-full"></div>
                  <span>Desenvolvimento Web Full Stack</span>
                </div>
                <div className="flex items-center gap-3 text-light-cream">
                  <div className="w-2 h-2 bg-accent-orange rounded-full"></div>
                  <span>Aplicações React e Next.js</span>
                </div>
                <div className="flex items-center gap-3 text-light-cream">
                  <div className="w-2 h-2 bg-accent-orange rounded-full"></div>
                  <span>APIs e Backend com Node.js</span>
                </div>
                
              </div>

              <div className="pt-4">
                <a
                  href="mailto:guilhermecorretor@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium w-full justify-center"
                >
                  <Mail size={18} />
                  Enviar E-mail
                </a>
              </div>

              

              <div className="space-y-4">
                <a
                  href="https://wa.me/5511999112525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white px-6 py-3 rounded-lg transition-colors font-medium w-full justify-center"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
                
                <button
                  onClick={handleDownloadCV}
                  className="inline-flex items-center gap-2 bg-accent-orange hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium w-full justify-center"
                >
                  <Download size={18} />
                  Baixar Currículo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}