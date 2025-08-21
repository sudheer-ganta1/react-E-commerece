import React from "react";
import Mobiles from "../Mobiles/Mobiles";
import Computers from "../Computers/Computers";
import Ac from "../AC/Ac";

import WomenFashion from "../womensFashion/WomenFashion";
import MenFashion from "../MenFashion/MenFashion";
import Watches from "../Watches/Watches";
import Furniture from "../Furniture/Furniture.jsx";

const Products = () => {
  return (
    <div>
      <Mobiles />
      <Computers />
      <Ac />
      <Furniture />
      <WomenFashion />
      <MenFashion />
      <Watches />
    </div>
  );
};

export default Products;
