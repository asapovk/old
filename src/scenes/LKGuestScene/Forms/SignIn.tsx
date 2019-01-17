import React, { useState, useEffect, Fragment } from 'react';
import { Flexbox, TextField, Button } from '../../..';

import useTextField from '../../../hooks/useTextField';
import createStyles from '../Styles';

interface SignInProps {
    allowSignUp: boolean
    onSignUp: () => void
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
                        decoration="highlight"
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
                            decoration="highlight"
                            disabled={props.pending}
                            onClick={props.onSignUp}
                            style={styles.form.secondaryButton}
                        />
                    </Flexbox>
                )}
            </Flexbox>
        </Fragment>
    );
}