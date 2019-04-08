/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment, useState, useLayoutEffect, useMemo, useEffect } from 'react';
import Types from './types';
import mainStyles from './styles';

import { Pagination, Header, DataRows } from './components';

declare global {
    interface String {
        stringHashCode: () => string
    }
}

String.prototype.stringHashCode = function () {
    var hash = 0;
    if (this.length == 0) {
        return hash.toString();
    }
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString();
}

const id = "GRID-" + Math.trunc(Math.random() * 10000000);

export default (props: Types.Props) => {
    const { data, noDataComponent, pagination, hideHeaders, groupKey } = props;
    const columns = useMemo(() => getColumns(props.columns, props.expandForm), []);
    const styles = mainStyles();

    const [currentPage, setCurrentPage] = useState(1);

    useLayoutEffect(() => {
        if (pagination) {
            setCurrentPage(1);
        }
    }, [data]);

    const setPage = (page: number) => {
        const viewport = document.querySelector('[data-viewport]');
        viewport && viewport.scrollTo({ top: 0, behavior: 'smooth' });

        setCurrentPage(page);
    }

    if (!data || data.length <= 0) {
        return (
            <div
                css={styles.wrapper}
                children={(
                    noDataComponent
                        ? noDataComponent
                        : <div
                            css={styles.noDataContainer}
                            children='Нет данных'
                        />
                )}
            />
        )
    }

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
        <Fragment>
            <div css={styles.wrapper}>
                <div css={styles.container} id={id}>
                    {!hideHeaders && <Header columns={columns} />}
                    <DataRows
                        {...props}
                        currentPage={currentPage}
                        data={pageData}
                        columns={columns}
                        containerId={id}
                    />
                </div>
            </div>
            {pagination && (
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setPage}
                    dataLength={data.length}
                    pagination={pagination}
                />
            )}
        </Fragment>
    )
}

const getColumns = (columns: Types.Column[], expandForm) => {
    const mappedColumns: Types.Column[] = columns.map((column: Types.Column) => ({
        ...column,
        render: column.render || ((row: Object, value: string) => value)
    }));

    if (expandForm) {
        mappedColumns.push({
            alignment: 'flex-end',
            dataIndex: 'actionColumn',
            width: 40
        });
    }

    return mappedColumns;
}