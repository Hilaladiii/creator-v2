import {
  getSpeakerById,
  getSpeakers,
  getSpeakersPagination,
} from "@/db/speaker";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const params = await req.nextUrl.searchParams;
  const id = params.get("id");
  const page = Number(params.get("page"));

  if (id) {
    const speaker = await getSpeakerById(id);
    return NextResponse.json(speaker, { status: speaker.status });
  }
  if (page) {
    const speakers = await getSpeakersPagination({ currentPage: page });
    return NextResponse.json(speakers, { status: speakers.status });
  }

  const speakers = await getSpeakers();
  return NextResponse.json(speakers, { status: speakers.status });
}
