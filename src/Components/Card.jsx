import React from "react";
import { Link } from "react-router-dom";

function Card({ product }) {
  return (
    <Link to={`/detail/${product.id}`}>
      <div className="w-[45vw] aspect-[17/30] md:w-[33vw] md:aspect-[19/30] lg:w-[25vw] md:aspect-[25/30] border border-zinc-200 rounded-lg flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">

        {/* Image Section */}
        <div className="w-full h-[60%] flex items-center justify-center bg-zinc-100">
          <img
            className="h-3/4 md:h-[65%] object-contain"
            src={product.image}
            alt={product.title}
          />
        </div>

        {/* Info Section */}
        <div className="w-full h-[40%] bg-zinc-200 flex flex-col justify-between p-2 sm:p-3">
          {/* Title & Price in column */}
          <div className="flex flex-col gap-1 h-[70%]">
            <h1 className="text-sm sm:text-base md:text-lg font-medium line-clamp-2">
              {product.title}
            </h1>
            <h1 className="text-base sm:text-lg md:text-xl font-semibold">
              $ {product.price}
            </h1>
          </div>

          {/* Learn More */}
          <div className="h-[30%] flex items-center">
            <h1 className="text-xs sm:text-sm md:text-base font-medium text-blue-600">
              Learn more
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
