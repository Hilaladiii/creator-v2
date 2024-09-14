import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const token = searchParams.get("token");

    if (!token)
      return NextResponse.json(
        { error: "Invalid or missing token" },
        { status: 400 }
      );

    const user = await prisma.user.findFirst({
      where: {
        verificationToken: token,
      },
    });

    if (!user)
      return NextResponse.json({ error: "user not found" }, { status: 404 });

    await prisma.user.update({
      where: {
        email: user.email,
      },
      data: {
        isVerified: true,
      },
    });
    const redirectUrl = new URL("/verification-success", req.url);
    return NextResponse.redirect(redirectUrl);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
