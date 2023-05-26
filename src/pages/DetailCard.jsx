import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentDetail from "../components/ContentDetail";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailCard = () => {
  const BreadcrumbItems = [
    { name: "Project", link: "/Project" },
    { name: "cardDetail", link: "/CardDetail" },
  ];

  const [detailCardTitle, setDetailCardTitle] = useState("");
  const [detailCard, setDetailCard] = useState([]);
  const [portoTools, setPortoTools] = useState([]);
  const [portoDownload, setPortoDownload] = useState([]);

  const { id } = useParams();
  // const navigate = useNavigate();

  useEffect(() => {
    getDetailCardById();
  });

  const getDetailCardById = async () => {
    const response = await axios.get(`http://localhost:4000/portofolio/${id}`);
    setDetailCardTitle(response.data.name);
    setDetailCard(response.data);
    setPortoTools(response.data.PortofolioToolImages);
    setPortoDownload(response.data.PortofolioDownloads);
  };

  // console.log(detailCardTitle);

  return (
    <div className="dark:bg-primary-shades-500">
      <Navbar isHidden />
      <Header breadcrumb={BreadcrumbItems} dataTitle={detailCardTitle} />
      <ContentDetail
        dataJson={detailCard}
        tools={portoTools}
        download={portoDownload}
      />
      <Footer />
    </div>
  );
};

export default DetailCard;
