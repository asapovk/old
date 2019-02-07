/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/core';
import { Fragment, Dispatch, SetStateAction } from 'react';
import { Flexbox, Icon } from '../..'
import { TableStyles } from '../styles';
import Types from '../types';

interface PaginationProps {
    dataLength: number
    currentPage: number
    setCurrentPage: Dispatch<SetStateAction<number>>
    styles: TableStyles
    pagination: Types.Pagination
}

export default (props: PaginationProps) => {
    const { dataLength, pagination, currentPage, setCurrentPage, styles } = props;
    const totalPages = Math.ceil(dataLength / pagination.pageSize);

    if (totalPages <= 1) {
        return null;
    }

    const pages = fetchPageNumbers(pagination.pageNeighbours, totalPages, currentPage);
    function setPage(page: number) {
        if (page < 1) {
            page = 1;
        }
        if (page > totalPages) {
            page = 40;
        }
        setCurrentPage(page);
    }

    return (
        <Flexbox css={styles.paginationContainer}>
            {pages.map((page, index) => {
                if (page === LEFT_PAGE) {
                    return (
                        <div
                            key={`pagination-${index}`}
                            onClick={() => setPage(currentPage - (pagination.pageNeighbours * 2) - 1)}
                            children={<Icon type='left' />}
                            css={styles.paginationButton(false)}
                        />
                    )
                };

                if (page === RIGHT_PAGE) {
                    return (
                        <div
                            key={`pagination-${index}`}
                            onClick={() => setPage(currentPage + (pagination.pageNeighbours * 2) + 1)}
                            children={<Icon type='right' />}
                            css={styles.paginationButton(false)}
                        />
                    )
                };

                return (
                    <div
                        key={`pagination-${index}`}
                        onClick={() => setPage(page as number)}
                        children={page}
                        css={styles.paginationButton(currentPage === page)}
                    />
                );

            })}
        </Flexbox>
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

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';