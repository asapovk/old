import React, { useState } from 'react';

import SignIn from './SignIn';
import SignUp from './SignUp';

import useLocalStorage from '../../../hooks/useLocalStorage';
import { GuestSceneProps } from '..';

export default (props: GuestSceneProps) => {

    const { value, setValue } = useLocalStorage("LOGIN_PAGE_INDEX", "SIGNIN")!;
    const [error, setError] = useState('');
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
            setError('');
            const result = await props.onLogin(login, password);

            if (!result.ok) {
                throw new Error(result.message || localeLoginOrPasswordIncorrent)
            }
            setError('');
        } catch (error) {
            setError(error.message);
        } finally {
            setPending(false);
        }
    }

    /**
     * Регистрация
     */
    const onSignIn = async (login, password, password2) => {
        if (!props.onRegister) {
            return;
        }
        try {
            if (password !== password2) {
                setError(localePasswordsNotMatch);
                return;
            }
            if (props.config && props.config.newPasswordsMinLength) {
                if (password.length < props.config.newPasswordsMinLength) {
                    setError(localePasswordsNotMatchPattern);
                    return;
                }
            }
            if (props.config && props.config.newPasswordsPattern) {
                if (!props.config.newPasswordsPattern.test(password)) {
                    setError(localePasswordsNotMatchPattern);
                    return;
                }
            }
            setPending(true);
            setError('');
            const result = await props.onRegister(login, password);

            if (!result.ok) {
                throw new Error(result.message || 'Ошибка авторизации')
            }
            setError('');
        } catch (error) {
            setError(error.message);
        } finally {
            setPending(false);
        }
    }

    if (value === "SIGNIN") {
        return <SignIn
            allowSignUp={typeof props.onRegister === "function"}
            onSignUp={() => setValue("SIGNUP")}
            onSubmit={onLogin}
            pending={pending}
            error={error}
        />
    }

    if (value === "SIGNUP") {
        return <SignUp
            onBack={() => setValue("SIGNIN")}
            newPasswordsMinLength={props.config && props.config.newPasswordsMinLength || 6}
            onSubmit={onSignIn}
            pending={pending}
            error={error}
        />
    }

    return null;
}