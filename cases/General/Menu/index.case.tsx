import React, { Fragment, useState } from 'react';
import { Menu, Button, Icon, Viewport } from '../../../src';
import '../../../src/Styles/scss/main.scss';

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
        <Viewport>
            <Fragment>
                <Menu
                    header={<Header />}
                    items={{
                        list: [{ label: 'Pineapple' }, { label: 'Grape' }, { label: 'Peach' }, { label: 'Strawberry' }, { label: 'Cucumber' }, { label: 'LongLabel' }, { label: 'VeryLongLabel' }],
                        active: active,
                        onClick: setActive
                    }}
                    profile={{
                        name: loginUser.first_name,
                        login: loginUser.login,
                        fullname: loginUser.first_name + ' ' + loginUser.last_name,
                        role: loginUser.desc_role
                    }}
                    toolsRight={[
                        <Button decoration='none' onClick={() => console.log(1)}>
                            <Icon type='add' size={1.5} />
                        </Button>,
                        <Button decoration='none' style={{ fontSize: 24 }} onClick={() => console.log(2)}>
                            <Icon type='filter' size={1.5} />
                        </Button>
                    ]}
                />
            </Fragment>
        </Viewport>
    )
}