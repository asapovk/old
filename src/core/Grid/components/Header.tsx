/** @jsx jsx */
import { jsx } from '@emotion/core';
import { headerStyles } from '../styles';
import Types from '../types';

export default (props: Types.HeaderProps) => {
    const hs = headerStyles();
    const { columns } = props;

    return (
        <div css={hs.headerWrapper}>
            {columns.map((column, index) => {
                const { alignment, borders, width, dataIndex, title } = column;
                const isAction = dataIndex === 'actionColumn';

                const css = hs.headerCell({
                    isAction, alignment, borders, width
                });

                return (
                    <div
                        key={`HC-${dataIndex}-${index}`}
                        css={css}
                        children={title}
                    />
                )
            })}
        </div>
    )
}