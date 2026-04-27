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
    slug: "packaging-series",
    title: "礁坑社區包裝再造",
    client: "礁坑社區發展協會",
    year: "2023",
    tag: "包裝設計",
    cover: img("pkg-drink-1.jpg"),
    span: "span-7",
    summary: "為礁坑社區做的完整包裝再造 — 從橄欖氣泡飲、菜單、展版到社群行銷圖一貫串起。",
    role: "包裝設計 · 插畫 · 視覺統籌",
    scope: ["橄欖氣泡飲", "橄欖菜單", "展版設計", "社群行銷圖"],
    body: [
      { type: "p", text: "礁坑社區為典型的農村社區，社區老化嚴重再加上年輕人外移，社區中剩下的多是沒有經濟基礎的老人。日治時期種植的錫蘭橄欖經過復育後發展觀光，成為社區重新被看見的契機。" },

      { type: "p", text: "── 橄欖氣泡飲設計" },
      { type: "p", text: "自行繪製橄欖與橄欖花插圖呈現清爽感。" },
      { type: "pair", pair: [
        { src: img("pkg-drink-1.jpg"), alt: "橄欖氣泡飲包裝 1" },
        { src: img("pkg-drink-2.jpg"), alt: "橄欖氣泡飲包裝 2" },
      ] },

      { type: "p", text: "── 橄欖菜單設計" },
      { type: "p", text: "使用中式風格並加大文字，使老年人較易看清楚。" },
      { type: "pair", pair: [
        { src: img("pkg-menu-1.png"), alt: "橄欖菜單設計 1" },
        { src: img("pkg-menu-2.jpg"), alt: "橄欖菜單設計 2" },
      ] },

      { type: "p", text: "── 展版設計" },
      { type: "full", src: img("pkg-board.jpg"), alt: "展版設計" },

      { type: "p", text: "── 社群行銷圖" },
      { type: "full", src: img("pkg-social.jpg"), alt: "社群行銷圖" },
    ],
  },
];
