import React from 'react';
import "./Pagination.style.css"

const Pagination = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleNextbtn = () => {
        paginate(currentPage + 1)
    };

    const handlePrevbtn = () => {
        paginate(currentPage - 1)
    };

    return (
        <nav>
            <ul className='pagination'>
                <li className="pagination_item">
                    <button
                        onClick={handlePrevbtn}
                        disabled={currentPage === pageNumbers[0] ? true : false}
                    >
                        Prev
                    </button>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} onClick={() => paginate(number)}
                        className="pagination_item"
                        id={currentPage === number ? "active" : null}>
                        {number}
                    </li>
                ))}
                <li className="pagination_item">
                    <button
                        onClick={handleNextbtn}
                        disabled={currentPage === pageNumbers[pageNumbers.length - 1] ? true : false}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;