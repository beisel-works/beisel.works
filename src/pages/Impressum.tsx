const Impressum = () => {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-20">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-3">
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Zurück
          </a>
          <h1 className="text-4xl font-light tracking-tight">Impressum</h1>
        </div>

        <section className="space-y-3 text-foreground/85 leading-relaxed">
          <p>
            Angaben gemäß § 5 TMG
          </p>
          <p>
            Florian Beisel<br />
            beisel.works<br />
            Aufeldstraße 14<br />
            69437 Neckargerach-Guttenbach<br />
            Deutschland
          </p>
        </section>

        <section className="space-y-3 text-foreground/85 leading-relaxed">
          <h2 className="text-xl font-normal">Kontakt</h2>
          <p>
            E-Mail: <a className="underline underline-offset-4" href="mailto:florian@beisel.org">florian@beisel.org</a><br />
            Telefon: <a className="underline underline-offset-4" href="tel:+4915123033390">+49 151 23033390</a>
          </p>
        </section>

        <section className="space-y-3 text-foreground/85 leading-relaxed">
          <h2 className="text-xl font-normal">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            Florian Beisel<br />
            Aufeldstraße 14<br />
            69437 Neckargerach-Guttenbach
          </p>
        </section>
      </div>
    </main>
  );
};

export default Impressum;
