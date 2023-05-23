import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = (props) => {
  return (
    <div className="pagination" key={props.row}>
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={Math.min(9, props.pageCount)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={props.pageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Pagination;
