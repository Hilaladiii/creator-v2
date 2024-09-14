import prisma from "@/libs/prisma";
import { generateOrderCode } from "@/utils/generateOrderCode";
import { uploaderGetUrl } from "@/utils/uploader";
import { storage } from "@/libs/firebase";
import { ref } from "firebase/storage";
import { TOrder } from "@/validation/order";
import { Speaker } from "@prisma/client";

interface createOrder {
  speaker: Speaker;
  userId: string;
  data: TOrder;
}
export async function createOrder({ speaker, userId, data }: createOrder) {
  try {
    const orderCode = generateOrderCode();
    const rundownRef = ref(storage, `speaker-rundown/${data.rundown.name}`);
    const scriptRef = ref(storage, `speaker-script/${data.script}`);

    const urlRundown = await uploaderGetUrl(rundownRef, data.rundown);
    let urlScript = "";
    if (data.script) {
      urlScript = await uploaderGetUrl(scriptRef, data.script);
    }

    const res = await prisma.order.create({
      data: {
        eventName: data.name,
        eventDescription: data.description,
        duration: data.duration,
        eventDate: data.date,
        eventTime: data.time,
        paymentType: data.paymentType,
        totalPrice: speaker.price,
        orderCode: orderCode,
        rundown: urlRundown,
        script: urlScript,
        user: {
          connect: {
            id: userId,
          },
        },
        speaker: {
          connect: {
            id: speaker.id,
          },
        },
      },
    });

    return {
      status: 201,
      message: "Success booking speaker",
      data: res,
    };
  } catch (error) {
    return {
      status: 500,
      message: error,
      data: null,
    };
  }
}

export async function getOrders(userId: string, currentPage: number) {
  try {
    const offset = (currentPage - 1) / 5;
    const orders = await prisma.order.findMany({
      where: {
        userId: {
          equals: userId,
        },
      },
      include: {
        speaker: {
          select: {
            name: true,
          },
        },
      },
      skip: offset,
      take: 5,
    });

    if (orders.length <= 0) {
      return {
        status: 404,
        message: "Orders empty",
        data: [],
      };
    }

    return {
      status: 200,
      message: "Success get orders",
      data: orders,
    };
  } catch (error) {
    return {
      status: 500,
      message: error,
      data: [],
    };
  }
}

export async function getOrderPages(userId: string) {
  try {
    const orders = await prisma.order.count({
      where: {
        userId: {
          equals: userId,
        },
      },
    });
    return orders;
  } catch (error) {
    return 0;
  }
}
