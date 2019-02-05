/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import Types from './types';
import createStyles from './styles';
import TableHeaders from './components/TableHeaders';
import TableBody from './components/TableBody';
import TablePagination from './components/TablePagination';

export default (props: Types.Props) => {
    const style = createStyles();
    const [page, setPage] = useState(1);

    let pageData = props.data;
    if (props.pagination) {
        const { pageSize } = props.pagination;
        pageData = props.data.filter((_, i) => pageSize * page >= (i + 1) && i >= pageSize * page - pageSize);
    }

    return (
        <div css={style.container}>
            {!props.hideHeaders && (
                <TableHeaders
                    {...props}
                    rowStyle={style.head.row}
                    cellStyle={style.head.cell}
                />
            )}
            <TableBody {...props} data={pageData} style={style} />
            {props.pagination && (
                <TablePagination
                    pageSize={props.pagination.pageSize}
                    page={page}
                    setPage={setPage}
                    dataLength={props.data.length}
                    containerStyle={style.pagination.container}
                    buttonStyle={style.pagination.button}
                />
            )}
        </div>
    )
}
