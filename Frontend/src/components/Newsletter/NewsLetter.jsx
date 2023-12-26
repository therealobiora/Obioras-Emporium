import React from "react";

export const NewsLetter = () => {
  return (
    <div className="w-[92%] h-[40vh] m-auto flex flex-col items-center gap-[30px] justify-center py-0 px-[140px] mb-[150px] bg-[#f5f5f5] ">
      <h1 className="text-[#454545] text-[55px] font-semibold">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-[#454545] text-[20px] font-medium">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex items-center justify-between bg-white w-[730px] h-[70px] rounded-[80px] border border-[#e3e3e3]">
        <input
          type="email"
          className="w-[500px] border-none ml-[30px] text-[#616161] text-[16px] outline-none"
          placeholder="Your Email Id"
        />
        <button className="w-[210px] h-[70px] bg-black text-white rounded-[80px] text-[16px] cursor-pointer font-semibold">
          Subscribe
        </button>
      </div>
    </div>
  );
};
