import { useState } from 'react';
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
  const handleNavigate = (tab: 'story' | 'projects') => {
    setActiveTab(tab);
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

          </div>
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
