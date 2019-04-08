/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment, useState, useEffect, useCallback, useMemo } from 'react';
import Types from '../types';
import { Row } from '.';
import { subHeaderStyles } from '../styles';

/**
 * Previous Expanded Row Id (ERI)
 * save to expand when appear after scroll
 */
let ERI: string

export default (props: Types.Props & { currentPage: number, containerId: string }) => {
    const { groups, groupKey, columns, data, currentPage, expandForm, containerId, hideHeaders, onRowClick } = props;
    const [expandedRowId, setExpandedRowId] = useState<string>('');

    const minHeight = getMinHeight(containerId, hideHeaders, groupKey);
    const styles = subHeaderStyles({ hideHeaders });

    /**
     * Clear previous expand flag when currentPage has changed
     */
    useEffect(() => {
        setRowExpand('');
    }, [currentPage]);

    /**
     * Add event listener on table and execute when ERI exists
     */
    useEffect(() => {
        const onWindowScroll = () => {
            if (!ERI) return;

            const rect = getElementRect(ERI);
            rect && (rect.top <= minHeight)
                ? expandedRowId && setExpandedRowId('')
                : !expandedRowId && setExpandedRowId(ERI)
        }

        const viewport = document.querySelector('[data-viewport]');
        viewport && viewport.addEventListener('scroll', onWindowScroll);
        return () => {
            viewport && viewport.removeEventListener('scroll', onWindowScroll);
        }
    }, [expandedRowId]);

    /**
     * Expand/hide row
     * @param rowId Row id which should be expanded
     */
    const setRowExpand = (rowId: string) => {
        const settedRow = rowId === expandedRowId ? '' : rowId;
        ERI = settedRow;
        setExpandedRowId(settedRow);
    }

    const onClick = (rowId: string, row: Types.Row) => {
        if (onRowClick) {
            return onRowClick(row)
        };

        if (expandForm) {
            const rect = getElementRect(rowId);
            if (rect) {
                if (rect.top <= minHeight) {
                    const viewport = document.querySelector('[data-viewport]');
                    viewport && viewport.scrollTo({
                        top: viewport.scrollTop - minHeight + rect.top
                    });
                };
                setRowExpand(rowId);
            }
        }
    }

    /**
     * Show data with groups
     */
    if (groupKey && Array.isArray(groups)) {
        /**
         * Filter unique groups before render
         * show groups whose exists in current rows stack
         */
        const uniqueDataGroups = data.filter((v, i, a) => a.indexOf(v) === i);
        const currentGroups = groups
            .filter(group => uniqueDataGroups
                .some(udg => udg.groupId === group.value));

        return (
            <Fragment>
                {currentGroups.map((group, index) => (
                    <Fragment key={`${group.value}-${index}`}>
                        <div
                            css={styles.subheader}
                            children={group.title}
                        />
                        {data
                            .filter(row => row.groupId === group.value)
                            .map((row, index) => {
                                const rowId = (JSON.stringify(columns) + group.value.toString() + currentPage.toString() + index).stringHashCode();
                                return (
                                    <Row
                                        key={rowId}
                                        rowId={rowId}
                                        row={row}
                                        columns={columns}
                                        expandForm={expandForm}
                                        onRowClick={() => onClick(rowId, row)}
                                        expandedRowId={expandedRowId}
                                        withoutHeaders={!groupKey && hideHeaders}
                                    />
                                )
                            })}
                    </Fragment>
                ))}
            </Fragment>
        )
    }

    return (
        <Fragment>
            {data.map((row, index) => {
                const rowId = (JSON.stringify(columns) + currentPage.toString() + index).stringHashCode();
                return (
                    <Row
                        key={rowId}
                        rowId={rowId}
                        row={row}
                        columns={columns}
                        expandForm={expandForm}
                        onRowClick={() => onClick(rowId, row)}
                        expandedRowId={expandedRowId}
                        withoutHeaders={!groupKey && hideHeaders}
                    />
                )
            })}
        </Fragment>
    )
}

/**
 * Get element rect by id
 * @param id Element id
 */
const getElementRect = (id: string): ClientRect | DOMRect | null => {
    const el = document.getElementById(id);
    return el ? el.getBoundingClientRect() : null
}

const getMinHeight = (containerId: string, hideHeaders, groupKey) => {
    let minHeight: number = 0;

    const gridContainer = document.getElementById(containerId);
    if (gridContainer) {
        if (!hideHeaders) {
            const headerContainer = gridContainer.children[0] as HTMLDivElement;
            minHeight += headerContainer.offsetHeight;
        }

        if (groupKey) {
            const groupContainer = gridContainer.children[1] as HTMLDivElement;
            minHeight += groupContainer.offsetHeight;
        }
    }

    return minHeight;
}