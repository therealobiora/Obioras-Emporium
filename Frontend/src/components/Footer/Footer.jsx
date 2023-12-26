import React from "react";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintrest_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[50px]">
      <div className="flex items-center gap-5 ">
        <img src={footer_logo} alt="footer_logo" />
        <p className="text-[#383838] text-[46px] font-bold">
          Obiora's Emporium
        </p>
      </div>
      <ul className="flex list-none gap-[50px] text-[#2525252] text-[20px]">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex gap-5">
        <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
          <img src={instagram_icon} alt="instagram" />
        </div>
        <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
          <img src={pintrest_icon} alt="pintrest" />
        </div>
        <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
          <img src={whatsapp_icon} alt="whatsapp" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-[30px] w-full mb-[30px] text-[#1a1a1a] text-[20px]">
        <hr className="w-[80%] h-[3px] border-none bg-[#c7c7c7] rounded-[10px]" />
        <p>Copyright © 2023 - All Rights Reserved.</p>
      </div>
    </div>
  );
};
