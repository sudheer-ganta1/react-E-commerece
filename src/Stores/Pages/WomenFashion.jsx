import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import { WomenFashionData } from "../../Data/WomenFashionData";
import { Link } from "react-router-dom";

const WomenFashion = () => {
  return (
    <div>
      <NavBar />
      <div className="section">
        {WomenFashionData.map((item) => {
          return (
            <div className="Mainsection">
              <div className="" key={item.id}>
                <div className="SectionName1">{item.Name}</div>
                <Link to={`/women/${item.id}`}>
                  <div className="DivImg">
                    <img src={item.Image} alt={item.Name} />
                  </div>
                </Link>
                <div className="prices">
                  <div className="price">${item.price}</div>
                  <div className="">final price: ${item.mrp}</div>
                </div>
                <Link to={`/women/${item.id}`} className="link">
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

export default WomenFashion;
