import { cn } from "@/utils/cn";
import Link, { LinkProps } from "next/link";

interface ButtonProps extends Omit<LinkProps, "href"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "third";
  href: string;
  size?: "normal" | "big" | "wide";
}
const LinkNav = ({
  children,
  href,
  variant = "primary",
  size = "normal",
  ...props
}: ButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "font-bold text-sm px-5 py-3 rounded-md text-center",
        {
          "bg-blue50 text-white hover:bg-opacity-50 transition":
            variant === "primary",
        },
        {
          "outline-none ring-1 ring-blue50 disabled:opacity-50 text-blue50 bg-white hover:bg-blue50 hover:ring-opacity-70 hover:bg-opacity-70 hover:text-white transition ":
            variant === "secondary",
        },
        {
          "bg-blue10 disabled:opacity-50 text-blue50 hover:ring-1 hover:ring-blue50 hover:bg-white transition":
            variant === "third",
        },
        {
          "w-full max-w-md py-2": size == "big",
        },
        {
          "w-full max-w-[18rem]": size == "wide",
        }
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkNav;
