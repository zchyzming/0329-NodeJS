import { headers } from "next/headers";
import type { OrderingServiceData } from "@/lib/ordering-service";

type ApiOrderingResponse = {
  ok: boolean;
  data?: OrderingServiceData;
};

/** 在服务端请求本站 `/api/ordering`，供首页 RSC 使用 */
export async function fetchOrderingFromApi(): Promise<OrderingServiceData | null> {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "127.0.0.1:3000";
  const proto = h.get("x-forwarded-proto") ?? (process.env.NODE_ENV === "production" ? "https" : "http");

  const url = `${proto}://${host}/api/ordering`;

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    const json = (await res.json()) as ApiOrderingResponse;
    if (!json.ok || !json.data) return null;
    return json.data;
  } catch {
    return null;
  }
}
