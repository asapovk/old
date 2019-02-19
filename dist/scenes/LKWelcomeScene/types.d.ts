import { IconTypes } from '../../core/types';
declare namespace WelcomeSceneTypes {
    interface Props {
        title?: string;
        logo?: any;
        styles?: any;
        story?: any;
        config?: Config;
        onLogin: (login: string, password: string) => Promise<OnLoginPromiseReturn>;
        onRegister?: (login: string, password: string) => Promise<OnLoginPromiseReturn>;
        onRecovery?: (login: string, password: string) => Promise<OnLoginPromiseReturn>;
        onVerify?: (login: string, password: string, code: string) => Promise<OnLoginPromiseReturn>;
        actions?: Actions[];
    }
    interface Actions {
        title: string;
        icon: IconTypes.Type;
        onAction?: () => void;
    }
    interface Config {
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
}
export default WelcomeSceneTypes;
