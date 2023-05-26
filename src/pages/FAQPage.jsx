import React from "react";
import FAQ from "./../components/FAQ";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const FAQPage = () => {
  return (
    <div className=" dark:bg-primary-shades-500">
      <Navbar isHidden />
      <Header isHidden isProject />
      <FAQ />
      <Footer />
    </div>
  );
};

export default FAQPage;
