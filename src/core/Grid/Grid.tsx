/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useLayoutEffect, Fragment } from 'react';
import Types from './types';
import createStyles from './styles';
import Pagination from './components/Pagination';

export default (props: Types.Props) => {
    const { data, noDataComponent, pagination, hideHeaders, columns, expandForm, groupKey, groups } = props;
    const styles = createStyles({ hideHeaders, columns: columns.length });
    const [currentPage, setCurrentPage] = useState(1);

    let pageData = data;
    if (pagination) {
        const { pageSize } = pagination;
        pageData = data
            .filter((_, i) => (
                pageSize * currentPage >= (i + 1)
                && i >= pageSize * currentPage - pageSize
            ));
    }

    useLayoutEffect(() => {
        if (pagination) {
            setCurrentPage(1);
        }
    }, [data]);

    if (!data || data.length <= 0) {
        return (
            <div css={styles.wrapper}>
                {noDataComponent
                    ? noDataComponent
                    : <div css={styles.noDataContainer}>Нет данных</div>}
            </div>
        )
    }

    const cols = columns.map(col => {
        if (!col.render) {
            col.render = (row: Object, value: string) => value;
        }
        return col;
    });

    const Header = () => (
        <div css={styles.headerWrapper}>
            {cols.map(column => (
                <div
                    css={styles.headerCell({
                        alignment: column.alignment,
                        borders: column.borders
                    })}
                    children={column.title}
                />
            ))}
        </div>
    )

    const Row = ({ columns, row }) => {
        const [expanded, setExpanded] = useState(false);

        return (
            <div css={styles.rowWrapper} onClick={() => setExpanded(!expanded)}>
                {columns.map((column, keyIndex) => (
                    <div
                        key={`rowcell-${keyIndex}`}
                        css={styles.cell({ borders: column.borders, alignment: column.alignment })}
                        children={row[column.dataIndex]}
                    />
                ))}
                <div
                    css={styles.expand({ expanded })}
                    children={(row && expandForm) && expandForm.render(row)}
                />
            </div>
        )
    }

    const DataRows = () => {
        if (groupKey && (Array.isArray(groups) && groups.length > 0)) {
            return (
                <Fragment>
                    {groups.map((group, index) => (
                        <Fragment>
                            <div css={styles.subheader} children={group.title} />
                            {pageData.map(row => <Row row={row} columns={columns} />)}
                        </Fragment>
                    ))}
                </Fragment>
            )
        }
        return (
            <Fragment>
                {pageData.map(row => <Row row={row} columns={columns} />)}
            </Fragment>
        )
    }

    return (
        <div css={styles.wrapper}>
            <div css={styles.container}>
                {!hideHeaders && <Header />}
                <DataRows />
            </div>
            {pagination && (
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    dataLength={data.length}
                    pagination={pagination}
                />
            )}
        </div>
    )
}