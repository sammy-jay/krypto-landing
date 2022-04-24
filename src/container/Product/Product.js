import React from "react";
import "./Product.css";
import iphone from "../../assets/iphone.svg";
import MobileStoreButton from "react-mobile-store-button";
import { motion } from "framer-motion";

const Product = () => {
  return (
    <section className="product" id="product">
      <div>
        <h2>What are you waiting for?</h2>
        <h2>Download the app now</h2>
        <div className="btn-container">
          <MobileStoreButton
            store="android"
            url="#"
            height={90}
            linkProps={{ title: "Android Store Button" }}
          />
          <MobileStoreButton
            store="ios"
            url="#"
            height={60}
            width={200}
            className="tester"
            linkProps={{ title: "iOS Store Button" }}
          />
        </div>
      </div>
      <div className="img-container">
        <img src={iphone} alt="" />
      </div>
    </section>
  );
};

export default Product;
