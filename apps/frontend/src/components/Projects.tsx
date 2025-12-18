import { useState } from 'react';
import { ChevronRight, Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Project } from '../App';

export const projects: Project[] = [];

interface ProjectsProps {
  onProjectSelect: (project: Project) => void;
}

export function Projects({ onProjectSelect }: ProjectsProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('Alle');

  // Extract unique filter categories from projects
  const filterCategories = ['Alle', 'Data Science', 'UX Design', 'Software Development', 'Business'];

  // Filter projects based on selected filter
  const filteredProjects = selectedFilter === 'Alle'
    ? projects
    : projects.filter(project =>
        project.tags.some(tag => tag.toLowerCase().includes(selectedFilter.toLowerCase()))
      );

  return (
    <div className="space-y-16 max-w-5xl mx-auto">
      {/* Header Section with Featured Project */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-warm-text tracking-wide font-light">Projekte</h1>
            <div className="h-px flex-1 bg-warm-medium/30"></div>
          </div>



          <div className="space-y-6 text-warm-text/70 leading-relaxed">
            <p className="text-lg">
              Die hier gezeigten Projekte sind nicht als Sammlung perfekter Ergebnisse zu verstehen.
              Bewusst dokumentiere ich auch Arbeiten mit Ecken und Kanten, weil ich gerade an diesen Projekten am meisten gelernt habe.
              Der eigentliche Wert liegt für mich in den technischen Herausforderungen, im besseren Verständnis von Anforderungen,
              in Gesprächen mit Stakeholdern, in Automatisierungen und in vielen kleinen Erkenntnissen auf meinem Weg.
            </p>
            
            <p className="text-lg">
              Dieses Portfolio soll mich motivieren, dranzubleiben, weiter zu dokumentieren und bewusst zu reflektieren.
              Jedes aufgeführte Projekt hat mich ein Stück weitergebracht und zu dem gemacht, wo ich heute stehe.
            </p>
          </div>
        </div>

        {/* Featured Project (placeholder) */}
        <div className="bg-white/50 backdrop-blur border-2 border-warm-olive/30 rounded-2xl p-6 shadow-md text-center">
          <p className="text-warm-text font-semibold mb-2">Noch keine Projekte hochgeladen.</p>
          <p className="text-warm-text/70 text-sm">
            Sobald Projekte bereitstehen, erscheinen sie hier als Highlight.
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div
        className="flex flex-wrap gap-3"
      >
        {filterCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedFilter(category)}
            className={`px-5 py-2 rounded-full transition-all ${
              selectedFilter === category
                ? 'bg-warm-olive text-warm-light'
                : 'bg-white/40 backdrop-blur border border-warm-medium/20 text-warm-text/70 hover:border-warm-olive/50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <article
            key={project.id}
            onClick={() => onProjectSelect(project)}
            className="group cursor-pointer"
          >
            <div className="bg-white/50 backdrop-blur border border-warm-medium/20 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="aspect-video overflow-hidden relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-warm-text/60 mb-2">{project.category}</div>
                <h3 className="text-warm-text mb-3 group-hover:text-warm-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-warm-text/70 mb-4 flex-1">{project.shortDesc}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="text-sm px-3 py-1 bg-warm-medium/20 text-warm-text rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-warm-accent group-hover:gap-2 transition-all">
                  <span>Mehr Details</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* No Results Message */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-warm-text/70 text-lg">Noch keine Projekte hochgeladen.</p>
          <p className="text-warm-text/50 text-sm mt-2">Bitte schau später noch einmal vorbei.</p>
        </div>
      )}
    </div>
  );
}
