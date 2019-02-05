/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/core';
import Types from '../types';
import { Flexbox } from '../..';

interface TableHeadersProps {
    columns: Types.Column[]
    rowStyle: SerializedStyles
    cellStyle: (width?: number, borders?: Types.Borders) => SerializedStyles
}

export default (props: TableHeadersProps) => {
    const { columns, rowStyle, cellStyle } = props;

    return (
        <Flexbox css={rowStyle}>
            {columns.map((column, index) => (
                <div
                    key={`header-${index}`}
                    css={cellStyle(column.width, column.borders)}
                    children={column.title}
                />
            ))}
        </Flexbox>
    )
}