import React from "react";


const GradientBox = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-[400px] h-[350px] md:h-[600px] md:w-[600px] animate-preserve3d  transition ease-linear rounded-[40%] bg-orange-500 absolute top-[23%] -right-5 md:right-0 blur-2xl md:top-96 lg:top-[31rem] lg:w-[60vw]" />
      <div className="w-[350px] h-[350px] md:h-[50vw] md:w-[50vw] rounded-[30%] md:top-[28rem] lg:top-[36rem] animate-preserve3d2 bg-red-500 absolute top-[23%] -right-10 blur-2xl md:right-0" />
    </div>
  );
};

export default GradientBox;
