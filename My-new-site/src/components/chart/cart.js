import React from "react";

import styles from "./Cart.module.css";
import * as BiIcons from "react-icons/bi";
import StripeCheckout from "react-stripe-checkout"
import Products from "./Produkt";
import { useContext } from "react";
import { Store } from "../chart/CartReducer";

export const Cart = () => {


  const [cart, setCart] = useContext(Store);

  const handleQuntityChange = (id, hodnota) => {
    const newState = cart.map((value) => {
      if (value.id === id)
        return { ...value, quantity: value.quantity + hodnota };
      return value;
    });
    setCart(newState);
  };
  const handleToken = (token) => {
    const body = {
      token,
      cart
    }
    const headers = {
      "Content-Type": 'application/json'
    }
    return fetch("http://localhost:8282/payment", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    })
      .then(response => {
        console.log("RESPONSE", response);
        const { status } = response
        console.log("STATUS", status);


      })
      .catch(err => console.log(err))
  }
  const getTotalSum = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0)
  }


  if (cart.length === 0)
  {
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
      {cart.map((val, index) => (
        <Products
          key={index}
          id={val.id}
          quantity={val.quantity}
          handleQuntityChange={handleQuntityChange}
        />
      ))}
      <div>{getTotalSum()}</div>
      <StripeCheckout

        stripeKey={process.env.REACT_APP_KEY_PUBLIC}
        token={handleToken}
        amount={getTotalSum() * 100}
        name={cart.name}
      /*     shippingAddress
          billingAddress */
      ><button className={styles.btn}>Zakoupit za {getTotalSum()}</button></StripeCheckout>

    </cart>
  );
};

export default Cart;
