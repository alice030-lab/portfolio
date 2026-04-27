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
  philosophy?: string;
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
    philosophy: "識別系統不是 logo 的延伸，而是品牌如何被認識的全部規則。\n\n我關心的是這套規則能不能被理解、執行、與長期維持。從標準字、色彩、到主視覺構圖，每一個決定都是替未來幾年的應用負責。\n\n不追潮流，但要讓品牌能在二十年後仍被認得。",
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
    desc: "DM、宣傳單張、Banner、海報、展場、說明書 — 平面設計類作品集合。",
    philosophy: "DM 是品牌與使用者最直接的對話。在有限的版面與閱讀時間內，把訊息傳到、把眼神留下，是平面設計的本職。\n\n我擅長處理資訊量大的案子 — 把長篇拆解成可被掃讀的層次，讓重點自然浮上來。\n\n每一次改版都是重新整理「該說什麼、不該說什麼」。",
    images: [
      { src: img("work-dm-1.png"), caption: "DM" },
      { src: img("work-manual-2.png"), caption: "規範手冊內頁" },
      { src: img("work-social-1.png"), caption: "DM 1" },
      { src: img("work-social-2.png"), caption: "DM 2" },
      { src: img("feature-02.png"), caption: "DM 3" },
      { src: img("work-dm-2.png"), caption: "說明書" },
      { src: img("work-detail.jpg"), caption: "展場背板細節（舊設計）" },
    ],
  },
  {
    key: "uiux",
    name: "UI / UX & 前端",
    tagline: "05 — Product",
    desc: "訂位系統、營運後台、會員介面、響應式網站。不只是設計畫面，也親手寫前端。",
    philosophy: "設計不只是好看的畫面，是可以被使用、能解決真實問題的工具。\n\n我同時做設計與寫前端，因為兩端都得親自經驗才能做出真正可用的產品 — 知道哪些畫面工程上難實作、哪些互動成本高、哪些細節在使用情境中根本不重要。\n\n好的 UI 是讓人感覺不到設計的存在。",
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
      { src: img("case-golf.avif"), caption: "時時夠夫 — 場地預約系統 Venue Booking System" },
      { src: img("case-charging.avif"), caption: "汽機車充電站 — 預約充電系統 Pre-View" },
    ],
  },
  {
    key: "social",
    name: "社群內容",
    tagline: "06 — Social",
    desc: "貼文模板系統、節慶活動圖、品牌日常內容。建一套工具讓團隊能持續產出。",
    philosophy: "社群不是行銷管道，是品牌每天的聲音。\n\n我建構的是一套可重複使用的內容系統 — 模板、規則、視覺資產 — 讓在地團隊每週都能持續產出，而不必每次回頭找設計師。\n\n設計不該成為品牌持續運作的瓶頸。",
    images: [
      { src: img("hero-vi-01.png"), caption: "社群主視覺 01" },
      { src: img("hero-vi-03.png"), caption: "社群主視覺 03" },
      { src: img("feature-01.png"), caption: "社群主視覺" },
    ],
  },
];
