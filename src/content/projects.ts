export interface ProjectItem {
  slug: string;
  title: string;
  tags: string[];
  summary: string;
  content: string;
  link?: string;
}

export const projectItems: ProjectItem[] = [
  {
    slug: "openclaw-bot",
    title: "OpenClaw Bot",
    tags: ["ai", "automation", "telegram", "openai", "agentic"],
    summary:
      "Ein KI-gesteuerter Personal Assistant für Telegram, der mit OpenAI's API und Agentic Workflows arbeitet.",
    content: `Der OpenClaw Bot ist mein persönliches AI-Powerhouse – ein Telegram-Bot, der als intelligenter Assistent fungiert und mir das Leben erleichtert.

**Was er kann:**
- Natürliche Konversation in Deutsch und Englisch
- Erinnerungen, Termine und Tasks verwalten
- Websuche und Research automatisieren
- Code schreiben und reviewen
- Bilder generieren (DALL-E, Imagen)
- Voice-Nachrichten beantworten

**Tech Stack:**
- Node.js Backend auf VPS (Hetzner)
- OpenAI API (GPT-4o) für Konversation
- Tavily Search API für Websuche
- ElevenLabs für Voice-Output
- Claude API für Coding-Tasks
- Custom Agentic Workflows mit Tool-Chaining

**Das Besondere:**
Der Bot nutzt Agentic AI Patterns – er kann selbstständig Entscheidungen treffen, mehrere Tools verketten und komplexe Multi-Step Tasks durchführen.`,
    link: "https://docs.openclaw.ai",
  },
  {
    slug: "vibecode-gallery",
    title: "Vibecode Gallery",
    tags: ["creative", "web", "gallery", "ai", "experiments"],
    summary:
      "Eine kuratierte Sammlung von AI-generierten Kunstwerken und Coding-Experimenten.",
    content: `Die Vibecode Gallery ist mein Playground für AI-Art und kreative Coding-Experimente.

**Was drin ist:**
- AI-generierte Bilder (Midjourney, DALL-E, Stable Diffusion)
- Interaktive WebGL-Experimente
- Generative Art mit Processing und p5.js
- Creative Coding Sketches
- Vim-Shortcuts Trainer

**Tech Stack:**
- Next.js 15 mit App Router
- Three.js für 3D-WebGL-Sektion
- Framer Motion für Animationen
- Supabase für Gallery-Backend
- Cloudinary für Bildoptimierung

**Highlights:**
- Smooth Scroll Navigation mit Magnetic Buttons
- Dark/Light Mode mit thematisierten Farbwelten
- Responsive Grid mit Masonry-Layout
- Lazy Loading und Performance-Optimierung`,
    link: "https://vibecode.gallery",
  },
];
