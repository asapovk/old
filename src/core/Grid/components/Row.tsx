/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Icon } from '../..';
import { rowStyles } from '../styles';
import Types from '../types';

export default (props: Types.RowProps) => {
    const rs = rowStyles();
    const { expandedRowId, rowId, onRowClick, columns, row, expandForm } = props;

    const withOpacity = expandedRowId && (expandedRowId !== rowId);
    const expanded = expandedRowId === rowId;

    const ExpandIcon = () => (
        <Icon
            size='1.25rem'
            color='lowlight'
            type='right'
            css={rs.icon({ expanded })}
        />
    );

    return (
        <div id={rowId} css={rs.rowWrapper({ expanded, withOpacity })}>
            <div
                css={rs.rowCellsWrapper}
                onClick={onRowClick}
                children={(
                    columns.map((column, index) => {
                        const { borders, alignment, width, dataIndex, render } = column;
                        const action = dataIndex === 'actionColumn';

                        const cellStyle = rs.rowCell({
                            action, borders, alignment, width, expanded
                        });

                        return (
                            <div
                                key={`rc-${index}`}
                                css={cellStyle}
                                children={(
                                    action
                                        ? <ExpandIcon />
                                        : render!(row, row[dataIndex])
                                )}
                            />
                        )
                    })
                )}
            />
            {expandForm && (
                <div
                    css={rs.expandForm({ expanded })}
                    children={expandForm.render(row)}
                />
            )}
        </div>
    )
}