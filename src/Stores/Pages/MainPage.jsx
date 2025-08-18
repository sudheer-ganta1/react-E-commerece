import React from "react";

import Products from "../Components/Products/Products";
import NavBar from "../Components/NavBar/NavBar";
import Banner from "../Components/Banner/Banner";

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <Banner />

      <Products />
    </div>
  );
};

export default MainPage;
