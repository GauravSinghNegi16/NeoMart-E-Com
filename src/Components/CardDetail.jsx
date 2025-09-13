import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../Context/Axios';
import Loading from './Loading02';

function CardDetail() {
  const [product, setProduct] = useState(null);
  const [added, setAdded] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  return product ? (
    <div className="w-full min-h-[90vh] flex flex-col lg:flex-row px-4 sm:px-6 md:px-10 py-5 gap-6 lg:gap-10">

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md lg:max-w-lg aspect-square flex items-center justify-center bg-zinc-100 overflow-hidden rounded-xl">
          <img
            className="w-[60%] md:-[60%] lg:w-[50%] object-contain"
            src={product.image}
            alt={product.title}
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4 lg:gap-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{product.title}</h1>

        <div className="flex flex-wrap items-center gap-3">
          <span className="text-yellow-500 text-lg sm:text-xl">
            ⭐ {product.rating.rate || "0.0"}
          </span>
          <span className="text-sm text-zinc-600">
            ({product.rating.count || 0} reviews)
          </span>
          <span className="px-2 py-1 text-sm sm:text-base rounded-full bg-blue-100 text-blue-600 font-medium">
            {product.category}
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">$ {product.price}</h2>

        <p className="text-sm sm:text-base text-zinc-600 w-full line-clamp-4 md:line-clamp-3">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          <button
            onClick={handleAddToCart}
            className={`w-full sm:w-40 py-2 px-4 rounded-4xl border-2 font-semibold transition-all duration-300 ${added
              ? "bg-green-500 text-white border-green-500 scale-105"
              : "hover:bg-black hover:text-white"
              }`}
          >
            {added ? "Added ✓" : "Add to cart"}
          </button>

          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-40 py-2 px-4 bg-black text-white rounded-3xl"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default CardDetail;
