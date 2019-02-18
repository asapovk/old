import React, { useState } from 'react';

import SignIn from './SignIn';
import SignUp from './SignUp';

import alert from '../../../utils/alert';

import useLocalStorage from '../../../hooks/useLocalStorage';
import Types from '../types'

export default (props: Types.Props) => {

    const { value, setValue } = useLocalStorage("LOGIN_PAGE_INDEX", "SIGNIN")!;

    const [pending, setPending] = useState(false);

    let localeLoginOrPasswordIncorrent = "Не верная пара логин/пароль";
    let localePasswordsNotMatch = "Пароли не совпадают";
    let localePasswordsNotMatchPattern = "Пароль не соответвуют требованиям";

    if (props.config && props.config.locale && props.config.locale.loginOrPasswordIncorrent) {
        localeLoginOrPasswordIncorrent = props.config.locale.loginOrPasswordIncorrent;
    }
    if (props.config && props.config.locale && props.config.locale.passwordsNotMatch) {
        localePasswordsNotMatch = props.config.locale.passwordsNotMatch;
    }
    if (props.config && props.config.locale && props.config.locale.passwordsNotMatchPattern) {
        localePasswordsNotMatchPattern = props.config.locale.passwordsNotMatchPattern;
    }

    /**
     * Авторизация
     */
    const onLogin = async (login, password) => {
        try {
            setPending(true);
            const result = await props.onLogin(login, password);

            if (!result.ok) {
                throw new Error(result.message || localeLoginOrPasswordIncorrent)
            }
        } catch (error) {
            alert({
                title: "Ошибка входа",
                text: error.message,
            });
        } finally {
            setPending(false);
        }
    }

    /**
     * Регистрация
     */
    const onSignUp = async (login, password, password2) => {
        if (!props.onRegister) {
            return;
        }
        try {
            if (password !== password2) {
                throw new Error(localePasswordsNotMatch);
            }
            if (props.config && props.config.newPasswordsMinLength) {
                if (password.length < props.config.newPasswordsMinLength) {
                    throw new Error(localePasswordsNotMatchPattern);
                }
            }
            if (props.config && props.config.newPasswordsPattern) {
                if (!props.config.newPasswordsPattern.test(password)) {
                    throw new Error(localePasswordsNotMatchPattern);
                }
            }
            setPending(true);
            const result = await props.onRegister(login, password);

            return true;
        } catch (error) {
            alert({
                title: "Ошибка регистрации",
                text: error.message,
            });
            return false;
        } finally {
            setPending(false);
        }
    }

    const onVerify = async (login, password, code) => {
        if (!props.onVerify) {
            return;
        }
        try {
            setPending(true);
            const result = await props.onVerify(login, password, code);

        } catch (error) {
            alert({
                title: "Неверный код",
                text: error.message,
            });

        } finally {
            setPending(false);
        }
    }

    if (value === "SIGNIN") {
        return <SignIn
            allowSignUp={typeof props.onRegister === "function"}
            onSignUp={setValue}
            onSubmit={onLogin}
            pending={pending}
        />
    }

    if (value === "SIGNUP" || value === "RECOVER") {
        return <SignUp
            onBack={() => setValue("SIGNIN")}
            newPasswordsMinLength={props.config && props.config.newPasswordsMinLength || 6}
            onSignUp={onSignUp}
            pending={pending}
            onVerify={onVerify}
            value={value}
        />
    }

    return null;
}