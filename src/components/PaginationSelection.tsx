import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

type Props = {
  page: number | undefined;
  pages: number | undefined;
  onPageChange: (paga: number) => void;
};

const PaginationSelection = ({ page, pages, onPageChange }: Props) => {
  const pageNumbers = [];
  if (!page || !pages) return;
  if (pages < 2) return;
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination>
      <PaginationContent>
        {page !== 1 && (
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => onPageChange(page - 1)}
            />
          </PaginationItem>
        )}

        {pageNumbers.map((number) => (
          <PaginationLink
            key={number}
            href="#"
            onClick={() => onPageChange(number)}
            isActive={page === number}
          >
            {number}
          </PaginationLink>
        ))}

        {page !== pageNumbers.length && (
          <PaginationItem>
            <PaginationNext href="#" onClick={() => onPageChange(page + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSelection;
