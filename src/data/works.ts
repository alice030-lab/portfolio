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
  {
    slug: "uiux-golf",
    title: "高爾夫球場預約系統",
    client: "私人俱樂部",
    year: "2024",
    tag: "產品 · UI/UX",
    cover: img("work-uiux-golf.png"),
    span: "span-5",
    summary: "私人高爾夫球場的端到端預約介面，從會員儀表板到桿弟分配。",
    role: "產品設計 · UI · UX 研究",
    scope: ["會員旅程地圖", "預約流程", "元件庫", "管理後台"],
    body: [
      { type: "p", text: "舊系統把不可預約的時段以模糊灰階呈現，會員常常在選時段這一步流失。我們以單一主要動作為中心重建月曆、把桿弟選擇延後到時段保留之後再處理，並把管理後台的字型階層重做。" },
      { type: "full", src: img("work-uiux-golf.png"), alt: "預約介面" },
      { type: "p", text: "上線一個月內，預約完成率有顯著提升。後台團隊也終於不用再匯出 CSV 才能知道誰下午幾點開球。" },
    ],
  },
  {
    slug: "uiux-charging",
    title: "充電站營運後台",
    client: "電動車充電網",
    year: "2024",
    tag: "產品 · UI/UX",
    cover: img("work-uiux-charging.png"),
    span: "span-6",
    summary: "電動車充電網的營運端儀表板，讓故障排除優先於虛榮指標。",
    role: "產品設計 · UI",
    scope: ["儀表板架構", "狀態分類", "地圖介面"],
    body: [
      { type: "p", text: "充電網成長速度超越了原本的工具。營運人員需要一眼看出哪些站點需要派車 — 而不是看累積發電度數。我們以站點健康度為核心重新設計儀表板，把營收儀表板改放到次要分頁。" },
      { type: "full", src: img("work-uiux-charging.png"), alt: "營運後台" },
    ],
  },
];
