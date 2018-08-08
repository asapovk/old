import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { TextField } from '../src/TextField';
import { Table } from '../src/Table';

import '../src/scss/main.scss';

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
    .add('TextField', () => (
        <TextField label='Label' />
    ))
    .add('Table', () => (
        <Table data={data} columns={columns} />
    ));

