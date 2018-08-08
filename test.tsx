import React from 'react';
import { Table } from './dist/Table';

class App {
    render() {
        const data = [
            {
                id: "1",
                name: "John"
            },
            {
                id: "1",
                name: "John"
            },
        ]
        const columns = [
            { title: 'Имя', dataIndex: 'name' },
        ]
        return (
            <Table data={data} columns={columns} />
        )
    }
}