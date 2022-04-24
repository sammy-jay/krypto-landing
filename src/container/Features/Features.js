import React from "react";
import "./Features.css";
import img1 from "../../assets/247.svg";
import img2 from "../../assets/organised.svg";
import img3 from "../../assets/secure.svg";
import Feature from "../../components/Feature";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section className="features" id="features">
      <motion.span
        whileInView={{ x: [-50, 0], opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
      >
        <span>What we serve</span>
      </motion.span>
      <motion.h2
        whileInView={{ x: [-50, 0], opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
      >
        <h2>Features that we provide for you</h2>
      </motion.h2>
      <div>
        <Feature
          imgUrl={img1}
          title="System 24 Hours"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, officia"
        />
        <Feature
          imgUrl={img2}
          title="Organised Data"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, officia"
        />
        <Feature
          imgUrl={img3}
          title="The Best Security"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, officia"
        />
      </div>
    </section>
  );
};

export default Features;
