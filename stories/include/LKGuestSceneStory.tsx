import React, { Fragment } from 'react';
import Scene from '../../src/scenes/LKGuestScene';

export default class Story extends React.Component {
    render() {
        return (
            <Scene
                config={{
                    newPasswordsMinLength: 8,
                }}
                onLogin={async (login, password) => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            reject({
                                ok: false,
                                message: "Не верный логин или пароль"
                            })
                        }, 1000);
                    }) as any;
                }}
                onRegister={async (login, password) => {
                    return {
                        ok: false,
                        message: 'Ха-ха, я знаю твой пароль ' + password
                    }
                }}
            />
        )
    }
}