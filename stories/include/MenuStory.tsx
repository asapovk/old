import React, { Fragment, useState } from 'react';
import { Menu, Nav, Login } from '../../src';

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

export default () => {

    const [active, setActive] = useState(0);

    const Header = () => {
        return (
            <div>
                <span style={{ fontWeight: 700, paddingRight: '10px' }}>Connect</span>
                <span>Module</span>
            </div>
        )
    }

    return (
        <Fragment>
            <Menu
                header={<Header />}
                items={{
                    list: [{ label: 'Pineapple' }, { label: 'Grape' }, { label: 'Peach' }, { label: 'Strawberry' }],
                    active: active,
                    onClick: setActive
                }}
                profile={{
                    name: loginUser.first_name,
                    login: loginUser.login,
                    fullname: loginUser.first_name + ' ' + loginUser.last_name,
                    role: loginUser.desc_role
                }}
            />
        </Fragment>
    )
}