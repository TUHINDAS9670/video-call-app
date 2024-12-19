import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShopify } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
  return (
    <nav className="w-full top-0 py-3">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between bg-slate-100 mt-0 px-6 py-6">
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden ">
          <GiHamburgerMenu className="w-8 h-8" />
        </label>
        <input type="checkbox" className="hidden" id="menu-toggle" />
        <div
          id="menu"
          className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1
           "
        >
          <div>
            <ul className="md:flex items-center justify-between text-gray-700 pt-4 md:pt-0">
              <li>
                <a
                  href="#"
                  className="inline-block no-underline hover:text-black hover:underline py-3 px-5"
                >
                  shop
                </a>
                <a
                  href="#"
                  className="inline-block no-underline hover:text-black hover:underline py-3 px-5"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:order-2 order-1">
          <a
            href="#"
            className="flex items-center no-underline font-bold  text-black text-2xl"
          >
            <FaShopify className="w-6 h-6 mr-2" />
           SHOPYCART
          </a>
        </div>
        <div className="flex gap-3 md:order-3 order-2 items-center" id="nav-content">
          <a href="#" className="no-underline">
            <FaUserLarge className="w-6 h-6" />
          </a>
          <a href="#" className="no-underline">
            <TiShoppingCart className="w-7 h-7" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
