import React, { Fragment, useState } from 'react';
import { Flexbox, TextField, Button } from '../../..';
import useTextField from '../../../hooks/useTextField';
import useNumberСaseString from '../../../hooks/useNumberСaseString';
import useStyles from '../../../hooks/useTheme';
import { Icon } from '../../../';

interface SignUpProps {
    onBack: () => void
    onSignUp: (login: string, password: string, password2: string) => Promise<boolean | undefined>
    onVerify: (login: string, password: string, code: string) => void
    newPasswordsMinLength: number
    pending: boolean,
    value: string
}


export default (props: SignUpProps) => {

    const styles = useStyles();
    const login = useTextField({ id: "LOGIN" });
    const password = useTextField();
    const password2 = useTextField();
    const code = useTextField();

    const charsLeft = useNumberСaseString(props.newPasswordsMinLength - password.value.length, ["знак", "знака", "знаков"]);
    const [nextStep, setNextStep] = useState(false);

    const onSignUp = () => props.onSignUp(login.value, password.value, password2.value);
    const onVerify = () => props.onVerify(login.value, password.value, code.value);

    if (!nextStep) return (
        <Fragment>
            <Flexbox flex={1}>
                <div onClick={props.onBack} style={styles.scenes.lkguest.backButton}>
                    <Icon
                        type="left"
                        style={{ ...styles.scenes.lkguest.backButtonIcon, fontSize: '1.5 rem' }}
                    />
                </div>

                <Flexbox flex={1}>
                    <TextField {...login}
                        placeholder="Телефон/Почта"
                        decoration='borderless'
                        size='large'
                    />
                </Flexbox>
            </Flexbox>

            {login.value && (
                <Flexbox pt='1rem'>
                    <TextField {...password}
                        placeholder={props.value === 'RECOVER' ? 'Новый пароль' : "Придумайте пароль"}
                        type="password"
                        decoration='borderless'
                        size='large'
                    // hint={(() => {
                    //     if (!login.value) return "";
                    //     if (password.value.length <= 0) return "";
                    //     if (password.value.length >= props.newPasswordsMinLength) return "";

                    //     return "Введите еще " + charsLeft;
                    // })()}
                    />
                </Flexbox>
            )}
            {login.value && password.value.length >= props.newPasswordsMinLength && (
                <Flexbox pt='1rem'>
                    <TextField {...password2}
                        placeholder="Повторите пароль"
                        type="password"
                        decoration='borderless'
                        size='large'
                    />
                </Flexbox>
            )}

            <Flexbox justifyContent="space-around" pt={'1rem'}>
                <Flexbox flex={1}>
                    <Button
                        label="Продолжить"
                        color="highlight"
                        size='large'
                        onClick={() => {
                            onSignUp() && setNextStep(true);
                        }}
                        style={styles.scenes.lkguest.submitButton}
                    />
                </Flexbox>
            </Flexbox>
        </Fragment>
    ); else return (
        <Fragment>
            <Flexbox flex={1}>
                <div onClick={() => setNextStep(false)} style={styles.scenes.lkguest.backButton}>
                    <Icon
                        type="left"
                        style={{ ...styles.scenes.lkguest.backButtonIcon, fontSize: '1.5 rem' }}
                    />
                </div>

                <Flexbox flex={1}>
                    <TextField {...code}
                        placeholder="Код подтверждения"
                        decoration='borderless'
                        size='large'
                    />
                </Flexbox>
            </Flexbox>


            <Flexbox justifyContent="space-around" pt={'1rem'}>
                <Flexbox flex={1}>
                    <Button
                        label="Зарегистрироваться"
                        color="highlight"
                        size='large'
                        onClick={onVerify}
                        style={styles.scenes.lkguest.submitButton}
                    />
                </Flexbox>
            </Flexbox>
        </Fragment>
    );
}