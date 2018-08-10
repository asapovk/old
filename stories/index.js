import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { TextField } from '../src/TextField';
import { Table } from '../src/Table';
import { Viewport } from '../src/Viewport';
import { Button } from '../src/Button';
import { Menu, Nav } from '../src/Menu';

import '../src/scss/main.scss';
import { TableActionsTypes } from '../src/Table/Table';

const data = [
    { index: '1', name: 'Jhon', addres: 'Hover street' },
    { index: '1', name: 'Michel', addres: 'Flower street' },
    { index: '1', name: 'David', addres: 'Never street' }
]

const columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Addres', dataIndex: 'addres' }
]

const flexCentered = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

storiesOf('UI Core', module)
    .add('Button', () => (
        <Viewport style={flexCentered}><Button>Click me</Button></Viewport>
    ))
    .add('TextField', () => (
        <Viewport style={flexCentered}><TextField label='Label' /></Viewport>
    ))
    .add('Table', () => (
        <Viewport style={flexCentered}>
            <Table
                style={{ width: '100%' }}
                data={data}
                columns={columns}
                actions={[
                    {
                        label: "Action",
                        onClick: (event) => console.log(event)
                    }
                ]}
            />
        </Viewport>
    ))
    .add('Menu', () => (
        <Viewport>
            <Menu header={{ label: 'Connect: Module', onAction: () => console.log('Bip-bop') }}>
                <Nav active={true}>About</Nav>
                <Nav>Events</Nav>
                <Nav onClick={() => console.log('fly away')}>Intelligence</Nav>
                <Nav>Jobs</Nav>
            </Menu>
        </Viewport>
    ));

