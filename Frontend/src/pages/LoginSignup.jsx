import React from "react";

export const LoginSignup = () => {
  return (
    <div className="w-full h-[90vh] flex items-center justify-center bg-[#fce3fe]">
      <div className="w-[580px] h-[600px] bg-white m-auto py-[40px] px-[60px]">
        <h1 className="text-[#374151] my-[20px] mx-0 text-[35px] font-semibold">
          Sign Up
        </h1>
        <div className="flex flex-col gap-[29px] mt-[30px]">
          <input
            className="h-[55px] w-full outline-none pl-5 text-[18px] border border-[#c9c9c9] text-[#5c5c5c]"
            type="text"
            placeholder="Enter Your Name"
          />
          <input
            className="h-[55px] w-full outline-none pl-5 text-[18px] border border-[#c9c9c9] text-[#5c5c5c]"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            className="h-[55px] w-full outline-none pl-5 text-[18px] border border-[#c9c9c9] text-[#5c5c5c]"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="w-full h-[50px] bg-[#ff4141] text-white border-none font-semibold text-[22px] mt-[30px] cursor-pointer">
          Continue
        </button>
        <p className="text-[#5c5c5c] text-[18px] font-medium mt-[30px]">
          Already have an account?{" "}
          <span className="text-[#ff4141] font-semibold">Login here</span>
        </p>
        <div className="flex items-center mt-5 gap-4 font-medium text-[14px] text-[#5c5c5c]">
          <input type="checkbox" name="" id="" />
          <p className="">
            By continuing, you agree to the <span>Terms of Use</span> &{" "}
            <span>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
