/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment, useState, useEffect } from 'react';
import Types from '../types';
import { Row } from '.';
import { subHeaderStyles } from '../styles';

let ERI: string

export default (props: Types.Props & { currentPage: number }) => {
    const { groups, groupKey, columns, data, currentPage, expandForm, hideHeaders } = props;
    const [expandedRowId, setExpandedRowId] = useState<string>('');
    const minHeight = (hideHeaders ? 0 : 56) + (groupKey ? 33 : 0);

    const styles = subHeaderStyles({ hideHeaders });

    useEffect(() => {
        const onWindowScroll = () => {
            if (!ERI) return;

            const row = document.getElementById(ERI);
            if (row) {
                const rect = row.getBoundingClientRect();
                rect.top <= minHeight
                    ? expandedRowId && setExpandedRowId('')
                    : !expandedRowId && setExpandedRowId(ERI)
            }

        }

        const viewport = document.querySelector('[data-viewport]');
        viewport && viewport.addEventListener('scroll', onWindowScroll);
        return () => {
            viewport && viewport.removeEventListener('scroll', onWindowScroll);
        }
    }, [expandedRowId]);

    const onRowClick = (rowId: string, row: Types.Row) => {
        if (props.onRowClick) {
            return props.onRowClick(row)
        };

        if (props.expandForm) {
            const el = document.getElementById(rowId);
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= minHeight) return;

                ERI = rowId === expandedRowId ? '' : rowId;
                setExpandedRowId(rowId === expandedRowId ? '' : rowId);
            }
        }
    }

    if (groupKey && Array.isArray(groups)) {
        const uniqueDataGroups = data.filter((v, i, a) => a.indexOf(v) === i);
        const currentGroups = groups
            .filter(group => uniqueDataGroups
                .some(udg => udg.groupId === group.value));

        return (
            <Fragment>
                {currentGroups.map((group, index) => (
                    <Fragment key={`${group.value}-${index}`}>
                        <div
                            key={`sh-${group.value}-${index}`}
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
                                        onRowClick={() => onRowClick(rowId, row)}
                                        expandedRowId={expandedRowId}
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
                        onRowClick={() => onRowClick(rowId, row)}
                        expandedRowId={expandedRowId}
                    />
                )
            })}
        </Fragment>
    )
}