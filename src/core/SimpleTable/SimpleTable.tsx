/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import Types from './types';
import createStyles from './styles';
import TableBody from './components/TableBody';
import TablePagination from './components/TablePagination';
import TableRow from './components/TableRow';

export default (props: Types.Props) => {
    const { data, noDataComponent, pagination, hideHeaders, columns } = props;
    const styles = createStyles();
    const [currentPage, setCurrentPage] = useState(1);

    if (!data || data.length <= 0) {
        return (
            noDataComponent
                ? noDataComponent
                : <div css={styles.noDataContainer}>Нет данных</div>
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
                <TableRow header={true} columns={columns} styles={styles} />
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