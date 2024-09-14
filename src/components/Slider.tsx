"use client";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";

const texts = [
  "We provide a variety of information on the services of speakers and sponsors that are needed by campus committees       ",
  "Find a spaker closest to you and order directly",
  "Find the nearest sponsor and apply a proposal directly",
];

const Slider = () => {
  const [isActive, setIsActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="max-w-sm mt-3 ">
      <p className="text-sm text-left font-medium mb-5 duration-300 ease-in-out">
        {texts[isActive]}
      </p>
      <div className="flex flex-row gap-5 absolute bottom-0 left-0">
        {texts.map((_, index: number) => (
          <div
            onClick={() => setIsActive((prev) => (prev = index))}
            key={index}
            className={cn(
              "size-3 rounded-full bg-neutral20 transition-colors ease-in-out cursor-pointer",
              {
                "bg-blue50": isActive === index,
              }
            )}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
