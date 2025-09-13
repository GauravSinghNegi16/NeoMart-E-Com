import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineProduct } from "react-icons/ai";
import { MdMan, MdElectricBolt } from "react-icons/md";
import { IoWomanSharp } from "react-icons/io5";
import { GiJewelCrown } from "react-icons/gi";

function MobileCategoryBar() {
  const categories = [
    { name: "Home", icon: <AiOutlineProduct className="text-xl" />, path: "/" },
    { name: "Men", icon: <MdMan className="text-xl" />, path: "/category/men's clothing" },
    { name: "Women", icon: <IoWomanSharp className="text-xl" />, path: "/category/women's clothing" },
    { name: "Jewelery", icon: <GiJewelCrown className="text-xl" />, path: "/category/jewelery" },
    { name: "Electronics", icon: <MdElectricBolt className="text-xl" />, path: "/category/electronics" },
  ];

  return (
    <div className="w-full h-[18vh] flex items-center justify-between overflow-x-auto px-4 gap-2 md:hidden">
      {categories.map((cat, index) => (
        <Link key={index} to={cat.path} className="flex flex-col items-center min-w-[60px]">
          <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-md 
                          hover:bg-blue-100 hover:scale-110 hover:shadow-xl transition-all duration-200">
            {cat.icon}
          </div>
          <span className="text-xs mt-2 text-center">{cat.name}</span>
        </Link>
      ))}
    </div>
  );
}

export default MobileCategoryBar;
