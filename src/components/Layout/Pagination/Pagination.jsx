import { useSearchParams } from "react-router-dom";

function Pagination({ product, handlePage }) {
  const [params] = useSearchParams();
  const currentPage = params.get("page") || "1";

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= product.totalPages; i++) {
      pageNumbers.push(
        <li key={i} className="page-item">
          <button
            className={`page-link ${currentPage === String(i) ? "active" : ""}`}
            onClick={() => handlePage(i)}
          >
            {i}
          </button>
        </li>,
      );
    }
    return pageNumbers;
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li
          className={`page-item ${product.hasPrevPage === false ? "disabled" : " "}`}
        >
          <button
            className="page-link"
            onClick={() => handlePage(product.prevPage)}
          >
            Previous
          </button>
        </li>
        {renderPageNumbers()}
        <li
          className={`page-item ${product.hasNextPage === false ? "disabled" : " "}`}
        >
          <button
            className="page-link"
            onClick={() => handlePage(product.nextPage)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
