import React, { Fragment } from 'react';
import { Login } from '../../src';
import { loginUser } from './MenuStory';

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