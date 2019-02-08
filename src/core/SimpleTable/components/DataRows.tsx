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
    expandForm?: Types.ExpandForm
    hideHeaders?: boolean
}

export default (props: DataRowsProps) => {
    return (
        <div>
            {props.data.map((row, index) => (
                <TableRow
                    {...props}
                    key={index}
                    row={row}
                    last={index === props.data.length - 1}
                />
            ))}
        </div>
    )
}