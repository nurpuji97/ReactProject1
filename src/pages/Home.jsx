import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Portofolio from "../components/Portofolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import HomeJson from "../Json/Home.json";

const Home = () => {
  return (
    <div className="relative mt-[76px] dark:bg-primary-shades-500">
      <Navbar />
      <Hero JsonData={HomeJson} />
      <About JsonData={HomeJson} />
      <Portofolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
