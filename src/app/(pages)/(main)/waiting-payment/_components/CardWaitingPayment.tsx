import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";

const CardWaitingPayment = () => {
  return (
    <div className="w-full mx-auto max-w-2xl bg-white rounded-md shadow-card py-8 px-6 -mt-[20%]">
      <Link
        href="transaction"
        className="flex items-center text-gray10 text-lg"
      >
        <IoChevronBackOutline />
        My Transaction
      </Link>
      <div className="mx-auto flex flex-col items-center mt-6 space-y-3">
        <h1 className="text-3xl font-semibold">Complete the payment within</h1>
        <span className="text-red50 font-semibold text-3xl"> 20:55:54</span>
        <p className="text-gray10 text-sm">
          to avoid automatic cancellation of your transaction.
        </p>
        <h2 className="font-semibold text-xl">
          Payment Deadline: Tuesday, 8 March 2023 15:30
        </h2>
      </div>
      <div className="w-full rounded-md border-2 mt-6">
        <div className="flex flex-row items-center justify-between px-6 py-3 border-b-2">
          <span className="text-2xl font-semibold">Bank BCA</span>
          <Image src="/svgs/bca.svg" width={50} height={50} alt="bank" />
        </div>
        <div className="px-6 py-3">
          <dt className="font-semibold text-lg text-gray10">
            Virtual account number
          </dt>
          <dd className="font-semibold text-xl">8657362039097000</dd>
          <dt className="font-semibold text-lg text-gray10 mt-5">
            Total payment
          </dt>
          <dd className="font-semibold text-xl">Rp. 2.000.000</dd>
          <Button label="Confirm Payment" full className="mt-8" />
        </div>
      </div>
    </div>
  );
};

export default CardWaitingPayment;
