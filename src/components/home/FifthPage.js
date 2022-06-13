import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
// import vidhut from "../../static/images/vidhut.png";
import vidhutfinal from "../../static/images/vidhutfinal.png";
// import vidhut22 from "../../static/images/vidhut22.jpeg";
import "./fifthPage.css";

function FifthPage() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="fifthpage-wrapper">
      <div className="fifthpage-container">
        <div
          data-aos="zoom-in"
          data-aos-duration={2500}
          className="fifth-right"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={vidhutfinal}
            alt="company"
          />
        </div>
        <div className="fifth-left">
          <div className="fifth-left-container">
            <div
              data-aos="fade-left"
              data-aos-duration={1500}
              className="heading1"
            >
              <p>Incredible Power.</p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration={2000}
              className="heading2"
            >
              <p>Incredible Simple.</p>
            </div>
            <div data-aos="fade-left" data-aos-duration={2500} className="desc">
              <p>
                As per this tagline 'More value for your money', this product
                gives you full value of your money. This product is very
                reasonably priced.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthPage;
