import React from 'react';
import './Pagination.css';

const Pagination = ({ theme, currentPage, totalPages, onPageChange }) => {
  // Функция для изменения страницы
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <section className={`pagination-container ${theme === 'dark' ? 'dark-mode' : ''}`}>
    
        <div className="">
        <button 
            className="pagination-button" 
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1}
        >
            Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
            <button
            key={index + 1}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
            >
            {index + 1}
            </button>
        ))}

        <button 
            className="pagination-button" 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages}
        >
            Next
        </button>
        </div>
    </section>
    
  );
  
};

export default Pagination;
