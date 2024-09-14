import { createSpeaker } from "@/db/speaker";
import { NextRequest, NextResponse } from "next/server";

enum Category {
  TECHNOLOGY = "TECHNOLOGY",
  HEALTH = "HEALTH",
  ECONOMICS = "ECONOMICS",
  PSYCHOLOGY = "PSYCHOLOGY",
  EDUCATION = "EDUCATION",
  ENVIRONMENT = "ENVIRONMENT",
  POLITICS = "POLITICS",
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    const res = await createSpeaker({
      email: form.get("email") as string,
      name: form.get("name") as string,
      description: form.get("description") as string,
      price: parseFloat(form.get("price") as string) || 0,
      location: form.get("location") as string,
      category: form.get("category") as Category,
      totalReview: parseInt(form.get("totalReview") as string, 10) || 0,
      photo: form.get("photo") as File,
      portofolio: form.get("portofolio") as File,
    });

    return NextResponse.json(res, {
      status: res.status,
    });
  } catch (error) {
    return NextResponse.json(error, {
      status: 500,
      statusText: "Internal Server Error!",
    });
  }
}
