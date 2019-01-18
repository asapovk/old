import React from 'react';
import { Login } from '../../../src/extra'
import { loginUser } from '../../Core/Menu/index.case'
import '../../../src/styles/scss/main.scss';

export default class Story extends React.Component {
    render() {
        return (
            <Login
                name={loginUser.first_name}
                login={loginUser.login}
                fullname={loginUser.first_name + ' ' + loginUser.last_name}
                role={loginUser.desc_role}
            />
        )
    }
}