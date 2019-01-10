import { IconTypes } from '../../core/types';
export interface GuestSceneConfig {
    title?: string;
    /**
     * Регулярка проверки пароля
     */
    newPasswordsPattern?: RegExp;
    /**
     * Минимальное количество знаков в пароле
     */
    newPasswordsMinLength?: number;
    /**
     * Локализация
     */
    locale?: {
        /**
         * Заголовок на форме входа
         */
        title?: string;
        /**
         * Логин или пароль не верный
         */
        loginOrPasswordIncorrent?: string;
        /**
         * Пароли не совпадают
         */
        passwordsNotMatch?: string;
        /**
         * Пароли не соответсвуют newPasswordsPattern
         */
        passwordsNotMatchPattern?: string;
    };
}
export interface OnLoginPromiseReturn {
    ok: boolean;
    message?: string;
    requireVerify?: boolean;
}
export interface GuestSceneFooterActions {
    title: string;
    icon: IconTypes.Type;
    onAction?: () => void;
}
export interface GuestSceneProps {
    config?: GuestSceneConfig;
    onLogin: (login: string, password: string) => Promise<OnLoginPromiseReturn>;
    onRegister?: (login: string, password: string) => Promise<OnLoginPromiseReturn>;
    onRecovery?: (login: string, password: string) => Promise<OnLoginPromiseReturn>;
    onVeritfy?: (login: string, code: string) => Promise<OnLoginPromiseReturn>;
    footerActions?: GuestSceneFooterActions[];
    /**
     * Заголовок - слоган
     */
    title?: string;
    components?: {
        /**
         * Логотип
         */
        logo?: any;
        /**
         * Правая область экрана
         */
        right?: any;
    };
}
