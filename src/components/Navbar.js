import React, { useState, useEffect } from "react";
import CustomBtn from "./CustomBtn";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [changeBg, setChangeBg] = useState(false);
  window.addEventListener("scroll", () => setIsOpen(false));
  const handleBg = () => {
    if (window.scrollY >= 50) {
      setChangeBg(true);
    } else {
      setChangeBg(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleBg);

    return () => {
      window.removeEventListener("scroll", handleBg);
    };
  });

  return (
    <nav className="navbar">
      <h2>Jiade</h2>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#product">Product</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <CustomBtn text="Login" />
      </ul>
      <div
        className="menu-btn"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <BiMenuAltRight />
      </div>
      <div className={`nav-links2 ${isOpen ? "isOpen" : "isClosed"}`}>
        <a href="#">Home</a>
        <a href="#features">Features</a>
        <a href="#product">Product</a>
        <a href="#testimonial">Testimonial</a>
        <a href="#contact">Contact</a>
        <CustomBtn text="Login" />
      </div>
    </nav>
  );
};

export default Navbar;
