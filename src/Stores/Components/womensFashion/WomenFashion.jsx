import React from "react";
import { WomenFashionData } from "../../../Data/WomenFashionData";
const FirstImages = WomenFashionData.slice(0, 4);
import { Link } from "react-router-dom";

const WomenFashion = () => {
  return (
    <div className="">
      <Link to={"/women"} className="link">
        <h1 className="SectionName">WomenFashion</h1>
      </Link>

      <div className="Mobilesec">
        {FirstImages.map((item) => {
          return (
            <div className="MainDev" id={item.key}>
              <Link to={`/women/${item.id}`}>
                <div className="">
                  <img
                    className="MobileImgs"
                    src={item.Image}
                    alt={item.productName}
                  />
                </div>
              </Link>
              <div className="MobileName">{item.productName}</div>
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

export default WomenFashion;
