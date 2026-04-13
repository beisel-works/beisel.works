import ParticleNetwork from '@/components/ParticleNetwork';
import { useEffect, useRef } from 'react';

const useFadeIn = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('opacity-100', 'translate-y-0');
          el.classList.remove('opacity-0', 'translate-y-4');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
};

const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const ref = useFadeIn();
  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-4 transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </div>
  );
};

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleNetwork />

      <div className="relative z-10">
        {/* Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6">
          <Section className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-6">
              beisel.works
            </h1>
            <p className="text-lg md:text-xl font-light text-muted-foreground max-w-lg mx-auto mb-10">
              <span className="hidden md:inline">Digitale Systeme, bodenständig gebaut.</span>
              <span className="md:hidden">Digitale Systeme. Bodenständig.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#kontakt"
                onClick={(e) => { e.preventDefault(); document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="text-sm tracking-wide text-primary-foreground bg-primary px-8 py-3 rounded-md hover:bg-primary/90 transition-colors duration-300"
              >
                Projekt anfragen
              </a>
              <a
                href="#leistungsfelder"
                onClick={(e) => { e.preventDefault(); document.getElementById('leistungsfelder')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="text-sm tracking-wide text-foreground border border-border px-8 py-3 rounded-md hover:bg-secondary transition-colors duration-300"
              >
                Mehr erfahren
              </a>
            </div>
          </Section>
        </section>

        {/* Wer / Was */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-2xl mx-auto">
            <Section>
              <h2 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-8">
                Worum es geht
              </h2>
              <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/90">
                Struktur, Technik und Betrieb digitaler Systeme –
                aus einer Hand, mit operativem Anspruch.
              </p>
              <p className="text-base font-light leading-relaxed text-muted-foreground mt-6">
                Tragfähige Lösungen, die langfristig funktionieren
                und sich weiterentwickeln lassen.
              </p>
            </Section>
          </div>
        </section>

        {/* Leistungsfelder */}
        <section id="leistungsfelder" className="py-24 md:py-32 px-6">
          <div className="max-w-3xl mx-auto">
            <Section>
              <h2 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-12">
                Leistungsfelder
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'IT Services & Consulting',
                    text: 'Infrastruktur, Systeme und Prozesse – analysiert, geplant und umgesetzt.',
                  },
                  {
                    title: 'Softwareentwicklung',
                    text: 'Individuelle Lösungen, die zum Betrieb passen – nicht umgekehrt.',
                  },
                  {
                    title: 'Webentwicklung & Design',
                    text: 'Digitale Auftritte und Anwendungen mit Substanz und klarer Struktur.',
                  },
                  {
                    title: 'Automatisierung & systemische Lösungen',
                    text: 'Wiederkehrende Abläufe intelligent vereinfachen – mit bewährter Technik.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border border-border rounded-md p-6 bg-card/50 backdrop-blur-sm"
                  >
                    <h3 className="text-sm font-medium text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm font-light text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </section>

        {/* Founder */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-2xl mx-auto">
            <Section>
              <h2 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-8 text-center md:text-left">
                Founder
              </h2>
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-20 h-20 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center">
                  <span className="text-2xl font-light text-muted-foreground">FB</span>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-normal text-foreground mb-2">Florian Beisel</h3>
                  <p className="text-sm text-muted-foreground mb-4">Founder</p>
                  <p className="text-base font-light leading-relaxed text-foreground/80">
                    Technischer Hintergrund, operativer Anspruch, regionale Verankerung
                    in der Odenwald- und Neckar-Region. Systeme entstehen hier nicht
                    auf dem Reißbrett, sondern aus echtem Bedarf – mit Überblick,
                    Umsetzungswillen und Ausdauer.
                  </p>
                </div>
              </div>
            </Section>
          </div>
        </section>

        {/* Arbeitsweise */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-3xl mx-auto">
            <Section>
              <h2 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-12">
                Arbeitsweise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Klare Lösungen statt Theater',
                    text: 'Ergebnisse zählen, nicht Foliendecks.',
                  },
                  {
                    title: 'Pragmatischer Aufbau statt Buzzwords',
                    text: 'Was gebaut wird, muss funktionieren – nicht nur gut klingen.',
                  },
                  {
                    title: 'Technische & operative Umsetzbarkeit',
                    text: 'Konzepte, die sich tatsächlich realisieren lassen.',
                  },
                  {
                    title: 'Langfristig wartbare Systeme',
                    text: 'Gebaut für Jahre, nicht für Demos.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border border-border rounded-md p-6 bg-card/50 backdrop-blur-sm"
                  >
                    <h3 className="text-sm font-medium text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm font-light text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="py-24 md:py-32 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <Section>
              <h2 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-8">
                Kontakt
              </h2>
              <p className="text-lg font-light text-foreground/80 mb-8">
                Wenn es passt, sprechen wir.
              </p>
              <a
                href="mailto:kontakt@beisel.works"
                className="inline-block text-sm tracking-wide text-foreground border border-border px-8 py-3 rounded-md hover:bg-secondary transition-colors duration-300"
              >
                kontakt@beisel.works
              </a>
            </Section>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-border">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} beisel.works
            </span>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Impressum
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Datenschutz
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
