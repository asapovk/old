import React, { Fragment } from 'react';
import TableColumns from './TableColumns';
import TableForm from './TableForm';
import TableActions from './TableActions';
import Theme from '../Themes';

interface Props {
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
    children?: any
    onRowClick?: any
}

class TableRow extends React.Component<Props> {

    onClick(e, row) {
        this.props.onRowClick(row);
    }

    render() {
        const { row, isSelected, isExpanding, isBlur, actions, border, scope, columns, form } = this.props;

        if (form) {
            return TableForm(form, columns, row)
        }

        return (
            <Theme>
                {styles => (
                    <div
                        className={`ui-table-content-body-row ${isBlur ? 'blur' : 'hover'}`}
                        style={{
                            borderColor: styles.table.row.borderColor
                        }}
                        onClick={(event) => this.onClick(event, row)}>
                        {/* {this.state.onSelect && (
                <TableCheckbox active={this.props.isSelected} />
                )} */}
                        <TableColumns {...this.props} />
                        {actions && <TableActions actions={actions} data={row} />}
                    </div>
                )}
            </Theme>

        )
    }
}

export default TableRow;