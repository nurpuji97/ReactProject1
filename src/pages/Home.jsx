import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Portofolio from "../components/Portofolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { useSelector } from "react-redux";
import HomeJson from "../Json/Home.json";

const Home = () => {
  const isTranslate = useSelector((state) => state.language.isLanguage);
  return (
    <div className="relative mt-[76px] dark:bg-primary-shades-500">
      <Navbar />
      <Hero JsonData={HomeJson} />
      <About />
      <Portofolio JsonData={HomeJson} translate={isTranslate} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
