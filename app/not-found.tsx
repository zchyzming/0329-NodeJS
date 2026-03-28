import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "页面未找到",
  description: "请求的页面不存在或已被移动。",
};

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-[#faf5ee] px-6 py-24 font-sans text-[#2c1810]">
      <div
        className="pointer-events-none fixed inset-0 opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 85% 50% at 50% -15%, rgba(254, 215, 170, 0.45), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-md text-center">
        <p className="mb-4 text-6xl font-semibold tabular-nums text-[#f0c4a8]">
          404
        </p>
        <h1 className="mb-3 text-2xl font-semibold tracking-tight text-[#231a14]">
          页面未找到
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-[#6b5344]">
          您访问的地址不存在，或页面已被移除。
        </p>
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-full bg-[#c2410c] px-8 text-base font-medium text-white transition-colors hover:bg-[#9a3412]"
        >
          返回首页
        </Link>
      </div>
    </div>
  );
}
