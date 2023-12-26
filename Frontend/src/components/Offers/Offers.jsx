import React from "react";
import exclusive from "../Assets/exclusive_image.png";

export const Offers = () => {
  return (
    <div className="offers w-[92%] h-[65vh] flex m-auto py-0 px-[140px] mb-[150px] bg-[#f5f5f5]">
      <div className="flex-1 flex flex-col justify-center ">
        <h1 className="text-[#171717] text-[60px] font-semibold">Exclusive</h1>
        <h1 className="text-[#171717] text-[60px] font-semibold">
          Offers For You
        </h1>
        <p className="text-[#171717] text-[20px] font-semibold">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="w-[282px] h-[72px] rounded-[35px] bg-[#ff4141] border-none text-white font-medium text-[22px] mt-[30px] cursor-pointer">
          Check Now
        </button>
      </div>
      <div className="flex-1 flex items-center justify-end pt-[50px]">
        <img src={exclusive} className="h-full" alt="" />
      </div>
    </div>
  );
};
