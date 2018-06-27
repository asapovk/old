import React from 'react';

export default class TableColumns extends React.Component {
    render() {
        const { data, columns } = this.props;

        return columns.map(column => {

            if (!column.render) {
                column.render = (row, value) => value;
            }

            return (
                <div
                    key={column.dataIndex}
                    className={`ui-table-content-body-row-column ` + column.dataIndex}
                    style={column.width ? { flexBasis: column.width } : { flex: 1 }}
                    children={column.render(data, data[column.dataIndex])}
                />
            )
        });
    }
}