import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ContentProject from "../components/ContentProject";
import Footer from "../components/Footer";
// import DataDetail from "../Json/DetailCard.json";

const Project = () => {
  const BreadcrumbItems = [{ name: "Project", link: "/project" }];
  return (
    <div className="dark:bg-primary-shades-500">
      <Navbar isHidden />
      <Header isHidden isProject breadcrumb={BreadcrumbItems} />
      <ContentProject />
      <Footer />
    </div>
  );
};

export default Project;
