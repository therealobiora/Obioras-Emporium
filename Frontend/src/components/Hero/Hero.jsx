import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
import "../Hero/Hero.css";

export const Hero = () => {
  return (
    <div className="hero h-[100vh] flex bg-[#f5f5f5]">
      <div className="hero-left flex flex-1 flex-col justify-center gap-5 pl-[180px] leading-[1.1]">
        <h2 className="hero-title uppercase text-[#090909] text-[26px] font-semibold">
          New Arrivals only
        </h2>
        <div className="">
          <div className="flex items-center gap-5">
            <p className="text-[#171717] text-[80px] font-bold">new</p>
            <img src={hand_icon} className="w-[105px]" alt="hand_icon" />
          </div>
          <p className="text-[#171717] text-[80px] font-bold">collections</p>
          <p className="text-[#171717] text-[80px] font-bold">for everyone</p>
        </div>
        <div className="flex items-center justify-center gap-4 w-[310px] h-[70px] rounded-[75px] mt-[30px] bg-[#ff4141] text-white text-[22px] font-medium">
          <div className="">Lastest Collection</div>
          <img src={arrow_icon} alt="arrow_icon" />
        </div>
      </div>
      <div className="hero-right flex flex-1 justify-center items-center">
        <img src={hero_image} className="h-[95%]" alt="hero_image" />
      </div>
    </div>
  );
};
