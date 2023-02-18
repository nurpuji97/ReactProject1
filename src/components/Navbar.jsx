import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Image from "../images/Logo.png";
import IndonesiaFlag from "../images/indonesia.png";
import EnglishFlag from "../images/united-kingdom.png";
import ArabFlag from "../images/saudi-arabia.png";
import { IoCaretDown, IoClose, IoMenuSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { DarkActions } from "../store/DarkSlice";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { LanguageActions } from "../store/LanguageSlice";

const Navbar = () => {
  // dropdown Menu Mobile
  const [isActive, setIsActive] = useState(false);

  // dropdown State
  const [isOpen, setIsOpen] = useState(false);

  // use Translation
  const { t } = useTranslation();

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
      <nav className="navbar">
        {/* column 1 */}
        <div className="col-1 ">
          {/* logo */}
          <img src={Image} alt="logo" className="logo" />

          {/* menu */}
          <ul
            className={`menu ${
              isActive ? "es:max-lg:block" : "es:max-lg:hidden"
            }`}
          >
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

        <hr
          className={`dark:text-primary-tones-400 text-primary-tints-100 relative  ${
            isActive ? "block" : "hidden"
          } `}
        />

        {/* column 2 */}
        <div className="col-2">
          {/* dropdown */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`btn es:max-lg:order-2  ${
              isActive ? "es:max-lg:flex" : "es:max-lg:hidden"
            } `}
          >
            {t("bahasa")}
            <IoCaretDown className="self-center ml-4" />

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
          </button>

          {/* toggle */}
          <div
            className={`flex justify-center items-center  ${
              isActive ? "es:max-lg:flex" : "es:max-lg:hidden"
            } `}
          >
            <div className="form-check form-switch">
              <input
                className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-primary-tints-300 bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-es"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={swicthMode}
              />
            </div>
          </div>
        </div>

        {/* burger */}
        <div
          className="absolute top-4 right-5 lg:hidden cursor-pointer "
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? (
            <IoClose className="w-10 h-10 dark:text-primary-tints-300" />
          ) : (
            <IoMenuSharp className="w-10 h-10 dark:text-primary-tints-300" />
          )}
        </div>
      </nav>

      {/* <!-- Dropdown menu --> */}
    </>
  );
};

export default Navbar;
