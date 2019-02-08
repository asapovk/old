/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useEffect, useLayoutEffect } from 'react';
import Types from './types';
import createStyles from './styles';
import TableBody from './components/TableBody';
import TablePagination from './components/TablePagination';
import TableRow from './components/TableRow';

export default (props: Types.Props) => {
    const { data, noDataComponent, pagination, hideHeaders, columns, expandForm } = props;
    const styles = createStyles();
    const [currentPage, setCurrentPage] = useState(1);

    if (!data || data.length <= 0) {
        return (
            <div css={styles.tableContainer}>
                {noDataComponent
                    ? noDataComponent
                    : <div css={styles.noDataContainer}>Нет данных</div>}
            </div>
        )
    }

    useLayoutEffect(() => {
        setCurrentPage(1);
    }, [data]);

    let pageData = data;
    if (pagination) {
        const { pageSize } = pagination;
        pageData = data
            .filter((_, i) => (
                pageSize * currentPage >= (i + 1)
                && i >= pageSize * currentPage - pageSize
            ));
    }

    return (
        <div css={styles.tableContainer}>
            {!hideHeaders && (
                <TableRow
                    {...props}
                    last={false}
                    header={true}
                    styles={styles}
                />
            )}
            <TableBody {...props} data={pageData} styles={styles} />
            {pagination && (
                <TablePagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    dataLength={data.length}
                    styles={styles}
                    pagination={pagination}
                />
            )}
        </div>
    )
}