import prisma from "@/libs/prisma";
import { storage } from "@/libs/firebase";
import { ref } from "firebase/storage";
import { TSpeaker, speakerSchema } from "@/validation/speaker";
import { uploaderGetUrl } from "@/utils/uploader";

export async function createSpeaker(data: TSpeaker) {
  try {
    const validation = speakerSchema.safeParse(data);
    if (validation.success) {
      const photoRef = ref(storage, `speaker-photos/${data.photo.name}`);
      const portofolioRef = ref(
        storage,
        `speaker-portofolios/${data.portofolio.name}`
      );

      const photo = await uploaderGetUrl(photoRef, data.photo);
      const portofolio = await uploaderGetUrl(portofolioRef, data.portofolio);

      const res = await prisma.speaker.create({
        data: {
          email: data.email,
          name: data.name,
          description: data.description,
          location: data.location,
          photo: photo,
          portofolio: portofolio,
          price: data.price,
          category: data.category,
          totalReview: data.totalReview,
          rating: data.rating,
        },
      });
      return {
        message: "success add speakers",
        status: 201,
        data: res,
      };
    }

    return {
      message: "Invalid payload",
      status: 400,
      error: validation.error.issues[0].message,
    };
  } catch (error) {
    return {
      status: 500,
      message: error,
    };
  }
}

export async function getSpeakersPagination({
  currentPage,
}: {
  currentPage: number;
}) {
  try {
    const offset = (currentPage - 1) * 12;
    const speakers = await prisma.speaker.findMany({
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
      skip: offset,
      take: 12,
    });

    if (!speakers)
      return {
        status: 404,
        message: "Speaker not found",
        data: [],
      };
    return {
      status: 200,
      message: "succes get speakers",
      data: speakers,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: error,
      data: [],
    };
  }
}

export async function getSpeakers() {
  try {
    const speakers = await prisma.speaker.findMany({
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
    });

    if (!speakers)
      return {
        status: 404,
        message: "Speaker not found",
        data: [],
      };
    return {
      status: 200,
      message: "succes get speakers",
      data: speakers,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: error,
      data: [],
    };
  }
}

export async function getSpeakerById(id: string) {
  try {
    const speaker = await prisma.speaker.findUnique({
      where: {
        id,
      },
    });
    if (!speaker)
      return {
        status: 404,
        message: "Speaker not found!",
        data: null,
      };
    return {
      status: 200,
      message: "Success get speaker by id",
      data: speaker,
    };
  } catch (error) {
    return {
      status: 500,
      message: error,
      data: null,
    };
  }
}

export async function getTotalSpeakers() {
  try {
    const speakers = await prisma.speaker.count();
    return speakers;
  } catch (error) {
    return 0;
  }
}
