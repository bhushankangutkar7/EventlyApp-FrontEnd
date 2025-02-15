import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark pt-3 pb-3 footerOuterContainer">
        <div className="footerInnerContainer">
          <hr className="container" />
          <div className="d-flex justify-content-around align-items-start p-2">
            <div className="footerLogo">
              <h5 className="">Logo</h5>
            </div>
            <div className="footerAboutUs">
              <h5>About Us</h5>
              <ul className="list-unstyled container">
                <li className="nav-item ">
                  <Link className="nav-link">Our Vision</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Our Mission</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Our Technology</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Who We Serve</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Why Choose Us</Link>
                </li>
              </ul>
            </div>
            <div className="footerContactUs">
              <h5>Contact Us</h5>
              <ul className="list-unstyled container">
                <li>
                  <Link className="nav-link">Our Contact Information</Link>
                </li>
                <li>
                  <Link className="nav-link">Get in Touch</Link>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p className="container text-center copyRightText">
            All rights are reserved by © EventlyApp @2025
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
