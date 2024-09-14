import { cn } from "@/utils/cn";

interface ButtonOptionProps {
  option: "speakers" | "sponsors";
  onChange: (value: "speakers" | "sponsors") => void;
}
const ButtonOption = ({ option, onChange }: ButtonOptionProps) => {
  return (
    <div className="w-fit mx-auto flex flex-row items-center gap-2 bg-blue10 px-2 py-4 rounded-md mt-10">
      <div>
        <input
          id="speakers"
          type="radio"
          className="hidden"
          value="speakers"
          checked={option == "speakers"}
          onChange={() => onChange("speakers")}
        />
        <label
          htmlFor="speakers"
          className={cn("bg-blue10 p-2 rounded-md cursor-pointer", {
            "bg-blue20 transition-colors duration-200": option == "speakers",
          })}
        >
          Speakers
        </label>
      </div>
      <div>
        <input
          id="sponsors"
          type="radio"
          className="hidden"
          value="sponsors"
          checked={option == "sponsors"}
          onChange={() => onChange("sponsors")}
        />
        <label
          htmlFor="sponsors"
          className={cn("bg-blue10 p-2 rounded-md cursor-pointer", {
            "bg-blue20 transition-colors duration-200": option == "sponsors",
          })}
        >
          Sponsors
        </label>
      </div>
    </div>
  );
};

export default ButtonOption;
