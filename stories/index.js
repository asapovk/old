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
import Fakerator from 'fakerator';

const flexCentered = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

var fakerator = Fakerator();

const data = [];
for (let i = 0; i < 200; i++) {
    data.push({
        id: i + 1,
        name: fakerator.names.name(),
        age: fakerator.random.number(16, 50),
        passport: fakerator.random.hex(16),
    });
}

const options = [];
for (let i = 0; i < 10; i++) {
    options.push({
        text: fakerator.names.name(),
        value: fakerator.random.hex(4),
    });
}

const columns = [
    { title: '#', dataIndex: 'id' },
    { title: 'Fullname', dataIndex: 'name' },
    { title: 'Age', dataIndex: 'age' },
    { title: 'Passport ID', dataIndex: 'passport' }

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
                style={{ padding: '80px' }}
                clearable={true}
            />
        </Viewport>
    ))
    .add('Table', () => (
        <Viewport>
            <Table
                style={{ padding: 20 }}
                data={data}
                pagination={{
                    pageSize: 10
                }}
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
    ))
    .add('Icons', () => (
        <Viewport style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'row', fontSize: 24, justifyContent: 'space-between', padding: '80px' }}>
            <style children='.desc{font-size: 12px; color: #5c6173; padding-top: 10px} .cont{display: flex; align-items: center; flex-direction: column}' />
            <div className='cont'><Icon type='add' /><span className='desc'>Add</span></div>
            <div className='cont'><Icon type='more' /><span className='desc'>more</span></div>
            <div className='cont'><Icon type='close' /><span className='desc'>close</span></div>
            <div className='cont'><Icon type='left' /><span className='desc'>left</span></div>
            <div className='cont'><Icon type='down' /><span className='desc'>down</span></div>
            <div className='cont'><Icon type='up' /><span className='desc'>up</span></div>
            <div className='cont'><Icon type='check' /><span className='desc'>check</span></div>
            <div className='cont'><Icon type='search' /><span className='desc'>search</span></div>
            <div className='cont'><Icon type='sync' /><span className='desc'>sync</span></div>
        </Viewport >
    ));

