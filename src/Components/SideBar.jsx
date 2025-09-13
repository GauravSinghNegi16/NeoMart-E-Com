import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineProduct } from "react-icons/ai";
import { MdMan, MdElectricBolt } from "react-icons/md";
import { IoWomanSharp } from "react-icons/io5";
import { GiJewelCrown } from "react-icons/gi";

function SideBar() {
  return (
    <div className="sticky top-0 left-0 h-screen md:w-[30vw] lg:w-[17vw] bg-zinc-100 px-5 py-4 md:flex flex-col hidden">
      <div className="w-full h-[10%] flex items-center justify-center border-b-2">
        <h1 className="text-2xl font-semibold">Categories</h1>
      </div>

      <ul className="flex-1 flex flex-col gap-3 px-2 py-5 overflow-y-auto">
        <Link to="/">
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
            <AiOutlineProduct className="text-2xl" /> <span>Home</span>
          </li>
        </Link>

        <Link to="/category/men's clothing">
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
            <MdMan className="text-2xl" /> <span>Mens Clothes</span>
          </li>
        </Link>

        <Link to="/category/women's clothing">
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
            <IoWomanSharp className="text-2xl" /> <span>Womens Clothes</span>
          </li>
        </Link>

        <Link to="/category/jewelery">
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
            <GiJewelCrown className="text-2xl" /> <span>Jewelery</span>
          </li>
        </Link>

        <Link to="/category/electronics">
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
            <MdElectricBolt className="text-2xl" /> <span>Electronics</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default SideBar;
