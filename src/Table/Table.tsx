import React, { Component } from 'react';
import TableRow from './TableRow';

interface ActionsBasic {
    onAction: (dataRow: { [dataIndex: string]: string }, selectedItems: [string]) => void
}

interface ActionsSelect extends ActionsBasic {
    type: 'select'
}

interface ActionsExpand extends ActionsBasic {
    type: 'expand'
}

interface ActionsButton extends ActionsBasic {
    type: 'button'
    label: string
}

interface ActionsTrigger extends ActionsBasic {
    type: 'trigger'
    label: string
    target: {
        render: Component
        actions?: {
            label: string
            onAction: (compData: { [dataIndex: string]: string }) => void
            cancelLabel?: string
        }
    }
}

interface TableProps {
    data: { [dataIndex: string]: string }[]
    columns: {
        title?: string
        dataIndex: string
        width?: number
        render?: Component
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
        //editibleItems: [] as [{ [component: string]: string }],
        focusItem: '' as string,
        // isSelectable: false as boolean,
        // isExpandable: false as boolean
    }

    // componentWillMount() {
    //     if (this.props.actions) {
    //         this.props.actions.map(action => {
    //             if (action.type == 'select') this.setState({ isSelectable: true })
    //             if (action.type == 'expand') this.setState({ isExpandable: true })
    //         })
    //     }
    // }

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