import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({itemsCount, pageSize, currentPage, onPageChange}) => {

    // console.log(currentPage)

    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    // console.log('round', Math.round(pagesCount))
    // console.log('ceil', Math.ceil(pagesCount))
    const pages = Array(pagesCount).fill(1).map((x, y) => x + y)



    const testFunc = (pageNew) => {
        let page = 'page-item';
        if(pageNew === currentPage) {
            page += ' active'
        }
        return page;
    }


    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    // <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
                    <li key={page} className={testFunc(page)}>
                        <a className="page-link" href="/#" onClick={(e) => {
                            e.preventDefault();
                            onPageChange(page);
                        }}>{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
}


export default Pagination;