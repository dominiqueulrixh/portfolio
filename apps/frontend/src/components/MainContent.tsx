import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Home } from './Home';
import { Projects } from './Projects';
import { Story } from './Story';
import { Contact } from './Contact';
import { Footer } from './Footer';
import type { Project } from '../App';

type Tab = 'home' | 'projects' | 'story' | 'contact' | 'design';

interface MainContentProps {
  onProjectSelect: (project: Project) => void;
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export function MainContent({ onProjectSelect, activeTab, setActiveTab }: MainContentProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Switch to mobile nav a bit früher, bevor Logo/Tabs umbrechen
    const mediaQuery = window.matchMedia('(max-width: 1023px)');
    const handleChange = () => setIsMobile(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Nach Tab-Wechsel immer nach oben scrollen
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activeTab]);

  const handleNavigate = (tab: 'story' | 'projects') => {
    setActiveTab(tab);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-warm-light text-warm-text">
      {/* Header with Navigation */}
      <header className="sticky top-0 z-40 bg-warm-light/95 backdrop-blur-lg border-b border-warm-medium/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between gap-6">
            <button
              onClick={() => setActiveTab('home')}
              className="flex items-center gap-3 group"
              aria-label="Zurück zu Über mich"
            >
              <h2 className="text-warm-text tracking-wide font-light group-hover:text-warm-accent transition-colors">
                Dominique Ulrich
              </h2>
              <div className="h-4 w-px bg-warm-medium/40"></div>
              <span className="text-warm-text/60 text-sm tracking-wider uppercase group-hover:text-warm-accent transition-colors">
                Portfolio
              </span>
            </button>

            {!isMobile && (
              <nav className="flex gap-2">
                <button
                  onClick={() => setActiveTab('home')}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeTab === 'home'
                      ? 'bg-warm-olive text-white'
                      : 'text-warm-text/70 hover:bg-warm-medium/20'
                  }`}
                >
                  Über mich
                </button>
                <button
                  onClick={() => handleNavigate('projects')}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeTab === 'projects'
                      ? 'bg-warm-olive text-white'
                      : 'text-warm-text/70 hover:bg-warm-medium/20'
                  }`}
                >
                  Projekte
                </button>
                <button
                  onClick={() => handleNavigate('story')}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeTab === 'story'
                      ? 'bg-warm-olive text-white'
                      : 'text-warm-text/70 hover:bg-warm-medium/20'
                  }`}
                >
                  Story
                </button>
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeTab === 'contact'
                      ? 'bg-warm-olive text-white'
                      : 'text-warm-text/70 hover:bg-warm-medium/20'
                  }`}
                >
                  Kontakt
                </button>
              </nav>
            )}

            {isMobile && (
              <button
                className="p-3 rounded-full text-warm-text/80 hover:bg-warm-medium/10 transition-colors"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-expanded={isMenuOpen}
                aria-label="Navigation öffnen"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            )}

          </div>

          {isMobile && isMenuOpen && (
            <div className="mt-4 bg-warm-light/95 backdrop-blur-lg border border-warm-medium/20 rounded-2xl p-3 shadow-lg">
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    setActiveTab('home');
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-center px-5 py-3 rounded-full transition-all ${
                    activeTab === 'home'
                      ? 'bg-warm-olive text-white'
                      : 'text-warm-text/70 hover:bg-warm-medium/20'
                  }`}
                >
                  Über mich
                </button>
                <button
                  onClick={() => handleNavigate('projects')}
                  className={`w-full text-center px-5 py-3 rounded-full transition-all ${
                    activeTab === 'projects'
                      ? 'bg-warm-olive text-white'
                      : 'text-warm-text/70 hover:bg-warm-medium/20'
                  }`}
                >
                  Projekte
                </button>
                <button
                  onClick={() => handleNavigate('story')}
                  className={`w-full text-center px-5 py-3 rounded-full transition-all ${
                    activeTab === 'story'
                      ? 'bg-warm-olive text-white'
                      : 'text-warm-text/70 hover:bg-warm-medium/20'
                  }`}
                >
                  Story
                </button>
                <button
                  onClick={() => {
                    setActiveTab('contact');
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-center px-5 py-3 rounded-full transition-all ${
                    activeTab === 'contact'
                      ? 'bg-warm-olive text-white'
                      : 'text-warm-text/70 hover:bg-warm-medium/20'
                  }`}
                >
                  Kontakt
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {activeTab === 'home' && <Home onNavigate={handleNavigate} />}
        {activeTab === 'story' && <Story />}
        {activeTab === 'projects' && <Projects onProjectSelect={onProjectSelect} />}
        {activeTab === 'contact' && <Contact />}
      </main>

      {/* Footer */}
      <footer className="bg-warm-light/95 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
