import React from 'react';

interface TableColumnsProps {
    row
    columns
    scope?
}

export default class TableColumns extends React.Component<TableColumnsProps> {

    render() {
        const { row, columns, scope } = this.props;

        return columns.map(column => {

            if (!column.render) {
                column.render = (row, value) => value;
            }

            return (
                <div
                    key={column.dataIndex}
                    className={`ui-table-content-body-row-column ` + column.dataIndex}
                    style={column.width ? { flexBasis: column.width } : { flex: 1 }}
                    children={column.render.apply(scope, [row, row[column.dataIndex]])}
                />
            )
        });
    }

}