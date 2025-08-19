import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import { MobilesData } from "../../Data/MobilesData";
import { Link } from "react-router-dom";
import "./Pages.css";
const Mobiles = () => {
  return (
    <div>
      <NavBar />
      <div className="section">
        {MobilesData.map((item) => {
          return (
            <div className="Mainsection">
              <div className="" key={item.id}>
                <div className="SectionName1">{item.Name}</div>
                <Link to={`/mobiles/${item.id}`}>
                  <div className="DivImg">
                    <img src={item.Image} alt={item.Name} />
                  </div>
                </Link>
                <div className="prices">
                  <div className="price">${item.price}</div>
                  <div className="">final price: ${item.discountRate}</div>
                </div>
                <Link to={`/computer/${item.id}`} className="link">
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

export default Mobiles;
