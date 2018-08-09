import React, { Component } from 'react';
import TableRow from './TableRow';

export enum TableActionsTypes {
    select = "select",
    expand = "expand",
    button = "button",
    trigger = "trigger"
}

export interface ActionsBasic {
    onClick?: (dataRow: any) => void
}


export interface ActionsSelect extends ActionsBasic {
    type: TableActionsTypes.select
}

export interface ActionsExpand extends ActionsBasic {
    type: TableActionsTypes.expand
}

export interface ActionsButton extends ActionsBasic {
    type: TableActionsTypes.button
    label: string
}

export interface ActionsTrigger extends ActionsBasic {
    type: TableActionsTypes.trigger
    label: string
    target: {
        render: Component
        cancelLabel?: string
        actions?: ActionsButton[]
    }
}

export interface TableProps {
    // TODO: Избавится от any
    data: any[]
    columns: {
        title?: string
        dataIndex: string
        width?: number
        render?: (row, value) => any
    }[]
    actions?: [ActionsSelect | ActionsExpand | ActionsButton | ActionsTrigger]
    border?: 'all' | 'external' | 'internal' | 'vertical' | 'horizontal'
    indexKey?: string
    scope?: any
}

class Table extends React.Component<TableProps> {

    state = {
        selectedItems: [] as string[],
        expandedItems: [] as string[],
        focusItem: '' as string,
        types: {} as { [key: string]: boolean }
    }

    componentWillMount() {
        const types = {} as { [key: string]: boolean }
        if (this.props.actions) {
            this.props.actions.map(action => {
                if (action.type == TableActionsTypes.select) types.isSelectable = true
                if (action.type == TableActionsTypes.expand) types.isExpandable = true
                if (action.type == TableActionsTypes.button) types.isExpandable = true
                if (action.type == TableActionsTypes.trigger) types.isExpandable = true
            })
        }
        this.setState({ types: types });
    }

    render() {

        const { data, columns, actions, border, indexKey, scope } = this.props;

        const ColumnsTSX = columns.map(column => (
            <div className={'ui-table-content-head-row-column ' + column.dataIndex} key={column.dataIndex} style={column.width ? { flexBasis: column.width } : { flex: 1 }}>{column.title}</div>
        ))

        const RowsTSX = data.map((row, index) => {
            const key = indexKey && row[indexKey] || index.toString()
            return (
                <TableRow
                    key={key}
                    row={row}
                    columns={columns}
                    actions={actions}
                    border={border}
                    isSelected={(this.state.selectedItems.some(item => item === key))}
                    isExpanding={(this.state.expandedItems.some(item => item === key))}
                    // isBlur={this.state.focusItem && (this.state.focusItem != key)}
                    scope={scope}
                />
            )
        })

        return (
            <div className='ui-table'>
                <div className='ui-table-content'>
                    <div className='ui-table-content-head-row' children={ColumnsTSX} />
                    <div className='ui-table-content-body' children={RowsTSX} />
                </div>
            </div>
        )
    }
}

export default Table;