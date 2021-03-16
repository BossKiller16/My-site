import React, { Component } from "react";
import { useState } from "react";
import { SidebarData } from "./SidebarData";
import { Button } from "./button/Button";
import Header from "../header/Header.js";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "../chart/CartReducer";
import * as GiIcons from "react-icons/gi";
import Kosik from "./kosik";
function Navbar() {
  const items = useCart();

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <nav className="items">
      <h1 className="navbarLogo">
        <Kosik />
        <Header />

        <i className="fas fa-drumstick-bite" to="/"></i>
      </h1>
      <div className="menuIcon">
        <i
          className={sidebar ? "fas fa-times" : "fas fa-bars"}
          onClick={showSidebar}
        ></i>
      </div>

      <ul className={sidebar ? "navMenu active" : "navMenu"}>
        {SidebarData.map((item, index) => {
          return (
            <Link
              key={index}
              className={item.cName}
              to={item.url}
              style={{ textDecoration: "none" }}
              onClick={showSidebar}
            >
              <h4 className="icons" style={{ color: "white" }}>
                {item.icon}
              </h4>
              {item.title}
            </Link>
          );
        })}
        <Link
          className=" navLinks-mobiles  kosik"
          to="košík"
          style={{ textDecoration: "none" }}
        >
          <h4 style={{ color: "white" }}>
            <GiIcons.GiShoppingCart />
            <h4 className="delka">({items.length})</h4>
          </h4>
        </Link>
      </ul>
      <Button className="button">Přihlásit se</Button>
    </nav>
  );
}

export default Navbar;
