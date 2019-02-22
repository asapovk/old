import React, { useState, useEffect, Fragment } from 'react';
import { Flexbox, TextField, Button, T1 } from '../../..';

import useTextField from '../../../hooks/useTextField';
import createStyles from '../styles';

interface SignInProps {
    allowSignUp: boolean
    onSignUp: (value) => void
    onSubmit: (login: string, password: string) => void
    pending: boolean
}

export default (props: SignInProps) => {
    const styles = createStyles();
    const login = useTextField({ id: "LOGIN" });
    const password = useTextField({});

    const onSubmit = () => props.onSubmit(login.value, password.value);

    return (
        <Fragment>
            <Flexbox>
                <TextField
                    {...login}
                    placeholder="Ваш логин"
                    size='large'
                    decoration='borderless'
                />
            </Flexbox>
            {login.value && (
                <Flexbox pt='1rem'>
                    <TextField
                        {...password}
                        placeholder="Введите пароль"
                        type="password"
                        size='large'
                        decoration='borderless'
                    />
                </Flexbox>
            )}

            <Flexbox justifyContent="space-around" pt={'1rem'}>
                <Flexbox flex={1} pr={'0.5rem'}>
                    <Button
                        label="Вход"
                        color="highlight"
                        size='large'
                        loading={props.pending}
                        onClick={onSubmit}
                        style={styles.form.submitButton}

                    />
                </Flexbox>
                {props.allowSignUp && (
                    <Flexbox flex={1} pl={'0.5rem'}>
                        <Button
                            label="Регистрация"
                            size='large'
                            color="highlight"
                            disabled={props.pending}
                            onClick={() => props.onSignUp('SIGNUP')}
                            style={styles.form.secondaryButton}
                        />
                    </Flexbox>
                )}
            </Flexbox>
            <Flexbox justifyContent='center' pt='1rem'>
                <T1 link onClick={() => props.onSignUp('RECOVER')}>Забыли пароль?</T1>
            </Flexbox>
        </Fragment>
    );
}