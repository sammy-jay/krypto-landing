import React from "react";
import "./SingleTestimony.css";
import avatar from "../assets/avatar.png";
import { motion } from "framer-motion";

const SingleTestimony = () => {
  return (
    <motion.article
      whileInView={{ y: [70, 0], opacity: [0, 1] }}
      transition={{ duration: 1, delayChildren: 0.5 }}
    >
      <article className="singletestimony">
        <img src={avatar} alt="" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut
          quasi quaerat laborum soluta ipsam commodi assumenda in dolore rerum
        </p>
        <div>
          <span>Tolu Soneye</span>
          <p>Trader</p>
        </div>
      </article>
    </motion.article>
  );
};

export default SingleTestimony;
