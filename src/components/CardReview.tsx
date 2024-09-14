import Image from "next/image";
import React from "react";
import { IoStarSharp } from "react-icons/io5";

interface CardReviewProps {
  rating: string;
  name: string;
  date: string;
  description: string;
}
const CardReview = ({ rating, name, date, description }: CardReviewProps) => {
  return (
    <div className="mt-8 w-full ring-[0.5px] ring-neutral80 rounded px-5 py-6 flex gap-8">
      <Image
        src="/images/profile.png"
        width={50}
        height={50}
        alt="profile"
        className="size-16 rounded-full"
      />
      <div>
        <p className="text-lg font-medium">{name}</p>
        <div className="flex flex-row items-center gap-2">
          <IoStarSharp size={18} />
          <p className="text-sm text-gray20 font-medium">{rating}</p>
        </div>
        <time className="text-xs text-gray10">{date}</time>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default CardReview;
