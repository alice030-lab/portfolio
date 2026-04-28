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
          { src: img("work-manual-1.png"), caption: "VI 規範手冊封面", note: "規範手冊是品牌的「說明書」 — 設計師交棒給內部團隊，能不能照規則執行就靠這一本。封面採用低對比、克制的視覺語言，避免讓手冊本身成為主角。" },
          { src: img("work-poster.jpg"), caption: "A0 海報版型", note: "A0 大尺寸海報的版型，遠看識別、近看資訊。文字階層必須能在 5 公尺外讀到主標題、走近讀到副資訊。" },
        ],
      },
      {
        title: "VI 規劃與識別應用",
        note: "識別系統的核心規劃與應用設計 — 印刷品、周邊、品牌延伸的統一視覺語彙。",
        images: [
          { src: img("work-vi-1.png"), caption: "識別應用 01", note: "識別系統落地到實體應用 — 從色票、字型、版型到實際物件的銜接，每一步都在驗證系統的可執行性。" },
          { src: img("work-vi-2.png"), caption: "識別應用 02", note: "延伸應用上的細節調整 — 同一套識別在不同尺寸與材質上會有不同的視覺重量，這裡記錄這些微調。" },
          { src: img("work-vi-3.png"), caption: "識別應用 03" },
          { src: img("work-vi-4.png"), caption: "識別應用 04" },
        ],
      },
    ],
  },
  {
    key: "dm",
    name: "DM & 平面設計 / 社群",
    tagline: "02 — Print & Social",
    desc: "DM、宣傳單張、Banner、海報、說明書、社群主視覺與互動企劃 — 所有平面與社群內容類作品。",
    philosophy: "平面與社群是品牌跟使用者最直接的兩種對話形式。\n\nDM 在有限的版面內結構化大量資訊；社群則是品牌每天的聲音，需要一套可重複使用的內容系統，讓在地團隊能持續產出。\n\n兩者共用一套思考方式：先決定「該說什麼、不該說什麼」，再決定怎麼說。",
    images: [
      // Group A — vertical A4 / poster (1.3–1.4 ratio) — uniform tall portrait
      { src: img("dm-bsis.png"), caption: "BSIS 盲點資訊系統 DM（奇美車電）", note: "為奇美車電的 BSIS 盲點資訊系統設計的產品宣傳 DM。\n\n資訊量大、認證徽章多、技術規格繁雜 — 在單頁內結構化呈現「應用情境 → 認證 → 規格 → 功能特色」四大區塊，讓專業客戶能一眼掃讀。\n\n使用紫色為主色凸顯科技感，搭配實際攝影與插畫示意圖。Taiwan Excellence 2022 入選作品。" },
      { src: img("dm-golf-venue.png"), caption: "場地預約系統 DM（威爾動力）", note: "為威爾動力高爾夫場地預約系統設計的宣傳 DM。\n\n搭配 UI 截圖呈現「我的會員」與「便捷預約」兩大介面亮點，金色標題 + 紫色基底傳達高端俱樂部的調性。\n\n小尺寸 mockup 安排在主視覺四角 — 讓功能展示不搶走核心訊息「場地預約系統」的視覺主導。" },
      { src: img("dm-aidsm-jp.png"), caption: "AI DSM 數位側視鏡系統 DM（奇美車電 / 日文版）", note: "為奇美車電 AI DSM 系統設計的日文版產品 DM。\n\n上半部用實境攝影 + 設備合成傳達「裝在 A 柱上」的真實使用情境，下半部用 6 個圖示拆解產品優勢，最下方用實機畫面 + 偵測示意圖佐證。\n\n配合日本市場偏好的乾淨高對比版面，黑白為主、加入網點裝飾呼應產品科技感。" },
      { src: img("dm-manual-sample.jpg"), caption: "說明書範例（偵測範圍設定）", note: "車載感測器的說明書頁面 — 偵測範圍設定。\n\n左側用簡潔線條插圖呈現車輛側視圖與安裝高度，右側用設備正視圖搭配色塊區分偵測範圍、表格列出尺寸數據。\n\n操作手冊的關鍵：每個參數都要能讓現場人員「一眼讀懂、不需查其他頁」。" },
      { src: img("feature-02.png"), caption: "DM 3" },
      { src: img("work-dm-1.png"), caption: "DM", note: "DM 改版前後對照。原版資訊擁擠、層次混亂；改版重新組織資訊架構，讓主訴求一眼可見、次要資訊作為支援。" },
      { src: img("work-social-1.png"), caption: "DM 1" },
      { src: img("work-social-2.png"), caption: "DM 2" },
      { src: img("work-dm-2.png"), caption: "說明書", note: "把長篇說明書拆解成模組化的閱讀單位，讓使用者能跳著讀、找到要找的資訊就走。" },
      // Group B — wide banner (~3:1)
      { src: img("hero-vi-01.png"), caption: "社群主視覺 01", note: "節慶系列主視覺 — 把同一套品牌語言延伸到不同節氣，讓使用者在不同時節都能認出是同一個品牌。" },
      { src: img("hero-vi-03.png"), caption: "社群主視覺 03" },
      { src: img("feature-01.png"), caption: "社群主視覺", note: "年度社群主視覺 — 一套可拆解成多種比例（IG 貼文、限動、橫幅）的素材模組，讓團隊一次素材多平台用。" },
      // Group C — phone format (9:16 vertical video)
      { src: img("social-slot.mp4"), caption: "聖誕節拉霸機企劃", note: "為聖誕節企劃的社群互動 — 拉霸機概念，使用者抽到專屬祝福並可分享。\n\n引起公司內部好評，社群互動數較平日提升 10%。\n\n證明趣味互動比單純的節慶宣傳圖更能帶動社群熱度。" },
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
        title: "TFA Redesign — 前端重製案",
        tag: "HTML · CSS · JS",
        desc: "親手刻的響應式網站重製案，從版型結構、互動到動效全程實作。",
        src: "https://alice030-lab.github.io/tfa-redesign/index.html",
        ratio: "16 / 9",
      },
      {
        title: "Solo Sync — Discovery 探索頁",
        tag: "Web App · UI Design",
        desc: "音樂創作者協作平台的探索頁面 — 分類瀏覽、搜尋、即時互動。",
        src: "https://solo-sync.vercel.app/discovery",
        ratio: "16 / 9",
      },
    ],
    images: [
      { src: img("case-golf.avif"), caption: "時時夠夫 — 場地預約系統 Venue Booking System", note: "預約系統的會員端與後台一次規劃 — 從會員介面、預約流程到管理後台都同步設計。重點是讓「要預約」這件事的步驟最少、選擇最清楚。" },
      { src: img("case-charging.avif"), caption: "汽機車充電站 — 預約充電系統 Pre-View", note: "從 HMI 介面、ZALO mini APP 到後台運維，覆蓋整套使用情境。色彩採用科技藍紫，傳達「精準、可靠」的設備感。" },
    ],
  },
];
