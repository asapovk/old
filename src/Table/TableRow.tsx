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
}
export interface ThemedProps {
    theme
}
class TableRow extends React.Component<Props & ThemedProps> {

    onClick() {

    }

    render() {
        const { row, isSelected, isExpanding, isBlur, actions, border, scope, columns, form, theme } = this.props;

        if (form) {
            return TableForm(form, columns, row)
        }

        return (
            <div
                className={`ui-table-content-body-row ${isBlur ? 'blur' : 'hover'}`}
                style={{
                    borderColor: theme.borderColor
                }}
                onClick={(event) => this.onClick()}>
                {/* {this.state.onSelect && (
                <TableCheckbox active={this.props.isSelected} />
                )} */}
                <TableColumns {...this.props} />
                {actions && <TableActions actions={actions} data={row} />}
            </div>
        )
    }
}

export default (props: Props) => (
    <Theme>
        {theme => (
            <TableRow {...props} theme={{
                backgroundColor: theme.interface.rgb,
                borderColor: theme.pale.rgb,
            }} />
        )}
    </Theme>
);