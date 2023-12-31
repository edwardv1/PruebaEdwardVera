import React from "react";

export default function Pagination({ currentPage, totalPages, onChangePage }) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div id="containerPagination" data-testid="paginationTestId" className=" w-full h-[60px] flex items-center justify-center gap-2 sm:gap-8 ">
      <button
        id="buttonPaginationFirstPage"
        className="mx-1 px-3 py-2 rounded bg-gray-400"
        onClick={() => onChangePage(1)}
        disabled={isFirstPage}
      >
        1
      </button>
      <button
        id="buttonPaginationPreviousPage"
        className="mx-1 px-3 py-2 rounded bg-gray-300"
        onClick={() => onChangePage(currentPage - 1)}
        disabled={isFirstPage}
      >
        &lt;
      </button>
      <div
        id="buttonPaginationCurrentPage"
        className={`mx-1 px-3 py-2 rounded ${
          currentPage === currentPage ? "bg-blue-500 text-white" : "bg-gray-300"
        }`}
      >
        {currentPage}
      </div>
      <button
        id="buttonPaginationNextPage"
        className="mx-1 px-3 py-2 rounded bg-gray-300"
        onClick={() => onChangePage(currentPage + 1)}
        disabled={isLastPage}
      >
        &gt;
      </button>
      <button
        id="buttonPaginationLastPage"
        className="mx-1 px-3 py-2 rounded bg-gray-400"
        onClick={() => onChangePage(totalPages)}
        disabled={isLastPage}
      >
        {totalPages}
      </button>
    </div>
  );
}
