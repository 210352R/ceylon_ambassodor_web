import React from "react";
import MapComponent from "../component/MapComponent";
import TopHeader from "../../Homepage/component/TopHeader";
import Navbar from "../../Homepage/component/Navbar";
import ContactUsForm from "../component/ContactUsForm";
import ServicesSection from "../component/ServiceSection";

import Footer from "../../faq/component/Footer";
import SocialConnectComponent from "../component/SocialConnectComponent";

function ContactUsScreen() {
  return (
    <div className="relative font-Montserrat">
      <TopHeader />
      <Navbar />
      <MapComponent />
      <ContactUsForm />
      <ServicesSection />
      <SocialConnectComponent />
      <Footer />
    </div>
  );
}

export default ContactUsScreen;
