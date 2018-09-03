import React from 'react';
import { Viewport, Table } from '../../src';
import Fakerator from 'fakerator';

var fakerator = Fakerator();

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
    { title: '#', dataIndex: 'id' },
    { title: 'Fullname', dataIndex: 'name' },
    { title: 'Age', dataIndex: 'age' },
    { title: 'Passport ID', dataIndex: 'passport' }

]

class TableStory extends React.Component {

    render() {
        return (
            <Viewport>
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
            </Viewport>
        )
    }
}

export default TableStory