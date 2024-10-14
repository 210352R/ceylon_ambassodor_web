import React from "react";

import Hero from "../component/HeroSection";
import NavSection from "../component/NavigationSection";
import TopHeader from "../component/TopHeader";
import Navbar from "../component/Navbar";
import PlanImage from "../../../assets/editPlaneImage.jpg";
import CargoService from "../../../assets/cargo-service-image.jpg";
import OfficeImage from "../../../assets/office-supplies-sheets-notes.jpg";
import courierImage from "../../../assets/courier.jpg";
import RoboImage from "../../../assets/roboimage.jpg";
import BrandNavSection from "../component/BrandPulseNavigationSection";
import SecondPart from "../component/SecondPart";
import FirstSection from "../component/FirstSection";
import ThirdPart from "../component/ThirdPart";
import FourthPart from "../component/FourthPart";
import FifthSection from "../component/FifthSection";
import SixthSection from "../component/SixthSection";
import SeventhSection from "../component/SeventhSection";
import LastSection from "../component/LastSection";
import Footer from "../../../../src/screens/faq/component/Footer";

function BrandPulse() {
  const images = [
    PlanImage,
    CargoService,
    OfficeImage,
    courierImage,
    RoboImage,
  ];
  return (
    <div>
      <TopHeader />
      <Navbar />
      <FirstSection />
      <SecondPart />
      <ThirdPart />
      <FourthPart />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <LastSection />
      <Footer />
    </div>
  );
}

export default BrandPulse;
