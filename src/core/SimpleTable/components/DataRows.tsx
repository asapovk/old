/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/core';
import { Fragment } from 'react';
import Types from '../types';
import { Flexbox } from '../..'

interface DataRowsProps {
    data: Object[],
    columns: Types.Column[],
    rowStyle: SerializedStyles,
    cellStyle: (width?: number, borders?: Types.Borders) => SerializedStyles
}

export default (props: DataRowsProps) => {
    const { data, columns, rowStyle, cellStyle } = props;

    return (
        <Fragment>
            {data.map((item, index) => (
                <Flexbox key={`row-${index}`} css={rowStyle}>
                    {columns.map((col, keyIndex) => (
                        <div
                            key={`rowcell-${keyIndex}`}
                            css={cellStyle(col.width, col.borders)}
                            children={col.render!(item, item[col.dataIndex])}
                        />
                    ))}
                </Flexbox>
            ))}
        </Fragment>
    )
}