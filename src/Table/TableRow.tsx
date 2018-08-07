import React, { Fragment } from 'react';
import TableCheckbox from './TableCheckbox';
import TableActions from './TableActions';
import TableColumns from './TableColumns';

interface TableRowProps {
    data: {
        [dataIndex: string]: string
    }
    isSelected: boolean
    isExpanding: boolean
    isBlur: boolean
    actions?
    border?
}

export default class TableRow extends React.Component<TableRowProps> {

    onClick() {
        const { isBlur, onSelect, onClick, data } = this.props;

        if (onClick) {
            onClick(data);
        }

        if (!isBlur && onSelect) {
            onSelect(data);
        }
    }

    render() {
        const { data, isSelected, isExpanding, isBlur, actions, border } = this.props;

        if (isEditing) {
            if (!EditForm) {
                return null;
            }
            return <EditForm {...this.props} Actions={this.props.editActions} />;
        }

        if (isDeleted) {
            if (!DeleteForm) {
                return null;
            }
            return <DeleteForm {...this.props} Actions={this.props.deleteActions} />;
        }

        return (
            <Fragment>
                <div className={`ui-table-content-body-row ${isBlur ? 'blur' : 'hover'}`} onClick={_ => this.onClick()}>
                    {onSelect && (
                        <TableCheckbox active={this.props.selected} />
                    )}
                    <TableColumns {...this.props} />
                    {rowActions && (
                        <TableActions {...this.props} />
                    )}
                </div>
                <div>
                    {/* {(isExpanding && ExpandForm) && <ExpandForm {...this.props} />} */}
                </div>
            </Fragment>
        )
    }
}