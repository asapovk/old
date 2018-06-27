import React from 'react';
import TableCheckbox from './TableCheckbox';
import TableActions from './TableActions';
import TableColumns from './TableColumns';

export default class TableRow extends React.Component {
    render() {
        const { EditForm, rowActions, isEditing, isBlur, onSelect, data } = this.props;
        let rowClasses = 'ui-table-content-body-row';
        isBlur ? rowClasses += ' blur' : rowClasses += ' hover';

        if (isEditing) {
            if (!EditForm) {
                return null;
            }
            return <EditForm {...this.props} />;
        }

        return (
            <div className={rowClasses} onClick={_ => { !isBlur && onSelect && onSelect(data); }}>
                {onSelect && <TableCheckbox active={this.props.selected} />}
                <TableColumns {...this.props} />
                {rowActions && <TableActions {...this.props} />}
            </div>
        )
    }
}