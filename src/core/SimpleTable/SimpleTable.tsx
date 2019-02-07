/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import Types from './types';
import createStyles from './styles';
import TableBody from './components/TableBody';
import TablePagination from './components/TablePagination';
import TableRow from './components/TableRow';

export default (props: Types.Props) => {
    const styles = createStyles();
    const [currentPage, setCurrentPage] = useState(1);

    let pageData = props.data;
    if (props.pagination) {
        const { pageSize } = props.pagination;
        pageData = props.data
            .filter((_, i) => pageSize * currentPage >= (i + 1) && i >= pageSize * currentPage - pageSize);
    }

    if (!props.data || props.data.length <= 0) {
        return (
            props.noDataComponent
                ? props.noDataComponent
                : <div css={styles.noDataContainer}>Нет данных</div>
        )
    }

    return (
        <div css={styles.tableContainer}>
            {!props.hideHeaders && (
                <TableRow header={true} columns={props.columns} styles={styles} />
            )}
            <TableBody {...props} data={pageData} styles={styles} />
            {props.pagination && (
                <TablePagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    dataLength={props.data.length}
                    styles={styles}
                    pagination={props.pagination}
                />
            )}
        </div>
    )
}
