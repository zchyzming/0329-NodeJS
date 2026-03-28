export type NavLeaf = { label: string; href: string };

export type NavEntry = NavLeaf | { label: string; children: NavLeaf[] };

/** 与页面各区块 id 对应 */
export const communityNav: NavEntry[] = [
  { label: "首页", href: "#top" },
  {
    label: "今日厨房",
    children: [
      { label: "今日菜谱", href: "#menu" },
      { label: "厨房实拍", href: "#gallery" },
      { label: "本周特价", href: "#specials" },
    ],
  },
  {
    label: "营养食安",
    children: [
      { label: "膳食小贴士", href: "#nutrition" },
      { label: "过敏与忌口", href: "#allergy" },
    ],
  },
  {
    label: "订餐指南",
    children: [
      { label: "供餐时间", href: "#hours" },
      { label: "取餐地点", href: "#pickup" },
      { label: "团体订餐", href: "#group" },
    ],
  },
  { label: "联系我们", href: "#contact" },
];
