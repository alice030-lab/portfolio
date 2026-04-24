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
    slug: "anniversary-vi",
    title: "六十週年品牌識別系統",
    client: "製造業集團（保密）",
    year: "2024",
    tag: "品牌識別",
    cover: img("hero-vi-01.png"),
    span: "span-7",
    summary: "為慶祝企業六十週年所做的識別更新，在傳承既有標誌與當代編輯系統之間取得平衡。",
    role: "藝術指導 · 識別設計 · 印刷",
    scope: ["標準字優化", "字型系統", "印刷物應用", "展場視覺"],
    body: [
      { type: "p", text: "客戶希望這套系統能承載六十年的品牌資產，但又不會讓公司被困在過去。我們重新繪製了既有標誌、調整了標準字以提升印刷銳利度，並建構一套同時適用於 B2B 業務文件與十五米展場主視覺的字型網格。" },
      { type: "full", src: img("hero-vi-03.png"), alt: "週年品牌主視覺" },
      { type: "p", text: "近乎單色的低彩度配色給了整套系統編輯式的克制感，搭配單一強調色，讓週年活動材料能慶祝、卻不過於喧鬧。" },
      { type: "pair", pair: [
        { src: img("work-vi-1.png"), alt: "應用一" },
        { src: img("work-vi-2.png"), alt: "應用二" },
      ] },
      { type: "p", text: "最終交付的是一套內部團隊可以自行延伸的工具包 — 階層規則清楚，但在主視覺上仍保留呼吸與驚喜的空間。" },
    ],
  },
  {
    slug: "manual-redesign",
    title: "操作手冊改版",
    client: "工業設備公司",
    year: "2024",
    tag: "資訊設計",
    cover: img("work-manual-1.png"),
    span: "span-5",
    summary: "把一本 240 頁的操作手冊重新結構化，成為易於檢索、字體節奏穩定的參考書。",
    role: "資訊設計 · 編輯排版",
    scope: ["資訊架構", "圖示重繪", "字型規劃", "印刷監督"],
    body: [
      { type: "p", text: "原始手冊把關鍵的安全步驟埋在沒有結構的長段文字裡。我們以任務為中心重建資訊架構、用統一線條重繪每張圖示，並引入第二欄放置邊註與警告。" },
      { type: "full", src: img("work-manual-2.png"), alt: "手冊內頁" },
      { type: "p", text: "現場服務團隊立刻有感；早期回報顯示，代表性安裝案例的設置時間縮短了約四分之一。" },
    ],
  },
  {
    slug: "packaging-series",
    title: "經典食品包裝系列",
    client: "食品品牌",
    year: "2023",
    tag: "包裝設計",
    cover: img("work-package-1.png"),
    span: "span-6",
    summary: "為一個老字號食品品牌設計的包裝家族，需同時適應百貨禮品櫃、獨立雜貨店、與電商平台。",
    role: "包裝設計 · 插畫指導",
    scope: ["結構設計", "平面設計", "攝影藝術指導"],
    body: [
      { type: "p", text: "品牌希望同時在百貨公司禮品大廳與獨立雜貨店裡都顯得自然。我們建構了一個包裝家族 — 主視覺面安靜內斂、背面則較有溫度，讓商品攝影主導畫面，品牌語氣在後面把整體串起來。" },
      { type: "full", src: img("work-package-2.png"), alt: "包裝家族" },
    ],
  },
  {
    slug: "uiux-golf",
    title: "高爾夫球場預約系統",
    client: "私人俱樂部",
    year: "2024",
    tag: "產品 · UI/UX",
    cover: img("work-uiux-golf.png"),
    span: "span-6",
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
  {
    slug: "social-content",
    title: "社群內容系統",
    client: "生活風格品牌",
    year: "2023",
    tag: "內容設計",
    cover: img("work-social-1.png"),
    span: "span-7",
    summary: "一套模組化的內容系統，讓品牌內部的小型團隊每天都能產出風格一致的社群貼文。",
    role: "藝術指導 · 模板系統",
    scope: ["模板庫", "字型系統", "編輯指引"],
    body: [
      { type: "p", text: "我們把一次性製作每篇貼文的工作流程，換成一套涵蓋五種常用格式的模板工具包。團隊現在可以在一個下午完成一週的內容，整個社群版面也不再像五個不同品牌。" },
      { type: "full", src: img("work-social-2.png"), alt: "社群系統" },
    ],
  },
];
