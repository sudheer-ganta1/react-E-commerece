import React from "react";
import { MobilesData } from "../../../Data/MobilesData";
import "./Mobiles.css";
import { Link } from "react-router-dom";
const FirstImages = MobilesData.slice(0, 4);

const Mobiles = () => {
  return (
    <div className="">
      <Link className="link" to={"/mobiles"}>
        <h1 className="SectionName">Mobiles</h1>
      </Link>

      <div className="Mobilesec">
        {FirstImages.map((item) => {
          return (
            <div className="MainDev">
              <Link to={`/mobiles/${item.id}`}>
                <div className="">
                  <img className="MobileImg" src={item.Image} alt="" />
                </div>
              </Link>

              <div className="MobileName">{item.Name}</div>
              <div className="prices">
                <div className="MobilePrice">${item.price}</div>
                <div className="discount">${item.discountRate}</div>
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

export default Mobiles;
