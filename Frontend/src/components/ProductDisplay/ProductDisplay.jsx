import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = (props) => {
  const { product } = props;

  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product-display flex my-0 mx-[170px]">
      <div className="flex gap-[17px]">
        <div className="flex flex-col gap-4">
          <img src={product.image} className="h-[150px] w-[200px]" alt="" />
          <img src={product.image} className="h-[150px] w-[200px]" alt="" />
          <img src={product.image} className="h-[150px] w-[200px]" alt="" />
          <img src={product.image} className="h-[150px] w-[200px]" alt="" />
        </div>
        <div className="">
          <img src={product.image} className="h-[650px] w-[800px]" alt="" />
        </div>
      </div>
      <div className="flex my-0 mx-[70px] flex-col">
        <h1 className="text-[#3d3d3d] text-[30px] font-bold">{product.name}</h1>
        <div className="flex items-center mt-3 gap-1 text-base text-[#1c1c1c]">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull} alt="" />
          <p>(122)</p>
        </div>
        <div className="flex my-[30px] mx-0 gap-7 text-[24px] font-bold">
          <div className="text-[#818181] line-through">
            ${product.old_price}
          </div>
          <div className="text-[#ff4141]">${product.new_price}</div>
        </div>
        <div className="text-base font-medium text-[#656565]">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a rounded neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div className="">
          <h1 className="text-[#656565] text-[20px] font-semibold mt-5">
            Select Size
          </h1>
          <div className="flex gap-5 my-[20px]">
            <div className="py-[18px] px-[24px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer">
              S
            </div>
            <div className="py-[18px] px-[24px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer">
              M
            </div>
            <div className="py-[18px] px-[24px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer">
              L
            </div>
            <div className="py-[18px] px-[24px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer">
              XL
            </div>
            <div className="py-[18px] px-[24px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer">
              XXL
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
          className="py-5 px-10 w-[200px] h-[48px] flex items-center font-semibold text-base text-white bg-[#ff4141] mb-10 border-none outline-none cursor-pointer"
        >
          ADD TO CART
        </button>
        <p className="">
          <span className="font-semibold">Category:</span> Women, T-Shirt, Crop
          Top
        </p>
        <p>
          <span className="font-semibold">Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
