import React from "react";
import "./Hero.css";
import CustomBtn from "../../components/CustomBtn";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header className="hero">
      <motion.div
        whileInView={{ x: [-50, 0], opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
      >
        <h2>
          Let's Make better life with new <span>currency</span>
        </h2>
      </motion.div>
      <motion.div
        whileInView={{ y: [70, 0], opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
      >
        <p>
          Get real time data on cryptocurrencies and help grow your portfolio
          faster
        </p>
      </motion.div>
      <div>
        <motion.div
          whileInView={{ y: [70, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delayChildren: 0.5 }}
        >
          <CustomBtn text="Get Started" />
        </motion.div>{" "}
      </div>
    </header>
  );
};

export default Hero;
