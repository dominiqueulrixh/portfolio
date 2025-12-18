import { ImageWithFallback } from './figma/ImageWithFallback';
import Portrait from '../assets/Portrait.jpg';
import KaffeeIcon from '../assets/kaffee.png';
import BadmintonIcon from '../assets/badminton.png';
import BuchIcon from '../assets/buch.png';
import ControllerIcon from '../assets/Controller.png';

interface HomeProps {
  onNavigate?: (tab: 'story' | 'projects') => void;
}

export function Home({ onNavigate }: HomeProps) {
  const hobbies = [
    { icon: KaffeeIcon, label: 'Kaffee-Liebhaber', color: 'from-warm-accent to-amber-600' },
    { icon: BadmintonIcon, label: 'Badminton', color: 'from-warm-dark to-slate-600' },
    { icon: BuchIcon, label: 'Lesen', color: 'from-warm-accent to-warm-olive' },
    { icon: ControllerIcon, label: 'Spiele in Gesellschaft', color: 'from-warm-olive to-teal-600' },
  ];

  return (
    <div className="space-y-16 max-w-5xl mx-auto">
      {/* Intro Section with Image */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-warm-text tracking-wide font-light">Willkommen</h1>
            <div className="h-px flex-1 bg-warm-medium/30"></div>
          </div>
          
          <div className="space-y-6 text-warm-text/70 leading-relaxed">
            <p className="text-xl">
              Hi, ich bin <span className="text-warm-text font-medium">Dominique Ulrich</span>, 
              25 Jahre alt, und bewege mich an der 
              Schnittstelle von <span className="text-warm-accent font-semibold">Business</span>, <span className="text-warm-accent font-semibold">Technologie</span> und <span className="text-warm-accent font-semibold">Design</span>.
            </p>
            
            <p className="text-lg">
              Mein Weg führte mich von einer kaufmännischen Ausbildung über Wirtschaftsinformatik 
              und Softwareentwicklung bis hin zum aktuellen Master in User Experience Design. 
              Getrieben von Neugier und dem Wunsch, Dinge besser zu verstehen, arbeite ich daran, 
              digitale Produkte zu gestalten, die sinnvoll sind und für Menschen echten Mehrwert schaffen.
            </p>

            <p className="text-lg">
              Abseits der Projekte lese ich gern, schalte bei digitalen oder analogen Spielen 
              den Kopf aus, spiele Badminton oder geniesse einfach die Zeit in guter Gesellschaft.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-3xl border-8 border-warm-medium/20 shadow-2xl">
            <ImageWithFallback
              src={Portrait}
              alt="Portrait von Dominique Ulrich"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-warm-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-warm-olive/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Hobbies Section */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-warm-text tracking-wide font-light">Was mich antreibt</h2>
          <div className="h-px flex-1 bg-warm-medium/30"></div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 md:gap-10 w-full">
          {hobbies.map((hobby, index) => (
            <div key={index} className="flex flex-col items-center gap-2 group">
              <div className="w-20 h-20 bg-warm-olive/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                <img src={hobby.icon} alt={hobby.label} className="w-[52px] h-[52px] object-contain" />
              </div>
              <p className="text-warm-text/70 text-sm text-center">{hobby.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <button 
          onClick={() => onNavigate?.('story')}
          className="rounded-3xl p-8 text-left hover:bg-warm-olive/5 transition-all group flex flex-col"
        >
          <h3 className="text-warm-text tracking-wide mb-3 group-hover:text-warm-olive transition-colors">Meine Reise entdecken</h3>
          <p className="text-warm-text/60 leading-relaxed flex-1">
            Erfahre mehr über meinen Werdegang von Business über Technology bis zu Design
            und wie diese Stationen mich geprägt haben.
          </p>
          <div className="mt-4 text-warm-olive flex items-center gap-2">
            <span>Zur Story</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </button>

        <button 
          onClick={() => onNavigate?.('projects')}
          className="rounded-3xl p-8 text-left hover:bg-warm-olive/5 transition-all group flex flex-col"
        >
          <h3 className="text-warm-text tracking-wide mb-3 group-hover:text-warm-olive transition-colors">Projekte ansehen</h3>
          <p className="text-warm-text/60 leading-relaxed flex-1">
            Wirf einen Blick auf meine Arbeiten und sehe,
            wie ich Ideen in greifbare Lösungen verwandele.
          </p>
          <div className="mt-4 text-warm-olive flex items-center gap-2">
            <span>Zu den Projekten</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </button>
      </div>
    </div>
  );
}
