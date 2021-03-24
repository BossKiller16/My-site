import React from "react";
import { useState, useContext } from "react";
import data from "./data";
import { Store } from "../chart/CartReducer";

import styles from "./Products.module.css";
import * as giIcons from "react-icons/gi";

function Products() {
  const [cart, setCart] = useContext(Store);
  const [click, setClick] = useState(false);

  const clicked = () => setClick(!click);

  const addToCart = (products) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => item.name === products.name);

    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...products,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };
  return (
    <div>
      <h1 className={styles.nadpis}> Produkty</h1>
      <div className={styles.outer_wrapper}>
        {data.map((item) => (
          <div className={styles.vse}>
            <div className={styles.produkt} key={item.id}>
              <div className={styles.container}>
                <img className={styles.images} src={item.img} alt={item.name} />
              </div>
              <div class={styles.bottom}>
                <div class={styles.left}>
                  <div class={styles.details}>
                    <h1 className={styles.jmeno}>{item.name}</h1>
                    <p className={styles.cena}>{item.price}</p>
                  </div>
                  <div class={styles.buy} onClick={() => addToCart(item)}>
                    <i class={styles.icons}>
                      <giIcons.GiShoppingCart />
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
