import React from "react";
import data_product from "../Assets/data";
import { Item } from "../Item/Item";

export const Popular = () => {
  return (
    <div className="popular flex items-center h-[90vh] flex-col gap-[10px]">
      <h1 className="text-[#171717] text-[50px] font-semibold">
        Popular in women
      </h1>
      <hr className="w-[200px] h-[6px] bg-[#27ae60] rounded-[10px]" />
      <div className="mt-[50px] flex gap-5">
        {data_product.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};
