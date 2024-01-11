import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" py-5 bg__footer" style={{ backgroundColor: "" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h3 className="text-uppercase mb-4 footer__text">Fusion Store</h3>
            <p className="text-muted">
              From the carefully curated selection of products to the
              user-friendly shopping experience, every aspect of fusion store is
              designed with you in mind.
            </p>
          </div>
          <div className="col-lg-4">
            <h3 className="text-uppercase mb-4 footer__text">Quick Links</h3>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/" className="text-muted">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className="text-muted">
                  Product
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className="text-muted">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-muted">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h3 className="text-uppercase mb-4 footer__text">Contact Us</h3>
            <p className="text-muted">123 Main Street, Cityville, Country</p>
            <p className="text-muted">
              <a href="mailto:info@example.com" className="text-muted">
                info@example.com
              </a>
            </p>
            <p className="text-muted">
              <a href="tel:+123456789" className="text-muted">
                +123 456 789
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center py-3 ">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
