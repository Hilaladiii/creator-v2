"use client";

import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import PopUpProposal from "./PopUpProposal";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { applyProposalService } from "@/services/proposal";

const eventSponsorSchema = z.object({
  name: z.string().min(1, "Event name required"),
  email: z.string().email(),
  phoneNumber: z.string().min(1, "Phone number required"),
  subject: z.string().min(1, "Event subject required"),
  proposal: z
    .instanceof(FileList)
    .transform((files) => files?.[0])
    .refine((file) => !!file, "Proposal file is required")
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
  companyId: z.string(),
  userId: z.string(),
});

type TEventSponsor = z.infer<typeof eventSponsorSchema>;

const FormSponsor = ({ id }: { id: string }) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const session = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TEventSponsor>({
    resolver: zodResolver(eventSponsorSchema),
    defaultValues: {
      companyId: id,
      userId: session?.data?.user?.id,
    },
  });

  const onSubmit: SubmitHandler<TEventSponsor> = async (data) => {
    setLoading(true);
    const res = await applyProposalService(data);
    if (res.status == 201) {
      reset()
      setShow(true);
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <>
      <PopUpProposal show={show} onClose={() => setShow(false)} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto w-fit bg-white flex flex-row items-start rounded-md p-8 -mt-[20%] shadow-md gap-20"
      >
        <div className="flex flex-col">
          <Link
            href={`/sponsors/${id}`}
            className="flex items-center gap-2 text-gray10"
          >
            <IoChevronBackOutline />
            Sponsor Details
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
              label="Email Address"
              name="email"
              register={register}
              placeholder="Type your email address"
              type="text"
              errors={errors.email}
            />
            <Input
              label="Phone Number"
              name="phoneNumber"
              register={register}
              placeholder="Type your phone number"
              type="text"
              errors={errors.phoneNumber}
            />
            <Input
              label="Subject"
              name="subject"
              register={register}
              placeholder="Type your event subject"
              type="text"
              errors={errors.subject}
            />
            <Input
              label="Proposal*"
              name="proposal"
              register={register}
              type="file"
              errors={errors.proposal}
            />
            <Button label="Submit" full className="mt-8" type="submit" />
          </div>
        </div>
      </form>
    </>
  );
};

export default FormSponsor;
