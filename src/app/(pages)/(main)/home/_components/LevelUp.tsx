import Button from "@/components/ui/Button";
import Image from "next/image";
import {
  MdOutlineFileDownload,
  MdCalendarMonth,
  MdAttachMoney,
} from "react-icons/md";

const advantages = [
  {
    desc: "Unlimited apply proposals to sponsors",
    icon: <MdOutlineFileDownload size={50} />,
  },
  {
    desc: "Transparency of the speaker’s schedule",
    icon: <MdCalendarMonth size={50} />,
  },
  {
    desc: "Instant booking",
    icon: <MdAttachMoney size={50} />,
  },
];

const LevelUp = () => {
  return (
    <div className="w-full mt-16 bg-yellow50 flex flex-row justify-between items-center py-8 pr-20">
      <Image
        src="/images/levelup.png"
        width={550}
        height={550}
        alt="level up"
      />
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-3xl font-semibold">
            Ready to <span className="text-blue50">Level Up?</span>
          </h2>
          <p className="text-lg font-medium">
            Premium is the go-to option if you want to create your event more
            efficient
          </p>
        </div>
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className="text-lg font-medium flex flex-row items-center gap-2"
          >
            <div className="bg-white bg-opacity-30 p-1 rounded-md text-blue50">
              {advantage.icon}
            </div>
            <p>{advantage.desc}</p>
          </div>
        ))}
        <Button label="Go Premium" size="big" />
      </div>
    </div>
  );
};

export default LevelUp;
