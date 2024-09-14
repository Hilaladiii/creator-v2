import Image from "next/image";
import { TiStar } from "react-icons/ti";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";

interface CardProps {
  id: string;
  image: string;
  category: string;
  rating: number;
  totalReview: number;
  name: string;
  location: string;
  price?: number | null;
  accepted?: number | null;
  type: "speaker" | "sponsor";
}

const Card = ({
  id,
  image,
  category,
  rating,
  name,
  location,
  price = 0,
  accepted = 0,
  totalReview,
  type,
}: CardProps) => {
  return (
    <div className="w-full h-fit max-w-80 rounded-md overflow-hidden shadow-card">
      <Link href={type == "speaker" ? `/speakers/${id}` : `/sponsors/${id}`}>
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="w-full h-[20vh] object-cover cursor-pointer"
        />
      </Link>
      <div className="p-5">
        <div className="flex flex-row justify-between items-center">
          <span className="text-sm font-medium">{category}</span>
          <span className="text-xs font-semibold text-gray20 flex items-end gap-1">
            <TiStar color="black" size={20} />
            {rating}({totalReview})
          </span>
        </div>
        <p className="font-bold text-lg mt-2">{name.toUpperCase()}</p>
        <span className="text-sm font-medium my-2 flex items-center">
          <MdLocationOn size={18} />
          {location}
        </span>

        <span className="text-xs font-medium">
          {type == "speaker"
            ? `Start from Rp ${price?.toLocaleString("id")}`
            : `${accepted}% accepted`}
        </span>
      </div>
    </div>
  );
};

export default Card;
