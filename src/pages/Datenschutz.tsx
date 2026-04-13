const Datenschutz = () => {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-20">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-3">
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Zurück
          </a>
          <h1 className="text-4xl font-light tracking-tight">Datenschutz</h1>
        </div>

        <section className="space-y-3 text-foreground/85 leading-relaxed">
          <p>
            Verantwortlich für diese Website ist Florian Beisel, Aufeldstraße 14, 69437 Neckargerach-Guttenbach,
            E-Mail: <a className="underline underline-offset-4" href="mailto:florian@beisel.org">florian@beisel.org</a>.
          </p>
        </section>

        <section className="space-y-3 text-foreground/85 leading-relaxed">
          <h2 className="text-xl font-normal">Server-Logfiles</h2>
          <p>
            Beim Aufruf dieser Website können durch den Hosting-Anbieter technisch erforderliche Daten in Server-Logfiles verarbeitet werden,
            insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Datei, übertragene Datenmenge, Referrer und User-Agent.
            Die Verarbeitung erfolgt zur technischen Bereitstellung, Stabilität und Sicherheit der Website.
          </p>
        </section>

        <section className="space-y-3 text-foreground/85 leading-relaxed">
          <h2 className="text-xl font-normal">Kontaktaufnahme</h2>
          <p>
            Wenn du per E-Mail Kontakt aufnimmst, werden die von dir übermittelten Angaben zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen verarbeitet.
          </p>
        </section>

        <section className="space-y-3 text-foreground/85 leading-relaxed">
          <h2 className="text-xl font-normal">Keine Analyse- oder Trackingdienste</h2>
          <p>
            Diese Website verwendet derzeit keine eigenen Analyse-, Tracking- oder Marketingdienste.
          </p>
        </section>

        <section className="space-y-3 text-foreground/85 leading-relaxed">
          <h2 className="text-xl font-normal">Deine Rechte</h2>
          <p>
            Du hast im Rahmen der gesetzlichen Vorschriften insbesondere ein Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung und Widerspruch. Zur Ausübung deiner Rechte genügt eine formlose Nachricht per E-Mail.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Datenschutz;
