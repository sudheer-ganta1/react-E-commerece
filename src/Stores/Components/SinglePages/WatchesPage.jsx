import React from "react";
import { WatchesData } from "../../../Data/WatchesData";
import NavBar from "../NavBar/NavBar";
import { useParams } from "react-router-dom";
import "./Single.css";

const WatchesPage = () => {
  const { id } = useParams();
  const product = WatchesData.find((item) => item.id === Number(id));
  return (
    <div>
      <NavBar />
      <div className="Main-page">
        <div className="Main-Img">
          <img src={product.Image} alt={product.mobileName} />
        </div>
        <div className="Main-Name">
          <h3>{product.mobileName}</h3>
        </div>
      </div>
      <div className="side">
        <div className="Main-price">${product.price}</div>
        <div className="Dis-price">${product.discountRate}</div>
      </div>
      <div className="dis">{product.description}</div>
      <div className="buttons">
        <button>ADD to Cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default WatchesPage;
