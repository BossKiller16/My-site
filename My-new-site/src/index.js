import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./components/chart/CartReducer";
import { AuthProvider } from "./components/Login/RegisterState"
ReactDOM.render(
  <AuthProvider> <CartProvider>
    <App />
  </CartProvider></AuthProvider>,

  document.getElementById("root")
);
