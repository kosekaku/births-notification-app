import React from "react";
import { Button } from "@dhis2/ui";
import styled from "styled-components";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalDataValues: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalDataValues,
  onPageChange,
}) => {
  const showEllipsis = totalPages > 10;
  const visiblePages = showEllipsis ? Math.min(totalPages, 10) : totalPages;

  const getPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= visiblePages; i++) {
      buttons.push(
        <Button
          key={i}
          primary={i === currentPage}
          onClick={() => onPageChange(i)}
        >
          {i}
        </Button>
      );
    }
    return buttons;
  };

  return (
    <PaginationWrapper>
      <Button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </Button>
      {getPageButtons()}
      {showEllipsis && totalPages > 10 && <span>...</span>}

      <Button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
      <SpanText>
        Showing {currentPage * totalPages} of {totalDataValues} births
      </SpanText>
    </PaginationWrapper>
  );
};

export default Pagination;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpanText = styled.span`
  margin: 10px;
`;
