import React, { useState, useEffect, Fragment } from 'react';
import { Flexbox, TextField, Button } from '../../..';

import useTextField from '../../../hooks/useTextField';
import useStyles from '../../../hooks/useTheme';

interface SignInProps {
    allowSignUp: boolean
    onSignUp: () => void
    onSubmit: (login: string, password: string) => void
    pending: boolean
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

            <Flexbox justifyContent="space-around" pt={'1rem'}>
                <Flexbox flex={1} pr={'0.5rem'}>
                    <Button
                        label="Вход"
                        decoration="highlight"
                        loading={props.pending}
                        onClick={onSubmit}
                        style={styles.scenes.lkguest.submitButton}

                    />
                </Flexbox>
                {props.allowSignUp && (
                    <Flexbox flex={1} pl={'0.5rem'}>
                        <Button
                            label="Регистрация"
                            decoration="highlight"
                            disabled={props.pending}
                            onClick={props.onSignUp}
                            style={styles.scenes.lkguest.secondaryButton}
                        />
                    </Flexbox>
                )}
            </Flexbox>
        </Fragment>
    );
}