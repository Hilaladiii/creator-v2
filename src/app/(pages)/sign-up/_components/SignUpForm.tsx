"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Input from "@/components/ui/Input";
import PopUpVerif from "./PopUpVerif";

const signUpSchema = z
  .object({
    fullName: z.string().min(1, "fullname required"),
    email: z.string().email(),
    phone: z.string().min(1, "phone number required"),
    address: z.string().min(1, "address number required"),
    username: z.string().min(1, "username required"),
    password: z.string().min(8, "minimal 8 characters"),
    confirmPassword: z.string().min(8, "minimal 8 characters "),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "password and confirm password must be the same!",
    path: ["confirmPassword"],
  });
type TSignUp = z.infer<typeof signUpSchema>;

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TSignUp>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<TSignUp> = (data) => {
    setLoading(true);
    console.log(
      `Attempting to sign up with API path: ${process.env.NEXT_PUBLIC_API_PATH}`
    );
    fetch(`${process.env.NEXT_PUBLIC_API_PATH}/sign-up`, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.statusText && response.status == 400) {
          return setMessage(response.statusText);
        }
        setShow(true);
      })
      .catch((error) => {
        setMessage(error);
      })
      .finally(() => {
        setLoading(false);
        reset();
      });
  };

  return (
    <>
      <PopUpVerif show={show} onClose={() => setShow(false)} />
      <div className="ml-52 p-14 -mt-[45%] bg-white rounded-md w-fit shadow-md">
        <h2 className="font-bold text-xl">Sign Up</h2>
        <p className="text-sm">Create your</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-7">
          <Input
            label="Fullname"
            register={register}
            name="fullName"
            errors={errors.fullName}
            placeholder="Type your fullname"
          />
          <Input
            label="Email"
            register={register}
            name="email"
            errors={errors.email}
            placeholder="Type your email / username"
          />
          <Input
            label="Phone"
            register={register}
            name="phone"
            errors={errors.phone}
            placeholder="Type your phone number"
          />
          <Input
            label="Address"
            register={register}
            name="address"
            errors={errors.address}
            placeholder="Type your address"
          />
          <Input
            label="Username"
            register={register}
            name="username"
            errors={errors.username}
            placeholder="Type your username"
          />
          <Input
            label="Password"
            register={register}
            name="password"
            errors={errors.password}
            placeholder="* * * * * * * *"
            type="password"
          />
          <Input
            label="Confirm Password"
            register={register}
            name="confirmPassword"
            errors={errors.confirmPassword}
            placeholder="* * * * * * * *"
            type="password"
          />
          <Button
            label={loading ? "Loading" : "Sign Up"}
            type="submit"
            full
            disabled={loading}
          />
        </form>
        {message && (
          <p className="text-xs text-center text-red-500 mt-2">{message}</p>
        )}
        <p className="text-sm mt-3 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUpForm;
