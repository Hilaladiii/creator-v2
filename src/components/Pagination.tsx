"use client";

import { cn } from "@/utils/cn";
import { LuChevronsLeft, LuChevronsRight } from "react-icons/lu";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

const Pagination = ({
  total,
  itemsPerPage = 12,
}: {
  total: number;
  itemsPerPage?: number;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const totalPages = Math.ceil(total / itemsPerPage);
  const currentPage = Number(searchParams.get("page")) || 1;

  const generateParams = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    return `${pathname}?${params.toString()}`;
  };

  const renderNumber = () => {
    const pageNumber = [];
    const maxVisiblePages = 3;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumber.push(
        <Link href={generateParams(i)} key={i}>
          <BoxPagination active={i === currentPage}>{i}</BoxPagination>
        </Link>
      );
    }
    return pageNumber;
  };

  return (
    <div className="mx-auto flex flex-row mt-10 gap-4">
      <Link href={generateParams(Math.max(1, currentPage - 1))}>
        <BoxPagination disabled={currentPage === 1}>
          <LuChevronsLeft size={20} />
        </BoxPagination>
      </Link>
      {renderNumber()}
      <Link href={generateParams(Math.min(totalPages, currentPage + 1))}>
        <BoxPagination disabled={currentPage === totalPages}>
          <LuChevronsRight size={20} />
        </BoxPagination>
      </Link>
    </div>
  );
};

export default Pagination;

interface BoxPaginationProps {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
}

const BoxPagination = ({ children, active, disabled }: BoxPaginationProps) => {
  return (
    <div
      className={cn(
        "bg-blue10 size-9 p-2 rounded-lg flex items-center justify-center cursor-pointer",
        {
          "bg-blue50 text-white": active,
          "opacity-50 cursor-not-allowed": disabled,
        }
      )}
    >
      {children}
    </div>
  );
};
