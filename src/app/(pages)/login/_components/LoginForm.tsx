"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Input from "@/components/ui/Input";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "minimal 8 characters"),
});

type TLogin = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [message, setMessage] = useState<string | null | undefined>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<TLogin> = async (data) => {
    setLoading(true);
    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    });
    if (res?.error || !res?.ok) {
      setMessage(res?.error);
      setLoading(false);
      reset();
    }
    if (res?.ok) {
      setLoading(false);
      router.push("/home");
    }
    reset();
  };
  return (
    <div className="ml-52 p-14 -mt-[45%] bg-white rounded-md w-fit shadow-xl">
      <h2 className="font-bold text-xl">Welcome back!</h2>
      <p className="text-sm">Please login to access your account</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-7 mt-7">
        <Input
          label="Email"
          register={register}
          name="email"
          errors={errors.email}
          placeholder="Type your email / username"
        ></Input>
        <Input
          label="Password"
          register={register}
          name="password"
          errors={errors.password}
          placeholder="* * * * * * * *"
          type="password"
        ></Input>
        <Button label={loading ? "Loading..." : "Login"} full type="submit" />
      </form>
      {message && (
        <p className="mt-3 text-center text-xs text-red-500">{message}</p>
      )}
      <p className="text-sm mt-3 text-center">
        New in CreatOr?{" "}
        <Link href="/sign-up" className="text-blue-500 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
