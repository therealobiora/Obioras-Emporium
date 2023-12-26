import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, subMenu] = useState("shop");
  const { getTotalcartItems } = useContext(ShopContext);

  return (
    <div className="navbar flex justify-around p-4 shadow-md">
      <div className="logo flex items-center gap-[10px]">
        <img src={logo} alt="logo" />
        <p className="font-semibold text-[#171717] text-[20px] uppercase">
          Obiora's Emporium
        </p>
      </div>
      <ul className="menu flex items-center list-none gap-12 text-[#626262] font-medium text-[18px]">
        <li
          className="flex items-center justify-center flex-col gap-[3px] cursor-pointer"
          onClick={() => {
            subMenu("shop");
          }}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? (
            <hr className="w-[80%] h-[3px] border-none bg-[#27ae60] rounded-[10px]" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex items-center justify-center flex-col gap-[3px] cursor-pointer"
          onClick={() => {
            subMenu("men");
          }}
        >
          <Link to="/men">Men</Link>
          {menu === "men" ? (
            <hr className="w-[80%] h-[3px] border-none bg-[#27ae60] rounded-[10px]" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex items-center justify-center flex-col gap-[3px] cursor-pointer"
          onClick={() => {
            subMenu("women");
          }}
        >
          <Link to="/women">Women</Link>
          {menu === "women" ? (
            <hr className="w-[80%] h-[3px] border-none bg-[#27ae60] rounded-[10px]" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex items-center justify-center flex-col gap-[3px] cursor-pointer"
          onClick={() => {
            subMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link>
          {menu === "kids" ? (
            <hr className="w-[80%] h-[3px] border-none bg-[#27ae60] rounded-[10px]" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="login-cart flex items-center gap-[45px]">
        <Link to="/login">
          <button className="w-[150px] h-[45px] text-[20px] text-[#ffffff] bg-[#27ae60] cursor-pointer font-medium active:bg-[#27ae5fa6] outline-none rounded-[75px]">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-count w-[22px] h-[22px] bg-red-600 text-white flex items-center justify-center text-sm rounded-[11px] mt-[-35px] ml-[-55px]">
          {getTotalcartItems()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
