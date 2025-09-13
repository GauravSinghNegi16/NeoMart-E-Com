import React, { useContext, useState, useEffect } from "react";
import { Context } from "../Context/ProductContext";
import Card from "./Card";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

function Showcase() {
  const [Products] = useContext(Context);
  const { categoryName } = useParams();
  const [category, setCategory] = useState([]);

  // Filter products whenever Products or categoryName changes
  useEffect(() => {
    if (!Products || Products.length === 0) return;

    const filteredProducts = categoryName
      ? Products.filter(
          (p) => p.category.toLowerCase() === categoryName.toLowerCase()
        )
      : Products;

    setCategory(filteredProducts);
  }, [Products, categoryName]);

  // Show loading if products are not ready
  if (!Products || Products.length === 0 || !category) return <Loading />;

  return (
    <div className="w-full md:w-[83%] min-h-screen mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 justify-center p-4">
      {category.map((elem, index) => (
        <Card key={elem._id || index} product={elem} />
      ))}
    </div>
  );
}

export default Showcase;
