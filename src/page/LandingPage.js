import React, { useState } from "react";
import Hero from "../component/Hero/Hero";
import Info from "../component/Information/Info";
import SaveDate from "../component/SaveDate/SaveDate";
import Story from "../component/Story/Story";
import Time from "../component/Time/Time";
import { Kutipan } from "../component/Kutipan/Kutipan";
import Amplop from "../component/AmplopDigital/Amplop";
import Protocol from "../component/Protocol/Protocol";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar";
import Music from "../component/Music/Music";
import Slider from "../component/Gallery/Slider";

function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  const togle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar togle={togle} />
      <Hero />
      <Music />
      <Kutipan />
      <Info />
      <SaveDate />
      <Time />
      <Story />
      <Slider />
      <Amplop />
      <Protocol />
      <Footer />
    </>
  );
}

export default LandingPage;
