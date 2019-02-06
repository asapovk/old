/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/core';
import { Fragment } from 'react';
import Types from '../types';
import { Flexbox } from '../..'
import TableRow from './TableRow';
import { TableStyles } from '../styles';


interface DataRowsProps {
    data: { [name: string]: any }[],
    columns: Types.Column[],
    styles: TableStyles
    expandForm?: {
        key: string | number
        render: (row: Object) => any
    }
}

export default (props: DataRowsProps) => {
    return (
        <div css={props.styles.rowsContainer}>
            {props.data.map((row, index) => (
                <TableRow
                    {...props}
                    key={index}
                    row={row}
                />
            ))}
        </div>
    )
}