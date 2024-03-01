import React from "react";


const GradientBox = () => {
  return (
    <div>
      <div className="w-[450px] h-[450px] animate-preserve3d  transition ease-linear rounded-[40%] bg-orange-500 absolute bottom-0 -right-20 blur-2xl" />
      <div className="w-[450px] h-[450px] rounded-[30%] animate-preserve3d2 bg-red-500 absolute -bottom-20 -right-40 blur-2xl" />
    </div>
  );
};

export default GradientBox;
