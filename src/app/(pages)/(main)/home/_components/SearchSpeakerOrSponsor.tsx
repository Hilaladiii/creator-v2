import Image from "next/image";
import Link from "next/link";

const SearchSpeakerOrSponsor = () => {
  return (
    <div className="my-16 flex ">
      <Link href="" className="w-1/2 h-[70vh] overflow-hidden relative group">
        <Image
          src="/images/searchspeaker.jpeg"
          width={800}
          height={800}
          alt="search trusted speakers"
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-4xl font-semibold text-center">
            Search for Great Speakers
          </p>
        </div>
      </Link>

      <Link href="" className="w-1/2 h-[70vh] overflow-hidden relative group">
        <Image
          src="/images/searchsponsor.jpeg"
          width={800}
          height={800}
          alt="search trusted sponsors"
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-4xl font-semibold text-center">
            Search for Trusted Sponsors
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SearchSpeakerOrSponsor;
