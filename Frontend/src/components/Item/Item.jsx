import React from "react";
import { Link } from "react-router-dom";

export const Item = (props) => {
  return (
    <div className="item w-[350px] hover:transform hover:scale-105 hover:transition-[0.6s]">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
      <p className="my-[6px] mx-0">{props.name}</p>
      <div className="flex gap-5">
        <div className="item-price-new text-[#374151] text-[18px] font-semibold">
          ${props.new_price}
        </div>
        <div className="item-price-old text-[#8c8c8c] text-[18px] font-medium line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};
