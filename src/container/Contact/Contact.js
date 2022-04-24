import React from "react";
import CustomBtn from "../../components/CustomBtn";
import "./Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <motion.span
        whileInView={{ x: [-50, 0], opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
      >
        <span>Get Started</span>
      </motion.span>
      <motion.h2
        whileInView={{ x: [-50, 0], opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
      >
        <h2>Contact Us</h2>
      </motion.h2>
      <div className="contact-one">
        <motion.div
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delayChildren: 0.5 }}
        >
          <textarea cols="60" rows="10" placeholder="Your message"></textarea>
        </motion.div>
        <motion.div
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delayChildren: 0.5 }}
        >
          <div className="contact-two">
            <input type="email" placeholder="Your email" />
            <CustomBtn text="Send" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
