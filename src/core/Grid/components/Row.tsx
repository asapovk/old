/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { rowStyles } from '../styles';
import Types from '../types';
import { Icon } from '../..';

export default (props: Types.RowProps) => {
    const [expanded, setExpanded] = useState(false);
    const styles = rowStyles();

    const onRowClick = () => {
        props.onRowClick
            ? props.onRowClick(props.row)
            : props.expandForm && setExpanded(!expanded);
    }

    return (
        <div css={styles.rowWrapper}>
            <div css={styles.rowCellsWrapper({ expandForm: props.expandForm })} onClick={onRowClick}>
                {props.columns.map((column, index) => (
                    <div
                        key={`rc-${index}`}
                        css={styles.rowCell({ expanded, borders: column.borders, alignment: column.alignment, expandForm: props.expandForm })}
                        children={(
                            column.dataIndex === 'actionColumn'
                                ? <Icon type='right' css={styles.icon({ expanded })} />
                                : column.render!(props.row, props.row[column.dataIndex])
                        )}
                    />
                ))}
            </div>
            {props.expandForm && (
                <div
                    css={styles.expandForm({ expanded, columnsLength: props.columns.length })}
                    children={props.expandForm.render(props.row)}
                />
            )}
        </ div>
    )
}