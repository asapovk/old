/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { Fragment } from 'react';
import { Flexbox, TextField, Button, T1, D2 } from '../../../../src';

interface SignInProps {
    onRegister: () => void
}

export default (props: SignInProps) => {

    return (
        <Fragment>
            <D2 mb='2rem'>Добро пожаловать!</D2>
            <Flexbox>
                <TextField
                    placeholder="Ваш логин"
                    size='large'
                    decoration='borderBottom'
                />
            </Flexbox>
            <Flexbox pt='1rem'>
                <TextField
                    placeholder="Введите пароль"
                    type="password"
                    size='large'
                    decoration='borderBottom'
                />
            </Flexbox>
            <Flexbox justifyContent='center' pt='.5rem' alignSelf='flex-end'>
                <T1 link onClick={() => props.onRegister()}>Забыли пароль?</T1>
            </Flexbox>
            <Flexbox column pt='2.75rem'>
                <Flexbox column>
                    <Button
                        label="Вход"
                        decoration="highlight"
                        size='large'
                        css={css({ marginBottom: '.75rem' })}
                    />
                    <Button
                        label="Регистрация"
                        size='large'
                        decoration="outline"
                        onClick={() => props.onRegister()}
                    />
                </Flexbox>
            </Flexbox>
        </Fragment>
    );
}