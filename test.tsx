import React from 'react';
import { Table } from './dist/Table';
import { TableActionsTypes, ActionsButton } from './src/Table/Table';

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
            <Table
                data={data}
                columns={columns}
                actions={[
                    {
                        type: TableActionsTypes.button,
                        label: "Action",
                        onClick: (event) => console.log(event)
                    },
                    {
                        type: TableActionsTypes.trigger,
                        label: "Trigger",
                        target: {
                            render: (row) => <div>{JSON.stringify(row)}</div>,
                            actions: [
                                {
                                    label: "Отправить",
                                    onClick: (row) => {
                                        console.log(row)
                                    }
                                }
                            ] as ActionsButton[]
                        }
                    }
                ]}
            />
        )
    }
}