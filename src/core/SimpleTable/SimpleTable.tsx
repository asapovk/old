/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useEffect } from 'react';
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

    let pageData = data;
    if (pagination) {
        const { pageSize } = pagination;
        pageData = data
            .filter((_, i) => pageSize * currentPage >= (i + 1) && i >= pageSize * currentPage - pageSize);
    }

    return (
        <div css={styles.tableContainer}>
            {!hideHeaders && (
                <TableRow last={false} header={true} columns={columns} styles={styles} expandForm={expandForm} />
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