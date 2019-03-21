/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Icon } from '../..';
import { rowStyles } from '../styles';
import Types from '../types';

export default (props: Types.RowProps) => {
    const { expandedRowId, rowId, onRowClick, columns, row, expandForm, withoutHeaders } = props;
    const rs = rowStyles({
        expanded: expandedRowId === rowId,
        withOpacity: expandedRowId && (expandedRowId !== rowId),
        withoutHeaders
    });

    const ExpandIcon = () => (
        <Icon
            size='1.25rem'
            color='lowlight'
            type='right'
            css={rs.icon}
        />
    );

    return (
        <div id={rowId} css={rs.rowWrapper}>
            <div
                css={rs.rowCellsWrapper}
                onClick={onRowClick}
                children={(
                    columns.map((column, index) => {
                        const { borders, alignment, width, dataIndex, render } = column;
                        const isAction = dataIndex === 'actionColumn';

                        const css = rs.rowCell({
                            isAction, borders, alignment, width
                        });

                        return (
                            <div
                                key={`rc-${index}`}
                                css={css}
                                children={(
                                    isAction
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
                    css={rs.expandForm}
                    children={expandForm.render(row)}
                />
            )}
        </div>
    )
}