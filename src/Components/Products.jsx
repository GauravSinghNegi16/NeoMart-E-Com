import React from "react";
import SideBar from "./SideBar";
import Showcase from "./Showcase";
import MobileCategoryBar from "./MobileCategoryBar";

function Products() {
  return (
    <div className="w-full min-h-screen relative flex flex-col md:flex-row">
      <MobileCategoryBar />
      <SideBar />
      <Showcase />
    </div>
  );
}

export default Products;
