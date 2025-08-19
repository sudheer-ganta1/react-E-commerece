import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="MainSection">
      <nav className="MainNav">
        <div className="Left">
          <Link to={"/"} className="link">
            <h3 className="ShopName"> E-Bazzar</h3>
          </Link>
        </div>
        <div className="centre">
          <div className="input">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search Items Here"
            />
          </div>
          <div className="UserList">
            <ul>
              <Link to={"/Acmain"} className="link">
                <li>AC</li>
              </Link>
              <Link to={"/mobiles"} className="link">
                <li>Mobile</li>
              </Link>

              <Link to={"/computer"} className="link">
                <li>Computer</li>
              </Link>
              <Link to={"/Furntiure"} className="link">
                <li>Furniture</li>
              </Link>
              <Link to={"/watches"} className="link">
                <li> Watches</li>
              </Link>
              <Link to={"/Men"} className="link">
                <li>Men</li>
              </Link>
              <Link to={"/women"} className="link">
                <li>Women</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="right">
          <Link to={"/user"} className="link">
            <div className="login">
              <i className="fas fa-user"></i>
            </div>
          </Link>
          <Link to={"/cart"} className="link">
            <div className="cart">
              <i className="fas fa-shopping-cart"></i>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
