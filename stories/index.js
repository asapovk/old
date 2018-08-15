import React from 'react';

import { storiesOf } from '@storybook/react';
import '../src/scss/main.scss';

import { TextField } from '../src/TextField';
import { Select } from '../src/Select';
import { Table } from '../src/Table';
import { Viewport } from '../src/Viewport';
import { Button } from '../src/Button';
import { Menu, Nav } from '../src/Menu';
import { Icon } from '../src/Icon';
import { Login } from '../src/Login';
import { Checkbox } from '../src/Checkbox';
import TooltipStory from './TooltipStory';


const flexCentered = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const options = [
    { text: 'Banana', value: 'bn' },
    { text: 'Cherry', value: 'ch' },
    { text: 'Watermelon', value: 'wtm' },
    { text: 'Pear', value: 'pr' },
]

const data = [
    { index: '1', name: 'Jhon', addres: 'Hover street' },
    { index: '1', name: 'Michel', addres: 'Flower street' },
    { index: '1', name: 'David', addres: 'Never street' }
]

const columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Addres', dataIndex: 'addres' }
]

const user = {
    id_user: 1,
    login: "admin",
    first_name: "Администратор",
    last_name: "",
    middle_name: "",
    email: null,
    id_role: 1,
    nm_rome: "admin",
    desc_role: "Адмнистратор",
    session_uuid: "00000000-0000-0000-0000-000000000000",
    modules: "helloworld,sandbox",
}


storiesOf('UI Core', module)
    .add('Button', () => (
        <Viewport style={flexCentered}><Button>Click me</Button></Viewport>
    ))
    .add('TextField', () => (
        <Viewport style={flexCentered}>
            <div style={{ width: '626px', display: 'flex', flexDirection: 'column', height: '500px' }}>
                <TextField label='Just input' style={{ flexBasis: '90px', flexGrow: '0' }} />
                <TextField multiline={true} label='Textarea' style={{ paddingBottom: '40px' }} />
                <TextField multiline={true} singlerow={true} label='Singlerow textarea' />
            </div>
        </Viewport>
    ))
    .add('Select', () => (
        <Viewport style={flexCentered}>
            <Select
                label='Choose your fruit'
                defaultValue='bn'
                search={true}
                options={options}
            />
        </Viewport>
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
                        onAction: (event) => console.log(event)
                    }
                ]}
            />
        </Viewport>
    ))
    .add('Menu', () => (
        <Viewport>
            <Menu
                header={<div><span style={{ fontWeight: 700, paddingRight: '10px' }}>Connect</span><span>Module</span></div>}
                search={true}
                toolsLeft={[
                    <Button decoration='none' style={{ fontSize: '24px' }}>
                        <Icon type='add' />
                    </Button>,
                    <Button decoration='none' style={{ fontSize: '24px' }}>
                        <Icon type='pin' />
                    </Button>
                ]}
                toolsRight={[
                    <Login
                        name={user.first_name}
                        login={user.login}
                        fullname={user.first_name + ' ' + user.last_name}
                        role={user.desc_role}
                    />
                ]}
            >
                <Nav active={true}>Pineapple</Nav>
                <Nav>Grape</Nav>
                <Nav onClick={() => console.log('fly away')}>Peach</Nav>
                <Nav>Strawberry</Nav>
            </Menu>
        </Viewport>
    ))
    .add('Tooltip', () => (
        <Viewport style={flexCentered}><TooltipStory /></Viewport>
    ))
    .add('Checkbox', () => (
        <Viewport style={flexCentered}><Checkbox label='Check me' /></Viewport>
    ));

