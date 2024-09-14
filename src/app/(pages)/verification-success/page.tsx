import Logo from "@/components/ui/Logo";
import Image from "next/image";
import CardVerification from "./_components/CardVerification";

const VerificationSuccess = () => {
  return (
    <div className="w-full overflow-y-hidden">
      <div className="mx-32 mt-20 mb-5">
        <Logo type="normal" />
      </div>
      <div className="w-full h-[100vh] bg-[url('/images/verification.png')] bg-no-repeat bg-contain" />
      <CardVerification />
    </div>
  );
};

export default VerificationSuccess;
