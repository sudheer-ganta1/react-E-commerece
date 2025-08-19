import React from "react";
import { useCart } from "./Context/CartContext";
import NavBar from "./Components/NavBar/NavBar";
import "../App.css";

const UserCart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      <NavBar />

      <h2 className="CartStyle">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="CartStyle">Your cart is empty 🛒</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-section" key={item.id}>
              <div className="cart-img">
                <img src={item.Image} alt={item.Name} width="80" />
              </div>
              <div className="cart-details">
                <h3>{item.Name}</h3>
                <h2>${item.price}</h2>
                <h2 className="mrp">${item.mrp}</h2>
                <p>Quantity: {item.quantity}</p>
              </div>

              <div className="cart-actions">
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default UserCart;
