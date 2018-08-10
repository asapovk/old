import React, { Component } from 'react';
import TableRow from './TableRow';

export interface TableProps {
    data: any[]
    columns: {
        title?: string
        dataIndex: string
        width?: number
        render?: (row, value) => any
    }[]
    form?: {
        key: string
        render: any
    }
    actions?: {
        label: string,
        className?: string,
        onAction: (row) => void
    }[]
    border?: 'all' | 'external' | 'internal' | 'vertical' | 'horizontal'
    indexKey?: string
    scope?: any
    style?: any
}

class Table extends React.Component<TableProps> {

    state = {
        selectedItems: [] as string[],
        expandedItems: [] as string[],
        focusItem: '' as string,
    }


    render() {

        const { data, columns, actions, border, indexKey, scope, form, style } = this.props;

        const ColumnsTSX = columns.map(column => (
            <div className={'ui-table-content-head-row-column ' + column.dataIndex} key={column.dataIndex} style={column.width ? { flexBasis: column.width } : { flex: 1 }}>{column.title}</div>
        ))

        const RowsTSX = data.map((row, index) => {
            const key = indexKey && row[indexKey] || index.toString()
            console.log(form && form.render);
            return (
                <TableRow
                    key={key}
                    row={row}
                    columns={columns}
                    actions={actions}
                    border={border}
                    form={(form && key == form.key) && form.render}
                    isSelected={(this.state.selectedItems.some(item => item === key))}
                    isExpanding={(this.state.expandedItems.some(item => item === key))}
                    // isBlur={this.state.focusItem && (this.state.focusItem != key)}
                    scope={scope}
                />
            )
        })

        return (
            <div className='ui-table' style={style}>
                <div className='ui-table-content'>
                    <div className='ui-table-content-head-row' children={ColumnsTSX} style={actions && { marginRight: '32px' }} />
                    <div className='ui-table-content-body' children={RowsTSX} />
                </div>
            </div>
        )
    }
}

export default Table;