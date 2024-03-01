import React from "react";

const Marquee = () => {
  return (
    <div className="marquee_group w-full flex justify-center items-center select-none overflow-hidden">
      {[1,2,3].map((_item, idx) => (
        <div
          key={idx}
          className="marquee_item uppercase  text-[20vw] md:text-[10vw] flex shrink-0 justify-between items-center animate-marquee min-w-screen font-bold font_m"
        >
          <span className="whitespace-nowrap flex justify-center items-center gap-4">
            Enviroment{" "}
            <span className="pr-5 text-orange-500 md:text-[300px] text-[200px]  ">•</span>{" "}
          </span>
          <span className="whitespace-nowrap flex justify-center items-center gap-4">
            Experiment{" "}
            <span className="pr-5 text-orange-500 md:text-[300px] text-[200px] ">•</span>{" "}
          </span>
          <span className="whitespace-nowrap flex justify-center items-center gap-4">
            Content{" "}
            <span className="pr-5 text-orange-500 md:text-[300px] text-[200px] ">•</span>{" "}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Marquee;
