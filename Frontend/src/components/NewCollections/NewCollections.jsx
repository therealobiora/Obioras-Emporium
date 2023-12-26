import React from "react";
import new_collection from "../Assets/new_collections";
import { Item } from "../Item/Item";

export const NewCollections = () => {
  return (
    <div className="flex items-center mb-[100px] flex-col gap-[10px]">
      <h1 className="text-[#171717] text-[50px] font-semibold uppercase">
        New Collections
      </h1>
      <hr className="w-[200px] h-[6px] bg-[#27ae60] rounded-[10px]" />
      <div className="grid grid-cols-[repeat(4,1fr)] gap-[30px] mt-[50px]">
        {new_collection.map((item, i) => {
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
