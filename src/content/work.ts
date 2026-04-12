export interface WorkItem {
  slug: string;
  title: string;
  company: string;
  period: string;
  tags: string[];
  summary: string;
  content: string;
}

export const workItems: WorkItem[] = [
  {
    slug: "pm-tech-company",
    title: "Product Manager",
    company: "FinTech Innovations GmbH",
    period: "2022 — Heute",
    tags: ["product-management", "leadership", "agile", "b2b", "ai"],
    summary:
      "Verantwortlich für die Produktstrategie und -entwicklung einer B2B-FinTech-Plattform mit 500K+ Nutzern.",
    content: `Als Product Manager bei FinTech Innovations habe ich die End-to-End-Verantwortung für die Produktstrategie unserer B2B-Zahlungsplattform übernommen.

**Meine Hauptaufgaben:**
- Strategische Produktplanung und Roadmap-Gestaltung in Zusammenarbeit mit C-Level Stakeholdern
- Führung eines cross-funktionalen Teams aus 8 Engineers, 2 Designern und 1 Data Scientist
- Einführung von AI-gestützten Fraud-Detection-Features, die 40% der Betrugsversuche reduzierten
- User Research und Discovery mit Enterprise-Kunden (Deutsche Bank, Commerzbank)

**Highlights:**
- Launch einer neuen API-Suite, die von 200+ Enterprise-Kunden innerhalb von 6 Monaten adoptiert wurde
- Einführung eines neuen Agile-Frameworks, das Time-to-Market um 30% verbesserte
- Direkte Zusammenarbeit mit dem CTO an der technischen Produktvision`,
  },
  {
    slug: "senior-po-scaleup",
    title: "Senior Product Owner",
    company: "LogiTech Solutions",
    period: "2020 — 2022",
    tags: ["product-owner", "scrum", "b2b", "logistics", "saas"],
    summary:
      "Product Owner für ein SaaS-Logistik-Tool mit Fokus auf agile Transformation und Stakeholder-Management.",
    content: `Bei LogiTech Solutions war ich als Senior Product Owner für die Weiterentwicklung unserer cloud-basierten Supply-Chain-Management-Lösung verantwortlich.

**Meine Hauptaufgaben:**
- Priorisierung und Spezifikation von Features im Backlog (500+ Items)
- Facilitating von Sprint Planning, Reviews und Retrospectives
- Enge Zusammenarbeit mit Solution Engineering und Sales-Teams
- Durchführung von Kundeninterviews zur Validierung von Product Hypotheses

**Highlights:**
- Agile Transformation des Teams von Waterfall zu Scrum (12 Wochen Programm)
- Erfolgreicher Launch des neuen Dashboard-Features mit 4.5★ App-Rating
- Reduktion der Bug-Density um 60% durch besseres Requirements Engineering`,
  },
  {
    slug: "product-lead-startup",
    title: "Product Lead",
    company: "GreenPulse AI",
    period: "2018 — 2020",
    tags: ["strategy", "ai", "user-research", "founder", "sustainability"],
    summary:
      "Product Lead und Mitgründer eines AI-Startups für nachhaltigen Konsum.",
    content: `Als Mitgründer und Product Lead von GreenPulse AI habe ich das Produkt von 0 auf 50K Nutzer in 18 Monaten gebracht.

**Meine Hauptaufgaben:**
- Produktstrategie und -vision (Community, AI Recommendations, Carbon Tracking)
- UX Design und User Research (50+ Interviews, 3 Usability-Studien)
- Go-to-Market-Strategie und Partnerschaften mit NGOs und Kommunen
- Fundraising und Investor Relations (Ø 1.5M€ ARR erreicht)

**Highlights:**
- Launch der AI-basierten CO₂-Tracking-Funktion mit Techcrunch Coverage
- Partnerschaft mit dem Umweltbundesamt für offizielle CO₂-Datenintegration
- 3 Awards für innovatives Klima-Tech Produktdesign`,
  },
];
