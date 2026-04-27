export interface GalleryItem {
  src: string;
  caption?: string;
  note?: string;
}

export interface GalleryDemo {
  title: string;
  src: string;
  tag: string;
  desc?: string;
  ratio?: string;
}

export interface GalleryCategory {
  key: string;
  name: string;
  tagline: string;
  desc: string;
  subsections?: { title: string; note?: string; images: GalleryItem[] }[];
  images?: GalleryItem[];
  demos?: GalleryDemo[];
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
        title: "主視覺",
        note: "為企業所做的主視覺規劃 — 規範手冊與大尺寸海報應用。",
        images: [
          { src: img("work-manual-1.png"), caption: "VI 規範手冊封面" },
          { src: img("work-poster.jpg"), caption: "A0 海報版型" },
        ],
      },
      {
        title: "VI 規劃與識別應用",
        note: "識別系統的核心規劃與應用設計 — 印刷品、周邊、品牌延伸的統一視覺語彙。",
        images: [
          { src: img("work-vi-1.png"), caption: "識別應用 01" },
          { src: img("work-vi-2.png"), caption: "識別應用 02" },
          { src: img("work-vi-3.png"), caption: "識別應用 03" },
          { src: img("work-vi-4.png"), caption: "識別應用 04" },
        ],
      },
    ],
  },
  {
    key: "dm",
    name: "DM & 平面設計",
    tagline: "02 — Print",
    desc: "DM 改版、宣傳單張、Banner、海報、展覽邀請函。專門處理資訊量大、要在小篇幅內說清楚的案子。",
    subsections: [
      {
        title: "DM 改善與設計",
        note: "從結構、字型到圖文節奏的 DM 案例。",
        images: [
          { src: img("work-dm-1.png"), caption: "DM" },
          { src: img("work-manual-2.png"), caption: "規範手冊內頁" },
          { src: img("work-social-1.png"), caption: "DM 1" },
          { src: img("work-social-2.png"), caption: "DM 2" },
          { src: img("feature-02.png"), caption: "DM 3" },
        ],
      },
      {
        title: "海報 / Banner / 展覽",
        note: "大尺寸印刷物、展場背板、活動主視覺。",
        images: [
          { src: img("work-detail.jpg"), caption: "展場背板細節（舊設計）" },
        ],
      },
    ],
  },
  {
    key: "manual",
    name: "說明書與編輯設計",
    tagline: "03 — Editorial",
    desc: "長篇資訊的分層、圖示重繪、閱讀動線。讓厚手冊也能被讀完。",
    images: [
      { src: img("work-dm-2.png"), caption: "說明書" },
    ],
  },
  {
    key: "uiux",
    name: "UI / UX & 前端",
    tagline: "05 — Product",
    desc: "訂位系統、營運後台、會員介面、響應式網站。不只是設計畫面，也親手寫前端。",
    demos: [
      {
        title: "Solo Sync — Discovery 探索頁",
        tag: "Web App · UI Design",
        desc: "音樂創作者協作平台的探索頁面 — 分類瀏覽、搜尋、即時互動。",
        src: "https://solo-sync.vercel.app/discovery",
        ratio: "16 / 9",
      },
      {
        title: "TFA Redesign — 前端重製案",
        tag: "HTML · CSS · JS",
        desc: "親手刻的響應式網站重製案，從版型結構、互動到動效全程實作。",
        src: "https://alice030-lab.github.io/tfa-redesign/index.html",
        ratio: "16 / 9",
      },
    ],
    images: [
      { src: img("case-golf.png"), caption: "時時夠夫 — 場地預約系統 Venue Booking System" },
      { src: img("case-charging.png"), caption: "汽機車充電站 — 預約充電系統 Pre-View" },
    ],
  },
  {
    key: "social",
    name: "社群內容",
    tagline: "06 — Social",
    desc: "貼文模板系統、節慶活動圖、品牌日常內容。建一套工具讓團隊能持續產出。",
    images: [
      { src: img("hero-vi-01.png"), caption: "社群主視覺 01" },
      { src: img("hero-vi-03.png"), caption: "社群主視覺 03" },
      { src: img("feature-01.png"), caption: "社群主視覺" },
    ],
  },
];
