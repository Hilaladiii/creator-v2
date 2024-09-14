import Logo from "@/components/ui/Logo";
import React from "react";
import SignUpForm from "./_components/SignUpForm";

const SignUpPage = () => {
  return (
    <div className="w-full">
      <div className="mx-32 mt-20 mb-5 flex items-end gap-3">
        <Logo type="normal" />
        <h1>SIGNUP</h1>
      </div>
      <div className="w-full h-[100vh] bg-[url('/images/bg-login.png')] bg-no-repeat bg-contain" />
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
