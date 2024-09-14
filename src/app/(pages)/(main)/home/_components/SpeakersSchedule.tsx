import Button from "@/components/ui/Button";
import React from "react";

const SpeakersSchedule = () => {
  return (
    <div className="mt-16 w-full h-[200px] bg-gradient-to-r from-[#FFD159] to-white flex items-center justify-center gap-10">
      <p className="text-2xl font-semibold">
        Want to check and see the speaker’s schedule?
      </p>
      <Button label="Go Premium" />
    </div>
  );
};

export default SpeakersSchedule;
