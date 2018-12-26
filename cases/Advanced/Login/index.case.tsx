import React, { Fragment } from 'react';
import { Login, Viewport } from '../../../src';
import { loginUser } from '../../General/Menu/index.case';
import '../../../src/Styles/scss/main.scss';

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