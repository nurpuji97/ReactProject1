import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="relative mt-20">
      <Navbar />
      <h1 className="text-primary-shades-300 dark:text-primary-light">
        hello World
      </h1>
      <button className="btn-primary">asd</button>
    </div>
  );
};

export default Home;
