export interface PaginationProps {
    page?: number;
    pageSize?: number;
    pageCount?: number;
    total?: number;
    currentPage: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
}