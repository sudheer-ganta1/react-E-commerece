import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import { WatchesData } from "../../Data/WatchesData";
import { Link } from "react-router-dom";

const MWatches = () => {
  return (
    <div>
      <NavBar />

      <div className="section">
        {WatchesData.map((item) => {
          return (
            <div className="Mainsection">
              <div className="" key={item.id}>
                <div className="SectionName1">{item.Name}</div>
                <Link to={`/watches/${item.id}`}>
                  <div className="DivImg">
                    <img src={item.Image} alt={item.Name} />
                  </div>
                </Link>

                <div className="prices">
                  <div className="price">${item.price}</div>
                  <div className="">final price: ${item.mrp}</div>
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

export default MWatches;
