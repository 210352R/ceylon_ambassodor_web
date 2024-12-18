import React from "react";
import TopHeader from "../../Homepage/component/TopHeader";
import Navbar from "../../Homepage/component/Navbar";
import Hero from "../../Homepage/component/HeroSection";
import ship from "../../../assets/ship.png";
import FrontBanner from "../components/FrontBanner";
import VisionScreen from "../components/VisionScreen";
import ValuesSection from "../components/ValueScetion";
import CardsGrid from "../components/CardGrid";
import LeadershipComponent from "../components/LeadershipComponent";
import AirplaneHero from "../components/AirplaneHero";
import ServicesWithImages from "../components/ServiceswithImages";
import GridComponent from "../components/GridComponent";
import Footer from "../../faq/component/Footer";

function AboutUsScreen() {
  const images = [ship, ship];
  return (
    <div className="relative">
      <TopHeader />
      <Navbar />
      <div className="flex-1 bg-customBlue">
        <Hero images={images} />
        <FrontBanner />
      </div>
      <VisionScreen />
      <ValuesSection />
      <CardsGrid />
      <LeadershipComponent />
      <AirplaneHero />
      <ServicesWithImages />
      <GridComponent />
      <Footer />
    </div>
  );
}

export default AboutUsScreen;
