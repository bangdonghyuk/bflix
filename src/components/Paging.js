import React from "react";
import Pagination from "react-js-pagination";

function Paging({page, moviePaging, handlePageChange}){

  return (
    <Pagination
    activePage={page}
    itemsCountPerPage={20}
    totalItemsCount={moviePaging}
    pageRangeDisplayed={10}
    onChange={handlePageChange}
    />
  );
};

export default Paging;