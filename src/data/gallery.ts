export interface GalleryCategory {
  key: string;
  name: string;
  desc: string;
  images: { src: string; caption?: string }[];
}

const img = (n: string) => `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/${n}`;

export const categories: GalleryCategory[] = [
  {
    key: "vi",
    name: "VI 規劃與主視覺",
    desc: "品牌識別核心、標準字、年度主視覺、活動延伸應用。",
    images: [
      { src: img("hero-vi-01.png"), caption: "60 週年主視覺" },
      { src: img("hero-vi-03.png"), caption: "延伸應用" },
      { src: img("work-vi-1.png"), caption: "印刷品應用" },
      { src: img("work-vi-2.png"), caption: "識別系統" },
      { src: img("work-vi-3.png"), caption: "識別系統" },
      { src: img("work-vi-4.png"), caption: "識別延伸" },
      { src: img("feature-01.png"), caption: "主視覺 A" },
      { src: img("feature-02.png"), caption: "主視覺 B" },
    ],
  },
  {
    key: "dm",
    name: "DM 改善與設計",
    desc: "從結構、字型到圖文節奏的 DM 改版案例。",
    images: [
      { src: img("work-dm-1.png"), caption: "DM 改善前後" },
      { src: img("work-dm-2.png"), caption: "DM 設計" },
    ],
  },
  {
    key: "manual",
    name: "說明書編排",
    desc: "長篇資訊的分層、圖示重繪、閱讀動線設計。",
    images: [
      { src: img("work-manual-1.png"), caption: "操作手冊封面" },
      { src: img("work-manual-2.png"), caption: "手冊內頁" },
    ],
  },
  {
    key: "social",
    name: "社群素材",
    desc: "貼文模板系統、節慶活動圖、品牌日常內容。",
    images: [
      { src: img("work-social-1.png"), caption: "社群系列 A" },
      { src: img("work-social-2.png"), caption: "社群系列 B" },
    ],
  },
  {
    key: "exhibit",
    name: "展覽與海報",
    desc: "展場平面、邀請函、海報、Banner。",
    images: [
      { src: img("work-poster.jpg"), caption: "展覽主視覺" },
      { src: img("work-detail.jpg"), caption: "展覽細節" },
    ],
  },
];
