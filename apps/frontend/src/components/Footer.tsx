import { Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto">
        {/* Decorative Line - not full width */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-px w-2/3 bg-warm-medium/30"></div>
        </div>

        {/* Business · Technology · Design */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-warm-olive"></div>
          <p className="text-warm-text/70 tracking-[0.3em] text-sm uppercase">
            Business · Technology · Design
          </p>
          <div className="h-px w-12 bg-warm-olive"></div>
        </div>

        {/* Contact Links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/dominique-ulrich"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-warm-text/70 hover:text-warm-olive transition-colors group"
          >
            <div className="w-10 h-10 bg-warm-olive/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Linkedin className="w-5 h-5 text-warm-olive" />
            </div>
            <span className="text-sm">LinkedIn</span>
          </a>

          <a
            href="mailto:dominique.ulrich@example.com"
            className="flex items-center gap-2 text-warm-text/70 hover:text-warm-olive transition-colors group"
          >
            <div className="w-10 h-10 bg-warm-olive/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-warm-olive" />
            </div>
            <span className="text-sm">E-Mail</span>
          </a>
        </div>
      </div>
    </div>
  );
}