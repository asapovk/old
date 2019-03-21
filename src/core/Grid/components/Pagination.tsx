/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Icon } from '../..'
import Types from '../types';
import IconTypes from '../../Icon/types';
import { paginationStyles } from '../styles';


export default (props: Types.PaginationProps) => {
    const { dataLength, pagination, currentPage, setCurrentPage } = props;
    const totalPages = Math.ceil(dataLength / pagination.pageSize);
    const ps = paginationStyles();

    if (totalPages <= 1) {
        return null;
    }

    const pages = fetchPageNumbers(pagination.pageNeighbours, totalPages, currentPage);

    const setPage = (page: number) => {
        const currentPage = Math.max(1, Math.min(page, totalPages));
        setCurrentPage(currentPage);
    }

    const onPageButtonClick = (event, page: number | string) => {
        event.preventDefault();
        typeof page === 'number'
            ? setPage(page as number)
            : page === LEFT_PAGE
                ? setPage(currentPage - (pagination.pageNeighbours * 2) - 1)
                : setPage(currentPage + (pagination.pageNeighbours * 2) + 1);
    }

    return (
        <div css={ps.paginationContainer}>
            {pages.map((page, index) => {
                const css = ps.paginationButton(typeof page === 'number' ? (currentPage === page) : false);
                const children = typeof page === 'number'
                    ? page
                    : <Icon type={page as IconTypes.Type} />

                return (
                    <div
                        key={`pagination-${index}`}
                        css={css}
                        onClick={(event) => onPageButtonClick(event, page)}
                        children={children}
                    />
                )
            })}
        </div>
    )
}

const range = (from: number, to: number, step = 1) => {
    let i = from;
    const range: (string | number)[] = [];

    while (i <= to) {
        range.push(i);
        i += step;
    }

    return range;
}

const fetchPageNumbers = (pageNeighbours: number, totalPages: number, currentPage: number) => {
    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = (pageNeighbours * 2) + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {

        const startPage = Math.max(2, currentPage - pageNeighbours);
        const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

        let pages = range(startPage, endPage);

        /**
         * hasLeftSpill: has hidden pages to the left
         * hasRightSpill: has hidden pages to the right
         * spillOffset: number of hidden pages either to the left or to the right
         */
        const hasLeftSpill = startPage > 2;
        const hasRightSpill = (totalPages - endPage) > 1;
        const spillOffset = totalNumbers - (pages.length + 1);

        switch (true) {
            // handle: (1) < {5 6} [7] {8 9} (10)
            case (hasLeftSpill && !hasRightSpill): {
                const extraPages = range(startPage - spillOffset, startPage - 1);
                pages = [LEFT_PAGE, ...extraPages, ...pages];
                break;
            }

            // handle: (1) {2 3} [4] {5 6} > (10)
            case (!hasLeftSpill && hasRightSpill): {
                const extraPages = range(endPage + 1, endPage + spillOffset);
                pages = [...pages, ...extraPages, RIGHT_PAGE];
                break;
            }

            // handle: (1) < {4 5} [6] {7 8} > (10)
            case (hasLeftSpill && hasRightSpill):
            default: {
                pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                break;
            }
        }
        return [1, ...pages, totalPages];
    }
    return range(1, totalPages);
}

const LEFT_PAGE = 'left';
const RIGHT_PAGE = 'right';