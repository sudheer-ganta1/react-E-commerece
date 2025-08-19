import React from "react";
import { FurnitureData } from "../../../Data/FurnitureData";
import { Link } from "react-router-dom";

const FirstImages = FurnitureData.slice(0, 4);

const Furniture = () => {
  return (
    <div className="">
      <Link to={"/Furntiure"} className="link">
        <h1 className="SectionName">Furniture</h1>
      </Link>

      <div className="Mobilesec">
        {FirstImages.map((item) => {
          return (
            <div className="MainDev" id={item.key}>
              <Link to={`/Furntiure/${item.id}`}>
                <div className="">
                  <img
                    className="MobileImgs"
                    src={item.Image}
                    alt={item.Name}
                  />
                </div>
              </Link>
              <div className="MobileName">{item.Name}</div>
              <div className="prices">
                <div className="MobilePrice">${item.price}</div>
                <div className="discount">${item.mrp}</div>
              </div>
              <div className="Check">
                <button className="ButtonCls">Add To Cart</button>
                <button className="ButtonCls">Buy Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Furniture;
