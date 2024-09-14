import { applyProposal } from "@/db/proposal";
import { proposalSchema } from "@/validation/proposal";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const subject = formData.get("subject") as string;
  const proposal = formData.get("proposal") as File;
  const companyId = formData.get("companyId") as string;
  const userId = formData.get("userId") as string;

  const proposalData = {
    name,
    email,
    phoneNumber,
    subject,
    proposal,
    companyId,
    userId,
  };

  const validation = proposalSchema.safeParse(proposalData);
  console.log(validation.error);
  if (validation.error) {
    return NextResponse.json(
      { message: validation.error.issues[0].message },
      { status: 400 }
    );
  }

  const res = await applyProposal(proposalData);
  return NextResponse.json(res, { status: res.status });
}
