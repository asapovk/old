import React, { Fragment } from 'react';
//import TableCheckbox from './TableCheckbox';
import TableColumns from './TableColumns';
import { ActionsButton, TableActionsTypes } from './Table';
import ActionButton from './Actions/Button';
import TableForm from './TableForm';

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
}

export default class TableRow extends React.Component<TableRowProps> {

    state = {
        onSelect: true as boolean,
        triggerAction: null
    }

    onClick() {

    }

    render() {
        const { row, isSelected, isExpanding, isBlur, actions, border, scope } = this.props;
        const { triggerAction } = this.state;

        if (triggerAction) {
            return (
                <TableForm {...triggerAction} row={row} onCancel={() => {
                    this.setState({
                        triggerAction: null
                    });
                }} />
            )
        }
        return (
            <div className={`ui-table-content-body-row ${isBlur ? 'blur' : 'hover'}`} onClick={(event) => this.onClick()}>
                {/* {this.state.onSelect && (
                <TableCheckbox active={this.props.isSelected} />
            )} */}

                <TableColumns {...this.props} />
                {Array.isArray(this.props.actions) && this.props.actions.map((action, index) => {
                    if (action.type === TableActionsTypes.button) {
                        return <ActionButton key={index} {...action} />
                    }
                    if (action.type === TableActionsTypes.trigger) {
                        return (
                            <ActionButton key={index} {...action} onClick={() => {
                                this.setState({
                                    triggerAction: action
                                });
                            }} />
                        );
                    }
                    return null;
                })}
            </div>
        )
    }
}