import React from "react";

import styles from "./Cart.module.css";
import * as BiIcons from "react-icons/bi";

import Products from "./Produkt";
import { useCart } from "./CartReducer";
import { useSetState } from "../chart/CartReducer";

export const Cart = () => {
  const items = useCart();
  const setCart = useSetState();
  const handleQuntityChange = (id, hodnota) => {
    const newState = items.map((value) => {
      if (value.id === id)
        return { ...value, quantity: value.quantity + hodnota };
      return value;
    });
    setCart(newState);
  };

  if (items.length === 0) {
    return (
      <cart>
        <p className={styles.empty}>
          Košík je prázdný
          <BiIcons.BiSad />
        </p>
      </cart>
    );
  }

  return (
    <cart>
      <h1 className={styles.nadpis}>Košík</h1>
      {items.map((val, index) => (
        <Products
          key={index}
          id={val.id}
          quantity={val.quantity}
          handleQuntityChange={handleQuntityChange}
        />
      ))}
    </cart>
  );
};

export default Cart;
