import Image from "next/image";
import { CommunityKitchenHeader } from "@/app/components/CommunityKitchenHeader";
import KitchenServerStamp from "@/app/components/KitchenServerStamp";

const heroImage = {
  src: "/images/hero.jpg",
  alt: "邻里厨房当日现做的热菜与配菜",
};

const glimpses = [
  {
    src: "/images/glimpse-1.jpg",
    alt: "汤品与餐具实拍",
    caption: "例汤",
  },
  {
    src: "/images/glimpse-2.jpg",
    alt: "蒸点窗口",
    caption: "蒸点",
  },
  {
    src: "/images/glimpse-3.jpg",
    alt: "取餐区环境",
    caption: "取餐",
  },
] as const;

const featuredDishes: Array<{
  name: string;
  price: number;
  tag?: string;
  detail: string;
}> = [
  {
    name: "农家小炒肉 + 米饭",
    price: 16,
    tag: "热销",
    detail: "青椒五花肉，微辣下饭，米饭可免费加一次。",
  },
  {
    name: "番茄炒蛋 + 米饭",
    price: 12,
    detail: "少油版可选，适合老人与儿童。",
  },
  {
    name: "红烧狮子头套餐",
    price: 18,
    detail: "两只丸子、青菜与米饭，汤品另取。",
  },
  {
    name: "清炒时蔬 + 米饭",
    price: 10,
    tag: "素食",
    detail: "当日采购时令蔬菜，蒜香清炒。",
  },
  {
    name: "荠菜馄饨（12 只）",
    price: 14,
    detail: "现包现煮，配紫菜虾皮汤。",
  },
  {
    name: "葱油拌面 + 卤蛋",
    price: 13,
    detail: "开洋葱油，碱面更劲道。",
  },
];

function SectionTitle({
  eyebrow,
  title,
  subtitle,
  titleId,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  titleId?: string;
}) {
  return (
    <header className="mx-auto mb-6 max-w-xl text-center">
      <p className="font-[family-name:var(--font-geist-sans)] text-[10px] font-medium uppercase tracking-[0.28em] text-[#b45309]">
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className="mt-1 font-michelin text-xl font-medium tracking-wide text-[#231a14] sm:text-2xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 text-sm font-light text-[#6b5344]">{subtitle}</p>
      ) : null}
      <div className="mx-auto mt-4 h-0.5 w-12 rounded-full bg-gradient-to-r from-transparent via-[#c2410c]/70 to-transparent" />
    </header>
  );
}

