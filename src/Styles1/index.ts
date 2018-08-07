import { css, injectGlobal } from 'emotion';
import telegramDark from './themes/telegram-dark';
import reset from './reset.css';

export const injectReset = () => injectGlobal(reset)

export function createClasses(os: any) {
    let styles: any = {};
    Object.keys(os).forEach(key => styles[key] = css(os[key]));
    return styles;
}

export const themes = {
    telegramDark
};