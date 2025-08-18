import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import { MenFashionData } from "../../Data/MenFashionData";
import "./Pages.css";
import { Link } from "react-router-dom";

const MenFashion = () => {
  return (
    <div>
      <NavBar />
      <div className="section">
        {MenFashionData.map((item) => {
          return (
            <div className="Mainsection">
              <div className="" key={item.id}>
                <div className="SectionName1">{item.productName}</div>
                <Link to={`/Men/${item.id}`}>
                  <div className="DivImg">
                    <img src={item.Image} alt={item.productName} />
                  </div>
                </Link>
                <div className="prices">
                  <div className="price">${item.price}</div>
                  <div className="">final price: ${item.mrp}</div>
                </div>
                <Link to={`/Men/${item.id}`}>
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

export default MenFashion;
