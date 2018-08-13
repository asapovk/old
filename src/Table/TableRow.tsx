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

    onClick() {

    }

    render() {
        const { row, isSelected, isExpanding, isBlur, actions, border, scope, columns, form } = this.props;

        if (form) {
            return TableForm(form, columns, row)
        }

        return (
            <div className={`ui-table-content-body-row ${isBlur ? 'blur' : 'hover'}`} onClick={(event) => this.onClick()}>
                {/* {this.state.onSelect && (
                <TableCheckbox active={this.props.isSelected} />
                )} */}
                <TableColumns {...this.props} />
                {actions && <TableActions actions={actions} data={row} />}
            </div>
        )
    }
}