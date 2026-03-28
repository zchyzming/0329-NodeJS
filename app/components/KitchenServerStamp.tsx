import { headers } from "next/headers";

/**
 * 普通服务端组件（无 "use client"）：在每次请求时于服务端执行，
 * 可安全使用 headers() 等仅服务端 API。
 */
export default async function KitchenServerStamp() {
  await headers();

  const renderedAt = new Date().toLocaleString("zh-CN", {
    timeZone: "Asia/Shanghai",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const weekday = new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    weekday: "long",
  }).format(new Date());

  return (
    <aside className="mx-auto mb-5 max-w-2xl rounded-xl border border-dashed border-[#c4a077]/50 bg-[#fffdf9]/80 px-4 py-3 text-center font-[family-name:var(--font-geist-sans)] text-[11px] leading-relaxed text-[#6b5344] shadow-sm">
      <p className="font-medium text-[#431d10]">{weekday} · 供餐照常</p>
      <p className="mt-1 text-[10px] text-[#8a7565]">
        本提示由服务端组件生成 · {renderedAt}（Asia/Shanghai）
      </p>
    </aside>
  );
}
