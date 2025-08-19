import React from "react";
import { ComputersData } from "../../../Data/ComputerData";
import "./Computers.css";
import { Link } from "react-router-dom";

const FirstImages = ComputersData.slice(0, 4);

const Computers = () => {
  return (
    <div className="">
      <Link to={"/computer"} className="link">
        <h1 className="SectionName">computers</h1>
      </Link>
      <div className="Mobilesec">
        {FirstImages.map((item) => {
          return (
            <div className="MainDev" id={item.key}>
              <Link to={`/computer/${item.id}`}>
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

export default Computers;
