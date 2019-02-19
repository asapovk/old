/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useRef } from 'react';
import Types from '../types';
import { Flexbox, Icon } from '../..'
import { TableStyles } from '../styles';

interface DataRowsProps {
    row?: { [name: string]: any },
    columns: Types.Column[],
    header?: boolean
    groupHeader?: boolean
    styles: TableStyles
    expandForm?: Types.ExpandForm
    last: boolean
    hideHeaders?: boolean
    onRowClick?: (row: any) => void
}

export default (props: DataRowsProps) => {
    const { row, columns, styles, header, groupHeader, expandForm, last, hideHeaders } = props;
    const [expanded, setExpanded] = useState(false);
    const rowRef = useRef<HTMLDivElement>(null);

    // function setRowHeight(expanded: boolean) {
    //     if (rowRef && rowRef.current) {
    //         const row = rowRef.current;
    //         const nodes = row.childNodes as NodeListOf<HTMLDivElement>;

    //         row.style.height = (!expanded
    //             ? nodes[0].offsetHeight
    //             : nodes[0].offsetHeight + nodes[1].offsetHeight) + 'px';
    //     }
    // }

    // useEffect(() => {
    //     setRowHeight(expanded);
    // }, []);

    function onRowClick() {
        if (!header) {
            // setRowHeight(!expanded);
            setExpanded(!expanded);
        }
    }

    return (
        <div css={styles.rowContainer({ header, hideHeaders })} ref={rowRef}>
            <Flexbox css={styles.row({ header, groupHeader, last })} onClick={props.onRowClick ? props.onRowClick : onRowClick}>
                {columns.map((col, keyIndex) => (
                    <div
                        key={`rowcell-${keyIndex}`}
                        css={styles.cell(col.width, col.borders, col.alignment)}
                        children={row ? col.render!(row, row[col.dataIndex]) : groupHeader ? '' : col.title}
                    />
                ))}
                {expandForm && (
                    <div
                        key={`rowcell-action`}
                        css={styles.actionCell}
                        children={(!header && (
                            <Icon type='right' css={styles.actionIcon(expanded)} />
                        ))}
                    />
                )}
            </Flexbox>
            {expandForm && (
                <div css={styles.expandRow(expanded)} children={row && expandForm.render(row)} />
            )}
        </div>
    )
}