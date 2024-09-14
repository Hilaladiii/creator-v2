import { getOrders } from "@/db/order";
import { NextRequest, NextResponse } from "next/server";
import getCurrentUser from "@/actions/getCurrentUser";

export async function GET(req: NextRequest) {
  const query = await req.nextUrl.searchParams;
  const currentPage = Number(query.get("page") as string);
  const user = await getCurrentUser();
  const res = await getOrders(user?.id!, currentPage);
  return NextResponse.json(res, { status: res.status });
}
