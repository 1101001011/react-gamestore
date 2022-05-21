import React, {Dispatch} from 'react';
import {getPagesArray} from '../../../utils/totalPages';
import './Pagination.scss'

interface PaginationProps {
    page: number
    setPage: Dispatch<any>
}

const Pagination: React.FC<PaginationProps> = ({page, setPage}) => {
    const pages = getPagesArray()

    return (
        <div className='pagination'>
            <hr className='pagination__divider'/>
            <div className='pagination__items'>
                {pages.map(p =>
                    <div
                        className='pagination__item'
                        onClick={() => setPage(p)}
                        style={p === page
                            ? {backgroundColor: 'rgb(66, 66, 66)'}
                            : {backgroundColor: ''}}
                        key={p}
                    >
                        {p}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Pagination;