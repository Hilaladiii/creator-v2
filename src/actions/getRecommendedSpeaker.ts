import prisma from "@/libs/prisma";

export async function getRecommendedSpeakers() {
  try {
    const recommendedSpeakers = await prisma.speaker.findMany({
      where: {
        rating: {
          gt: 4.5,
        },
      },
      select: {
        id: true,
        photo: true,
        rating: true,
        name: true,
        category: true,
        location: true,
        price: true,
        totalReview: true,
      },
      take: 4,
      orderBy: {
        rating: "desc",
      },
    });

    if (recommendedSpeakers.length <= 0) return [];

    return recommendedSpeakers;
  } catch (error) {
    return [];
  }
}
