/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState, useEffect, useRef } from 'react';
import Types from '../types';
import { Flexbox, Icon } from '../..'
import { TableStyles } from '../styles';

interface DataRowsProps {
    row?: { [name: string]: any },
    columns: Types.Column[],
    header?: boolean
    groupHeader?: boolean
    styles: TableStyles
    expandForm?: {
        key: string | number
        render: (row: Object) => any
    }
}

export default (props: DataRowsProps) => {
    const { row, columns, styles, header, groupHeader, expandForm } = props;
    const [expanded, setExpanded] = useState(false);
    const rowRef = useRef<HTMLDivElement>(null);

    function setRowHeight(expanded: boolean) {
        if (rowRef && rowRef.current) {
            const row = rowRef.current;
            const nodes = row.childNodes as NodeListOf<HTMLDivElement>;

            row.style.height = (!expanded
                ? nodes[0].offsetHeight
                : row.offsetHeight + nodes[1].offsetHeight) + 'px';
        }
    }

    useEffect(() => {
        if (expandForm) {
            setRowHeight(expanded);
        }
    }, []);

    function onRowClick() {
        if (expandForm) {
            setRowHeight(!expanded);
            setExpanded(!expanded);
        }
    }

    return (
        <div css={styles.rowContainer} ref={rowRef}>
            <Flexbox css={styles.row(header)} onClick={onRowClick}>
                {columns.map((col, keyIndex) => (
                    <div
                        key={`rowcell-${keyIndex}`}
                        css={styles.cell(col.width, col.borders)}
                        children={row ? col.render!(row, row[col.dataIndex]) : groupHeader ? '' : col.title}
                    />
                ))}
                <div
                    key={`rowcell-action`}
                    css={styles.cell(16)}
                    children={expandForm && (
                        <Icon type='right' css={styles.actionIcon(expanded)} />
                    )}
                />
            </Flexbox>
            {expandForm && (
                <div css={styles.expandRow(expanded)} children={row && expandForm.render(row)} />
            )}
        </div>
    )
}