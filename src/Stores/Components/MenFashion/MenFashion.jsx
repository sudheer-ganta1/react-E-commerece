import React from "react";
import { MenFashionData } from "../../../Data/MenFashionData";
import { Link } from "react-router-dom";

const FirstImages = MenFashionData.slice(0, 4);

const MenFashion = () => {
  return (
    <div className="">
      <Link to={"/Men"} className="link">
        <h1 className="SectionName">MenFashion</h1>
      </Link>

      <div className="Mobilesec">
        {FirstImages.map((item) => {
          return (
            <div className="MainDev" id={item.key}>
              <Link to={`/Men/${item.id}`}>
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

export default MenFashion;
