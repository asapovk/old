import React, { Fragment } from 'react';
import { Flexbox, SimpleTable } from '../../../src';
import TableCustomCell from './TableCustomCell'
import Fakerator from 'fakerator';
import { SimpleTableTypes } from '../../../src/core/types';

var fakerator = Fakerator();

class TableStory extends React.Component {

    private
    tooltip: any;

    render() {
        const tableData = [] as any[];
        for (let i = 0; i < 50; i++) {
            tableData.push({
                id: i + 1,
                name: fakerator.names.name(),
                age: fakerator.random.number(16, 50),
                passport: fakerator.random.hex(16),
                uuid: fakerator.random.hex(16),
                uuidv2: fakerator.random.hex(16),
                groupId: fakerator.random.number(0, 2),
            });
        }

        const groups: SimpleTableTypes.Group[] = [
            { title: 'Первая группа', value: 0 },
            { title: 'Вторая группа', value: 1 },
            { title: 'Третья группа', value: 2 }
        ]

        const tableColumns: SimpleTableTypes.Column[] = [
            { title: '#', dataIndex: 'id', width: 1 },
            { title: 'Fullname', dataIndex: 'name', render: (row, value) => <div style={{ fontSize: '1rem' }}>{value}</div> },
            { title: 'Age', dataIndex: 'age', width: 40, borders: 'right' },
            { title: 'Passport ID', dataIndex: 'passport', borders: 'right', width: 200, },
            { title: 'uuid', dataIndex: 'uuid', borders: 'right', width: 200, },
            { title: 'uuidv2', dataIndex: 'uuidv2', width: 200, }
        ]

        return (
            <Flexbox pr={35} pl={50} pt={0} column flex={1}>
                <SimpleTable
                    data={tableData}
                    // groupKey='groupId'
                    // groups={groups}
                    pagination={{
                        pageSize: 10
                    }}
                    // border='all'
                    columns={tableColumns}
                // actions={[{
                //     label: "Action",
                //     onAction: (event) => console.log(event)
                // }]}
                // noDataLabel='Данных то нету...'
                // search
                />
            </Flexbox>
        )
    }
}

export default TableStory