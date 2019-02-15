import { IconTypes } from '../../core/types';

export interface GuestSceneConfig {
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

export interface OnLoginPromiseReturn {
    ok: boolean
    message?: string
    requireVerify?: boolean
}

export interface GuestSceneActions {
    title: string
    icon: IconTypes.Type
    onAction?: () => void
}

export interface GuestSceneProps {
    title?: string
    logo?: any
    story?: any
    config?: GuestSceneConfig
    onLogin: (login: string, password: string) => Promise<OnLoginPromiseReturn>
    onRegister?: (login: string, password: string) => Promise<OnLoginPromiseReturn>
    onRecovery?: (login: string, password: string) => Promise<OnLoginPromiseReturn>
    onVerify?: (login: string, password: string, code: string) => Promise<OnLoginPromiseReturn>
    actions?: GuestSceneActions[]
}
