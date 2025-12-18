import { ImageWithFallback } from './figma/ImageWithFallback';
import Portrait from '../assets/Portrait.jpg';

interface HeroProps {
  onContinue: () => void;
}

export function Hero({ onContinue }: HeroProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-warm-light">
      <div className="w-full max-w-5xl text-center">
        {/* Decorative Element */}
        <div className="mb-12 relative">
          <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-3xl overflow-hidden border-8 border-warm-medium/30 shadow-2xl">
            <ImageWithFallback
              src={Portrait}
              alt="Portrait von Dominique Ulrich"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative blur elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-warm-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-warm-olive/20 rounded-full blur-3xl"></div>
        </div>

        {/* Title */}
        <div className="mb-16">
          <h1 className="text-warm-text mb-2 tracking-[0.2em] font-light text-5xl md:text-6xl">
            DOMINIQUE ULRICH
          </h1>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-12 bg-warm-olive"></div>
            <p className="text-warm-text/70 tracking-[0.3em] text-sm uppercase">
              Business · Technology · Design
            </p>
            <div className="h-px w-12 bg-warm-olive"></div>
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <button
            onClick={onContinue}
            className="px-12 py-4 bg-transparent border-2 border-warm-text text-warm-text rounded-full hover:bg-warm-text hover:text-warm-light transition-all duration-300 uppercase tracking-widest"
          >
            Portfolio entdecken
          </button>
        </div>
      </div>
    </div>
  );
}
