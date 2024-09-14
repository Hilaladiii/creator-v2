import {
  FieldError,
  FieldValues,
  UseFormRegister,
  Path,
} from "react-hook-form";
import { InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface InputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors?: FieldError;
  label: string;
  variant?: "primary" | "secondary";
}

const Input = <T extends FieldValues>({
  name,
  register,
  errors,
  label,
  variant = "primary",
  ...props
}: InputProps<T>) => {
  return (
    <div className="flex flex-col ">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <input
        {...register(name)}
        id={name}
        {...props}
        className={cn("placeholder:text-gray-10 text-sm p-2 rounded-md mt-2", {
          "bg-blue10 focus:outline-none focus:ring-2 focus:ring-blue50/3":
            variant == "primary",
        })}
      ></input>
      {errors && (
        <span className="text-xs text-red-500 mt-1">{errors.message}</span>
      )}
    </div>
  );
};

export default Input;
