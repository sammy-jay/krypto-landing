import React from "react";
import "./Feature.css";
import { motion } from "framer-motion";

const Feature = ({ imgUrl, title, desc }) => {
  return (
    <motion.article
      whileInView={{ y: [70, 0], opacity: [0, 1] }}
      transition={{ duration: 1, delayChildren: 0.5 }}
    >
      <article className="feature">
        <img src={imgUrl} alt="" />
        <h4>{title}</h4>
        <p>{desc}</p>
      </article>
    </motion.article>
  );
};

export default Feature;
