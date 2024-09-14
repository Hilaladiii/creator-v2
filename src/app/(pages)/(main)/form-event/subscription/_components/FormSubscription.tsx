"use client";

import { IoChevronBackOutline } from "react-icons/io5";
import { z } from "zod";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/ui/Input";
import RadioButton from "@/components/ui/RadioButton";
import { LuCrown } from "react-icons/lu";
import { formatterCurrency } from "@/utils/formatterCurrency";
import Button from "@/components/ui/Button";

const subscriptionSchema = z.object({
  fullname: z.string().min(1, "Fullname is required"),
  nik: z.coerce.number().nonnegative().min(1),
  paymentMethod: z.enum(["gopay", "bca", "bri"], {
    required_error: "Payment method is required",
    message: "Payment method is required",
  }),
});

type TSubscription = z.infer<typeof subscriptionSchema>;

const FormSubscription = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSubscription>({
    resolver: zodResolver(subscriptionSchema),
  });

  const onSubmit: SubmitHandler<TSubscription> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-row item-center justify-center gap-10 -mt-[20%]"
    >
      <div className=" w-full h-fit max-w-xl bg-white rounded-lg px-8 py-6 shadow-card">
        <Link
          href={`/pricing`}
          className="flex items-center gap-2 text-lg text-gray10 pb-3 border-b border-b-gray10"
        >
          <IoChevronBackOutline />
          Premium Subscription
        </Link>
        <div className="p-6">
          <div>
            <h1 className="font-semibold text-2xl">Billing Information</h1>
            <p className="text-gray10 text-xs mt-2">
              We&rsquo;ll use this information to issue the first invoice.
              You&rsquo;ll be able to update the details for future invoices
              from your account profile.
            </p>
          </div>
          <div className="mt-8 space-y-8">
            <Input
              register={register}
              name="fullname"
              label="Full Name"
              errors={errors.fullname}
              placeholder="Enter your full name"
            />
            <Input
              register={register}
              name="nik"
              label="NIK/NPWP"
              type="number"
              errors={errors.nik}
              placeholder="Enter your full name"
            />
          </div>
        </div>
      </div>
      <div className="w-full max-w-xl bg-white rounded-lg px-8 py-6 shadow-card">
        <h2 className="font-semibold text-2xl mb-6">Payment Method</h2>
        <RadioButton
          label="Gopay"
          name="paymentMethod"
          logo="/svgs/gopay.svg"
          register={register}
          value="gopay"
        />
        <h3 className="text-lg font-medium my-6">Bank Transfers</h3>
        <RadioButton
          label="BCA"
          name="paymentMethod"
          logo="/svgs/bca.svg"
          register={register}
          value="bca"
        />
        <div className="mt-3" />
        <RadioButton
          label="BRI"
          name="paymentMethod"
          logo="/svgs/bri.svg"
          register={register}
          value="bri"
        />
        {errors.paymentMethod && (
          <p className="text-red-500 mt-2 text-xs text-center">
            {errors.paymentMethod.message}
          </p>
        )}
        <div className="py-6 border-t border-t-neutral20 mt-6">
          <h2 className="font-semibold text-2xl mb-6">Payment Detail</h2>
          <div className="text-neutral40 space-y-1">
            <div className="flex flex-row items-center justify-between">
              <span className="flex flex-row items-center gap-1">
                <LuCrown className="text-yellow50" /> Premium Annual plan
              </span>
              <span>{formatterCurrency(30000)}</span>
            </div>
            <div className="flex flex-row items-center justify-between">
              <span>Discount</span>
              <span>{formatterCurrency(0)}</span>
            </div>
          </div>
        </div>
        <div className="px-3 py-6 border-y border-y-neutral20 font-medium text-lg flex flex-row items-center justify-between">
          <span>Total Payment</span>
          <span>
            {formatterCurrency(30000)}{" "}
            <span className="text-sm font-normal">/month</span>
          </span>
        </div>
        <p className="px-3 text-gray10 text-sm mt-3">
          Your subscription will renew automatically every month as one payment
          of Rp 30.000. By clicking &quot;Confirm and Pay&quot; you agree to the
          Terms and Conditions.
        </p>
        <br />
        <Button label="Confirm and Pay" full type="submit" />
      </div>
    </form>
  );
};

export default FormSubscription;
