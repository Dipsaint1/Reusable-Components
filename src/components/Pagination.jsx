/* eslint-disable no-unused-vars */
import { useState } from "react";

const MAX_VISIBLE_PAGES = 5 // Number of page numbers to display in the pagination bar
const ITEMS_PER_PAGE = 10;   // Page Size
const TOTAL_ITEMS = 1000; 

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE);

  // Logic to calculate the pages to show in the pagination bar
  const renderPagination = () => {
    const pages = [];

    let startPage = Math.max(1, currentPage - Math.floor(MAX_VISIBLE_PAGES / 2));
    let endPage = Math.min(totalPages, startPage + MAX_VISIBLE_PAGES - 1);
    
    if((endPage - startPage) < (MAX_VISIBLE_PAGES - 1)){
      startPage = Math.max(1, endPage - MAX_VISIBLE_PAGES + 1);
    }

    for (let page = startPage; page <= endPage; page++){
      pages.push(
        <li 
          key={page} 
          onClick={() => setCurrentPage(page)} 
          className={`inline-flex cursor-pointer font-medium ${page === currentPage ? 'text-white' : 'text-primary-900' } list-none rounded-md h-9 w-10 ${page === currentPage ? 'bg-primary-base' : 'bg-primary-100'}`}
          >
          <button className="text-center mx-auto">{page}</button>
        </li>
      );
    }

    const renderEllipsis = () => <span>...</span>

    return (
      <aside className="flex mt-10">
        <ul className="ml-auto flex gap-x-3 items-center">
          <li onClick={() => setCurrentPage(currentPage => currentPage === 1 ? currentPage : currentPage - 1)} className="inline-flex list-none rounded-md h-9 w-10 bg-primary-100 cursor-pointer">
            <button className="mx-auto">
              <svg className="w-5 h-5" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.9643 15.1726C12.6389 15.498 12.1112 15.498 11.7858 15.1726L7.20245 10.5893C6.87702 10.2638 6.87702 9.73619 7.20245 9.41075L11.7858 4.82742C12.1112 4.50198 12.6389 4.50198 12.9643 4.82742C13.2897 5.15285 13.2897 5.68049 12.9643 6.00593L8.97022 10L12.9643 13.9941C13.2897 14.3195 13.2897 14.8472 12.9643 15.1726Z" fill="#081325"/>
              </svg>
            </button>
          </li>
          {startPage > 1 && renderEllipsis()}
          {pages}
          {endPage < totalPages && renderEllipsis()}
          <li onClick={() => setCurrentPage(currentPage => currentPage === endPage ? currentPage : currentPage + 1 )} className="inline-flex cursor-pointer list-none rounded-md h-9 w-10 bg-primary-100">
            <button className="mx-auto">
              <svg className="w-5 h-5" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.82739 4.82739C8.15283 4.50196 8.68047 4.50196 9.0059 4.82739L13.5892 9.41073C13.9147 9.73616 13.9147 10.2638 13.5892 10.5892L9.0059 15.1726C8.68047 15.498 8.15283 15.498 7.82739 15.1726C7.50195 14.8471 7.50195 14.3195 7.82739 13.9941L11.8215 9.99998L7.82739 6.00591C7.50195 5.68047 7.50195 5.15283 7.82739 4.82739Z" fill="#081325"/>
              </svg>
            </button>
          </li>
        </ul>
      </aside>
    )
  }

  return(
    <>
      {renderPagination()}
    </>
  )
}

export default Pagination