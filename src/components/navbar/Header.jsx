import React from "react";
import { NavLink } from "react-router-dom";
import CartBtn from "../buttons/CartBtn";
import AddNewProduct from "../buttons/AddNewProduct";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg__bg">
        <div className="container-fluid py-2">
          <NavLink className="navbar-brand fw-bold" to="/">
            <img
              src="/assets/images/home/frame1.svg"
              alt=""
              style={{ width: "26px" }}
            />
            Fusion-<span style={{ color: "#52ab98" }}>-Store </span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: "#52ab98", color: "transparent" }}
          >
            <img src="/assets/images/home/menu.png" alt="menu" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="d-flex">
              <AddNewProduct />
              <CartBtn />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
