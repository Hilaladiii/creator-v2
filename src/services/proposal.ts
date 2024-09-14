import { fetchApi } from "@/utils/fetch";
import { TProposal } from "@/validation/proposal";
import { revalidatePath, revalidateTag } from "next/cache";

export async function applyProposalService(data: TProposal) {
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("subject", data.subject);
    formData.append("proposal", data.proposal);
    formData.append("companyId", data.companyId!);
    formData.append("userId", data.userId!);

    const response = await fetch("/api/proposal/create", {
      method: "POST",
      body: formData,
    });

    await fetch("/api/revalidate/proposal", { method: "GET" });

    const res = await response.json();
    return res;
  } catch (error) {
    return null;
  }
}

export async function getProposalService() {
  try {
    const proposals = await fetchApi({
      path: "/proposal",
      method: "GET",
      tag: "proposals",
    });

    return proposals.data;
  } catch (error) {
    return [];
  }
}
