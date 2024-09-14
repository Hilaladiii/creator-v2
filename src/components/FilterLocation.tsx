import { MdFilterAltOff } from "react-icons/md";
import Button from "./ui/Button";

const locations = [
  "Jabodetabek",
  "Jawa",
  "Sumatera",
  "Bali",
  "Kalimantan",
  "Sulawesi",
  "Papua",
];

const FilterLocation = () => {
  return (
    <div className="w-full h-fit max-w-64 p-6 shadow-md mt-8">
      <div className="flex items-center gap-1">
        <MdFilterAltOff />
        <h3 className="text-base font-semibold">FILTER</h3>
      </div>
      <div className="flex flex-col gap-3 border-b-[1px] pb-6 border-b-black mt-6">
        <h4 className="text-base font-semibold">Location</h4>
        {locations.map((location, index) => (
          <div key={index} className="flex justify-between items-center">
            <label htmlFor={location}>{location}</label>
            <input
              type="checkbox"
              className="size-4"
              id={location}
              value={location}
            />
          </div>
        ))}
      </div>
      <h4 className="text-base font-semibold mt-6">Price</h4>
      <div className="flex flex-row justify-between items-center gap-3 my-3">
        <input
          type="number"
          className="w-full placeholder:text-gray-10 text-sm p-2 rounded-md bg-blue10 focus:outline-none focus:ring-2 focus:ring-blue50/3"
          placeholder="Rp MIN"
        />
        <div className="w-1/5 h-[1px] bg-black" />
        <input
          type="number"
          className="w-full placeholder:text-gray-10 text-sm p-2 rounded-md bg-blue10 focus:outline-none focus:ring-2 focus:ring-blue50/3"
          placeholder="Rp MAX"
        />
      </div>
      <Button label="Search" full />
    </div>
  );
};

export default FilterLocation;
