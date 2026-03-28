import { NextResponse } from "next/server";
import { orderingServiceData } from "@/lib/ordering-service";

/**
 * GET /api/ordering — 订餐服务信息（供首页与其它客户端拉取）
 */
export function GET() {
  return NextResponse.json({
    ok: true as const,
    service: "订餐服务",
    data: {
      ...orderingServiceData,
      updatedAt: new Date().toISOString(),
    },
  });
}
