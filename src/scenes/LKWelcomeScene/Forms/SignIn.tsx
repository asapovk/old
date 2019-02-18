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
                    decoration='borderBottom'
                />
            </Flexbox>
            {login.value && (
                <Flexbox pt='1rem'>
                    <TextField
                        {...password}
                        placeholder="Введите пароль"
                        type="password"
                        size='large'
                        decoration='borderBottom'
                    />
                </Flexbox>
            )}
            <Flexbox justifyContent='center' pt='.5rem' alignSelf='flex-end'>
                <T1 link onClick={() => props.onSignUp('RECOVER')}>Забыли пароль?</T1>
            </Flexbox>
            <Flexbox column pt='2.75rem'>
                <Flexbox mb='.75rem' column>
                    <Button
                        label="Вход"
                        decoration="highlight"
                        size='large'
                        loading={props.pending}
                        onClick={onSubmit}
                        css={styles.form.submitButton}

                    />
                </Flexbox>
                {props.allowSignUp && (
                    <Flexbox column>
                        <Button
                            label="Регистрация"
                            size='large'
                            decoration="outline"
                            disabled={props.pending}
                            onClick={() => props.onSignUp('SIGNUP')}
                            css={styles.form.secondaryButton}
                        />
                    </Flexbox>
                )}
            </Flexbox>
        </Fragment>
    );
}