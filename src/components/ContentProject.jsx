import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ImageCard from "../images/image_portofolio-1.jpg";
import Pagination from "../elements/Pagination/Pagination";

const ContentProject = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="ContentProject">
      <div className="containerCard-Project">
        {/* card */}
        <div className="cardProject">
          <img src={ImageCard} className="rounded mb-[35px]" alt="ImageCard" />
          <p className="titleCard">Ini Aplikasi</p>
          <p className="descCard">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, earum eos? Delectus possimus soluta dolorem tempore
            aperiam, voluptates vitae minus.
          </p>
          <NavLink to="/Porto11asdwd" className="btnCard">
            Lihat Selanjutnya
          </NavLink>
        </div>

        {/* card */}
        <div className="cardProject">
          <img src={ImageCard} className="rounded mb-[35px]" alt="ImageCard" />
          <p className="titleCard">Ini Aplikasi</p>
          <p className="descCard">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, earum eos? Delectus possimus soluta dolorem tempore
            aperiam, voluptates vitae minus.
          </p>
          <NavLink to="" className="btnCard">
            Lihat Selanjutnya
          </NavLink>
        </div>

        {/* card */}
        <div className="cardProject">
          <img src={ImageCard} className="rounded mb-[35px]" alt="ImageCard" />
          <p className="titleCard">Ini Aplikasi</p>
          <p className="descCard">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, earum eos? Delectus possimus soluta dolorem tempore
            aperiam, voluptates vitae minus.
          </p>
          <NavLink to="" className="btnCard">
            Lihat Selanjutnya
          </NavLink>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default ContentProject;
