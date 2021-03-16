import React, { Component } from "react";
import { useState } from "react";
import { SidebarData } from "./SidebarData";
import { Button } from "./button/Button";
import Header from "../header/Header.js";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "../chart/CartReducer";
import * as GiIcons from "react-icons/gi";
export default function Kosik() {
  const items = useCart();
  return (
    <div>
      <Link
        className=" navLinks-mobiless  kosik"
        to="košík"
        style={{ textDecoration: "none" }}
      >
        <h4 style={{ color: "white" }}>
          <GiIcons.GiShoppingCart />
          <h4 className="delka">({items.length})</h4>
        </h4>
      </Link>
    </div>
  );
}
