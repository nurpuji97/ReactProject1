import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Image from "../images/Logo.png";
import IndonesiaFlag from "../images/indonesia.png";
import EnglishFlag from "../images/united-kingdom.png";
import ArabFlag from "../images/saudi-arabia.png";
import { IoCaretDown } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { DarkActions } from "../store/DarkSlice";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { LanguageActions } from "../store/LanguageSlice";

const Navbar = () => {
  // dropdown State
  const [isOpen, setIsOpen] = useState(false);

  // use Translation
  const { t } = useTranslation();

  // Redux Language
  const language = useSelector((state) => state.language.isLanguage);

  // dispath deklarasi
  const dispatch = useDispatch();

  // fungsi hendle language change
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    dispatch(LanguageActions.setLanguage(language));
  };

  // function switch Dark Mode
  const swicthMode = () => {
    dispatch(DarkActions.ToggleDarkTheme());
  };

  return (
    <>
      <nav className={`navbar `}>
        {/* column 1 */}
        <div className="col-1">
          {/* logo */}
          <img src={Image} alt="logo" className="logo" />

          {/* menu */}
          <ul className="menu">
            <li>
              <NavLink className="btn" to="">
                {t("home")}
              </NavLink>{" "}
            </li>
            <li>
              <NavLink className="btn" to="">
                {t("tentang")}
              </NavLink>
            </li>
            <li>
              <NavLink className="btn" to="">
                {t("portofolio")}
              </NavLink>
            </li>
            <li>
              <NavLink className="btn" to="">
                {t("kontak")}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* column 2 */}
        <div className="col-2">
          {/* dropdown */}
          <button onClick={() => setIsOpen(!isOpen)} className="btn">
            {t("bahasa")}
            <IoCaretDown className="self-center ml-4" />
          </button>

          {/* toggle */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              onClick={swicthMode}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-primary-tints-300 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[12px] after:left-[6px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-primary-shades-300"></div>
          </label>
        </div>
      </nav>

      {/* <!-- Dropdown menu --> */}
      {isOpen && (
        <ul className="dropdown-menu">
          <li className="dropdown-menu-list">
            <img src={IndonesiaFlag} className="w-6" alt="indo-flag" />
            <button
              onClick={() => handleLanguageChange("id")}
              className="self-center"
            >
              {" "}
              {t("indonesia")}
            </button>
          </li>
          <li className="dropdown-menu-list">
            <img src={EnglishFlag} className="w-6" alt="indo-flag" />
            <button onClick={() => handleLanguageChange("en")}>
              {" "}
              {t("inggris")}
            </button>
          </li>
          <li className="dropdown-menu-list">
            <img src={ArabFlag} className="w-6" alt="indo-flag" />
            <button onClick={() => handleLanguageChange("ar")}>
              {" "}
              {t("arab")}
            </button>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
