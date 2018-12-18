import React, { Fragment } from 'react';
import { Flexbox, Table, Viewport } from '../../../src';
import TableCustomCell from './TableCustomCell'
import Fakerator from 'fakerator';
import '../../../src/Styles/scss/main.scss';

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
            <Viewport>
                <Flexbox pr={35} pl={50} pt={0} column flex={1}>
                    <Table
                        data={tableData}
                        pagination={{
                            pageSize: 10
                        }}
                        columns={tableColumns}
                        actions={[{
                            label: "Action",
                            onAction: (event) => console.log(event)
                        }]}
                        noDataLabel='Данных то нету...'
                        search
                    />
                </Flexbox>
            </Viewport>
        )
    }
}

export default TableStory