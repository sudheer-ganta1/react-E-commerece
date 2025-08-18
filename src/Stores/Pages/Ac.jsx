import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import { ACData } from "../../Data/AcData";
import "./Pages.css";
import { Link } from "react-router-dom";
const Ac = () => {
  return (
    <div>
      <NavBar />

      <div className="section">
        {ACData.map((item) => {
          return (
            <div className="Mainsection">
              <div className="" key={item.id}>
                <div className="SectionName1">{item.acName}</div>
                <Link to={`/Acmain/${item.id}`}>
                  <div className="DivImg">
                    <img src={item.Image} alt={item.acName} />
                  </div>
                </Link>
                <div className="prices">
                  <div className="price">${item.price}</div>
                  <div className="">final price: ${item.mrp}</div>
                </div>
                <Link to={`/Acmain/${item.id}`}>
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

export default Ac;
