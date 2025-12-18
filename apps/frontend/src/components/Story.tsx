import { Hourglass } from 'lucide-react';
import Auszeichnung from '../assets/auszeichnung.png';
import Sanduhr from '../assets/sanduhr.png';

export function Story() {
  return (
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-warm-medium/30"></div>
            <h1 className="text-warm-text tracking-wide font-light">Meine Reise</h1>
            <div className="h-px w-16 bg-warm-medium/30"></div>
          </div>
          <div className="space-y-4 text-warm-text/70 text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Mein beruflicher Weg führte mich vom kaufmännischen Alltag über die Softwareentwicklung bis hin zum User Experience Design.
              Drei Perspektiven, die heute mein Verständnis für digitale Produkte prägen.
            </p>
          </div>
        </div>

        {/* Three Phases: Business · Technology · Design */}
        <div className="space-y-16">
          {/* Phase 1: Business */}
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-warm-text tracking-wide font-light">Business</h2>
              <div className="h-px flex-1 bg-warm-medium/30"></div>
            </div>

            <div className="mt-8 space-y-6">
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

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                <div className="relative w-full max-w-xs overflow-hidden rounded-xl bg-warm-olive/10 p-4 backdrop-blur">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-20 h-20 bg-warm-olive/20 rounded-full flex items-center justify-center">
                      <img src={Auszeichnung} alt="Auszeichnung" className="w-[52px] h-[52px] object-contain" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-warm-text font-semibold text-lg">Kauffrau EFZ</p>
                      <p className="text-sm text-warm-text/60">BWZ · Rapperswil SG</p>
                      <p className="text-xs text-warm-text/50">Abschluss 2020</p>
                    </div>
                  </div>
                </div>

                <div className="relative w-full max-w-xs overflow-hidden rounded-xl bg-warm-olive/10 p-4 backdrop-blur">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-20 h-20 bg-warm-olive/20 rounded-full flex items-center justify-center">
                      <img src={Auszeichnung} alt="Auszeichnung" className="w-[52px] h-[52px] object-contain" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-warm-text font-semibold text-lg">Kaufmännische BM</p>
                      <p className="text-sm text-warm-text/60">BWZ · Rapperswil SG</p>
                      <p className="text-xs text-warm-text/50">Abschluss 2020</p>
                    </div>
                  </div>
                </div>

                <div className="relative w-full max-w-xs overflow-hidden rounded-xl bg-warm-olive/10 p-4 backdrop-blur">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-20 h-20 bg-warm-olive/20 rounded-full flex items-center justify-center">
                      <img src={Auszeichnung} alt="Auszeichnung" className="w-[52px] h-[52px] object-contain" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-warm-text font-semibold text-lg">Bachelor Wirtschaftsinformatik - Vertiefung Data Science</p>
                      <p className="text-sm text-warm-text/60">ZHAW · Winterthur</p>
                      <p className="text-xs text-warm-text/50">Abschluss 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2: Technology */}
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-warm-text tracking-wide font-light">Technology</h2>
              <div className="h-px flex-1 bg-warm-medium/30"></div>
            </div>

            <div className="mt-8 space-y-6">
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

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                <div className="relative w-full max-w-xs overflow-hidden rounded-xl bg-warm-olive/10 p-4 backdrop-blur">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-20 h-20 bg-warm-olive/20 rounded-full flex items-center justify-center">
                      <img src={Auszeichnung} alt="Auszeichnung" className="w-[52px] h-[52px] object-contain" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-warm-text font-semibold text-lg">Bachelor Wirtschaftsinformatik - Vertiefung Data Science</p>
                      <p className="text-sm text-warm-text/60">ZHAW · Winterthur</p>
                      <p className="text-xs text-warm-text/50">Abschluss 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3: Design */}
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-warm-text tracking-wide font-light">Design</h2>
              <div className="h-px flex-1 bg-warm-medium/30"></div>
            </div>

            <div className="mt-8 space-y-6">
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

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center">
                <div className="relative w-full max-w-xs overflow-hidden rounded-xl bg-warm-olive/10 p-4 backdrop-blur">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-20 h-20 bg-warm-olive/20 rounded-full flex items-center justify-center">
                      <img src={Sanduhr} alt="Sanduhr" className="w-[52px] h-[52px] object-contain" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-warm-text font-semibold text-lg">Master User Experience Design</p>
                      <p className="text-sm text-warm-text/60">FHGR · Chur</p>
                      <p className="text-xs text-warm-text/50">Laufend · seit 2025</p>
                    </div>
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
