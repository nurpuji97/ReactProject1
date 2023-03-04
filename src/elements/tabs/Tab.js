import React from "react";

const Tab = ({ label, isActive, onClick }) => {
  return (
    <li className={`tab-list-item ${isActive ? "active" : ""}`}>
      <button
        className="tab-button"
        onClick={(e) => onClick(e, label)}
        type="button"
      >
        {label}
      </button>
    </li>
  );
};

export default Tab;
