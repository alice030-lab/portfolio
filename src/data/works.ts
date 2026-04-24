export interface Work {
  slug: string;
  title: string;
  client: string;
  year: string;
  tag: string;
  cover: string;
  span?: "span-7" | "span-5" | "span-6" | "offset-1" | "offset-2";
  summary: string;
  role: string;
  scope: string[];
  body: { type: "p" | "full" | "pair"; text?: string; src?: string; alt?: string; pair?: { src: string; alt: string }[] }[];
}

const img = (n: string) => `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/${n}`;

export const works: Work[] = [
  {
    slug: "anniversary-vi",
    title: "60-Year Anniversary VI System",
    client: "Confidential Manufacturing Group",
    year: "2024",
    tag: "Brand Identity",
    cover: img("hero-vi-01.png"),
    span: "span-7",
    summary: "A revised visual identity celebrating six decades of craft, balancing heritage marks with a contemporary editorial system.",
    role: "Art Direction · Identity Design · Print",
    scope: ["Logotype refinement", "Typographic system", "Print collateral", "Exhibition graphics"],
    body: [
      { type: "p", text: "The brief asked for a system that could carry forward sixty years of recognition without freezing the company in its past. We refined existing marks, redrew the wordmark for sharper print fidelity, and built a typographic grid that worked equally on a B2B sales sheet and a fifteen-metre exhibition wall." },
      { type: "full", src: img("hero-vi-03.png"), alt: "Anniversary brand sheet" },
      { type: "p", text: "A muted, near-monochrome palette gave the system editorial restraint, while a single accent ink let event materials feel celebratory without becoming loud." },
      { type: "pair", pair: [
        { src: img("work-vi-1.png"), alt: "Application 1" },
        { src: img("work-vi-2.png"), alt: "Application 2" },
      ] },
      { type: "p", text: "The result is a kit that the in-house team can extend — clear rules for hierarchy, but enough air for surprise on hero pieces." },
    ],
  },
  {
    slug: "manual-redesign",
    title: "Instruction Manual Redesign",
    client: "Industrial Equipment Co.",
    year: "2024",
    tag: "Information Design",
    cover: img("work-manual-1.png"),
    span: "span-5",
    summary: "Restructuring a 240-page instruction manual into a navigable, typographically calm reference.",
    role: "Information Design · Editorial Layout",
    scope: ["Information architecture", "Diagram redrawing", "Typography", "Print production"],
    body: [
      { type: "p", text: "The original manual buried critical safety steps behind unstructured walls of text. We rebuilt the IA around task-based chapters, redrew every diagram in a unified line weight, and introduced a second column for marginalia and warnings." },
      { type: "full", src: img("work-manual-2.png"), alt: "Manual spreads" },
      { type: "p", text: "Adoption from the field service team was immediate; setup time on a representative install dropped by roughly a quarter in early reports." },
    ],
  },
  {
    slug: "packaging-series",
    title: "Heritage Packaging Series",
    client: "F&B Brand",
    year: "2023",
    tag: "Packaging",
    cover: img("work-package-1.png"),
    span: "span-6",
    summary: "A packaging family for a heritage food brand, designed to read across shelf, gift, and e-commerce contexts.",
    role: "Packaging · Illustration Direction",
    scope: ["Structural design", "Surface graphics", "Photography art direction"],
    body: [
      { type: "p", text: "The brand wanted to look at home in both a department-store gift hall and an independent grocer. We built a packaging family with a quiet primary face and a warmer back-of-pack, letting the product photography lead while the brand voice held everything together." },
      { type: "full", src: img("work-package-2.png"), alt: "Packaging family" },
    ],
  },
  {
    slug: "uiux-golf",
    title: "Golf Course Reservation",
    client: "Private Club",
    year: "2024",
    tag: "Product · UI/UX",
    cover: img("work-uiux-golf.png"),
    span: "span-6",
    summary: "An end-to-end booking interface for a private golf course, from member dashboard to caddie assignment.",
    role: "Product Design · UI · UX Research",
    scope: ["Member journey mapping", "Booking flow", "Component library", "Admin console"],
    body: [
      { type: "p", text: "Members were dropping off at the time-slot picker because the legacy system surfaced unavailable times in muddy gray. We rebuilt the calendar around a single primary action, deferred caddie selection until after a slot was held, and gave the admin console real type hierarchy." },
      { type: "full", src: img("work-uiux-golf.png"), alt: "Reservation interface" },
      { type: "p", text: "Completion rate on a held booking moved meaningfully in the first month. The admin team finally stopped exporting CSVs to figure out who was teeing off when." },
    ],
  },
  {
    slug: "uiux-charging",
    title: "Charging Station Operator",
    client: "EV Infrastructure",
    year: "2024",
    tag: "Product · UI/UX",
    cover: img("work-uiux-charging.png"),
    span: "span-6",
    summary: "Operator-facing dashboard for an EV charging network, prioritizing fault triage over vanity metrics.",
    role: "Product Design · UI",
    scope: ["Dashboard architecture", "Status taxonomy", "Map interface"],
    body: [
      { type: "p", text: "The network was growing faster than the original tool. Operators needed to see, at a glance, which stations needed a truck rolled — not the lifetime kWh delivered. We rebuilt the dashboard around station health, with revenue dashboards as a secondary tab." },
      { type: "full", src: img("work-uiux-charging.png"), alt: "Operator dashboard" },
    ],
  },
  {
    slug: "social-content",
    title: "Social Content System",
    client: "Lifestyle Brand",
    year: "2023",
    tag: "Content Design",
    cover: img("work-social-1.png"),
    span: "span-7",
    summary: "A modular content system letting a small in-house team ship on-brand social posts every weekday.",
    role: "Art Direction · Template System",
    scope: ["Template library", "Type system", "Editorial guidelines"],
    body: [
      { type: "p", text: "We replaced a one-off post production model with a template kit covering five recurring formats. The team can now produce a week's content in a single afternoon, and the feed stops looking like five different brands." },
      { type: "full", src: img("work-social-2.png"), alt: "Social system" },
    ],
  },
];
