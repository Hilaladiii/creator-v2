import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    revalidateTag("orders");
    revalidatePath("/transaction");
  } catch (error) {
    return NextResponse.json("Error Revalidate", { status: 500 });
  }
}
