import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Pagination from "../elements/Pagination/Pagination";
import Fade from "react-reveal/Fade";
import axios from "axios";
import IconBack from "../images/Icon_Back.svg";
import BreadCrumb from "../elements/Breadcrumb/Breadcrumb";
import { IoSearch } from "react-icons/io5";

import { useTranslation } from "react-i18next";

const ContentProject = ({ breadcrumb }) => {
  const [portofolio, setPortofolio] = useState([]);
  const [page, setPage] = useState(0);
  const [limit] = useState(9);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getPortofolio();
  }, [page, keyword]);

  const getPortofolio = async () => {
    const response = await axios.get(
      `http://localhost:4000/portofolio?search_query=${keyword}&page=${page}&limit=${limit}`
    );

    setPortofolio(response.data.response);
    setPage(response.data.pagination.page);
    setPages(response.data.pagination.totalPage);
    setRows(response.data.pagination.totalRows);
  };

  const changePage = ({ selected }) => {
    setPage(selected);
    if (selected === 9) {
      setMsg(
        "Jika tidak ditemukan yang anda cari, cari data dengan kata kunci yang tepat"
      );
    } else if (selected === 0) {
      setMsg(
        "Jika tidak ditemukan yang anda cari, cari data dengan kata kunci yang tepat"
      );
    } else {
      setMsg("");
    }
  };

  const searchData = (e) => {
    e.preventDefault();
    setPage(0);
    setMsg("");
    setKeyword(query);
  };

  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Fade>
      {/* header */}
      <div className="Header">
        {/* column 1 */}
        <div className="col-1">
          {/* button back */}
          <NavLink to="/" className="btn_back">
            <img src={IconBack} alt="" className="text-sm" />
            {t("Kembali")}
          </NavLink>

          {/* Breadcrumb */}
          <BreadCrumb items={breadcrumb} />
        </div>

        {/* column 2 */}

        {/* Search form */}
        <form className="search-form" onSubmit={searchData}>
          <input
            type="text"
            className="input-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari...."
          />
          <button type="submit" className="submit-button">
            <IoSearch />
          </button>
        </form>
      </div>

      {/* content  */}
      <div className="ContentProject">
        <div className="containerCard-Project">
          {portofolio.map((data) => (
            <div key={data.id} className="cardProject">
              <img
                src={data.imageUrl}
                className="rounded mb-[35px]"
                alt="ImageCard"
              />
              <p className="titleCard">{data.name}</p>
              <p className="descCard">{data.Description}</p>
              <button
                onClick={() => navigate(`/Project/${data.id}`)}
                className="btnCard"
              >
                Lihat Selanjutnya
              </button>
            </div>
          ))}
        </div>
        {rows === 0 ? (
          <>
            <p className="dark:text-primary-tones-500">{msg}</p>
          </>
        ) : (
          <Pagination row={rows} pageChange={changePage} pageCount={pages} />
        )}
      </div>
    </Fade>
  );
};

export default ContentProject;
