import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="Login">
      <div className="Left">
        <Link to={"/"} className="link">
          <h3 className="ShopName">E-Bazzar</h3>
        </Link>
      </div>

      <form className="formLogin" method="POST">
        <div className="box">
          <div className="nameLogin">
            <label htmlFor="email">Email:</label> <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="nameLogin">
            <label htmlFor="password">Password:</label> <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
        </div>

        <div className="down">
          <div className="signup">
            <Link to={""} className="signup-link">
              <h5>Signup</h5>
            </Link>
          </div>
          <div className="buttons">
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
