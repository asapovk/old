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
        return (
            <Table data={data} />
        )
    }
}