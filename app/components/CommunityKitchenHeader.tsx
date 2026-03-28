"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  communityNav,
  type NavEntry,
  type NavLeaf,
} from "@/app/community-nav";
import { Button } from "@/app/components/ui/button";

function isGroup(entry: NavEntry): entry is { label: string; children: NavLeaf[] } {
  return "children" in entry;
}

export function CommunityKitchenHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuIdPrefix = useId();

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenKey(null), 140);
  }, [cancelClose]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 shadow-[0_8px_30px_-12px_rgba(44,24,16,0.18)]">
      <div className="border-b border-[#e8d5c4] bg-gradient-to-r from-[#fff8f0] via-[#faf5ee] to-[#fff5eb]">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2 text-[11px] text-[#6b5344] sm:px-6">
          <p className="font-[family-name:var(--font-geist-sans)]">
            <span className="font-medium text-[#b45309]">邻里厨房</span>
            <span className="hidden sm:inline"> · 本小区业主与物业共建</span>
          </p>
          <Button
            variant="secondary"
            size="sm"
            nativeButton={false}
            render={<a href="tel:+862112345678" />}
            className="shrink-0 rounded-full font-[family-name:var(--font-geist-sans)] text-[11px] font-medium tabular-nums"
          >
            订餐 021-1234-5678
          </Button>
        </div>
      </div>

      <nav
        className="border-b border-[#dcc8b4]/80 bg-[#faf5ee]/92 backdrop-blur-md"
        aria-label="邻里厨房主导航"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="tap-shrink group flex shrink-0 items-center gap-2 rounded-xl py-1 pr-2 transition-shadow hover:shadow-[0_0_0_1px_rgba(196,160,119,0.35)]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#f97316]/90 to-[#c2410c] text-lg text-white shadow-md transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
              灶
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-michelin text-lg font-medium tracking-wide text-[#2c1810]">
                阳光花园厨房
              </span>
              <span className="font-[family-name:var(--font-geist-sans)] text-[10px] tracking-wide text-[#8a7565]">
                今日现炒 · 吃得放心
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-0 lg:flex">
            {communityNav.map((entry) => {
              if (!isGroup(entry)) {
                return (
                  <li key={entry.label}>
                    <a
                      href={entry.href}
                      className="tap-shrink nav-pill mx-0.5 px-3 py-2 font-[family-name:var(--font-geist-sans)] text-[13px] font-medium text-[#4a3728]"
                    >
                      {entry.label}
                    </a>
                  </li>
                );
              }
              const key = entry.label;
              const open = openKey === key;
              return (
                <li
                  key={key}
                  className="relative"
                  onMouseEnter={() => {
                    cancelClose();
                    setOpenKey(key);
                  }}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    className="tap-shrink nav-pill flex items-center gap-1 px-3 py-2 font-[family-name:var(--font-geist-sans)] text-[13px] font-medium text-[#4a3728]"
                    aria-expanded={open}
                    aria-haspopup="true"
                    aria-controls={`${menuIdPrefix}-${key}`}
                  >
                    {entry.label}
                    <span
                      className={`text-[10px] text-[#b45309] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                      aria-hidden
                    >
                      ▾
                    </span>
                  </button>
                  <div
                    id={`${menuIdPrefix}-${key}`}
                    role="menu"
                    className={`absolute left-1/2 top-full z-50 min-w-[11rem] -translate-x-1/2 pt-2 transition-all duration-200 ease-out ${open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"}`}
                  >
                    <ul className="overflow-hidden rounded-xl border border-[#dcc8b4]/90 bg-[#fffdf9]/98 py-2 shadow-[0_16px_40px_-12px_rgba(44,24,16,0.25)] backdrop-blur-sm">
                      {entry.children.map((c) => (
                        <li key={c.href} role="none">
                          <a
                            role="menuitem"
                            href={c.href}
                            className="tap-shrink flex px-4 py-2.5 font-[family-name:var(--font-geist-sans)] text-[13px] text-[#4a3728] transition-colors hover:bg-[#c4a077]/12 hover:text-[#b45309]"
                          >
                            {c.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            className="tap-shrink flex h-10 w-10 items-center justify-center rounded-xl border border-[#dcc8b4] bg-[#fffdf9] text-[#431d10] lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-kitchen-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">{mobileOpen ? "关闭菜单" : "打开菜单"}</span>
            <span className="flex flex-col gap-1.5" aria-hidden>
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* 移动端全屏菜单 */}
      <div
        id="mobile-kitchen-menu"
        className={`fixed inset-0 z-40 lg:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-[#2c1810]/40 backdrop-blur-[2px] transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          aria-label="关闭菜单"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[min(20rem,88vw)] flex-col border-l border-[#dcc8b4] bg-[#fffdf9] shadow-2xl transition-transform duration-300 ease-out ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="border-b border-[#dcc8b4]/80 px-4 py-4">
            <p className="font-michelin text-lg text-[#2c1810]">阳光花园厨房</p>
            <p className="mt-1 text-xs text-[#6b5344]">点选分类展开子项</p>
          </div>
          <div className="flex-1 overflow-y-auto px-2 py-3">
            {communityNav.map((entry) => {
              if (!isGroup(entry)) {
                return (
                  <a
                    key={entry.label}
                    href={entry.href}
                    className="tap-shrink mb-1 block rounded-lg px-3 py-3 font-[family-name:var(--font-geist-sans)] text-[15px] font-medium text-[#431d10] hover:bg-[#c4a077]/14"
                    onClick={() => setMobileOpen(false)}
                  >
                    {entry.label}
                  </a>
                );
              }
              const expanded = mobileGroup === entry.label;
              return (
                <div key={entry.label} className="mb-1">
                  <button
                    type="button"
                    className="tap-shrink flex w-full items-center justify-between rounded-lg px-3 py-3 text-left font-[family-name:var(--font-geist-sans)] text-[15px] font-medium text-[#431d10] hover:bg-[#c4a077]/14"
                    aria-expanded={expanded}
                    onClick={() =>
                      setMobileGroup((g) => (g === entry.label ? null : entry.label))
                    }
                  >
                    {entry.label}
                    <span className={`text-[#b45309] transition-transform ${expanded ? "rotate-180" : ""}`}>
                      ▾
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <ul className="border-l-2 border-[#f97316]/40 pl-3">
                        {entry.children.map((c) => (
                          <li key={c.href}>
                            <a
                              href={c.href}
                              className="tap-shrink block rounded-md py-2.5 pl-2 font-[family-name:var(--font-geist-sans)] text-[14px] text-[#6b5344] hover:text-[#b45309]"
                              onClick={() => setMobileOpen(false)}
                            >
                              {c.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}

