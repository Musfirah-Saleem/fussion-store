import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <h1 className=" fw-bold mb-4" style={{ color: "#52ab98" }}>
              About Us
            </h1>
            <p className="lead mb-4">
              At Fusion Store, we believe that shopping is not just a
              transaction; it's an experience that should be enjoyable,
              seamless, and memorable. As you explore our online marketplace,
              you're not just browsing products; you're embarking on a journey
              with us. We understand that each purchase is a
              choice, and we are honored that you've chosen us. From the
              carefully curated selection of products to the user-friendly
              shopping experience, every aspect of fusion store is designed
              with you in mind.
              <br />
              Our dedication to excellence extends beyond our products to the
              relationships we build with our customers. We invite you to learn
              more about the faces and stories that make up in our "About Us"
              section. Thank you for being a part of our community, and we look
              forward to serving you with the utmost care and dedication.
            </p>
            <NavLink to="/contact" className="common__btn px-3 mt-5">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-12 col-lg-6 d-flex justify-content-center">
            <img
              src="/assets/images/about1.svg"
              alt="About Us"
             className="contact__image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
