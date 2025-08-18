import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import { FurnitureData } from "../../Data/FurnitureData";
import "./Pages.css";
import { Link } from "react-router-dom";

const Furniture = () => {
  return (
    <div>
      <NavBar />

      <div className="section">
        {FurnitureData.map((item) => {
          return (
            <div className="Mainsection">
              <div className="" key={item.id}>
                <div className="SectionName1">{item.itemName}</div>
                <Link to={`/Furntiure/${item.id}`}>
                  <div className="DivImg">
                    <img src={item.Image} alt={item.itemName} />
                  </div>
                </Link>
                <div className="prices">
                  <div className="price">${item.price}</div>
                  <div className="">final price: ${item.mrp}</div>
                </div>
                <Link to={`/Furntiure/${item.id}`}>
                  <div className="explore">
                    <button className="button">explore</button>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Furniture;
