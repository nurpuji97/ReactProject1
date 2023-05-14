import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import IconBack from "../images/Icon_Back.svg";
import BreadCrumb from "../elements/Breadcrumb/Breadcrumb";
import { IoCaretDown, IoSearch } from "react-icons/io5";

import { useTranslation } from "react-i18next";

const Header = ({ breadcrumb, data, isHidden, isProject }) => {
  const { t } = useTranslation();

  const [isOpenSearch, setIsOpenSearch] = useState(false);

  return (
    <div className="Header">
      {/* column 1 */}
      <div className="col-1">
        {/* button back */}
        {isProject ? (
          <NavLink to="/" className="btn_back">
            <img src={IconBack} alt="" className="text-sm" />

            {t("Kembali")}
          </NavLink>
        ) : (
          <NavLink to="/project" className="btn_back">
            <img src={IconBack} alt="" className="text-sm" />

            {t("Kembali")}
          </NavLink>
        )}

        {/* Breadcrumb */}
        <BreadCrumb items={breadcrumb} />
      </div>

      {/* column 2 */}

      {isHidden ? <></> : <div className="Header-title">{data.Name}</div>}

      {/* Search form */}
      {isProject ? (
        <>
          <form className="search-form">
            <input type="text" className="input-search" />
            <div
              className="btn-search"
              onClick={() => setIsOpenSearch(!isOpenSearch)}
            >
              All
              <IoCaretDown className="self-center ml-4" />
              {isOpenSearch && (
                <ul className="dropdown-menu-search">
                  <li className="dropdown-menu-list-search">All</li>
                  <li className="dropdown-menu-list-search">Front End</li>
                  <li className="dropdown-menu-list-search">Back End</li>
                </ul>
              )}
            </div>
            <button className="submit-button">
              <IoSearch />
            </button>
          </form>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
