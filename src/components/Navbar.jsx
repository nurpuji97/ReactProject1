import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Image from "../images/Logo.png";
import IndonesiaFlag from "../images/indonesia.png";
import EnglishFlag from "../images/united-kingdom.png";
import ArabFlag from "../images/saudi-arabia.png";
import { IoCaretDown } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { DarkActions } from "../store/DarkSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

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
                Home
              </NavLink>{" "}
            </li>
            <li>
              <NavLink className="btn" to="">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="btn" to="">
                Portofolio
              </NavLink>
            </li>
            <li>
              <NavLink className="btn" to="">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* column 2 */}
        <div className="col-2">
          {/* dropdown */}
          <button onClick={() => setIsOpen(!isOpen)} className="btn">
            Bahasa
            <IoCaretDown className="self-center ml-4" />
          </button>

          {/* toggle */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              onClick={() => dispatch(DarkActions.ToggleDarkTheme())}
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
            <Link to="" className="self-center">
              {" "}
              Indonesia
            </Link>
          </li>
          <li className="dropdown-menu-list">
            <img src={EnglishFlag} className="w-6" alt="indo-flag" />
            <Link to=""> Inggris</Link>
          </li>
          <li className="dropdown-menu-list">
            <img src={ArabFlag} className="w-6" alt="indo-flag" />
            <Link to=""> Arab</Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
