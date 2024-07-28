export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (
    newPage: number,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}
