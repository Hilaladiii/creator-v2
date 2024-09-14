"use client";
import Link from "next/link";
import Logo from "./ui/Logo";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import Avatar from "./ui/Avatar";
import { MdKeyboardArrowDown } from "react-icons/md";
import { signOut, useSession } from "next-auth/react";

const navigations = [
  {
    path: "/home",
    name: "Home",
  },
  {
    path: "/speakers",
    name: "Speakers",
  },
  {
    path: "/sponsors",
    name: "Sponsors",
  },
  {
    path: "/pricing",
    name: "Pricing",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const session = useSession();

  return (
    <div className="w-full flex flex-col items-end px-32 pt-4 pb-3">
      {session.data?.user.email && (
        <div className="flex flex-row items-end gap-3 ">
          <Avatar />
          <div className="relative group">
            <MdKeyboardArrowDown size={28} />
            <DropDown />
          </div>
        </div>
      )}
      <header className="w-full flex flex-row justify-between items-center mt-8 ">
        <Logo type="bold" />
        <div className="flex gap-10">
          {navigations.map((navigation, index) => (
            <Link
              key={index}
              className={cn(
                "relative pb-3 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-width after:duration-300 hover:after:w-full",
                {
                  "after:w-full": pathname.includes(navigation.path),
                }
              )}
              href={navigation.path}
            >
              {navigation.name}
            </Link>
          ))}
        </div>
      </header>
    </div>
  );
};

const DropDown = () => {
  return (
    <div className="w-40 text-left p-3 bg-white shadow-md hidden group-hover:flex flex-col items-start absolute -left-24 -bottom-20 gap-2 z-50">
      <Link href="/transaction">My Transaction</Link>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default Navbar;
