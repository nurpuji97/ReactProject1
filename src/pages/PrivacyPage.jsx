import React from "react";
import Policy from "./../components/Policy";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const PrivacyPage = () => {
  return (
    <div className=" dark:bg-primary-shades-500">
      <Navbar isHidden />
      <Header isHidden isProject />
      <Policy />
      <Footer />
    </div>
  );
};

export default PrivacyPage;
