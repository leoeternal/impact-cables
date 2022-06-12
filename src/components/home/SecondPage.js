import React, { useEffect } from "react";
import brinjal from "../../static/images/brinjal2.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import "./secondPage.css";

function SecondPage() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div id="products" className="secondpage-wrapper">
      <div className="secondpage-container">
        <div data-aos-duration="2000" data-aos="zoom-out-up" className="title">
          <p>Every reasons to use our products.</p>
        </div>
        <div className="photo-desc-container">
          <div data-aos-duration="2000" data-aos="fade-right" className="photo">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={brinjal}
              alt="company"
            ></motion.img>
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="desc"
          >
            <p>
              This is one of the finest product in our arms. This wire has a
              unique unilay bunching and highest grade of PVC in this wire has
              been used. You will love this product. This is the darling of our
              heart.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
