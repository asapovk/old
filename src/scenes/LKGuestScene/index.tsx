import React, { useContext } from 'react';
import { Flexbox, Styles } from '../..';
import { IconType } from '../../Icon/Icon';

import Main from './Main';
import Footer from './Footer';
import useStyles from '../../hooks/useStyles';

interface GuestSceneConfig {
    title?: string,
    /**
     * Регулярка проверки пароля
     */
    newPasswordsPattern?: RegExp
    /**
     * Минимальное количество знаков в пароле
     */
    newPasswordsMinLength?: number
    /**
     * Локализация
     */
    locale?: {
        /**
         * Заголовок на форме входа
         */
        title?: string,
        /**
         * Логин или пароль не верный
         */
        loginOrPasswordIncorrent?: string
        /**
         * Пароли не совпадают
         */
        passwordsNotMatch?: string
        /**
         * Пароли не соответсвуют newPasswordsPattern
         */
        passwordsNotMatchPattern?: string
    },
}

interface OnLoginPromiseReturn {
    ok: boolean
    message?: string
    requireVerify?: boolean
}

interface GuestSceneFooterActions {
    title: string
    icon: IconType
    onAction?: () => void
}

export interface GuestSceneProps {
    config?: GuestSceneConfig
    onLogin: (login: string, password: string) => Promise<OnLoginPromiseReturn>
    onRegister?: (login: string, password: string) => Promise<OnLoginPromiseReturn>
    onRecovery?: (login: string, password: string) => Promise<OnLoginPromiseReturn>
    onVeritfy?: (login: string, code: string) => Promise<OnLoginPromiseReturn>
    footerActions?: GuestSceneFooterActions[]
    /**
     * Заголовок - слоган
     */
    title?: string
    components?: {
        /**
         * Логотип
         */
        logo?: any
        /**
         * Правая область экрана
         */
        right?: any
    }
}

export default (props: GuestSceneProps) => {

    const styles = useStyles();

    return (
        <Flexbox style={{ height: "100%" }} flexDirection="column">
            <Main {...props} />
            <Footer {...props} />
        </Flexbox>
    );
}