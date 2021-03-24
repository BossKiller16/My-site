import React, { useContext } from "react";

import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

import { Store } from "../chart/CartReducer";
import * as GiIcons from "react-icons/gi";
export default function Kosik() {
  const [cart] = useContext(Store);
  return (
    <div>
      <Link
        className={`${ styles.navLinks_mobiless }  ${ styles.kosik }`}
        to="kosik"
        style={{ textDecoration: "none" }}
      >
        <h4 style={{ color: "white" }}>
          <GiIcons.GiShoppingCart />

          <h4 className={styles.delka}> {(cart.length > 0) ? (cart.length) : ""}</h4>
        </h4>
      </Link>
    </div>
  );
}
