import React from "react";
import { useState } from "react";
import data from "./data";
import { useCart } from "../chart/CartReducer";
import { useDispatchCart } from "../chart/CartReducer";
import { useSetState } from "../chart/CartReducer";

import styles from "./Products.module.css";
import * as giIcons from "react-icons/gi";
import fullProdukt from "../chart/cart";

function Products() {
  const [click, setClick] = useState(false);

  const clicked = () => setClick(!click);
  const items = useCart();
  const setState = useSetState();

  const addToCart = (products) => {
    let newCart = [...items];
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
    setState(newCart);
  };
  return (
    <div>
      <h1 className={styles.nadpis}> Produkty</h1>
      <div className={styles.outer_wrapper}>
        {data.map(( { name, price, id, img }) => (
            <div className={styles.vse}>
              <div className={styles.produkt} key={id}>
                <div className={styles.container}>
                  <img className={styles.images} src={img} alt={name} />
                </div>
                <div class={styles.bottom}>
                  <div class={styles.left}>
                    <div class={styles.details}>
                      <h1 className={styles.jmeno}>{name}</h1>
                      <p className={styles.cena}>{price}</p>
                    </div>
                    <div class={styles.buy} onClick={() => addToCart(item)}>
                      <i class={styles.icons}>{<giIcons.GiShoppingCart />}</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
