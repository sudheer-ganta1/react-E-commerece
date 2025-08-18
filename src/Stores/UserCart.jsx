import React from "react";
import { useCart } from "./Context/CartContext";

const UserCart = () => {
  const { cartItems, addToCart } = useCart();
  return (
    <div>
      {cartItems.map((items) => {
        return (
          <div className="cart-section">
            <div className="cart-img">
              <img src={items.Image} alt="" />
            </div>
            <div className="cart-details">
              <h3>{items.acName}</h3>
              <h2>{items.price}</h2>
              <h2>{items.mrp}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserCart;
