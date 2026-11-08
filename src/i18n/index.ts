import { dataEn } from "./data-en";

export type Lang = "zh" | "en";
export const langs: Lang[] = ["zh", "en"];

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

/** 從網址判斷語言：/portfolio/en/... → en，其餘 → zh */
export function getLang(url: URL): Lang {
  const path = url.pathname.replace(base, "");
  return path === "/en" || path.startsWith("/en/") ? "en" : "zh";
}

/** 頁面路徑（不含 base），回傳含 base 與語言前綴的完整連結 */
export function href(lang: Lang, path = "/"): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  const prefix = lang === "en" ? "/en" : "";
  if (p === "/") return `${base}${prefix}/`;
  return `${base}${prefix}${p}`;
}

/** 目前頁面在另一個語言的路徑 */
export function altHref(lang: Lang, url: URL): string {
  let path = url.pathname.replace(base, "") || "/";
  if (lang === "en") path = path.replace(/^\/en(\/|$)/, "/");
  const target: Lang = lang === "en" ? "zh" : "en";
  return href(target, path) + url.hash;
}

export const htmlLang = (lang: Lang) => (lang === "en" ? "en" : "zh-Hant");

/**
 * 深度翻譯：把資料物件裡每個在對照表中找得到的中文字串換成英文；
 * 找不到的（圖片路徑、英文標籤、數字）原樣保留。
 */
export function localize<T>(value: T, lang: Lang): T {
  if (lang === "zh") return value;
  if (typeof value === "string") return (dataEn[value] ?? value) as T;
  if (Array.isArray(value)) return value.map((v) => localize(v, lang)) as T;
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const k of Object.keys(value as object)) out[k] = localize((value as Record<string, unknown>)[k], lang);
    return out as T;
  }
  return value;
}

/** 單一字串翻譯（共用詞彙） */
export const t = (lang: Lang, zh: string, en: string) => (lang === "en" ? en : zh);
