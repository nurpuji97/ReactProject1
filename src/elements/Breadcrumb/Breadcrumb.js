import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb(props) {
  const { items } = props;

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={item.name}
              className={`breadcrumb-item ${isLast ? "active" : ""}`}
              aria-current={isLast ? "page" : "undefined"}
            >
              {isLast ? (
                <span>{item.name}</span>
              ) : (
                <Link to={item.link} className="ml-1">
                  <span>{item.name}</span>
                  <span className="ml-1">/</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
