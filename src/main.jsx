import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { CartProvider } from "./Stores/Context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </CartProvider>
  </BrowserRouter>
);
