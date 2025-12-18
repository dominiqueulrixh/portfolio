import { useState } from 'react';
import { ChevronRight, Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Project } from '../App';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Data Analytics Dashboard',
    category: 'Data Science · UX Design',
    tags: ['React', 'D3.js', 'User Research', 'B2B', 'Data Science', 'UX Design'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    shortDesc: 'Interaktives Dashboard zur Visualisierung komplexer Geschäftsdaten für fundierte Entscheidungen',
    challenge: 'Komplexe Datenstrukturen mussten für Business-Stakeholder ohne technischen Hintergrund verständlich und nutzbar gemacht werden.',
    approach: 'Umfangreiche User Research mit Stakeholdern verschiedener Hierarchieebenen, iterative Prototyping-Phasen mit kontinuierlichen Usability Tests, technische Umsetzung mit React und D3.js für performante Visualisierungen.',
    results: [
      '40% Reduktion der durchschnittlichen Zeit für Datenanalyse',
      '95% User Satisfaction Score nach 6 Monaten',
      'Adoption von 85% der Zielgruppe innerhalb der ersten 3 Monate'
    ],
    learnings: [
      'Datenvisualisierung ist nur effektiv, wenn sie auf echte User Needs ausgerichtet ist',
      'Iteratives Testing mit echten Nutzern spart langfristig Entwicklungszeit und -kosten',
      'Technische Komplexität muss vor dem User verborgen bleiben'
    ],
    uxLaws: [
      { law: 'Miller\'s Law', application: 'Dashboard-Widgets auf 5-7 Kernmetriken beschränkt, um kognitive Überlastung zu vermeiden' },
      { law: 'Proximity Principle', application: 'Verwandte Daten gruppiert, um mentale Modelle der User zu unterstützen' },
      { law: 'Progressive Disclosure', application: 'Detailansichten nur bei Bedarf einblenden, um Interface clean zu halten' },
      { law: 'Aesthetic-Usability Effect', application: 'Visuell ansprechendes Design erhöht die wahrgenommene Usability und Vertrauen' }
    ]
  },
  {
    id: 2,
    title: 'E-Commerce Mobile App',
    category: 'Software Development · UX Design',
    tags: ['React Native', 'A/B Testing', 'Conversion', 'Mobile', 'Software Development', 'UX Design'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    shortDesc: 'Native Shopping Experience mit personalisierten Empfehlungen und optimiertem Checkout',
    challenge: 'Die bestehende App hatte eine hohe Absprungrate im Checkout-Prozess (68%) und eine niedrige Conversion Rate.',
    approach: 'Heuristische Evaluation der bestehenden App, quantitative Analyse der Drop-off Points, A/B Testing verschiedener Checkout-Varianten, komplette Optimierung der User Journey mit React Native.',
    results: [
      '65% Reduktion der Checkout-Abbrüche',
      '2.5x Steigerung der Conversion Rate',
      '4.8 Sterne Durchschnittsbewertung im App Store'
    ],
    learnings: [
      'Micro-Interactions haben enormen Impact auf die wahrgenommene Qualität',
      'Performance ist ein zentrales UX-Feature, nicht nur ein technisches Thema',
      'Business-Ziele und User Needs müssen kontinuierlich balanciert werden'
    ],
    uxLaws: [
      { law: 'Fitts\'s Law', application: 'CTA-Buttons groß und im Daumenbereich positioniert für schnelle Interaktion' },
      { law: 'Hick\'s Law', application: 'Checkout auf 3 Schritte reduziert, um Entscheidungszeit zu minimieren' },
      { law: 'Peak-End Rule', application: 'Erfolgsmeldung nach Kauf emotional gestaltet für positive Erinnerung' },
      { law: 'Zeigarnik Effect', application: 'Fortschrittsanzeige im Checkout motiviert zur Fertigstellung' }
    ]
  },
  {
    id: 3,
    title: 'SaaS Product Redesign',
    category: 'UX Design · Business Strategy',
    tags: ['Design System', 'B2B', 'Onboarding', 'Strategy', 'UX Design', 'Business'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    shortDesc: 'Strategische Neugestaltung einer B2B-Plattform zur Reduktion der Churn Rate',
    challenge: 'Das Produkt hatte trotz starker Features eine hohe Churn Rate (35%) und ein komplexes, zeitintensives Onboarding.',
    approach: 'Tiefgehende User Interviews nach Jobs-to-be-Done Framework, Entwicklung eines konsistenten Design Systems, schrittweise agile Implementation mit Product Team.',
    results: [
      '50% schnelleres Time-to-Value im Onboarding',
      '30% Reduktion der Churn Rate',
      'NPS Score Steigerung von 35 auf 68'
    ],
    learnings: [
      'Ein Design System schafft Konsistenz und beschleunigt die Entwicklung erheblich',
      'Onboarding ist kritisch für den langfristigen Produkterfolg',
      'Kombination aus quantitativen und qualitativen Daten liefert die besten Insights'
    ],
    uxLaws: [
      { law: 'Jakob\'s Law', application: 'Vertraute UI-Patterns verwendet, um Lernkurve zu reduzieren' },
      { law: 'Serial Position Effect', application: 'Wichtigste Features zu Beginn und Ende des Onboardings platziert' },
      { law: 'Tesler\'s Law', application: 'Komplexität vom User zum System verschoben durch intelligente Defaults' },
      { law: 'Consistency Principle', application: 'Design System sorgt für einheitliche Interaktionsmuster' }
    ]
  }
];

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

        {/* Featured Project */}
        <div>
          <article
            onClick={() => onProjectSelect(projects[0])}
            className="group cursor-pointer relative"
          >
            {/* Badge */}
            <div className="absolute -top-3 left-6 z-10 bg-warm-olive text-warm-light text-xs px-4 py-1.5 rounded-full shadow-md">
              Mein Lieblingsprojekt
            </div>
            
            <div className="bg-white/50 backdrop-blur border-2 border-warm-olive/30 rounded-2xl overflow-hidden hover:shadow-xl hover:border-warm-olive/50 transition-all duration-300 shadow-md">
              <div className="flex gap-4 p-5">
                {/* Image */}
                <div className="w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden">
                  <ImageWithFallback
                    src={projects[0].image}
                    alt={projects[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="text-warm-text/60 text-xs mb-1">{projects[0].category}</div>
                  <h3 className="text-warm-text mb-2 group-hover:text-warm-olive transition-colors">
                    {projects[0].title}
                  </h3>
                  <p className="text-warm-text/70 text-sm mb-3 line-clamp-2">{projects[0].shortDesc}</p>
                  
                  <div className="flex items-center text-warm-olive text-sm group-hover:gap-2 transition-all">
                    <span>Details ansehen</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </article>
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
        <div
          className="text-center py-12"
        >
          <p className="text-warm-text/60 text-lg">
            Keine Projekte für diesen Filter gefunden.
          </p>
        </div>
      )}
    </div>
  );
}
