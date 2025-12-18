import { Mail, Linkedin, ExternalLink } from 'lucide-react';

export function Contact() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-warm-medium/30"></div>
          <h1 className="text-warm-text tracking-wide font-light">Kontakt</h1>
          <div className="h-px w-16 bg-warm-medium/30"></div>
        </div>
        <p className="text-warm-text/70 text-lg leading-relaxed max-w-2xl mx-auto">
          Hast du Fragen zu meiner Arbeit oder möchtest du mehr erfahren?
          Ich freue mich auf deine Nachricht.
        </p>
      </div>

      <div className="bg-white/50 backdrop-blur border border-warm-medium/20 rounded-3xl p-8 md:p-12">
        <div className="space-y-6">
          <div className="flex items-center gap-4 p-4 bg-warm-medium/10 rounded-2xl hover:bg-warm-medium/20 transition-colors">
            <div className="w-12 h-12 bg-warm-olive rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-warm-text/60 mb-1">E-Mail</div>
              <a 
                href="mailto:mail@dominiqueulrich.ch"
                className="text-warm-text hover:text-warm-olive transition-colors break-all"
              >
                mail@dominiqueulrich.ch
              </a>
            </div>
          </div>

          <a
            href="https://linkedin.com/in/ihr-profil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-warm-medium/10 rounded-2xl hover:bg-warm-medium/20 transition-colors group"
          >
            <div className="w-12 h-12 bg-warm-olive rounded-full flex items-center justify-center flex-shrink-0">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="text-warm-text/60 mb-1">LinkedIn</div>
              <div className="text-warm-text flex items-center gap-2">
                Profil besuchen
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="text-center text-warm-text/60">
        <p>© 2025 · Designed & Developed with Passion</p>
      </div>
    </div>
  );
}
