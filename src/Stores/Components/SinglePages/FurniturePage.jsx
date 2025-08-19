import React from "react";
import { FurnitureData } from "../../../Data/FurnitureData";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { useCart } from "../../Context/CartContext";
import "./Single.css";
import { ToastContainer, toast } from "react-toastify";

const FurniturePage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const notify = () => toast.success("✅ Added to cart!", {});

  const product = FurnitureData.find((item) => item.id === Number(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <NavBar />
      <div className="Main-page">
        <div className="Main-Img">
          <img src={product.Image} alt={product.Name} />
        </div>
        <div className="Main-Name">
          <h3>{product.Name}</h3>
        </div>
      </div>
      <div className="side">
        <div className="Main-price">₹{product.price}</div>
        <div className="Dis-price">₹{product.mrp}</div>
      </div>
      <div className="dis">{product.description}</div>
      <div className="buttons">
        <button
          onClick={() => {
            addToCart(product);
            notify();
          }}
        >
          ADD to Cart
        </button>
        <button>Buy Now</button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default FurniturePage;
