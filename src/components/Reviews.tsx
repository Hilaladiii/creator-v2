import { IoStarSharp } from "react-icons/io5";
import CardReview from "./CardReview";

const Reviews = ({ rating }: { rating: string }) => {
  return (
    <div className="w-full mt-8">
      <div className="flex flex-row items-end gap-5">
        <h3 className="text-2xl font-medium">REVIEWS</h3>
        <div className="flex flex-row justify-center items-end gap-2">
          <IoStarSharp size={35} />
          <p className="text-2xl text-gray20 font-semibold">{rating}</p>
        </div>
      </div>
      <div className="flex flex-col w-full">
        {[0, 1, 2, 3, 4].map((_, index) => (
          <CardReview
            key={index}
            name="Alexander Nguyen"
            date="22 Dec 2022"
            rating="5/5"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellat neque ratione itaque velit adipisci temporibus vel in, blanditiis illum perspiciatis dolorum dolorem, eos reprehenderit, minima sit voluptate. Ipsam, voluptas."
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
