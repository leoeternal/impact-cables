import React, { useEffect } from "react";
import { motion } from "framer-motion";
// import impact from "../../static/images/impact.png";
import impact22 from "../../static/images/impact22.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import "./fourthPage.css";

function FourthPage() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="fourthpage-wrapper">
      <div className="title">
        <p>Get more out of our Wires.</p>
      </div>
      <div className="fourthpage-container">
        <div className="fourth-left">
          <motion.div
            data-aos="fade-right"
            data-aos-duration={1500}
            whileHover={{ scale: 1.03 }}
            className="fourth-box"
          >
            <p>Heavy on features.</p>
          </motion.div>
          <motion.div
            data-aos="fade-right"
            data-aos-duration={2000}
            whileHover={{ scale: 1.03 }}
            className="fourth-box"
          >
            <p>Light on price.</p>
          </motion.div>
          {/* <div data-aos="fade-right" data-aos-duration={2500} className="desc"> */}
          <div className="desc">
            <p>
              Our commitment towards environment friendly nature with features
              as High insulation resistance, RoHS compliance, anti-termite and
              anti-rodent features comes with this wire.
            </p>
          </div>
        </div>
        <div
          data-aos-duration={2500}
          data-aos="zoom-in"
          className="fourth-right"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={impact22}
            alt="company"
          />
        </div>
      </div>
    </div>
  );
}

export default FourthPage;
