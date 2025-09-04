import { Mail, MessageCircle, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-darker border-t border-primary-medium py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          
          
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/GuiGebaili78"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-cream hover:text-accent-orange transition-colors"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-cream hover:text-accent-orange transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
          
          <div className="text-sm text-light-cream">
            © {currentYear} Guilherme Gebaili. Desenvolvido com React, Next.js e Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  )
}


