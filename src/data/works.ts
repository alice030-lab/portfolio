export interface WorkImage {
  src: string;
  alt?: string;
}

export interface WorkSection {
  title: string;
  desc?: string;
  layout?: "pair" | "full";
  images: WorkImage[];
}

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
  intro?: string;
  sections: WorkSection[];
}

const img = (n: string) => `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/${n}`;

export const works: Work[] = [
  {
    slug: "packaging-series",
    title: "礁坑社區包裝再造",
    client: "礁坑社區發展協會",
    year: "2023",
    tag: "包裝設計",
    cover: img("pkg-drink-2.jpg"),
    span: "span-7",
    summary: "為礁坑社區做的完整包裝再造 — 從橄欖氣泡飲、菜單、展版到社群行銷圖一貫串起。",
    role: "包裝設計 · 插畫 · 視覺統籌",
    scope: ["橄欖氣泡飲", "橄欖菜單", "展版設計", "社群行銷圖"],
    intro: "礁坑社區為典型的農村社區，社區老化嚴重再加上年輕人外移，社區中剩下的多是沒有經濟基礎的老人。日治時期種植的錫蘭橄欖經過復育後發展觀光，成為社區重新被看見的契機。",
    sections: [
      {
        title: "橄欖氣泡飲設計",
        desc: "自行繪製橄欖與橄欖花插圖呈現清爽感。",
        layout: "pair",
        images: [
          { src: img("pkg-drink-1.jpg"), alt: "橄欖氣泡飲包裝 1" },
          { src: img("pkg-drink-2.jpg"), alt: "橄欖氣泡飲包裝 2" },
        ],
      },
      {
        title: "橄欖菜單設計",
        desc: "使用中式風格並加大文字，使老年人較易看清楚。",
        layout: "pair",
        images: [
          { src: img("pkg-menu-1.png"), alt: "橄欖菜單設計 1" },
          { src: img("pkg-menu-2.jpg"), alt: "橄欖菜單設計 2" },
        ],
      },
      {
        title: "展版設計",
        desc: "展場用大尺寸視覺，延續包裝的色票與插畫語彙。",
        layout: "full",
        images: [
          { src: img("pkg-board.jpg"), alt: "展版設計" },
        ],
      },
      {
        title: "社群行銷圖",
        desc: "把品牌視覺延伸到線上社群貼文，從產品、線下活動、到線上一體成形。",
        layout: "full",
        images: [
          { src: img("pkg-social.jpg"), alt: "社群行銷圖" },
        ],
      },
    ],
  },
];
