import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./firstPage.css";

function FirstPage() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div id="home" className="firstpage-wrapper">
      <div data-aos-duration="2000" data-aos="zoom-in-up" className="title">
        <p>Impact Cables</p>
      </div>
      <div data-aos-duration="3000" data-aos="fade-up" className="desc">
        <p>
          We at 'IMPACT CABLES' would strive to improve and excel our process
          for providing quality products to the customer as per ever changing
          market demands, by using the best possible technology available. We
          would make all efforts to comply with the requirements of the quality
          management system. Innovativeness is a continuous process at Impact
          Cable.
        </p>
      </div>
    </div>
  );
}

export default FirstPage;
