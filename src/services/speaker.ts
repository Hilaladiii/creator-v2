import { fetchApi } from "@/utils/fetch";
import { Speaker } from "@prisma/client";

export async function getSpeakerPaginationService(currentPage?: number) {
  try {
    const speakers = await fetchApi({
      path: `/speakers?page=${currentPage}`,
      method: "GET",
      tag: "speakers",
    });
    return speakers.data as Speaker[];
  } catch (error) {
    return [];
  }
}

export async function getSpeakersService() {
  try {
    const speakers = await fetchApi({
      path: "/speakers",
      method: "GET",
      tag: "speakers",
    });
    return speakers.data as Speaker[];
  } catch (error) {
    return [];
  }
}

export async function getSpeakerByIdService(id: string) {
  try {
    const speaker = await fetchApi({
      path: `/speakers?id=${id}`,
      method: "GET",
    });
    return speaker.data as Speaker;
  } catch (error) {
    return null;
  }
}
