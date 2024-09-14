import { fetchApi } from "@/utils/fetch";
import { Company } from "@prisma/client";

export async function getCompaniesService() {
  try {
    const companies = await fetchApi({ path: "/company", method: "GET" });
    return companies.data as Company[];
  } catch (error) {
    return [];
  }
}

export async function getCompanyByIdService(id: string) {
  try {
    const speaker = await fetchApi({
      path: `/company?id=${id}`,
      method: "GET",
    });
    return speaker.data as Company;
  } catch (error) {
    return null;
  }
}
