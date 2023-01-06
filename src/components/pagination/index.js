import React from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  prevPage,
  nextPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers, "pns");
  return (
    <nav>
      <ul className="pagination">
        <button
          onClick={() => prevPage()}
          href="!#"
          className="page-link"
          disabled={currentPage === 1}
        >
          {" "}
          prevPage
        </button>{" "}
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
        <button
          onClick={() => nextPage()}
          href="!#"
          className="page-link"
          disabled={currentPage === 10}
        >
          nextPage
        </button>
      </ul>
    </nav>
  );
};

export default Pagination;
