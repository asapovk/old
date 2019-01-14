import React, { Fragment, useState } from 'react';
import { Menu, Button, Icon } from '../../../src';
import { Login } from '../../../src/extra'
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

    const [active, setActive] = useState('pin');

    const items = [
        { text: 'Pineapple', value: 'pin' },
        { text: 'Grape', value: 'grape' },
        { text: 'Peach', value: 'peach' },
        { text: 'Strawberry', value: 'str' },
        { text: 'Cucumber', value: 'cuc' },
        { text: 'Banana', value: 'ban' },
        { text: 'Potato', value: 'pot' },
        { text: 'Watermelon', value: 'wat' },
        { text: 'Cherry', value: 'chr' },
        // { text: 'Coconut', value: 'coc' },
        // { text: 'Mango', value: 'man' },
        // { text: 'Apple', value: 'app' },
        // { text: 'Tomato', value: 'tom' },
    ]

    return (
        <Fragment>
            <Menu
                title='Application title'
                items={items}
                value={active}
                onChange={(value) => setActive(value)}
                tools={[
                    <Icon type='add' onClick={() => console.log(1)} key={1} />,
                    <Icon type='filter' onClick={() => console.log(2)} key={2} />,
                    <Login
                        name={loginUser.first_name}
                        login={loginUser.login}
                        fullname={loginUser.first_name + ' ' + loginUser.last_name}
                        role={loginUser.desc_role}
                        key={3}
                    />
                ]}
            />
        </Fragment>
    )
}