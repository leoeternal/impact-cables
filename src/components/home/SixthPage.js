import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
// import person22 from "../../static/images/pradeep.png";
// import person11 from "../../static/images/sunil22.png";
import person111 from "../../static/images/sunil222.png";
import person222 from "../../static/images/pradeep222.png";
import Aos from "aos";
import "aos/dist/aos.css";
import "./sixthPage.css";

function SixthPage() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div id="desk" className="sixthpage-wrapper">
      <div className="sixthpage-container">
        <div
          data-aos="fade-up"
          data-aos-duration={1500}
          className="left-container"
        >
          <div className="left">
            <div className="heading1">
              <p>Who We Are</p>
            </div>
            <div className="heading2">
              <p>
                We are a team of experienced businessmen who delivers high
                quality products.
              </p>
            </div>
            <div className="heading3">
              <p>
                We specialize in commitment to surpass our customer
                expectations, to set standards for our business and transactions
                based on mutual trust, to be ethical, sincere and open in our
                dealings.
              </p>
            </div>
            <div className="sixth-button">
              <Button size="large" variant="contained">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration={2500} className="right">
          <motion.div whileHover={{ scale: 1.1 }} className="sixth-card">
            <div className="image">
              <img src={person111} alt="sixth page" />
            </div>
            <div className="name">
              <p>Sunil Jindal</p>
            </div>
            <div className="position">
              <p>Co Founder</p>
            </div>
            {/* <div className="about">
              <p>
                Founder, CEO, and Chief Engineer at SpaceX; angel investor, CEO,
                and Product Architect of Tesla.
              </p>
            </div> */}
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="sixth-card">
            <div className="image">
              <img src={person222} alt="sixth page" />
            </div>
            <div className="name">
              <p>Pradeep Jindal</p>
            </div>
            <div className="position">
              <p>Co Founder</p>
            </div>
            {/* <div className="about">
              <p>
                Founder, CEO, and Chief Engineer at SpaceX; angel investor, CEO,
                and Product Architect of Tesla.
              </p>
            </div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SixthPage;
