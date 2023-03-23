import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Portofolio from "../components/Portofolio";

const Home = () => {
  return (
    <div className="relative mt-[76px] dark:bg-primary-shades-500">
      <Navbar />
      <Hero />
      <About />
      <Portofolio />
      <h1 className="text-primary-shades-300 dark:text-primary-light">
        hello World
      </h1>
      <button className="btn-primary">asd</button>
    </div>
  );
};

export default Home;
