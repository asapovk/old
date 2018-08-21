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
import { Spinner } from '../src/Spinner';
import { Modal } from '../src/Modal';
import { Flexbox } from '../src/Flexbox';
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

const optionsMulti = [
    { text: "Gregory Oberbrunner MD", value: "greg" },
    { text: "Craig O'Conner", value: "craig" },
    { text: "Annette Kshlerin", value: "ann" },
    { text: "Marjorie Hirthe", value: "marj" },
    { text: "Israel Flatley", value: "isra" },
    { text: "Kristin Smith", value: "kris" },
    { text: "Dr. Hilda Willms", value: "hilda" },
    { text: "Eric Gerhold", value: "eric" },
    { text: "Laurie Stiedemann", value: "laurie" },
    { text: "Irving Hauck", value: "irv" }
];

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


storiesOf('💥 Core', module)
    .add('Viewport', () => (
        <Viewport style={flexCentered}>there's nothing to see.</Viewport>
    ))
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
                label='Multiselect'
                search={true}
                placeholder='Select some'
                options={optionsMulti}
                style={{ padding: '80px' }}
                clearable={true}
                multiselect={true}
                onChange={(value) => console.log('Multi', value)}
            />
            <Select
                label='Select'
                search={true}
                placeholder='Select some'
                defaultValue={'irv'}
                options={optionsMulti}
                style={{ padding: '80px' }}
                onChange={(value) => console.log('Singe', value)}
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
                noDataLabel='Данных то нету...'
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
        <Viewport style={flexCentered}>
            <TooltipStory />
        </Viewport>
    ))
    .add('Checkbox', () => (
        <Viewport style={flexCentered}>
            <Checkbox label='Check me' style={{ paddingRight: '40px' }} />
            <Checkbox label='Check me' radio={true} />
        </Viewport>
    ))
    .add('Icon', () => (
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
    ))
    .add('Spinner', () => (
        <Viewport style={flexCentered}>
            <Spinner spinning />
        </Viewport>
    ))
    .add('Modal', () => (
        <Viewport style={flexCentered}>
            <Modal ref={ref => window.modal = ref}>
                <Flexbox justifyContent="center">
                    <Button onClick={() => window.modal.close()}>Close</Button>
                </Flexbox>
            </Modal>
            <Button onClick={() => window.modal.open()}>Open</Button>
        </Viewport>
    ))
    .add('Flexbox', () => (
        <Viewport style={{ padding: 20 }}>
            <Flexbox style={{ border: "10px solid #000" }}>
                <Flexbox justifyContent="center" style={{ background: "white" }} flex={1}>
                    <div style={{ background: "#333", padding: 10 }}>div</div>
                    <div style={{ background: "#666", padding: 10 }}>div</div>
                    <div style={{ background: "#999", padding: 10 }}>div</div>
                    <div style={{ color: "#333", fontSize: 12, position: "absolute", padding: 5, right: 0, top: 0, background: "rgba(255,255,255,0.5)" }}>{`flex={1} justifyContent="center"`}</div>
                </Flexbox>
            </Flexbox>
            <br />
            <Flexbox style={{ border: "10px solid #000" }}>
                <Flexbox justifyContent="flex-start" style={{ background: "white" }} flex={1}>
                    <div style={{ background: "#333", padding: 10 }}>div</div>
                    <div style={{ background: "#666", padding: 10 }}>div</div>
                    <div style={{ background: "#999", padding: 10 }}>div</div>
                    <div style={{ color: "#333", fontSize: 12, position: "absolute", padding: 5, right: 0, top: 0, background: "rgba(255,255,255,0.5)" }}>{`flex={1} justifyContent="flex-start" (default)`}</div>
                </Flexbox>
            </Flexbox>
            <br />
            <Flexbox style={{ border: "10px solid #000" }}>
                <Flexbox justifyContent="space-between" style={{ background: "white" }} flex={1}>
                    <div style={{ background: "#333", padding: 10 }}>div</div>
                    <div style={{ background: "#666", padding: 10 }}>div</div>
                    <div style={{ background: "#999", padding: 10 }}>div</div>
                    <div style={{ color: "#333", fontSize: 12, position: "absolute", padding: 5, right: 0, top: 0, background: "rgba(255,255,255,0.5)" }}>{`flex={1} justifyContent="space-between"`}</div>
                </Flexbox>
            </Flexbox>
            <br />
            <Flexbox style={{ border: "10px solid #000" }}>
                <Flexbox justifyContent="space-around" style={{ background: "white" }} flex={1}>
                    <div style={{ background: "#333", padding: 10 }}>div</div>
                    <div style={{ background: "#666", padding: 10 }}>div</div>
                    <div style={{ background: "#999", padding: 10 }}>div</div>
                    <div style={{ color: "#333", fontSize: 12, position: "absolute", padding: 5, right: 0, top: 0, background: "rgba(255,255,255,0.5)" }}>{`flex={1} justifyContent="space-around"`}</div>
                </Flexbox>
            </Flexbox>
            <br />
            <Flexbox style={{ border: "10px solid #000" }}>
                <Flexbox justifyContent="space-evenly" style={{ background: "white" }} flex={1}>
                    <div style={{ background: "#333", padding: 10 }}>div</div>
                    <div style={{ background: "#666", padding: 10 }}>div</div>
                    <div style={{ background: "#999", padding: 10 }}>div</div>
                    <div style={{ color: "#333", fontSize: 12, position: "absolute", padding: 5, right: 0, top: 0, background: "rgba(255,255,255,0.5)" }}>{`flex={1} justifyContent="space-evenly"`}</div>
                </Flexbox>
            </Flexbox>
            <br />
            <Flexbox style={{ border: "10px solid #000" }}>
                <Flexbox style={{ background: "white" }} flex={1} p={40}>
                    <Flexbox style={{ background: "#333" }} pb={20} flex={1}>{`pb={20} flex={1}`}</Flexbox>
                    <Flexbox style={{ background: "#666" }} pl={20} flex={1}>{`pl={20} flex={2}`}</Flexbox>
                    <Flexbox style={{ background: "#999" }} pt={20} flex={1}>{`pt={20} flex={3}`}</Flexbox>
                    <div style={{ color: "#333", fontSize: 12, position: "absolute", padding: 5, right: 0, top: 0, background: "rgba(255,255,255,0.5)" }}>{`flex={1} p={40}"`}</div>
                </Flexbox>
            </Flexbox>
            <br />
            <Flexbox style={{ border: "10px solid #000" }}>
                <Flexbox column style={{ background: "white" }} flex={1}>
                    <Flexbox style={{ background: "#333" }} p={20} flex={1}>div</Flexbox>
                    <Flexbox style={{ background: "#666" }} p={20} flex={1}>div</Flexbox>
                    <Flexbox style={{ background: "#999" }} p={20} flex={1}>div</Flexbox>
                    <div style={{ color: "#333", fontSize: 12, position: "absolute", padding: 5, right: 0, top: 0, background: "rgba(255,255,255,0.5)" }}>{`flex={1} column`}</div>
                </Flexbox>
            </Flexbox>
            <br />
            <Flexbox style={{ border: "10px solid #000" }}>
                <Flexbox column style={{ background: "white" }} flex={1}>
                    <Flexbox style={{ background: "#333" }} p={20} alignSelf="flex-end">alignSelf="flex-end"</Flexbox>
                    <Flexbox style={{ background: "#666" }} p={20} alignSelf="flex-start">alignSelf="flex-start"</Flexbox>
                    <Flexbox style={{ background: "#999" }} p={20} alignSelf="center">alignSelf="center"</Flexbox>
                    <Flexbox style={{ background: "#CCC" }} p={20} alignSelf="stretch">alignSelf="stretch" (default)</Flexbox>
                    <div style={{ color: "#333", fontSize: 12, position: "absolute", padding: 5, right: 0, top: 0, background: "rgba(255,255,255,0.5)" }}>{`flex={1} column`}</div>
                </Flexbox>
            </Flexbox>
            <br />
        </Viewport >
    ));

storiesOf('🔪 Misc', module)
    .add('Login', () => (
        <Viewport style={flexCentered}>
            <Login
                name={user.first_name}
                login={user.login}
                fullname={user.first_name + ' ' + user.last_name}
                role={user.desc_role}
            />
        </Viewport>
    ));
