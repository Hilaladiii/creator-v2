import LinkNav from "@/components/ui/Link";
import React from "react";

const CardVerification = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="max-w-2xl -mt-[55%] bg-blue10 rounded-xl shadow-xl px-28 py-16 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Verification Successful</h1>
        <p className="font-medium text-lg text-center mb-8 mt-1">
          Congratulations, your registration is successful. You can now proceed
          to your login page.
        </p>
        <LinkNav href="/login" size="wide">
          Back to Login Page
        </LinkNav>
      </div>
    </div>
  );
};

export default CardVerification;
