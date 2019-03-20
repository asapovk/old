/** @jsx jsx */
import { jsx } from '@emotion/core';
import { rowStyles } from '../styles';
import Types from '../types';
import { Icon } from '../..';
import { useEffect } from 'react';

export default (props: Types.RowProps) => {
    const styles = rowStyles();

    const withOpacity = props.expandedRowId && props.expandedRowId !== props.rowId;
    const expanded = props.expandedRowId === props.rowId;

    return (
        <div id={props.rowId.toString()} css={styles.rowWrapper({ expanded, withOpacity })}>
            <div css={styles.rowCellsWrapper} onClick={props.onRowClick}>
                {props.columns.map((column, index) => (
                    <div
                        key={`rc-${index}`}
                        css={styles.rowCell({
                            action: column.dataIndex === 'actionColumn',
                            borders: column.borders,
                            alignment: column.alignment,
                            width: column.width,
                            expanded
                        })}
                        children={(
                            column.dataIndex === 'actionColumn'
                                ? (
                                    <Icon
                                        size='1.25rem'
                                        color='lowlight'
                                        type='right'
                                        css={styles.icon({ expanded })}
                                    />
                                )
                                : column.render!(props.row, props.row[column.dataIndex])
                        )}
                    />
                ))}
            </div>
            {props.expandForm && (
                <div
                    css={styles.expandForm({ expanded })}
                    children={props.expandForm.render(props.row)}
                />
            )}
        </ div>
    )
}