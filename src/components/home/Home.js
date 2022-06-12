import React from "react";
import ContactPage from "./ContactPage";
import FifthPage from "./FifthPage";
import FirstPage from "./FirstPage";
import FourthPage from "./FourthPage";
import SecondPage from "./SecondPage";
import SixthPage from "./SixthPage";
import TempPage from "./TempPage";
import ThirdPage from "./ThirdPage";

function Home() {
  return (
    <div className="home-wrapper">
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <ContactPage />
      <TempPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
    </div>
  );
}

export default Home;
