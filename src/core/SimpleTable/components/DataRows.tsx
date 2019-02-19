/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import Types from '../types';
import TableRow from './TableRow';
import { TableStyles } from '../styles';

interface DataRowsProps {
    data: { [name: string]: any }[]
    columns: Types.Column[],
    styles: TableStyles
    expandForm?: Types.ExpandForm
    hideHeaders?: boolean
    onRowClick?: (row: any) => void
    currentPage: number
}

declare global {
    interface String {
        hashCode: () => number
    }
}

String.prototype.hashCode = function () {
    var hash = 0;
    if (this.length == 0) {
        return hash;
    }
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

export default (props: DataRowsProps) => {
    return (
        <Fragment>
            {props.data.map((row, index) => (
                <TableRow
                    {...props}
                    key={JSON.stringify(props.currentPage.toString() + index).hashCode()}
                    row={row}
                    last={index === props.data.length - 1}
                />
            ))}
        </Fragment>
    )
}