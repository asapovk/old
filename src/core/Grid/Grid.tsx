/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment, useState, useLayoutEffect } from 'react';
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

export default (props: Types.Props) => {
    const { data, noDataComponent, pagination, hideHeaders } = props;
    const columns = getColumns(props.columns, props.expandForm);
    const styles = mainStyles();

    const [currentPage, setCurrentPage] = useState(1);

    useLayoutEffect(() => {
        if (pagination) {
            setCurrentPage(1);
        }
    }, [data]);

    if (!data || data.length <= 0) {
        return (
            <div css={styles.wrapper}>
                {
                    noDataComponent
                        ? noDataComponent
                        : <div
                            css={styles.noDataContainer}
                            children='Нет данных'
                        />
                }
            </div>
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
                <div css={styles.container}>
                    {!hideHeaders && <Header columns={columns} />}
                    <DataRows
                        {...props}
                        currentPage={currentPage}
                        data={pageData}
                        columns={columns}
                    />
                </div>
            </div>
            {pagination && (
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    dataLength={data.length}
                    pagination={pagination}
                />
            )}
        </Fragment>
    )
}

const getColumns = (columns: Types.Column[], expandForm) => {
    const mappedColumns = columns.map((column: Types.Column) => {
        if (!column.render) {
            return {
                ...column,
                render: (row: Object, value: string) => value
            }
        }
        return column;
    });

    if (expandForm) {
        mappedColumns.push({
            alignment: 'flex-end',
            dataIndex: 'actionColumn',
            width: 40
        });
    }

    return mappedColumns;
}