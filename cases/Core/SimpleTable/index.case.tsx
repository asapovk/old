import React, { useState, useEffect, useReducer } from 'react';
import { Flexbox, SimpleTable, Table, Button, TextField } from '../../../src';
import { SimpleTableTypes } from '../../../src/core/types';

const initialState = {
    data: [
        { "id": 1, "groupId": 0, "name": "Taylor Parisian", "age": 19, "passport": "13ad98544bdbe6a0", "uuid": "184eaebf1782c069", "uuidv2": "a2e3a86cd5a19a85" },
        { "id": 10, "groupId": 1, "name": "Terence Paucek", "age": 16, "passport": "b81c6a2243677fdc", "uuid": "5f5ad1aa0f6f1dd0", "uuidv2": "5fbd003023cdf4dd" },
        { "id": 11, "groupId": 1, "name": "Terence Paucek", "age": 16, "passport": "b81c6a2243677fdc", "uuid": "5f5ad1aa0f6f1dd0", "uuidv2": "5fbd003023cdf4dd" },
        { "id": 12, "groupId": 1, "name": "Terence Paucek", "age": 16, "passport": "b81c6a2243677fdc", "uuid": "5f5ad1aa0f6f1dd0", "uuidv2": "5fbd003023cdf4dd" },
        { "id": 13, "groupId": 1, "name": "Terence Paucek", "age": 16, "passport": "b81c6a2243677fdc", "uuid": "5f5ad1aa0f6f1dd0", "uuidv2": "5fbd003023cdf4dd" },
        { "id": 14, "groupId": 1, "name": "Terence Paucek", "age": 16, "passport": "b81c6a2243677fdc", "uuid": "5f5ad1aa0f6f1dd0", "uuidv2": "5fbd003023cdf4dd" },
        { "id": 15, "groupId": 1, "name": "Terence Paucek", "age": 16, "passport": "b81c6a2243677fdc", "uuid": "5f5ad1aa0f6f1dd0", "uuidv2": "5fbd003023cdf4dd" },
        { "id": 16, "groupId": 1, "name": "Terence Paucek", "age": 16, "passport": "b81c6a2243677fdc", "uuid": "5f5ad1aa0f6f1dd0", "uuidv2": "5fbd003023cdf4dd" },
        { "id": 17, "groupId": 1, "name": "Terence Paucek", "age": 16, "passport": "b81c6a2243677fdc", "uuid": "5f5ad1aa0f6f1dd0", "uuidv2": "5fbd003023cdf4dd" },
        { "id": 18, "groupId": 1, "name": "Terence Paucek", "age": 16, "passport": "b81c6a2243677fdc", "uuid": "5f5ad1aa0f6f1dd0", "uuidv2": "5fbd003023cdf4dd" },
        { "id": 19, "groupId": 1, "name": "Terence Paucek", "age": 16, "passport": "b81c6a2243677fdc", "uuid": "5f5ad1aa0f6f1dd0", "uuidv2": "5fbd003023cdf4dd" },
        { "id": 20, "groupId": 1, "name": "Terence Paucek", "age": 16, "passport": "b81c6a2243677fdc", "uuid": "5f5ad1aa0f6f1dd0", "uuidv2": "5fbd003023cdf4dd" },
        { "id": 3, "groupId": 2, "name": "Ella Blanda", "age": 27, "passport": "6ea471d330929cfb", "uuid": "166e65e27b6b1fa3", "uuidv2": "94ce01198be7e0d3" },
        { "id": 4, "groupId": 3, "name": "Melody Ryan", "age": 46, "passport": "090616a5981bf3b9", "uuid": "ff43d199f8b173d3", "uuidv2": "2785b52f96c9169b" }
    ]
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'changevalue': {
            return {
                ...state,
                data: state.data.map(d => {
                    if (d.id === action.payload.id) {
                        return {
                            ...d,
                            uuidv2: action.payload.uuidv2
                        }
                    }
                    return d;
                })
            };
        }
        default: {
            return state;
        }
    }
};


