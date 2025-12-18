export function CorporateDesign() {
  const colors = [
    { name: 'Hintergrund (Light)', value: '#F8F7F4', usage: 'Hintergrund, Flächen, helle Panels' },
    { name: 'Sage (Medium)', value: '#7D8D86', usage: 'Dezente Rahmen, subtile Flächen, ruhige Akzente' },
    { name: 'Teal (Primary)', value: '#2D5F5D', usage: 'Headlines, Haupttext, CTAs, primäre Akzente' },
    { name: 'Teal Light (Secondary)', value: '#3F7876', usage: 'Hover-States, Badges, sekundäre Akzente' },
    { name: 'Coral/Purple Highlights', value: 'sparsam', usage: 'Optional, sehr reduziert für Illustrationen oder Micro-Hints' }
  ];

  const typography = [
    { element: 'H1', size: '3.5rem (56px)', weight: 'Light (300)', lineHeight: '1.1', letterSpacing: '0.02em', usage: 'Hauptüberschriften, Hero-Titel' },
    { element: 'H2', size: '2.25rem (36px)', weight: 'Light (300)', lineHeight: '1.2', letterSpacing: '0.01em', usage: 'Sektionsüberschriften' },
    { element: 'H3', size: '1.5rem (24px)', weight: 'Medium (500)', lineHeight: '1.3', letterSpacing: '0', usage: 'Card-Titel, Untertitel' },
    { element: 'Body', size: '1rem (16px)', weight: 'Regular (400)', lineHeight: '1.7', letterSpacing: '0', usage: 'Fließtext, Beschreibungen' },
    { element: 'Small', size: '0.875rem (14px)', weight: 'Regular (400)', lineHeight: '1.5', letterSpacing: '0', usage: 'Kleingedrucktes, Metadaten' }
  ];

  const spacing = [
    { name: 'XS', value: '0.5rem', px: '8px', usage: 'Minimale Abstände, Icon Gaps' },
    { name: 'S', value: '1rem', px: '16px', usage: 'Enge Abstände, Padding' },
    { name: 'M', value: '1.5rem', px: '24px', usage: 'Standard Abstände' },
    { name: 'L', value: '2rem', px: '32px', usage: 'Großzügige Abstände' },
    { name: 'XL', value: '3rem', px: '48px', usage: 'Sektionsabstände' },
    { name: 'XXL', value: '4rem', px: '64px', usage: 'Große Sektionen, Hero Spacing' }
  ];

  const borderRadius = [
    { name: 'SM', value: '0.5rem', px: '8px', usage: 'Buttons, kleine Elemente' },
    { name: 'MD', value: '1rem', px: '16px', usage: 'Standard Cards' },
    { name: 'LG', value: '1.5rem', px: '24px', usage: 'Große Cards' },
    { name: 'XL', value: '2rem', px: '32px', usage: 'Hero Cards, Highlights' },
    { name: 'FULL', value: '9999px', px: '∞', usage: 'Pills, runde Buttons' }
  ];

  const principles = [
    {
      title: 'Natürlichkeit & Ruhe',
      description: 'Heller Hintergrund (#F8F7F4) und Sage (#7D8D86) geben Weite und Ruhe; Teal (#2D5F5D) trägt Text und Akzente.'
    },
    {
      title: 'Teal-first Akzente',
      description: 'Teal dominiert Buttons, Headlines und aktive States. Ein heller Teal (#3F7876) unterstützt Hover, Badges und Sekundäraktionen.'
    },
    {
      title: 'Klarheit & Balance',
      description: 'Großzügige Abstände, leichte Fonts und dezente Rahmen schaffen Struktur ohne Härte.'
    },
    {
      title: 'Feine Details',
      description: 'Glasmorphismus mit soften Blur, sanfte Hover-States und harmonische Übergänge (cubic-bezier(0.4,0,0.2,1)).'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px flex-1 bg-warm-medium/30"></div>
          <h1 className="text-warm-text tracking-wide font-light">Corporate Design</h1>
          <div className="h-px flex-1 bg-warm-medium/30"></div>
        </div>
        <p className="text-warm-text/70 text-lg leading-relaxed">
          Ein Design-System, das <span className="text-warm-accent font-medium">Natürlichkeit</span>, <span className="text-warm-accent font-medium">Eleganz</span> und <span className="text-warm-accent font-medium">Funktionalität</span> verbindet – 
          inspiriert von der Wärme der Erde und gestaltet für digitale Welten.
        </p>
      </div>

      {/* Design Principles */}
      <div>
        <h2 className="text-warm-text mb-8 tracking-wide font-light">Design-Prinzipien</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-white/50 backdrop-blur border border-warm-medium/20 rounded-2xl p-6 hover:border-warm-accent/50 transition-all"
            >
              <h3 className="text-warm-text mb-3">{principle.title}</h3>
              <p className="text-warm-text/70 text-sm leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Farbpalette */}
      <div>
        <h2 className="text-warm-text mb-8 tracking-wide font-light">Farbpalette</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {colors.map((color, index) => (
            <div
              key={index}
              className="bg-white/50 backdrop-blur border border-warm-medium/20 rounded-2xl p-6 hover:border-warm-accent/50 transition-all"
            >
              <div
                className="w-full h-24 rounded-xl mb-4 shadow-md border border-warm-medium/20"
                style={{ backgroundColor: color.value }}
              ></div>
              <h3 className="text-warm-text mb-2 uppercase text-sm tracking-wide font-medium">{color.name}</h3>
              <p className="text-warm-accent/80 text-sm mb-2 font-mono tracking-wide">{color.value}</p>
              <p className="text-warm-text/70 text-sm">{color.usage}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Typografie */}
      <div>
        <h2 className="text-warm-text mb-8 tracking-wide font-light">Typografie</h2>
        <div className="bg-white/50 backdrop-blur border border-warm-medium/20 rounded-2xl p-8">
          <div className="mb-6 pb-6 border-b border-warm-medium/20">
            <p className="text-warm-text/60 text-sm mb-2">Schriftfamilie</p>
            <p className="text-warm-text font-mono">-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif</p>
          </div>
          <div className="space-y-6">
            {typography.map((type, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 pb-6 border-b border-warm-medium/20 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  <span className="text-warm-accent font-medium uppercase text-sm tracking-wide w-20">{type.element}</span>
                  <div className="h-px flex-1 bg-warm-medium/20"></div>
                </div>
                <div className="grid md:grid-cols-5 gap-4 text-sm">
                  <div>
                    <span className="text-warm-text/50 block mb-1">Größe</span>
                    <span className="text-warm-text">{type.size}</span>
                  </div>
                  <div>
                    <span className="text-warm-text/50 block mb-1">Gewicht</span>
                    <span className="text-warm-text">{type.weight}</span>
                  </div>
                  <div>
                    <span className="text-warm-text/50 block mb-1">Zeilenhöhe</span>
                    <span className="text-warm-text">{type.lineHeight}</span>
                  </div>
                  <div>
                    <span className="text-warm-text/50 block mb-1">Letter-Spacing</span>
                    <span className="text-warm-text">{type.letterSpacing}</span>
                  </div>
                  <div>
                    <span className="text-warm-text/50 block mb-1">Verwendung</span>
                    <span className="text-warm-text">{type.usage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spacing System */}
      <div>
        <h2 className="text-warm-text mb-8 tracking-wide font-light">Spacing-System</h2>
        <div className="bg-white/50 backdrop-blur border border-warm-medium/20 rounded-2xl p-8">
          <div className="space-y-4">
            {spacing.map((space, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center gap-4 pb-4 border-b border-warm-medium/20 last:border-0 last:pb-0"
              >
                <div className="md:w-16">
                  <span className="text-warm-accent font-medium uppercase tracking-wide">{space.name}</span>
                </div>
                <div className="flex-1 grid md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-warm-text font-mono">{space.value} ({space.px})</span>
                  </div>
                  <div>
                    <span className="text-warm-text/70">{space.usage}</span>
                  </div>
                </div>
                <div className="md:w-32">
                  <div
                    className="h-8 bg-warm-accent/30 rounded border border-warm-accent/40"
                    style={{ width: space.value }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Border Radius */}
      <div>
        <h2 className="text-warm-text mb-8 tracking-wide font-light">Border Radius</h2>
        <div className="bg-white/50 backdrop-blur border border-warm-medium/20 rounded-2xl p-8">
          <div className="grid md:grid-cols-5 gap-6">
            {borderRadius.map((radius, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-20 h-20 mx-auto mb-4 bg-warm-accent/20 border-2 border-warm-accent/40"
                  style={{ borderRadius: radius.value }}
                ></div>
                <p className="text-warm-accent font-medium uppercase text-sm tracking-wide mb-1">{radius.name}</p>
                <p className="text-warm-text/60 text-xs font-mono mb-1">{radius.value}</p>
                <p className="text-warm-text/70 text-xs">{radius.usage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Effects */}
      <div>
        <h2 className="text-warm-text mb-8 tracking-wide font-light">Effekte & Animationen</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Glasmorphismus */}
          <div className="bg-white/50 backdrop-blur border border-warm-medium/20 rounded-2xl p-8">
            <h3 className="text-warm-text mb-4">Glasmorphismus</h3>
            <div className="bg-gradient-to-br from-warm-accent/20 to-warm-olive/20 rounded-xl p-6 mb-4">
              <div className="bg-white/50 backdrop-blur border border-warm-medium/20 rounded-xl p-4">
                <p className="text-warm-text/70 text-sm">background: rgba(255, 255, 255, 0.5)</p>
                <p className="text-warm-text/70 text-sm">backdrop-filter: blur(10px)</p>
              </div>
            </div>
          </div>

          {/* Transitions */}
          <div className="bg-white/50 backdrop-blur border border-warm-medium/20 rounded-2xl p-8">
            <h3 className="text-warm-text mb-4">Transitions</h3>
            <div className="space-y-3">
              <div className="bg-warm-accent/10 rounded-lg p-3">
                <p className="text-warm-text/70 text-sm font-mono">cubic-bezier(0.4, 0, 0.2, 1)</p>
              </div>
              <div className="bg-warm-accent/10 rounded-lg p-3">
                <p className="text-warm-text/70 text-sm font-mono">duration: 150ms (standard)</p>
              </div>
              <div className="bg-warm-accent/10 rounded-lg p-3">
                <p className="text-warm-text/70 text-sm font-mono">duration: 300ms (interactions)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Komponenten Preview */}
      <div>
        <h2 className="text-warm-text mb-8 tracking-wide font-light">Komponenten</h2>
        <div className="space-y-6">
          {/* Buttons */}
          <div className="bg-white/50 backdrop-blur border border-warm-medium/20 rounded-2xl p-8">
            <h3 className="text-warm-text mb-6">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-transparent border-2 border-warm-text text-warm-text rounded-full hover:bg-warm-text hover:text-warm-light transition-all duration-300 uppercase tracking-widest text-sm">
                Primary
              </button>
              <button className="px-8 py-3 bg-warm-accent text-white rounded-full hover:bg-warm-accent/80 transition-all duration-300 uppercase tracking-widest text-sm">
                Accent
              </button>
              <button className="px-8 py-3 bg-white/60 backdrop-blur border border-warm-medium/30 text-warm-text rounded-full hover:border-warm-accent/50 transition-all duration-300">
                Secondary
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="bg-white/50 backdrop-blur border border-warm-medium/20 rounded-2xl p-8">
            <h3 className="text-warm-text mb-6">Cards</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/40 backdrop-blur border border-warm-medium/30 rounded-2xl p-6 hover:border-warm-accent/50 transition-all">
                <h3 className="text-warm-text mb-2">Glass Card</h3>
                <p className="text-warm-text/70 text-sm">Mit Glasmorphismus und Hover.</p>
              </div>
              <div className="bg-gradient-to-br from-warm-accent/10 to-warm-olive/10 border border-warm-accent/30 rounded-2xl p-6">
                <h3 className="text-warm-text mb-2">Gradient Card</h3>
                <p className="text-warm-text/70 text-sm">Für Highlights.</p>
              </div>
              <div className="border-2 border-warm-medium/30 rounded-2xl p-6 hover:border-warm-accent/50 transition-all">
                <h3 className="text-warm-text mb-2">Outlined Card</h3>
                <p className="text-warm-text/70 text-sm">Minimalistisch.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
