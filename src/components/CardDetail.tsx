import Button from "@/components/ui/Button";
import Image from "next/image";
import { TiStar } from "react-icons/ti";
import { MdLocationOn, MdOutlineMail, MdPhoneEnabled } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import LinkNav from "./ui/Link";

interface CardDetailProps {
  id: string;
  link?: string;
  type?: "sponsors" | "speakers";
  image: string;
  category: string;
  rating?: string;
  name?: string;
  description?: string;
  location?: string;
  pricing?: number;
  company?: string;
  accepted?: number;
  portofolio?: string;
  profile?: string;
}

const CardDetail = ({
  id,
  name,
  pricing,
  rating,
  category,
  image,
  description,
  location,
  accepted,
  company,
  type,
  link,
  portofolio,
  profile,
}: CardDetailProps) => {
  return (
    <div className="bg-white rounded-lg pl-8 py-8 pr-16 shadow-md">
      <div className="flex flex-row justify-between items-center gap-5">
        <Image
          src={image}
          alt="speakers1"
          width={1200}
          height={1200}
          className="rounded-md w-[495px] h-[375px] object-cover"
          priority
          quality={100}
        />
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
          {type === "sponsors" ? (
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
      <div className="flex flex-row justify-between mt-7">
        {type === "speakers" ? (
          <div className="w-full flex row justify-between">
            <LinkNav href={portofolio!} size="wide" variant="third">
              See Portofolio
            </LinkNav>
            <div className="flex w-1/2 gap-6 justify-end">
              <Button label="See Schedule" size="wide" variant="outline" />
              <LinkNav href={`/form-event/speakers/${id}`} size="wide">
                Book Now
              </LinkNav>
            </div>
          </div>
        ) : (
          <>
            <Button label="See Partners" size="wide" variant="outline" />
            <LinkNav href={`/form-event/sponsors/${id}`} size="wide">
              Applay Proposals
            </LinkNav>
          </>
        )}
      </div>
      {type === "sponsors" && (
        <div>
          <h2 className="text-lg font-bold mt-8">Company Profile</h2>
          <p className="mt-2">{profile}</p>
          <h3 className="font-semibold mt-8">Contact</h3>
          <div className="flex gap-4 mt-2">
            <CiGlobe size={50} className="rounded-full size-10 bg-blue10 p-2" />
            <MdOutlineMail
              size={50}
              className="rounded-full size-10 bg-blue10 p-2"
            />
            <MdPhoneEnabled
              size={50}
              className="rounded-full size-10 bg-blue10 p-2"
            />
          </div>
        </div>
      )}
    </div>
  );
};

const Price = ({ pricing }: { pricing: number }) => {
  return (
    <p className="text-xl font-semibold">
      Start from Rp.{pricing?.toLocaleString("id-ID")}
    </p>
  );
};

export default CardDetail;
