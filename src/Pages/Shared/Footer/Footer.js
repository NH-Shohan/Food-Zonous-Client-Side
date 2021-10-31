import React from "react";
import image from "../../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark text-warning p-5">
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center">
          <div>
            <img className="w-50" src={image} alt="" />
            <div className="">
              <h3 className="mt-5 ">FOOD ZONOUS</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <h2>Opening Hours</h2>
          <hr className="text-warning  border border-2 border-warning rounded-pill w-100" />
          <div className="text-start">
            <p>Monday ----------------- 8.00 - 20.00</p>
            <p>Tuesda ------------------ 8.00 - 20.00</p>
            <p>Wednesday ------------- 8.00 - 20.00</p>
            <p>Thursday ---------------- 8.00 - 20.00</p>
            <p>Friday ------------------- 8.00 - 20.00</p>
            <p>Saturday ---------------- 8.00 - 20.00</p>
            <p>Sunday ----------------- closed</p>
          </div>
        </div>
        <div className="col-md-4 text-start">
          <h2>About Food Zonous</h2>
          <hr className="text-warning border border-2 border-warning rounded-pill w-100" />
          <h5 className="mt-3">
            21/3 Soi Saladaeng 1, Silom road, New York, USA
          </h5>
          <h5 className="mt-3">515-708-9386</h5>
          <h5 className="mt-3">deliveyinfo@foodzonous.com</h5>
        </div>
      </div>
      <hr className="text-warning border border-2 border-warning rounded-pill w-100" />
      <div className="row">
        <div className="col-md-4 mb-xs-5">
          <h5>COPYRIGHT © 2021 ALL RIGHT RESERVED</h5>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div>
            <i className="fab fa-google"></i>
            <i className="fab fa-instagram-square"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-cc-paypal"></i>
            <i className="fab fa-cc-visa"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
