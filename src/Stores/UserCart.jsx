import React from "react";
import { useCart } from "./Context/CartContext";
import NavBar from "./Components/NavBar/NavBar";
import "../App.css";

const UserCart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalMrp = cartItems.reduce((acc, item) => {
    return acc + item.mrp * item.quantity;
  }, 0);

  const totalAmount = cartItems.reduce((acc, item) => {
    return acc + (item.price * item.quantity) / 20;
  }, 0);

  const totalSavings = totalMrp - totalAmount;

  return (
    <div>
      <NavBar />

      <div className="prize">
        <h2 className="CartStyle">Your Cart</h2>
        <div className="total-section">
          <h2>Total: ${totalAmount}</h2>
          <p className="para1"> you saved : ${totalSavings}</p>
        </div>
      </div>

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
