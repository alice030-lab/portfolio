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
    cover: img("work-package-1.png"),
    span: "span-7",
    summary: "為礁坑社區的錫蘭橄欖產業做的完整包裝再造，從氣泡飲、菜單、展版到社群行銷圖一貫串起。",
    role: "包裝設計 · 插畫 · 視覺統籌",
    scope: ["橄欖氣泡飲包裝", "橄欖菜單", "展版設計", "社群行銷圖"],
    body: [
      { type: "p", text: "礁坑是一個以農業為主的社區，當地的錫蘭橄欖有一段曾經失傳、又被重新復育的故事。客戶希望這套包裝能把「產地」的感覺誠實地傳出來，不是刻意包裝成文創樣板。" },
      { type: "p", text: "我們親手繪製橄欖與橄欖花的插圖，用於氣泡飲外包裝，呈現清爽、不做作的手感。" },
      { type: "pair", pair: [
        { src: img("work-package-1.png"), alt: "氣泡飲包裝 1" },
        { src: img("work-package-2.png"), alt: "氣泡飲包裝 2" },
      ] },
      { type: "p", text: "菜單設計採中式風格、放大字體，讓長輩也能看清楚 — 這是現場實際觀察後做的取捨。" },
      { type: "full", src: img("work-poster.jpg"), alt: "展版設計" },
      { type: "p", text: "展版與社群行銷圖延續包裝的視覺語彙，讓整個系列從產品、線下活動、到線上貼文都能辨認出是同一個品牌。" },
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
