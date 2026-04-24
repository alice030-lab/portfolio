export interface GalleryItem {
  src: string;
  caption?: string;
  note?: string;
}

export interface GalleryCategory {
  key: string;
  name: string;
  tagline: string;
  desc: string;
  subsections?: { title: string; note?: string; images: GalleryItem[] }[];
  images?: GalleryItem[];
}

const img = (n: string) => `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/${n}`;

export const categories: GalleryCategory[] = [
  {
    key: "vi",
    name: "VI 規劃 & 主視覺",
    tagline: "01 — Identity",
    desc: "標準字、識別系統、年度主視覺、活動延伸應用。從 logo 到整套品牌資產一次到位。",
    subsections: [
      {
        title: "企業形象與年度主視覺",
        note: "為週年、企業形象所做的主視覺規劃 — 融合圖像與版面排版，兼顧識別性與科技感。",
        images: [
          { src: img("hero-vi-01.png"), caption: "60 週年主視覺 — 完整構圖" },
          { src: img("hero-vi-03.png"), caption: "週年延伸應用" },
          { src: img("feature-01.png"), caption: "年度主視覺 A" },
          { src: img("feature-02.png"), caption: "年度主視覺 B" },
        ],
      },
      {
        title: "VI 識別系統延伸",
        note: "識別系統的應用設計 — 印刷品、展示物、品牌周邊的統一視覺語彙。",
        images: [
          { src: img("work-vi-1.png"), caption: "識別應用 01" },
          { src: img("work-vi-2.png"), caption: "識別應用 02" },
          { src: img("work-vi-3.png"), caption: "識別應用 03" },
          { src: img("work-vi-4.png"), caption: "識別應用 04" },
        ],
      },
      {
        title: "展覽主視覺",
        note: "主導日本、台灣、美國的展覽設計規劃，從空間動線到視覺輸出。",
        images: [
          { src: img("work-poster.jpg"), caption: "A0 展覽主視覺" },
          { src: img("work-detail.jpg"), caption: "展場細節" },
        ],
      },
    ],
  },
  {
    key: "dm",
    name: "DM & 平面設計",
    tagline: "02 — Print",
    desc: "DM 改版、宣傳單張、Banner、海報。專門處理資訊量大、要在小篇幅內說清楚的案子。",
    images: [
      { src: img("work-dm-1.png"), caption: "DM 改善前後對照" },
      { src: img("work-dm-2.png"), caption: "DM 重新設計" },
    ],
  },
  {
    key: "manual",
    name: "說明書與編輯設計",
    tagline: "03 — Editorial",
    desc: "長篇資訊的分層、圖示重繪、閱讀動線。讓厚手冊也能被讀完。",
    images: [
      { src: img("work-manual-1.png"), caption: "VI 規範手冊封面" },
      { src: img("work-manual-2.png"), caption: "規範手冊內頁" },
    ],
  },
  {
    key: "social",
    name: "社群內容",
    tagline: "06 — Social",
    desc: "貼文模板系統、節慶活動圖、品牌日常內容。建一套工具讓團隊能持續產出。",
    images: [
      { src: img("work-social-1.png"), caption: "社群系列 A" },
      { src: img("work-social-2.png"), caption: "社群系列 B" },
    ],
  },
];
