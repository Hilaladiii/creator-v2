"use client";

import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/ui/Input";
import RadioButton from "@/components/ui/RadioButton";
import Button from "@/components/ui/Button";
import PopUpBooking from "./PopUpBooking";
import { useState } from "react";
import { orderSpeakerService } from "@/services/order";
import { z } from "zod";

enum PaymentMethod {
  BCA = "BCA",
  BRI = "BRI",
  GOPAY = "GOPAY",
}

const orderSchema = z.object({
  name: z.string().min(1, "Event name is required"),
  description: z.string().min(1, "Event description is required"),
  date: z.string().min(1, "Event date required"),
  time: z.string().min(1, "Event time required"),
  duration: z.string().min(1, "Event time required"),
  rundown: z
    .instanceof(FileList)
    .transform((files) => files?.[0])
    .refine((file) => !!file, "Rundown file is required")
    .refine(
      (file) => file && file.size <= 3 * 1024 * 1024,
      "Max file size is 3MB"
    )
    .refine(
      (file) =>
        file &&
        [
          "application/pdf",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file.type),
      "Only Pdf & Docx files are accepted"
    ),

  script: z
    .instanceof(FileList)
    .transform((file) => file?.[0])
    .refine(
      (file) => !file || file.size <= 3 * 1024 * 1024,
      "Max file size is 3MB"
    )
    .refine(
      (file) =>
        !file ||
        [
          "application/pdf",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file.type),
      "Only Pdf & Docx files are accepted"
    )
    .optional(),

  speakerId: z.string().optional(),
  paymentType: z.nativeEnum(PaymentMethod, {
    message: "Payment method is required",
  }),
});

export type TOrder = z.infer<typeof orderSchema>;

const FormSpeaker = ({ id }: { id: string }) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TOrder>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      speakerId: id,
    },
  });

  const onSubmit: SubmitHandler<TOrder> = async (data) => {
    setLoading(true);
    const res = await orderSpeakerService(data);
    if (res.status == 201) {
      setShow(true);
      setLoading(false);
    }
  };

  return (
    <>
      <PopUpBooking
        show={show}
        onClose={() => {
          setShow(false);
          reset();
        }}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-3xl bg-white flex flex-row items-start rounded-md p-8 -mt-[20%] shadow-md gap-20"
      >
        <div className="flex flex-col">
          <Link
            href={`/speakers/${id}`}
            className="flex items-center gap-2 text-gray10"
          >
            <IoChevronBackOutline />
            Speaker Details
          </Link>
          <h1 className="text-3xl font-bold mt-8">Event Details</h1>
          <p>Please fill in this form below</p>
          <div className="space-y-6 mt-4">
            <Input
              label="Name"
              name="name"
              register={register}
              placeholder="Type your event name"
              type="text"
              errors={errors.name}
            />
            <Input
              label="Event Description"
              name="description"
              register={register}
              placeholder="Type your event description"
              type="text"
              errors={errors.description}
            />
            <Input
              label="Date"
              name="date"
              register={register}
              placeholder="Type your event date"
              type="date"
              errors={errors.date}
            />
            <Input
              label="Time"
              name="time"
              register={register}
              placeholder="Type your event time"
              type="time"
              errors={errors.time}
            />
            <Input
              label="Duration"
              name="duration"
              register={register}
              placeholder="Type your event duration"
              type="number"
              errors={errors.duration}
            />
            <Input
              label="Rundown*"
              name="rundown"
              register={register}
              type="file"
              errors={errors.rundown}
            />
            <Input
              label="Script (optional)"
              name="script"
              register={register}
              type="file"
              errors={errors.script}
            />
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
          <RadioButton
            label="Gopay"
            name="paymentType"
            logo="/svgs/gopay.svg"
            register={register}
            value="GOPAY"
          />
          <h3 className="text-lg font-medium my-6">Bank Transfers</h3>
          <RadioButton
            label="BCA"
            name="paymentType"
            logo="/svgs/bca.svg"
            register={register}
            value="BCA"
          />
          <div className="mt-3" />
          <RadioButton
            label="BRI"
            name="paymentType"
            logo="/svgs/bri.svg"
            register={register}
            value="BRI"
          />
          {errors.paymentType && (
            <p className="text-red-500 mt-2 text-xs text-center">
              {errors.paymentType.message}
            </p>
          )}
          <Button
            label={loading ? "Submitting..." : "Submit"}
            full
            className="mt-8"
            type="submit"
            disabled={loading}
          />
        </div>
      </form>
    </>
  );
};

export default FormSpeaker;
