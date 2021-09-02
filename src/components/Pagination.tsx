import React, { useEffect, useState } from 'react';

export interface IPagination {
  totalPage: number;
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  numberOfElements: number;
  previous: boolean;
  next: boolean;
}

export default function Pagination(props: { pagination: IPagination; handler: Function }) {
  const { totalElements, next, previous, pageNumber, pageSize } = props.pagination;
  const [pages, setPages] = useState<Array<number>>([]);

  useEffect(() => {
    const length = Math.ceil(totalElements / pageSize);
    const numArr = Array.from({ length }, (_, i) => i + 1);
    setPages(numArr);
  }, [pageSize, totalElements]);

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing
            <span className="font-medium ml-1">{previous ? (pageNumber - 1) * pageSize : 1}</span>-
            <span className="font-medium mr-1">{next ? pageNumber * pageSize : totalElements}</span>
            of
            <span className="font-medium mx-1">{totalElements}</span>
            results
          </p>
        </div>
        <div className="mt-2 sm:mt-0 ">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button
              disabled={!previous}
              onClick={() => props.handler((old: Number) => Math.max(Number(old) - 1, 0))}
              className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
                !previous && 'cursor-not-allowed bg-gray-50'
              }`}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {pages.map((page) => (
              <button
                key={page}
                aria-current="page"
                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                  page === pageNumber
                    ? 'z-10 bg-primaryLight border-teal-800 text-teal-900'
                    : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                }`}
                onClick={() => props.handler(page)}
              >
                {page}
              </button>
            ))}
            <button
              disabled={!next}
              onClick={() => props.handler((old: Number) => Number(old) + 1)}
              className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
                !next && 'cursor-not-allowed bg-gray-50'
              }`}
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
