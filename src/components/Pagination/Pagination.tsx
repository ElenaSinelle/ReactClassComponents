import React from "react";
import "./Pagination.css";
import { useTheme } from "../../contexts/useTheme";
import { PaginationProps } from "./Pagination.types";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  const { theme } = useTheme();

  const onPageChange = (
    newPage: number,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    handlePageChange(newPage, event);
  };

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button
          className={theme}
          onClick={event =>
            onPageChange(currentPage - 1, event)
          }
        >
          Previous
        </button>
      )}
      <span className="currentPage">
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages && (
        <button
          className={theme}
          onClick={event =>
            onPageChange(currentPage + 1, event)
          }
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
