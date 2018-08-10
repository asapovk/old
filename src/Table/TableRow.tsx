import React, { Fragment } from 'react';
//import TableCheckbox from './TableCheckbox';
import TableColumns from './TableColumns';
import TableForm from './TableForm';
import TableActions from './TableActions';

interface TableRowProps {
    row: {
        [dataIndex: string]: string
    }
    columns
    isSelected?: boolean
    isExpanding?: boolean
    isBlur?: boolean
    actions?
    border?
    scope?
    form?
}

export default class TableRow extends React.Component<TableRowProps> {

    state = {
        onSelect: true as boolean,
        triggerAction: null
    }

    onClick() {

    }

    render() {
        const { row, isSelected, isExpanding, isBlur, actions, border, scope, form } = this.props;
        const { triggerAction } = this.state;

        if (form) {
            return TableForm(row, form)
        }
        return (
            <div className={`ui-table-content-body-row ${isBlur ? 'blur' : 'hover'}`} onClick={(event) => this.onClick()}>
                {/* {this.state.onSelect && (
                <TableCheckbox active={this.props.isSelected} />
                )} */}
                <TableColumns {...this.props} />
                {actions && (
                    <TableActions actions={actions} data={row} />
                )}
            </div>
        )
    }
}