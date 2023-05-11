import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentDetail from "../components/ContentDetail";
import DataDetail from "../Json/DetailCard.json";

const DetailCard = () => {
  const BreadcrumbItems = [
    { name: "Project", link: "/project" },
    { name: "cardDetail", link: "/CardDetail" },
  ];
  return (
    <div className="dark:bg-primary-shades-500">
      <Navbar isHidden />
      <Header breadcrumb={BreadcrumbItems} data={DataDetail} />
      <ContentDetail data={DataDetail} />
      <Footer />
    </div>
  );
};

export default DetailCard;
