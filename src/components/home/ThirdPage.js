import React, { useEffect } from "react";
// import qcab from "../../static/images/qcab.png";
import qcab22 from "../../static/images/qcab22.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
// import parmanu from "../../static/images/parmanu.png";
import parmanu22 from "../../static/images/parmanu22.jpeg";
import { motion } from "framer-motion";
import "./thirdPage.css";

function ThirdPage() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="thirdpage-wrapper">
      <div className="thirdpage-container">
        <div data-aos="fade-up" data-aos-duration={1500} className="title">
          <p>Complete Safety Guard</p>
        </div>
        <div className="third-photo-desc-container">
          <div className="box">
            <div data-aos="fade-up" data-aos-duration={2000} className="photo">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={parmanu22}
                alt="company"
              />
            </div>
            <div className="desc">
              <p>
                This brand 'PARMANU' is a rare combination of quality and price.
                This product is 14 years old with consistency in the market.
              </p>
            </div>
          </div>
          <div className="box">
            <div data-aos="fade-up" data-aos-duration={2500} className="photo">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={qcab22}
                alt="company"
              />
            </div>
            <div className="desc">
              <p>
                This brand is light on prices and heavy on features. Use this
                product and you will acknowledge the strength of the product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