export default function Home() {
  return (
    <div
      id="top"
      className="font-michelin min-h-full flex flex-1 flex-col bg-[#faf5ee] text-[#2c1810]"
    >
      <div
        className="pointer-events-none fixed inset-0 opacity-100"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 85% 50% at 50% -15%, rgba(254, 215, 170, 0.5), transparent 55%),
            radial-gradient(ellipse 55% 40% at 100% 70%, rgba(252, 165, 165, 0.1), transparent 50%)
          `,
        }}
        aria-hidden
      />

      <CommunityKitchenHeader />

      <main className="relative z-10 mx-auto w-full max-w-5xl flex-1 px-4 pb-14 pt-3 sm:px-6 sm:pb-16">
        <KitchenServerStamp />

        {/* 头图与实拍 */}
        <section
          className="animate-fade-in border-b border-[#dcc8b4]/90 pb-8"
          aria-label="厨房头图与实拍"
        >
          <div className="relative mx-auto aspect-[2.1/1] max-h-[min(40vh,19rem)] w-full overflow-hidden rounded-2xl border border-[#dcc8b4]/70 shadow-[0_20px_50px_-20px_rgba(44,24,16,0.35)] sm:max-h-[min(44vh,21rem)]">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="animate-hero-drift object-cover object-center"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2c1810]/55 via-transparent to-[#fff8f0]/10"
              aria-hidden
            />
          </div>
          <p className="mt-5 text-center text-sm font-light leading-relaxed text-[#6b5344]">
            物业与业委会共建的<strong className="font-medium text-[#431d10]">邻里厨房</strong>
            ，厨师团队每日清晨备菜，明档现炒，邻居凭业主卡取餐更便捷。
          </p>
          <ul
            id="gallery"
            className="mt-6 grid list-none grid-cols-3 gap-2 sm:gap-3"
          >
            {glimpses.map((g, i) => (
              <li
                key={g.src}
                className="animate-fade-rise"
                style={{ animationDelay: `${120 + i * 80}ms` }}
              >
                <figure className="card-lift overflow-hidden rounded-xl border border-[#dcc8b4]/75 bg-[#fffdf9] shadow-sm">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      sizes="(max-width: 640px) 33vw, 300px"
                      className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                    />
                  </div>
                  <figcaption className="px-1 py-1.5 text-center font-[family-name:var(--font-geist-sans)] text-[9px] font-medium uppercase tracking-[0.16em] text-[#7c6655] sm:text-[10px]">
                    {g.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>

        {/* 本周特价 */}
        <section
          id="specials"
          className="py-8 sm:py-10"
          aria-labelledby="specials-heading"
        >
          <SectionTitle
            eyebrow="本周特价"
            title="邻居专享"
            subtitle="每周一更新，售完即止；具体以窗口公示为准。"
          />
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {[
              {
                name: "糖醋里脊饭",
                price: 15,
                was: 18,
                note: "周一至周三午间",
              },
              {
                name: "冬瓜排骨汤 + 素菜",
                price: 12,
                was: 14,
                note: "限购 80 份",
              },
            ].map((s, i) => (
              <div
                key={s.name}
                className="card-lift animate-fade-rise rounded-2xl border border-[#f97316]/35 bg-gradient-to-br from-[#fff7ed] to-[#fffdf9] p-5 shadow-sm"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-michelin text-base font-medium text-[#431d10]">
                      {s.name}
                    </p>
                    <p className="mt-1 text-xs text-[#6b5344]">{s.note}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-[family-name:var(--font-geist-sans)] text-lg font-semibold tabular-nums text-[#c2410c]">
                      ¥{s.price}
                    </p>
                    <p className="text-xs text-[#8a7565] line-through">
                      ¥{s.was}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 今日菜谱 */}
        <section
          id="menu"
          className="border-t border-[#dcc8b4]/80 py-8 sm:py-10"
          aria-labelledby="menu-heading"
        >
          <SectionTitle
            titleId="menu-heading"
            eyebrow="今日菜谱"
            title="窗口现炒"
            subtitle="份量以标准餐盒为准；需少油少盐请向打菜员说明。"
          />
          <ul className="mx-auto max-w-xl">
            {featuredDishes.map((d, i) => (
              <li
                key={d.name}
                className="card-row animate-fade-rise border-b border-[#dcc8b4]/85 py-4 last:border-b-0 sm:py-4"
                style={{ animationDelay: `${60 + i * 50}ms` }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <h3 className="text-sm font-medium tracking-wide text-[#231a14] sm:text-base">
                        {d.name}
                      </h3>
                      {d.tag ? (
                        <span className="rounded-full bg-[#c2410c]/10 px-2 py-0.5 font-[family-name:var(--font-geist-sans)] text-[10px] font-medium text-[#c2410c]">
                          {d.tag}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-xs font-light leading-snug text-[#6b5344]">
                      {d.detail}
                    </p>
                  </div>
                  <p className="shrink-0 font-[family-name:var(--font-geist-sans)] text-sm font-medium tabular-nums text-[#4a3728]">
                    <span className="text-[#c2410c]">¥</span>
                    {d.price}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* 营养与忌口 */}
        <section
          className="grid gap-6 border-t border-[#dcc8b4]/80 py-8 sm:grid-cols-2 sm:py-10"
        >
          <div
            id="nutrition"
            className="animate-fade-rise rounded-2xl border border-[#dcc8b4]/70 bg-[#fffdf9]/90 p-5 shadow-sm"
          >
            <h3 className="font-michelin text-base font-medium text-[#231a14]">
              膳食小贴士
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6b5344]">
              推荐「一荤一素一主食」搭配例汤；高血压邻居可取{' '}
              <strong className="text-[#431d10]">低钠窗口</strong> 标识菜品。儿童套餐见窗口右侧告示。
            </p>
          </div>
          <div
            id="allergy"
            className="animate-fade-rise rounded-2xl border border-[#dcc8b4]/70 bg-[#fffdf9]/90 p-5 shadow-sm [animation-delay:80ms]"
          >
            <h3 className="font-michelin text-base font-medium text-[#231a14]">
              过敏与忌口
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6b5344]">
              本厨房使用<strong className="text-[#431d10]">花生、大豆、麸质、蛋类、海鲜</strong>
              等常见原料。重度过敏者请提前致电登记，我们将尽量提供替代配菜。
            </p>
          </div>
        </section>

        {/* 订餐指南 */}
        <section
          className="border-t border-[#dcc8b4]/80 py-8 sm:py-10"
          aria-label="订餐指南"
        >
          <SectionTitle
            eyebrow="订餐指南"
            title="时间与地点"
            subtitle="节假日以物业通知为准。"
          />
          <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-3">
            <div
              id="hours"
              className="card-lift animate-fade-rise rounded-2xl border border-[#dcc8b4]/75 bg-[#fffdf9] p-5 text-center shadow-sm"
            >
              <p className="font-[family-name:var(--font-geist-sans)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b45309]">
                供餐时间
              </p>
              <p className="mt-3 font-michelin text-sm font-medium text-[#2c1810]">
                午餐 11:00 – 13:00
              </p>
              <p className="mt-1 font-michelin text-sm font-medium text-[#2c1810]">
                晚餐 17:00 – 19:30
              </p>
            </div>
            <div
              id="pickup"
              className="card-lift animate-fade-rise rounded-2xl border border-[#dcc8b4]/75 bg-[#fffdf9] p-5 text-center shadow-sm [animation-delay:70ms]"
            >
              <p className="font-[family-name:var(--font-geist-sans)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b45309]">
                取餐地点
              </p>
              <p className="mt-3 text-sm leading-snug text-[#4a3728]">
                中央花园 <strong>6 号楼架空层</strong>
                邻里厨房窗口；雨天可绕行地下车库 B1 指示标。
              </p>
            </div>
            <div
              id="group"
              className="card-lift animate-fade-rise rounded-2xl border border-[#dcc8b4]/75 bg-[#fffdf9] p-5 text-center shadow-sm [animation-delay:140ms]"
            >
              <p className="font-[family-name:var(--font-geist-sans)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b45309]">
                团体订餐
              </p>
              <p className="mt-3 text-sm leading-snug text-[#4a3728]">
                业委会 / 楼组长会议用餐，提前{' '}
                <strong>一天</strong> 致电预约，单笔 <strong>20 份</strong> 起订。
              </p>
            </div>
          </div>
        </section>

        <footer
          id="contact"
          className="border-t border-[#dcc8b4]/80 pt-8 text-center"
        >
          <p className="font-[family-name:var(--font-geist-sans)] text-[11px] font-medium uppercase tracking-[0.22em] text-[#7c6655]">
            阳光花园邻里厨房 · 物业服务中心代管
          </p>
          <a
            href="tel:+862112345678"
            className="tap-shrink mt-3 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#ea580c] to-[#c2410c] px-6 py-2.5 font-[family-name:var(--font-geist-sans)] text-sm font-semibold tabular-nums text-white shadow-[0_8px_24px_-8px_rgba(194,65,12,0.65)] transition-[filter,transform] hover:brightness-110 active:brightness-95"
          >
            电话：021-1234-5678
          </a>
          <p className="mx-auto mt-4 max-w-md text-[10px] leading-relaxed text-[#8a7565]">
            图片素材来自 Unsplash，仅作演示。替换实景请使用{" "}
            <span className="font-mono">public/images</span>。
          </p>
        </footer>
      </main>
    </div>
  );
}
