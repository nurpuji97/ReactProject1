import React from "react";
import { NavLink } from "react-router-dom";
import IconBack from "../images/Icon_Back.svg";
import BreadCrumb from "../elements/Breadcrumb/Breadcrumb";

import { useTranslation } from "react-i18next";

const Header = ({ breadcrumb, dataTitle, isHidden, isProject }) => {
  const { t } = useTranslation();

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
        {isHidden ? <></> : <BreadCrumb items={breadcrumb} />}
      </div>

      {/* column 2 */}

      {isHidden ? <></> : <div className="Header-title">{dataTitle}</div>}
    </div>
  );
};

export default Header;
