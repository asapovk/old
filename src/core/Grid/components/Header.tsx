/** @jsx jsx */
import { jsx } from '@emotion/core';
import { headerStyles } from '../styles';
import Types from '../types';

export default (props: Types.HeaderProps) => {
    const styles = headerStyles();

    return (
        <div css={styles.headerWrapper}>
            {props.columns.map((column, index) => (
                <div
                    key={`HC-${column.dataIndex}-${index}`}
                    css={styles.headerCell({
                        alignment: column.alignment,
                        borders: column.borders
                    })}
                    children={(
                        column.dataIndex !== 'actionColumn' && column.title
                    )}
                />
            ))}
        </div>
    )
}