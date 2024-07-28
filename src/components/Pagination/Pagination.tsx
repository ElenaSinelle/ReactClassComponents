import "./Pagination.css";
import { useTheme } from "../../contexts/useTheme";
import { PaginationProps } from "./Pagination.types";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  const { theme } = useTheme();
  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button
          className={theme}
          onClick={event =>
            handlePageChange(currentPage - 1, event)
          }
        >
          Previous
        </button>
      )}
      {currentPage > 1 && (
        <span className="currentPage">
          Page {currentPage}
        </span>
      )}
      {currentPage < totalPages && (
        <button
          className={theme}
          onClick={event =>
            handlePageChange(currentPage + 1, event)
          }
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
