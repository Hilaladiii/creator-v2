import React from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { TiStar } from "react-icons/ti";
import { MdLocationOn, MdOutlineMail, MdPhoneEnabled } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import LinkNav from "./ui/Link";

interface CardDetailProps {
  link: string;
  image: string;
  category: string;
  rating: string;
  name: string;
  description: string;
  location: string;
  pricing: number;
  company: string;
  accepted: number;
  portofolio: string;
  profile: string;
  type: "sponsor" | "speaker";
  children: React.ReactNode;
}

const CardDetail2 = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white rounded-lg pl-8 py-8 pr-16 shadow-md">
      {children}
    </div>
  );
};

const CardImage = ({ photo }: { photo: string }) => {
  return (
    <Image
      src={photo}
      alt="speakers1"
      width={1200}
      height={1200}
      className="rounded-md w-[495px] h-[375px] object-cover"
      priority
      quality={100}
    />
  );
};

const MainContent = ({
  accepted,
  category,
  company,
  description,
  link,
  location,
  name,
  pricing,
  rating,
  type,
  children,
}: Pick<
  CardDetailProps,
  | "category"
  | "rating"
  | "name"
  | "company"
  | "location"
  | "description"
  | "type"
  | "link"
  | "accepted"
  | "pricing"
  | "children"
>) => {
  return (
    <div className="flex flex-row justify-between items-center gap-5">
      {children}
      <div className="space-y-2">
        <div className="flex flex-row justify-between item-center">
          <p className="text-xl font-medium">{category}</p>
          <div className="flex flex-row justify-center items-end gap-2">
            <TiStar size={35} />
            <p className="text-2xl text-gray20 font-semibold">{rating}</p>
          </div>
        </div>
        <h1 className="text-4xl font-semibold">
          {name?.toUpperCase() || company?.toUpperCase()}
        </h1>
        <div className="flex">
          <MdLocationOn size={25} />
          <p className="text-xl font-medium ">{location}</p>
        </div>
        <p className="text-lg pr-20">{description}</p>
        {type === "sponsor" ? (
          <>
            <a href={link!} className="underline text-blue50">
              {link}
            </a>
            <p className="text-xl font-semibold">
              {accepted}% proposals accepted
            </p>
          </>
        ) : (
          <p className="text-xl font-semibold">
            Start from Rp.{pricing?.toLocaleString("id-ID")}
          </p>
        )}
      </div>
    </div>
  );
};

export default CardDetail2;
