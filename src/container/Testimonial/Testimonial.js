import React from "react";
import SingleTestimony from "../../components/SingleTestimony";
import "./Testimonial.css";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <section className="testimonial" id="testimonial">
      <motion.span
        whileInView={{ x: [-50, 0], opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
      >
        <span>Customers don't lie</span>
      </motion.span>
      <motion.h2
        whileInView={{ x: [-50, 0], opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
      >
        <h2>What our customers say</h2>
      </motion.h2>
      <div>
        <SingleTestimony />
        <SingleTestimony />
        <SingleTestimony />
      </div>
    </section>
  );
};

export default Testimonial;
