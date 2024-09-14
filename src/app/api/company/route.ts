import { getCompanies, getCompanyById } from "@/db/company";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const params = await req.nextUrl.searchParams;
  const id = params.get("id");

  if (id) {
    const company = await getCompanyById(id);
    return NextResponse.json(company, { status: company.status });
  }

  const companies = await getCompanies();
  return NextResponse.json(companies, { status: companies.status });
}
