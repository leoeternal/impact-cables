import React from "react";
import map from "../static/images/map.png";
import "./footer.css";

function Footer() {
  return (
    <div id="contact2" className="footer-wrapper">
      <div className="top">
        <div className="one">
          <div className="one-container">
            <div className="heading1">
              <p>Delhi</p>
            </div>

            <div className="heading2">
              <p>1st floor, 2nd floor, 458-466, Gali No. 8</p>
            </div>
            <div className="heading3">
              <p>Shambhu Nath Compound, Friends Colony Ind. Area</p>
            </div>
            <div className="heading4">
              <p>Sahibabad, Delhi-95</p>
            </div>
            <div className="heading5">
              <p>+91 8368478134</p>
            </div>
          </div>
        </div>
        <div className="two">
          <img src={map} alt="Company" />
        </div>
      </div>
      <div className="bottom">
        <p>
          © Copyright <strong>Impact Cables Private Limited</strong>. All Rights
          Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