export default () => {
    const [items, setItems] = useState(10);
    const [stateArray, setStateArray] = useState<any[]>(new Array(0));
    const [toggleState, setToggleState] = useState(false);

    let data: any[] = [];
    data = dt.filter(i => i.id <= items + 1);

    function sliceData() {
        setItems(Math.max(1, items - 10));
    }

    function removeData() {
        setItems(-1);
    }

    function addData() {
        setItems(Math.min(100, items + 10));
    }

    function addRowToArray() {
        const arr = new Array().concat(stateArray);
        setStateArray(arr);
    }

    return (
        <Flexbox>
            <Flexbox mt={70} mb={20} column>
                <Button label='Slice data' onClick={sliceData} />
                <Button label='Add data' onClick={addData} />
                <Button label='Remove data' onClick={removeData} />
                <Button label='arr state' onClick={addRowToArray} />
            </Flexbox>
            <Table1 />
        </Flexbox>
    )
}

function TFRow(props: { row: any, dispatch: any }) {
    function onChange(e) {
        console.log(e.target.value);
        props.dispatch({
            type: 'changevalue',
            payload: {
                id: props.row.id,
                uuidv2: e.target.value
            }
        })
    }

    return (
        <TextField value={props.row.uuidv2} onChange={onChange} />
    )
}

const Table1 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const tableColumns: SimpleTableTypes.Column[] = [
        { title: '#', dataIndex: 'id', width: 1 },
        { title: 'Fullname', dataIndex: 'name', render: (row, value) => <div style={{ fontSize: '1rem' }}>{value}</div> },
        { title: 'Age', dataIndex: 'age', width: 40, borders: 'right', alignment: 'flex-end' },
        { title: 'Passport ID', dataIndex: 'passport', alignment: 'flex-end' },
        { title: 'uuid', dataIndex: 'uuid', borders: 'right', width: 200, alignment: 'flex-end' },
        { title: 'uuidv2', dataIndex: 'uuidv2', width: 200, alignment: 'flex-end' },
        { title: 'texfield', dataIndex: 'texfield', width: 200, alignment: 'flex-end', render: (row, value) => <TFRow row={row} dispatch={dispatch} /> }
    ]

    return (
        <Flexbox pr={35} pl={50} pt={0} column flex={1}>
            <SimpleTable
                data={state.data}
                groupKey='groupId'
                groups={groups}
                pagination={{
                    pageSize: 5,
                    pageNeighbours: 1
                }}
                // border='all'
                // noDataComponent={<Flexbox flex={1} p={20} justifyContent='center'>А Данных Нет!</Flexbox>}
                columns={tableColumns}
                expandForm={expandForm}
                hideHeaders={false}
            />
        </Flexbox>
    )
}

const groups: SimpleTableTypes.Group[] = [
    { title: 'Первая группа', value: 0 },
    { title: 'Вторая группа', value: 1 },
    { title: 'Третья группа', value: 2 }
]

const expandForm = {
    key: 'expandForm',
    render: (row) => <div>{JSON.stringify(row)}</div>
}

const dt = [
    { "id": 1, "groupId": 0, "name": "Taylor Parisian", "age": 19, "passport": "13ad98544bdbe6a0", "uuid": "184eaebf1782c069", "uuidv2": "a2e3a86cd5a19a85" },
    { "id": 2, "groupId": 1, "name": "Terence Paucek", "age": 16, "passport": "b81c6a2243677fdc", "uuid": "5f5ad1aa0f6f1dd0", "uuidv2": "5fbd003023cdf4dd" },
    { "id": 3, "groupId": 2, "name": "Ella Blanda", "age": 27, "passport": "6ea471d330929cfb", "uuid": "166e65e27b6b1fa3", "uuidv2": "94ce01198be7e0d3" },
    { "id": 4, "groupId": 3, "name": "Melody Ryan", "age": 46, "passport": "090616a5981bf3b9", "uuid": "ff43d199f8b173d3", "uuidv2": "2785b52f96c9169b" }
]