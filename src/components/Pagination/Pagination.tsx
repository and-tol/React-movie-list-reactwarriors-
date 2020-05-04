import React from 'react';

interface PaginationProps {
  total_pages: number;
  currentPage: number;
  nextPage: func;
  previousPage: func;
}

export const Pagination: React.FC<PaginationProps> = (props) => {
  const { total_pages, currentPage, nextPage, previousPage } = props;

  return (
    <>
      <nav style={{ display: 'inline-block' }} aria-label='Page navigation'>
        <ul className='pagination'>
          <li
            className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
            style={currentPage === 1 ? { cursor: 'default' } : {}}
            onClick={currentPage === 1 ? null : previousPage}>
            <a className='page-link' href='#' aria-label='Previous' aria-disabled='true'>
              <span aria-hidden='true'>&laquo;</span>
            </a>
          </li>
          <li className='page-item'>
            <span className='page-link' href='#'>
              {currentPage}
            </span>
          </li>
          <li
            className={`page-item ${currentPage === total_pages ? 'disabled' : ''}`}
            style={currentPage === total_pages ? { cursor: 'default' } : {}}
            onClick={currentPage === total_pages ? null : nextPage}>
            <a className='page-link' href='#' aria-label='Next'>
              <span aria-hidden='true'>&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
      <p style={{ display: 'inline-block', marginLeft: '12px' }}>{total_pages} pages total</p>
    </>
  );
};
