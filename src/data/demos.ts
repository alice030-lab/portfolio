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
    title: "TFA Redesign — 前端重製案",
    tag: "HTML · CSS · JS",
    desc: "親手刻的響應式網站重製案，從版型結構、互動到動效全程實作。",
    src: "https://alice030-lab.github.io/tfa-redesign/index.html",
    ratio: "16 / 11",
  },
  {
    title: "本作品集 — 自我展示",
    tag: "Astro · GitHub Pages",
    desc: "整站使用 Astro 靜態框架自行刻 — 響應式、SVG、CSS 漸層格紋背景、Hover 互動、TypeScript 內容資料結構。",
    src: `https://alice030-lab.github.io${base}/`,
    ratio: "16 / 11",
  },
];
