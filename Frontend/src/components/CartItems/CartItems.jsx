import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="cart-items my-[100px] mx-[170px]">
      <div
        className="grid gap-[75px] items-center py-5 text-[#454545] text-[18px] font-semibold"
        style={{ gridTemplateColumns: "0.5fr 2fr 1fr 1fr 1fr 1fr" }}
      >
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-[3px] bg-[#e2e2e2] border-0" />
      {all_product.map((item) => {
        const quantity = cartItems[item.id] || 0;
        const total = item.new_price * quantity;

        if (quantity > 0) {
          return (
            <div key={item.id} className="">
              <div
                className="grid gap-[75px] items-center py-5 text-[#454545] text-[14px] font-medium"
                style={{ gridTemplateColumns: "0.5fr 2fr 1fr 1fr 1fr 1fr" }}
              >
                <img src={item.image} className="h-[62px]" alt="" />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <button className="w-[64px] h-[50px] bg-white border-2 border-[#ebebeb]">
                  {quantity}
                </button>
                <p>${total}</p>
                <img
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(item.id);
                  }}
                  className="w-[15px] my-0 mx-[40px] cursor-pointer"
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="flex my-[100px] mx-0">
        <div className="flex flex-1 flex-col gap-10 mr-[200px]">
          <h1>Cart Total</h1>
          <div className="">
            <div className="flex justify-between py-[15px] px-0">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between py-[15px] px-0">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between py-[15px] px-0">
              <h3 className="font-semibold">Total</h3>
              <h3 className="font-semibold">${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="w-[262px] h-[58px] bg-[#ff4141] outline-none border-none text-white font-medium text-[16px] cursor-pointer">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="flex-1 font-medium text-base">
          <p className="text-[#555] font-semibold">
            If you have a promo code, Enter it here.
          </p>
          <div className="w-[504px] h-[58px] bg-[#eaeaea] flex mt-[15px] pl-5">
            <input
              type="text"
              className="w-[330px] h-[50px] border-none outline-none bg-transparent text-base"
              placeholder="Promo Code"
            />
            <button className="w-[170px] h-[58px] bg-black text-base text-white cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
