import { Building2, GraduationCap, Palette, Briefcase, Medal, Award, Database, Sparkles, Hourglass } from 'lucide-react';

export function Story() {
  return (
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px flex-1 bg-warm-medium/30"></div>
            <h1 className="text-warm-text tracking-wide font-light">Meine Reise</h1>
            <div className="h-px flex-1 bg-warm-medium/30"></div>
          </div>
          <div className="space-y-4 text-warm-text/70 text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Von Business über Technology zu Design – eine Reise durch drei Welten,
              die sich zu einem ganzheitlichen Verständnis digitaler Produkte vereinen.
            </p>
          </div>
        </div>

        {/* Three Phases: Business · Technology · Design */}
        <div className="space-y-16">
          {/* Phase 1: Business */}
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-warm-olive/20 rounded-full flex items-center justify-center">
                <Building2 className="w-6 h-6 text-warm-olive" />
              </div>
              <h2 className="text-warm-text tracking-wide font-light">Business</h2>
              <div className="h-px flex-1 bg-warm-medium/30"></div>
              <span className="text-warm-text/60 text-sm">2017-2020</span>
            </div>

            <div className="space-y-4 text-warm-text/70 text-lg leading-relaxed">
              <p>
                Meine berufliche Reise begann im kaufmännischen Bereich. Nach meiner dreijährigen KV-Lehre
                mit Berufsmaturität blieb ich weitere eineinhalb Jahre im Unternehmen und lernte den
                Geschäftsalltag von Grund auf kennen. In dieser Zeit entwickelte ich ein gutes Verständnis
                für Prozesse, übernahm früh Verantwortung und eignete mir wirtschaftliches Denken an.
              </p>
              <p>
                Gleichzeitig wuchs in mir die Neugier für digitale Produkte und dafür, wie Technologie
                Geschäftsprozesse sinnvoll unterstützen kann.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-xl border border-warm-olive/30 bg-warm-olive/10 p-4 backdrop-blur">
                <div className="absolute inset-0 bg-gradient-to-br from-warm-olive/10 via-transparent to-warm-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start gap-3 relative">
                  <div className="rounded-full bg-warm-olive/30 p-2">
                    <Briefcase className="w-5 h-5 text-warm-olive" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-warm-text font-semibold">Kauffrau EFZ</p>
                    <p className="text-sm text-warm-text/60">Rapperswil SG</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl border border-warm-olive/30 bg-warm-olive/10 p-4 backdrop-blur">
                <div className="absolute inset-0 bg-gradient-to-br from-warm-olive/10 via-transparent to-warm-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start gap-3 relative">
                  <div className="rounded-full bg-warm-olive/30 p-2">
                    <Medal className="w-5 h-5 text-warm-olive" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-warm-text font-semibold">Kaufmännische BM</p>
                    <p className="text-sm text-warm-text/60">Rapperswil SG</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl border border-warm-olive/30 bg-warm-olive/10 p-4 backdrop-blur">
                <div className="absolute inset-0 bg-gradient-to-br from-warm-olive/10 via-transparent to-warm-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start gap-3 relative">
                  <div className="rounded-full bg-warm-olive/30 p-2">
                    <Award className="w-5 h-5 text-warm-olive" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-warm-text font-semibold">Bachelor Wirtschaftsinformatik</p>
                    <p className="text-sm text-warm-text/60">Vertiefung Data Science · Winterthur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2: Technology */}
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-warm-olive/20 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-warm-olive" />
              </div>
              <h2 className="text-warm-text tracking-wide font-light">Technology</h2>
              <div className="h-px flex-1 bg-warm-medium/30"></div>
              <span className="text-warm-text/60 text-sm">2021-Heute</span>
            </div>

            <div className="space-y-4 text-warm-text/70 text-lg leading-relaxed">
              <p>
                Diese Neugier führte mich zum Teilzeitstudium der Wirtschaftsinformatik an der ZHAW in
                Winterthur. Parallel dazu bekam ich die Möglichkeit, in der Wirtschaftsinformatik einer
                Grossbank zu arbeiten. Dort konnte ich Theorie und Praxis eng miteinander verbinden und mein
                technisches Verständnis weiter vertiefen.
              </p>
              <p>
                Nach dieser Erfahrung zog es mich in ein KMU, wo ich bis heute in der Softwareentwicklung
                tätig bin und technische Lösungen von der Umsetzung bis zum produktiven Einsatz begleite.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-xl border border-warm-olive/30 bg-warm-olive/10 p-4 backdrop-blur">
                <div className="absolute inset-0 bg-gradient-to-br from-warm-olive/10 via-transparent to-warm-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start gap-3 relative">
                  <div className="rounded-full bg-warm-olive/30 p-2">
                    <Database className="w-5 h-5 text-warm-olive" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-warm-text font-semibold">Bachelor Wirtschaftsinformatik</p>
                    <p className="text-sm text-warm-text/60">Vertiefung Data Science · Winterthur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3: Design */}
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-warm-olive/20 rounded-full flex items-center justify-center">
                <Palette className="w-6 h-6 text-warm-olive" />
              </div>
              <h2 className="text-warm-text tracking-wide font-light">Design</h2>
              <div className="h-px flex-1 bg-warm-medium/30"></div>
              <span className="text-warm-text/60 text-sm">Aktuell</span>
            </div>

            <div className="space-y-4 text-warm-text/70 text-lg leading-relaxed">
              <p>
                Während und nach meinem Bachelor wurde mir immer klarer, dass gute digitale Produkte mehr
                brauchen als funktionierende Technik. Ich begann, mich intensiv mit Design zu beschäftigen
                und erkannte den Mehrwert nutzerzentrierten Denkens für digitale Lösungen.
              </p>
              <p>
                Aus diesem Interesse heraus entschied ich mich für den Master in User Experience Design an
                der FHGR in Chur. Dort lerne ich aktuell im Teilzeitstudium Methoden, Prinzipien und
                Denkweisen kennen, um digitale Produkte durch Design verständlicher, sinnvoller und
                wertvoller für Menschen zu machen.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-xl border border-warm-olive/30 bg-warm-olive/10 p-4 backdrop-blur">
                <div className="absolute inset-0 bg-gradient-to-br from-warm-olive/10 via-transparent to-warm-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start gap-3 relative">
                  <div className="rounded-full bg-warm-olive/30 p-2">
                    <Sparkles className="w-5 h-5 text-warm-olive" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-warm-text font-semibold">Master User Experience Design</p>
                    <p className="text-sm text-warm-text/60">FHGR · Chur</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-xs text-warm-text/60 mb-1">
                    <Hourglass className="w-4 h-4 text-warm-olive" />
                    <span>Laufend · aktuell im ersten Viertel</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-warm-medium/20 overflow-hidden">
                    <div className="h-full w-1/4 rounded-full bg-gradient-to-r from-warm-accent to-warm-olive shadow-[0_0_12px_rgba(255,193,82,0.4)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 p-8 md:p-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 bg-warm-medium/30"></div>
            <h2 className="text-warm-text tracking-wide font-light">Die Synthese</h2>
            <div className="h-px flex-1 bg-warm-medium/30"></div>
          </div>
          <p className="text-warm-text/70 text-lg leading-relaxed max-w-3xl mx-auto text-center">
            Heute ist es mein tägliches Ziel, meine Erfahrungen aus <span className="text-warm-accent font-semibold">Business</span>, <span className="text-warm-accent font-semibold">Technologie</span> und <span className="text-warm-accent font-semibold">Design</span> zu
            verbinden und ganzheitlich zu denken. Jede Station meines Weges hat mich geprägt und dazu
            beigetragen, mich kontinuierlich weiterzuentwickeln.
          </p>
        </div>
      </div>
  );
}
