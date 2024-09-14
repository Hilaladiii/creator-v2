import { TOrder } from "@/app/(pages)/(main)/form-event/speakers/[id]/_components/FormSpeaker";
import { fetchApi } from "@/utils/fetch";

export async function orderSpeakerService(data: TOrder) {
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("date", data.date);
    formData.append("time", data.time);
    formData.append("duration", data.duration);
    formData.append("rundown", data.rundown);
    formData.append("paymentMethod", data.paymentType);
    if (data.speakerId) {
      formData.append("speakerId", data.speakerId);
    }
    if (data.script) {
      formData.append("script", data.script);
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/order/create`,
      {
        method: "POST",
        body: formData,
      }
    );

    await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/revalidate/order`, {
      method: "GET",
    });

    const res = await response.json();

    return res;
  } catch (error) {
    return null;
  }
}

export async function getOrderService() {
  try {
    const orders = await fetchApi({
      path: "/order",
      method: "GET",
      tag: "orders",
    });

    return orders.data;
  } catch (error) {
    return [];
  }
}
