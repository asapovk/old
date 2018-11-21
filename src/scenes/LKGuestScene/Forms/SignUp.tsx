import React, { Fragment } from 'react';
import { Flexbox, TextField, Button } from '../../..';
import useTextField from '../../../hooks/useTextField';
import useNumberСaseString from '../../../hooks/useNumberСaseString';
import useStyles from '../../../hooks/useStyles';
import { Icon } from '../../../Icon';

interface SignUpProps {
    onBack: () => void
    onSubmit: (login: string, password: string, password2: string) => void
    newPasswordsMinLength: number
    pending: boolean
}


export default (props: SignUpProps) => {

    const styles = useStyles();
    const login = useTextField({ id: "LOGIN" });
    const password = useTextField();
    const password2 = useTextField();

    const charsLeft = useNumberСaseString(props.newPasswordsMinLength - password.value.length, ["знак", "знака", "знаков"]);

    const onSubmit = () => props.onSubmit(login.value, password.value, password2.value);

    return (
        <Fragment>
            <Flexbox flex={1}>
                <div onClick={props.onBack} style={styles.scanes.lkguest.backButton}>
                    <Icon
                        type="left"
                        size={1.5}
                        style={styles.scanes.lkguest.backButtonIcon}
                    />
                </div>

                <Flexbox flex={1}>
                    <TextField {...login}
                        placeholder="Телефон/Почта"
                    />
                </Flexbox>
            </Flexbox>

            {login.value && (
                <Flexbox pt='1rem'>
                    <TextField {...password}
                        placeholder="Придумайте пароль"
                        type="password"
                        hint={(() => {
                            if (!login.value) return "";
                            if (password.value.length <= 0) return "";
                            if (password.value.length >= props.newPasswordsMinLength) return "";

                            return "Введите еще " + charsLeft;
                        })()}
                    />
                </Flexbox>
            )}
            {login.value && password.value.length >= props.newPasswordsMinLength && (
                <Flexbox pt='1rem'>
                    <TextField {...password2}
                        placeholder="Повторите пароль"
                        type="password"
                    />
                </Flexbox>
            )}

            <Flexbox justifyContent="space-around" pt={'1rem'}>
                <Flexbox flex={1}>
                    <Button
                        label="Зарегистрироваться"
                        decoration="highlight"
                        onClick={onSubmit}
                        style={styles.scanes.lkguest.submitButton}
                    />
                </Flexbox>
            </Flexbox>
        </Fragment>
    );
}