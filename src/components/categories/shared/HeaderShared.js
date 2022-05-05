import React from "react";
import ProductHero from "../../shared/Hero/ProductHero";
import Navbar from "../../shared/Navbar/Navbar";

function HeaderShared({title}) {
  return (
    <div className="HeaderShared">
      <Navbar />
      <ProductHero title={title} />
    </div>
  );
}

export default HeaderShared;
