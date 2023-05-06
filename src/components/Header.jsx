import React from "react";
import { NavLink } from "react-router-dom";
import IconBack from "../images/Icon_Back.svg";
import BreadCrumb from "../elements/Breadcrumb/Breadcrumb";

import { useTranslation } from "react-i18next";

const Header = ({ breadcrumb }) => {
  const { t } = useTranslation();
  return (
    <div className="Header">
      {/* column 1 */}
      <div className="col-1">
        {/* button back */}
        <NavLink to="" className="btn_back">
          <img src={IconBack} alt="" className="text-sm" />
          {t("Kembali")}
        </NavLink>

        {/* Breadcrumb */}
        <BreadCrumb items={breadcrumb} />
      </div>

      {/* column 2 */}
      <p className="Header-title">Ini titlenya</p>
    </div>
  );
};

export default Header;
