import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { TextField } from '../src/TextField';
import { Table } from '../src/Table';
import { Viewport } from '../src/Viewport';
import { Button } from '../src/Button';

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
    .add('Button', () => (
        <Viewport><Button label='Click me' /></Viewport>
    ))
    .add('TextField', () => (
        <Viewport><TextField label='Label' /></Viewport>
    ))
    .add('Table', () => (
        <Viewport><Table data={data} columns={columns} /></Viewport>
    ));

