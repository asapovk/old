/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/core';
import Types from '../types';
import { Flexbox } from '../..'

interface GroupHeaderRowProps {
    columns: Types.Column[],
    containerStyle: SerializedStyles
    headerCellStyle: (width?: number, borders?: Types.Borders) => SerializedStyles
    groupTitleStyle: SerializedStyles
    title: string
}

export default (props: GroupHeaderRowProps) => {
    const { columns, containerStyle, headerCellStyle, groupTitleStyle, title } = props;

    return (
        <Flexbox css={containerStyle} justifyContent='center'>
            {columns.map((col, keyIndex) => (
                <div
                    key={`rowcell-${keyIndex}`}
                    css={headerCellStyle(col.width, col.borders)}
                />
            ))}
            <div css={groupTitleStyle}>{title}</div>
        </Flexbox>
    )
}