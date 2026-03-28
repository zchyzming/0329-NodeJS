/** 订餐服务数据源（供 API 与类型复用） */
export const orderingServiceData = {
  serviceName: "订餐服务",
  lunch: "11:00 – 13:00",
  dinner: "17:00 – 19:30",
  pickupLocation: "中央花园 6 号楼架空层邻里厨房窗口",
  pickupNote: "雨天可绕行地下车库 B1 指示标。",
  groupOrder: "业委会 / 楼组长会议用餐，提前一天致电预约，单笔 20 份起订。",
  phoneE164: "+862112345678",
  phoneDisplay: "021-1234-5678",
  notice: "节假日以物业通知为准；业主卡取餐享积分。",
  updatedAt: new Date().toISOString(),
} as const;

export type OrderingServiceData = typeof orderingServiceData;
