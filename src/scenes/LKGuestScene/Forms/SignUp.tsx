import React, { Fragment } from 'react';
import { Flexbox, TextField, Button } from '../../..';
import useTextField from '../../../hooks/useTextField';
import useNumberСaseString from '../../../hooks/useNumberСaseString';
import ErrorView from './ErrorView';

interface SignUpProps {
    onBack: () => void
    onSubmit: (login: string, password: string, password2: string) => void
    newPasswordsMinLength: number
    pending: boolean
    error?: string
}


export default (props: SignUpProps) => {

    const login = useTextField({ id: "LOGIN" });
    const password = useTextField();
    const password2 = useTextField();

    const charsLeft = useNumberСaseString(props.newPasswordsMinLength - password.value.length, ["знак", "знака", "знаков"]);

    const onSubmit = () => props.onSubmit(login.value, password.value, password2.value);

    return (
        <Fragment>
            <Flexbox flex={1}>
                <Button
                    decoration={"none"}
                    style={{ width: "100%" }}
                    label="<"
                    onClick={props.onBack}
                />
            </Flexbox>

            <Flexbox>
                <TextField {...login}
                    placeholder="Телефон/Почта"
                />
            </Flexbox>

            {login.value && (
                <Flexbox pt='1rem'>
                    <TextField {...password}
                        placeholder="Придумайте пароль"
                        type="password"
                    />
                </Flexbox>
            )}
            {password.value.length > 0 && password.value.length < props.newPasswordsMinLength && (
                <div>Введите еще {charsLeft} </div>
            )}
            {password.value.length >= props.newPasswordsMinLength && (
                <Flexbox pt='1rem'>
                    <TextField {...password2}
                        placeholder="Повторите пароль"
                        type="password"
                    />
                </Flexbox>
            )}

            <ErrorView message={props.error} />

            <Flexbox justifyContent="space-around" pt={'1rem'}>
                <Flexbox flex={1}>
                    <Button
                        label="Зарегистрироваться"
                        decoration="highlight"
                        style={{ width: "100%" }}
                        onClick={onSubmit}
                    />
                </Flexbox>
            </Flexbox>
        </Fragment>
    );
}