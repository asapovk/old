import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { TextField } from '../src/TextField';
import { Table } from '../src/Table';
import { Viewport } from '../src/Viewport';
import { Button } from '../src/Button';
// import { Menu } from '../src/Menu';

import '../src/scss/main.scss';
import { TableActionsTypes } from '../src/Table/Table';

const data = [
    { index: '1', name: 'Jhon', addres: 'Hover street' },
    { index: '1', name: 'Michel', addres: 'Flower street' },
    { index: '1', name: 'David', addres: 'Never street' }
]

const columns = [
    { title: 'Имя', dataIndex: 'name' },
    { title: 'Адрес', dataIndex: 'addres' }
]

storiesOf('TSX Components', module)
    .add('Button', () => (
        <Viewport><Button>Click me</Button></Viewport>
    ))
    .add('TextField', () => (
        <Viewport><TextField label='Label' /></Viewport>
    ))
    .add('Table', () => (
        <Viewport>
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
                            render: <div>Yes!!</div>,
                            actions: [{
                                label: "Отправить",
                                onClick: (row) => {
                                    console.log(row)
                                }
                            }]
                        }
                    }
                ]}
            />
        </Viewport>
    ));
    // .add('Menu', () => (
    // <Viewport><Menu /></Viewport>
// ));

