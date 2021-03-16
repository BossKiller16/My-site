import React, { useState, useContext, createContext, useEffect } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(cartFromLocalStorage);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <CartDispatchContext.Provider value={setCart}>
      <CartStateContext.Provider value={cart}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useSetState = () => useContext(CartDispatchContext);
