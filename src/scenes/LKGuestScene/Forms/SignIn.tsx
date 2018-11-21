import React, { useState, useEffect, Fragment } from 'react';
import { Flexbox, TextField, Button } from '../../..';

import useTextField from '../../../hooks/useTextField';
import ErrorView from './ErrorView';
import useStyles from '../../../hooks/useStyles';

interface SignInProps {
    allowSignUp: boolean
    onSignUp: () => void
    onSubmit: (login: string, password: string) => void
    pending: boolean
    error?: string
}

export default (props: SignInProps) => {
    const styles = useStyles();
    const login = useTextField({ id: "LOGIN" });
    const password = useTextField({});

    const onSubmit = () => props.onSubmit(login.value, password.value);

    return (
        <Fragment>
            <Flexbox>
                <TextField
                    {...login}
                    placeholder="Ваш логин"
                />
            </Flexbox>
            {login.value && (
                <Flexbox pt='1rem'>
                    <TextField
                        {...password}
                        placeholder="Введите пароль"
                        type="password"
                    />
                </Flexbox>
            )}
            <ErrorView message={props.error} />

            <Flexbox justifyContent="space-around" pt={'1rem'}>
                <Flexbox flex={1} pr={'0.5rem'}>
                    <Button
                        label="Вход"
                        decoration="highlight"
                        loading={props.pending}
                        onClick={onSubmit}
                        style={styles.scanes.lkguest.submitButton}

                    />
                </Flexbox>
                {props.allowSignUp && (
                    <Flexbox flex={1} pl={'0.5rem'}>
                        <Button
                            label="Регистрация"
                            decoration="highlight"
                            disabled={props.pending}
                            onClick={props.onSignUp}
                            style={styles.scanes.lkguest.secondaryButton}
                        />
                    </Flexbox>
                )}
            </Flexbox>
        </Fragment>
    );
}