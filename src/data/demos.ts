export interface Demo {
  title: string;
  desc: string;
  src: string;
  tag: string;
  ratio?: string; // e.g. "16 / 10"
}

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const demos: Demo[] = [
  {
    title: "本作品集 — 前端實作",
    tag: "Astro · GitHub Pages",
    desc: "整站使用 Astro 靜態框架自行刻 — 響應式、SVG 雲、CSS 漸層格紋背景、Hover 互動、TypeScript 內容資料結構。",
    src: `https://alice030-lab.github.io${base}/`,
    ratio: "16 / 11",
  },
  {
    title: "互動原型 Demo",
    tag: "CodePen · CSS Animation",
    desc: "CSS 動態效果範例。實際接案的高爾夫預約系統與充電站後台 prototype 可後續替換成 Figma Embed 或自製 demo URL。",
    src: "https://codepen.io/Hyperplexed/embed/preview/abYWJdX?default-tab=result",
    ratio: "16 / 11",
  },
];
