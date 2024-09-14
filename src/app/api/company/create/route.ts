import { createCompany } from "@/db/company";
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
  const form = await req.formData();

  const res = await createCompany({
    name: form.get("name") as string,
    email: form.get("email") as string,
    description: form.get("description") as string,
    location: form.get("location") as string,
    photo: form.get("photo") as File,
    category: form.get("category") as Category,
    accepted: parseInt(form.get("accepted") as string),
    phone: form.get("phone") as string,
    profile: form.get("profile") as string,
    rating: parseFloat(form.get("rating") as string),
    totalReview: parseInt(form.get("totalReview") as string),
    website: form.get("website") as string,
  });

  return NextResponse.json(res, { status: res.status });
}
