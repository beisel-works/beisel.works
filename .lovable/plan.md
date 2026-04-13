

# beisel.works – Überarbeitung

## Kernänderungen

### 1. "Stealth Mode" entfernen
Das Badge wird komplett entfernt. Es vermischt Konzepte und gehört nicht auf die Seite.

### 2. Hero mit CTAs erweitern
Statt des Stealth-Badge kommen zwei CTAs:
- **Primär:** "Projekt anfragen" (mailto oder Scroll zu Kontakt)
- **Sekundär:** "Mehr erfahren" (Scroll zur nächsten Sektion)

### 3. Neue Sektion: Leistungsfelder (zwischen "Worum es geht" und "Founder")
Diskrete, knappe Darstellung der Kompetenzbereiche – keine Produktmatrix, sondern eine ruhige Auflistung:
- IT Services & Consulting
- Softwareentwicklung
- Webentwicklung & Design
- Automatisierung & systemische Lösungen

Als schlichte Liste oder minimale Karten, ohne Preise oder Detail-Unterseiten. AI-Kompetenz nur als Teilaspekt von "Automatisierung", nicht als eigener Block.

### 4. Alles andere bleibt
Tagline, Founder-Profil, Arbeitsweise, Kontakt, Footer – inhaltlich unverändert.

## Technisch
- Nur `src/pages/Index.tsx` wird editiert
- Stealth-Badge (Zeilen 52-54) entfernt, durch zwei CTA-Buttons ersetzt
- Neue Leistungsfelder-Sektion eingefügt
- Smooth-Scroll für sekundäre CTA

