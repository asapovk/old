import React, { Fragment } from 'react';
import TableCheckbox from './TableCheckbox';
import TableActions from './TableActions';
import TableColumns from './TableColumns';

export default class TableRow extends React.Component {

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
        const { EditForm, rowActions, isEditing, isExpanding, isBlur, onSelect, data } = this.props;

        if (isEditing) {
            if (!EditForm) {
                return null;
            }
            return <EditForm {...this.props} Actions={this.prop.editActions} />;
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