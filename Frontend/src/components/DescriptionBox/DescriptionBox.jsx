import React from "react";

const DescriptionBox = () => {
  return (
    <div className="my-[120px] mx-[170px]">
      <div className="flex">
        <div className="flex items-center justify-center w-[171px] h-[70px] border border-[#d0d0d0] text-base font-semibold">
          Description
        </div>
        <div className="flex items-center justify-center w-[171px] h-[70px] border border-[#d0d0d0] text-base font-semibold bg-[#fbfbfb] text-[#555]">
          Reviews (122)
        </div>
      </div>
      <div className="flex flex-col p-12 pb-[70px] gap-6 border border-[#d0d0d0]">
        <p>
          An e-commerce website is an online platform that facillitates the
          buying and selling of products or services over the internet. It
          serves as a virtual marketplace where businesses and individuals can
          showcase their products, interact with customers, and conduct
          transactions without the need for a physical presence. E-commerce
          websites have gained immense popularity due to their convenience,
          accessibility, and the global reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices, and any available variations
          (e.g., sizes, colors). Each product usually has it's own dedicated
          page with relevant informaton.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
