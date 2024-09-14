import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { createOrder } from "@/db/order";
import { orderSchema } from "@/validation/order";
import getCurrentUser from "@/actions/getCurrentUser";

enum PaymentMethod {
  BCA = "BCA",
  BRI = "BRI",
  GOPAY = "GOPAY",
}

export async function POST(req: NextRequest) {
  try {
    const user = await getCurrentUser();
    const form = await req.formData();

    const name = form.get("name") as string;
    const description = form.get("description") as string;
    const date = new Date(form.get("date") as string);
    const time = form.get("time") as string;
    const duration = Number(form.get("duration"));
    const rundown = form.get("rundown") as File;
    const script = form.get("script") as File;
    const paymentType = form.get("paymentMethod") as PaymentMethod;
    const speakerId = form.get("speakerId") as string;

    const orderData = {
      name,
      description,
      date,
      time,
      duration,
      rundown,
      script,
      paymentType,
    };

    const validation = orderSchema.safeParse(orderData);

    if (validation.error) {
      return NextResponse.json(
        { message: validation.error.issues[0].message },
        { status: 400 }
      );
    }

    const speaker = await prisma.speaker.findUnique({
      where: { id: speakerId! },
    });

    if (!speakerId || !speaker) {
      return NextResponse.json(
        { message: "Invalid id speaker" },
        { status: 400 }
      );
    }

    const res = await createOrder({
      data: {
        name: name,
        date: date,
        description: description,
        duration: duration,
        paymentType: paymentType,
        rundown: rundown,
        script: script,
        time: time,
      },
      speaker: speaker,
      userId: user?.id!,
    });

    return NextResponse.json(res, { status: res.status });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
