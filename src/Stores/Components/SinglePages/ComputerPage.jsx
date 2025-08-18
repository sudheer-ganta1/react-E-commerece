import React from "react";
import { ComputersData } from "../../../Data/ComputerData";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./Single.css";

const ComputerPage = () => {
  const { id } = useParams();
  const product = ComputersData.find((item) => item.id === Number(id));

  return (
    <div>
      <NavBar />
      <div className="Main-page">
        <div className="Main-Img">
          <img src={product.Image} alt={product.computerName} />
        </div>
        <div className="Main-Name">
          <h3>{product.computerName}</h3>
        </div>
      </div>
      <div className="side">
        <div className="Main-price">${product.price}</div>
        <div className="Dis-price">${product.mrp}</div>
      </div>
      <div className="dis">{product.description}</div>
      <div className="buttons">
        <button>ADD to Cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default ComputerPage;
