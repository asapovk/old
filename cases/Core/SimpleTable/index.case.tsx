import React, { useState } from 'react';
import { Flexbox, SimpleTable, Button } from '../../../src';
import TableCustomCell from './TableCustomCell'
import Fakerator from 'fakerator';
import { SimpleTableTypes } from '../../../src/core/types';
import css from '@emotion/css';

var fakerator = Fakerator();

const data = (() => {
    let data: any[] = [];

    for (let i = 0; i < 100; i++) {
        data.push({
            id: i + 1,
            name: fakerator.names.name(),
            age: fakerator.random.number(16, 50),
            passport: fakerator.random.hex(16),
            uuid: fakerator.random.hex(16),
            uuidv2: fakerator.random.hex(16),
            groupId: fakerator.random.number(0, 2),
            // children: <div>123</div>
        });
    }
    return data;
})();

export default () => {
    const toggle = (state: boolean): boolean => !state;
    const [, setState] = useState(false);

    let data1: any[] = data;
    function changeData() {
        data1 = data1.filter(t => t.id < (data1.length / 2));
        setState(toggle);
    }
    return (
        <Flexbox pr={35} pl={50} pt={0} column flex={1}>
            <Flexbox mt={70} mb={20}>
                <Button label='Change data' onClick={changeData} />
            </Flexbox>
            <SimpleTable
                data={data}
                // groupKey='groupId'
                // groups={groups}
                // pagination={{
                //     pageSize: 5,
                //     pageNeighbours: 1
                // }}
                // border='all'
                columns={tableColumns}
                expandForm={expandForm}
            // noDataComponent={<div>а данных то тю-тю</div>}
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

const groups: SimpleTableTypes.Group[] = [
    { title: 'Первая группа', value: 0 },
    { title: 'Вторая группа', value: 1 },
    { title: 'Третья группа', value: 2 }
]

const tableColumns: SimpleTableTypes.Column[] = [
    { title: '#', dataIndex: 'id', width: 1 },
    { title: 'Fullname', dataIndex: 'name', render: (row, value) => <div style={{ fontSize: '1rem' }}>{value}</div> },
    { title: 'Age', dataIndex: 'age', width: 40, borders: 'right', alignment: 'flex-end' },
    { title: 'Passport ID', dataIndex: 'passport', alignment: 'flex-end' },
    { title: 'uuid', dataIndex: 'uuid', borders: 'right', width: 200, alignment: 'flex-end' },
    { title: 'uuidv2', dataIndex: 'uuidv2', width: 200, alignment: 'flex-end' }
]

const expandForm = {
    key: 'expandForm',
    render: (row) => <div>{JSON.stringify(row)}</div>
}