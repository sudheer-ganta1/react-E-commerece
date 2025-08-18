import React from "react";

import { ACData } from "../../../Data/AcData";
import { Link } from "react-router-dom";

const FirstImages = ACData.slice(0, 4);

const Ac = () => {
  return (
    <div className="">
      <Link to={"/Acmain"} className="link">
        <h1 className="SectionName">AC</h1>
      </Link>
      <div className="Mobilesec">
        {FirstImages.map((item) => {
          return (
            <div className="MainDev" id={item.key}>
              <Link to={`/Acmain/${item.id}`}>
                <div className="">
                  <img
                    className="MobileImgs"
                    src={item.Image}
                    alt={item.acName}
                  />
                </div>
              </Link>
              <div className="MobileName">{item.acName}</div>
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

export default Ac;
