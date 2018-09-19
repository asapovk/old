import React, { Fragment } from 'react';
import { Viewport, Table } from '../../src';
import TableCustomCell from './misc/TableCustomCell'
import Fakerator from 'fakerator';

var fakerator = Fakerator();

class TableStory extends React.Component {

    private
    tooltip: any;

    render() {
        const tableData = [] as any[];
        for (let i = 0; i < 200; i++) {
            tableData.push({
                id: i + 1,
                name: fakerator.names.name(),
                age: fakerator.random.number(16, 50),
                passport: fakerator.random.hex(16),
            });
        }

        const tableColumns = [
            { title: '#', dataIndex: 'id', width: 40 },
            { title: 'Fullname', dataIndex: 'name', render: (value, row) => <TableCustomCell value={value} row={row} /> },
            { title: 'Age', dataIndex: 'age', width: 40 },
            { title: 'Passport ID', dataIndex: 'passport' }
        ]

        return (

            <Fragment>
                <Table
                    style={{ padding: 20 }}
                    data={tableData}
                    pagination={{
                        pageSize: 10
                    }}
                    columns={tableColumns}
                    actions={[
                        {
                            label: "Action",
                            onAction: (event) => console.log(event)
                        }
                    ]}
                    noDataLabel='Данных то нету...'
                />
            </Fragment>
        )
    }
}

export default TableStory