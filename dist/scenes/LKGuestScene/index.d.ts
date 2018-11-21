interface GuestSceneConfig {
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
interface OnLoginPromiseReturn {
    ok: boolean;
    message?: string;
    requireVerify?: boolean;
}
interface GuestSceneFooterActions {
    title: string;
    icon: string;
    onAction?: () => void;
}
export interface GuestSceneProps {
    config?: GuestSceneConfig;
    onLogin: (login: string, password: string) => Promise<OnLoginPromiseReturn>;
    onRegister?: (login: string, password: string) => Promise<OnLoginPromiseReturn>;
    onRecovery?: (login: string, password: string) => Promise<OnLoginPromiseReturn>;
    onVeritfy?: (login: string, code: string) => Promise<OnLoginPromiseReturn>;
    footerActions?: GuestSceneFooterActions[];
}
declare const _default: (props: GuestSceneProps) => JSX.Element;
export default _default;
