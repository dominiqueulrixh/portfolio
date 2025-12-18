import { motion } from 'motion/react';
import { ArrowLeft, Target, Lightbulb, TrendingUp, CheckCircle, AlertCircle, Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Project } from '../App';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-warm-light"
    >
      {/* Header */}
      <header className="sticky top-0 z-40 bg-warm-light/95 backdrop-blur-lg border-b border-warm-medium/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-warm-text/70 hover:text-warm-accent transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Zurück zu Projekten</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="text-warm-text/60 mb-3 tracking-wider uppercase text-sm">{project.category}</div>
          <h1 className="text-warm-text mb-6 tracking-wide font-light">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-warm-accent/10 border border-warm-accent/20 text-warm-text rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-warm-text/70 text-xl leading-relaxed max-w-3xl">
            {project.shortDesc}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="aspect-video overflow-hidden rounded-3xl mb-16 shadow-xl hover:shadow-2xl transition-shadow"
        >
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Grid - Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* 01 - Hintergrund & Kontext */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-warm-accent/20 text-warm-accent">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-warm-text/40 text-sm tracking-wider uppercase">Kapitel 01</div>
                  <h2 className="text-warm-text">Die Challenge</h2>
                </div>
              </div>
              
              <div className="bg-white/50 backdrop-blur border border-warm-medium/20 rounded-3xl p-8 shadow-md">
                <p className="text-warm-text/70 text-lg leading-relaxed mb-6">
                  {project.challenge}
                </p>
                
                {/* Visual Placeholder für Bild/Einbettung */}
                <div className="bg-warm-medium/10 rounded-2xl p-12 border-2 border-dashed border-warm-medium/30 flex items-center justify-center">
                  <div className="text-center text-warm-text/40">
                    <div className="text-4xl mb-2">📊</div>
                    <p className="text-sm">Platzhalter für Problem-Visualisierung</p>
                    <p className="text-xs mt-1">(z.B. Diagramm, Screenshot, Grafik)</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* 02 - Warum & Zielsetzung */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-warm-accent/20 text-warm-accent">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-warm-text/40 text-sm tracking-wider uppercase">Kapitel 02</div>
                  <h2 className="text-warm-text">Zielsetzung</h2>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-warm-accent/5 to-warm-accent/10 border border-warm-accent/20 rounded-3xl p-8 shadow-md">
                <div className="prose prose-lg max-w-none">
                  <p className="text-warm-text/70 leading-relaxed mb-6">
                    Das primäre Ziel war es, eine Lösung zu entwickeln, die nicht nur technisch funktioniert, 
                    sondern echten Business-Mehrwert schafft und gleichzeitig die User Experience verbessert.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white/60 rounded-2xl p-5 shadow-sm">
                      <div className="text-warm-accent mb-2">🎯 Business-Ziel</div>
                      <p className="text-warm-text/70 text-sm">Effizienzsteigerung und Kostensenkung</p>
                    </div>
                    <div className="bg-white/60 rounded-2xl p-5 shadow-sm">
                      <div className="text-warm-accent mb-2">👥 User-Ziel</div>
                      <p className="text-warm-text/70 text-sm">Intuitive Bedienung und Zeitersparnis</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* 03 - Vorgehensweise & Methoden */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-warm-accent/20 text-warm-accent">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-warm-text/40 text-sm tracking-wider uppercase">Kapitel 03</div>
                  <h2 className="text-warm-text">Vorgehensweise</h2>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Approach Text */}
                <div className="bg-white/50 backdrop-blur border border-warm-medium/20 rounded-3xl p-8 shadow-md">
                  <p className="text-warm-text/70 text-lg leading-relaxed">
                    {project.approach}
                  </p>
                </div>

                {/* Process Timeline */}
                <div className="bg-gradient-to-br from-warm-accent/5 to-warm-accent/10 border border-warm-accent/20 rounded-3xl p-8 shadow-md">
                  <h3 className="text-warm-text mb-6">Prozess-Schritte</h3>
                  <div className="space-y-4">
                    {['Research & Analyse', 'Konzeption & Prototyping', 'Design & Development', 'Testing & Iteration'].map((step, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-warm-accent text-warm-light flex items-center justify-center text-sm">
                          {i + 1}
                        </div>
                        <div className="flex-1 pt-1">
                          <div className="text-warm-text">{step}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Placeholder */}
                <div className="bg-warm-medium/10 rounded-2xl p-12 border-2 border-dashed border-warm-medium/30 flex items-center justify-center">
                  <div className="text-center text-warm-text/40">
                    <div className="text-4xl mb-2">🖼️</div>
                    <p className="text-sm">Platzhalter für Prozess-Visualisierung</p>
                    <p className="text-xs mt-1">(z.B. Wireframes, Mockups, User Journey)</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* 04 - Angewandte UX-Laws */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-warm-accent/20 text-warm-accent">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-warm-text/40 text-sm tracking-wider uppercase">Kapitel 04</div>
                  <h2 className="text-warm-text">UX-Prinzipien</h2>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {project.uxLaws.map((item, i) => (
                  <div key={i} className="bg-white/60 backdrop-blur border border-warm-accent/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-warm-accent mb-3 flex items-center gap-2">
                      <span className="text-xl">✓</span>
                      {item.law}
                    </h3>
                    <p className="text-warm-text/70 leading-relaxed text-sm">{item.application}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* 05 - Resultate */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-warm-accent/20 text-warm-accent">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-warm-text/40 text-sm tracking-wider uppercase">Kapitel 05</div>
                  <h2 className="text-warm-text">Resultate & Impact</h2>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {project.results.map((result, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-warm-accent/10 to-warm-accent/5 border-2 border-warm-accent/30 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="text-warm-accent text-3xl mb-3">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <p className="text-warm-text leading-relaxed">{result}</p>
                  </div>
                ))}
              </div>

              {/* Visual Placeholder für Charts */}
              <div className="bg-warm-medium/10 rounded-2xl p-12 border-2 border-dashed border-warm-medium/30 flex items-center justify-center mt-8">
                <div className="text-center text-warm-text/40">
                  <div className="text-4xl mb-2">📈</div>
                  <p className="text-sm">Platzhalter für Erfolgsmetriken</p>
                  <p className="text-xs mt-1">(z.B. Charts, Graphs, Before/After)</p>
                </div>
              </div>
            </motion.section>

            {/* 06 - Key Learnings */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-warm-accent/20 text-warm-accent">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-warm-text/40 text-sm tracking-wider uppercase">Kapitel 06</div>
                  <h2 className="text-warm-text">Key Learnings</h2>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-warm-accent/10 to-warm-accent/5 border border-warm-accent/20 rounded-3xl p-8 shadow-md">
                <ul className="space-y-5">
                  {project.learnings.map((learning, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="text-warm-accent text-2xl flex-shrink-0">→</span>
                      <span className="leading-relaxed text-warm-text/80 text-lg pt-1">{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>
          </div>

          {/* Sidebar - Quick Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Project Meta */}
              <div className="bg-white/60 backdrop-blur border border-warm-medium/20 rounded-2xl p-6 shadow-md">
                <h3 className="text-warm-text mb-4">Projekt-Info</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-warm-text/50 mb-1">Kategorie</div>
                    <div className="text-warm-text">{project.category}</div>
                  </div>
                  <div>
                    <div className="text-warm-text/50 mb-1">Technologien</div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.slice(0, 4).map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-warm-accent/10 text-warm-accent rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Navigation */}
              <div className="bg-warm-accent/10 border border-warm-accent/20 rounded-2xl p-6 shadow-sm">
                <h3 className="text-warm-text mb-4 text-sm">Schnell-Navigation</h3>
                <nav className="space-y-2 text-sm">
                  {['Challenge', 'Zielsetzung', 'Vorgehensweise', 'UX-Prinzipien', 'Resultate', 'Learnings'].map((item, i) => (
                    <a key={i} href={`#section-${i}`} className="block text-warm-text/60 hover:text-warm-accent transition-colors py-1">
                      {item}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="text-center py-16 max-w-4xl mx-auto"
        >
          <button
            onClick={onBack}
            className="px-8 py-4 bg-warm-accent text-warm-light rounded-full hover:bg-warm-accent/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Zurück zu allen Projekten
          </button>
        </motion.div>

        {/* Footer */}
        <footer className="mt-24 pt-12 max-w-7xl mx-auto">
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
        </footer>
      </div>
    </motion.div>
  );
}
