import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const Home = () => {
  const isDarkMode = useSelector((state) => state.dark.isDarkMode);

  return (
    <div className="relative mt-[76px] dark:bg-primary-shades-500">
      <Navbar />
      <h1 className="text-primary-shades-300 dark:text-primary-light">
        hello World
      </h1>
      <button className="btn-primary">asd</button>
    </div>
  );
};

export default Home;
