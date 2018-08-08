import React, { Fragment } from 'react';
//import TableCheckbox from './TableCheckbox';
//import TableActions from './TableActions';
import TableColumns from './TableColumns';

interface TableRowProps {
    row: {
        [dataIndex: string]: string
    }
    isSelected: boolean
    isExpanding: boolean
    isBlur: boolean
    columns
    actions?
    border?
    scope?
}

export default class TableRow extends React.Component<TableRowProps> {

    state = {
        onSelect: true as boolean
    }

    onClick() {

    }

    render() {
        const { row, isSelected, isExpanding, isBlur, actions, border, scope } = this.props;

        return (
            <Fragment>
                <div className={`ui-table-content-body-row ${isBlur ? 'blur' : 'hover'}`} onClick={_ => this.onClick()}>
                    {/* {this.state.onSelect && (
                        <TableCheckbox active={this.props.isSelected} />
                    )} */}
                    <TableColumns {...this.props} />
                    {/* {this.state.rowActions && (
                        <TableActions {...actions} />
                    )} */}
                </div>
            </Fragment>
        )
    }
}