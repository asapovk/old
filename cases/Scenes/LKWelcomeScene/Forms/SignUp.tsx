/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { Fragment } from 'react';
import { Flexbox, TextField, Button, T1, D2 } from '../../../../src';

interface SignUpProps {
    onEnter: () => void
}

export default (props: SignUpProps) => {

    return (
        <Fragment>
            <D2 mb='2rem'>Регистрация</D2>
            <Flexbox>
                <TextField
                    placeholder="Телефон/Email"
                    size='large'
                    decoration='borderBottom'
                />
            </Flexbox>
            <Flexbox pt='1rem'>
                <TextField
                    placeholder="Придумайте пароль"
                    type="password"
                    size='large'
                    decoration='borderBottom'
                />
            </Flexbox>
            <Flexbox pt='1rem'>
                <TextField
                    placeholder="Повторите пароль"
                    type="password"
                    size='large'
                    decoration='borderBottom'
                />
            </Flexbox>
            <Flexbox column pt='2.75rem'>
                <Flexbox column>
                    <Button
                        label="Продолжить"
                        color="highlight"
                        size='large'
                        css={css({ marginBottom: '.75rem' })}
                    />
                    <Flexbox justifyContent='center' pt='.5rem' alignSelf='center'>
                        <T1 link onClick={() => props.onEnter()}>Уже есть аккаунт?</T1>
                    </Flexbox>
                </Flexbox>
            </Flexbox>
        </Fragment>
    );
}