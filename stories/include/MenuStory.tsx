import React, { Fragment } from 'react';
import { Viewport, Menu, Nav, Button, Icon, Login } from '../../src';

export const loginUser = {
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

export default class MenuStory extends React.Component {

    render() {
        return (
            <Fragment>
                <Menu
                    header={<div><span style={{ fontWeight: 700, paddingRight: '10px' }}>Connect</span><span>Module</span></div>}
                    //search={true}
                    toolsLeft={[
                        <Button decoration='none' style={{ fontSize: '24px' }}>
                            <Icon type='add' />
                        </Button>,
                        <Button decoration='none' style={{ fontSize: '24px' }}>
                            <Icon type='filter' />
                        </Button>
                    ]}
                    toolsRight={[
                        <Login
                            name={loginUser.first_name}
                            login={loginUser.login}
                            fullname={loginUser.first_name + ' ' + loginUser.last_name}
                            role={loginUser.desc_role}
                        />
                    ]}
                >
                    <Nav active={true}>Pineapple</Nav>
                    <Nav>Grape</Nav>
                    <Nav onClick={() => console.log('fly away')}>Peach</Nav>
                    <Nav>Strawberry</Nav>
                </Menu>
            </Fragment>
        )
    }
}