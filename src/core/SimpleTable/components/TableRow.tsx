/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useEffect, useRef } from 'react';
import Types from '../types';
import { Flexbox, Icon } from '../..'
import { TableStyles } from '../styles';

interface DataRowsProps {
    row?: { [name: string]: any },
    columns: Types.Column[],
    header?: boolean
    groupHeader?: boolean
    styles: TableStyles
}

export default (props: DataRowsProps) => {
    const { row, columns, styles, header, groupHeader } = props;
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
        if (row && row.children) {
            setRowHeight(expanded);
        }
    }, []);

    function onRowClick() {
        if (row && row.children) {
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
                    children={(row && row.children) && (
                        <Icon type='right' css={styles.actionIcon(expanded)} />
                    )}
                />
            </Flexbox>
            {row && row.children && (
                <div css={styles.expandRow(expanded)} children={row.children} />
            )}
        </div>
    )
}