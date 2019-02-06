/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import Types from './types';
import createStyles from './styles';
import TableBody from './components/TableBody';
import TablePagination from './components/TablePagination';
import TableRow from './components/TableRow';

export default (props: Types.Props) => {
    const styles = createStyles();
    const [page, setPage] = useState(1);

    let pageData = props.data;
    if (props.pagination) {
        const { pageSize } = props.pagination;
        pageData = props.data
            .filter((_, i) => pageSize * page >= (i + 1) && i >= pageSize * page - pageSize);
    }

    return (
        <div css={styles.tableContainer}>
            {!props.hideHeaders && (
                <TableRow header={true} columns={props.columns} styles={styles} />
            )}
            <TableBody {...props} data={pageData} styles={styles} />
            {props.pagination && (
                <TablePagination
                    pageSize={props.pagination.pageSize}
                    page={page}
                    setPage={setPage}
                    dataLength={props.data.length}
                    styles={styles}
                />
            )}
        </div>
    )
}
