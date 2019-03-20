/** @jsx jsx */
import { jsx } from '@emotion/core';
import { headerStyles } from '../styles';
import Types from '../types';

export default (props: Types.HeaderProps) => {
    const { headerWrapper, headerCell } = headerStyles();
    const { columns } = props;

    return (
        <div css={headerWrapper}>
            {columns.map((column, index) => {
                const { alignment, borders, width, dataIndex, title } = column;
                const isAction = dataIndex === 'actionColumn';

                return (
                    <div
                        key={`HC-${dataIndex}-${index}`}
                        css={headerCell({ isAction, alignment, borders, width })}
                        children={(
                            !isAction && title
                        )}
                    />
                )
            })}
        </div>
    )
}