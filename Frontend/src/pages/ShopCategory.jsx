import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import { Item } from "../components/Item/Item";
import all_products from "../components/Assets/all_product";

export const ShopCategory = (props) => {
  // const { all_products } = useContext(ShopContext);

  return (
    <div className="shop-category flex items-center justify-center flex-col">
      <img
        src={props.banner}
        className="w-[90%] my-[30px] mx-auto block"
        alt=""
      />
      <div className="flex justify-between items-center my-0 w-[90%]">
        <p>
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <div className="py-[10px] px-[20px] rounded-[40px] border border-[#888]">
          <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="my-5 w-[90%] justify-items-center grid grid-cols-[repeat(4,1fr)] gap-y-[50px] gap-x-[10px]">
        {all_products.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="flex items-center justify-center my-[100px] mx-auto w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] text-[18px] font-semibold">
        Explore More
      </div>
    </div>
  );
};
