import React from "react";
import Navbar from "../components/Navbar";
import ContentProject from "../components/ContentProject";
import Footer from "../components/Footer";
// import DataDetail from "../Json/DetailCard.json";

const Project = () => {
  const BreadcrumbItems = [{ name: "Project", link: "/project" }];
  return (
    <div className=" dark:bg-primary-shades-500">
      <Navbar isHidden />
      <ContentProject breadcrumb={BreadcrumbItems} />
      <Footer />
    </div>
  );
};

export default Project;
