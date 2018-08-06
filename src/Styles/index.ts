import { css, injectGlobal } from 'emotion';
import themes from './themes';
import reset from './reset.css';

export function getTheme(themeName: string | undefined) {
    return themeName ? themes[themeName] : themes['defaultTheme'];
}

export function injectReset() {
    injectGlobal(reset);
}

export function createStyles(jss: any) {
    let styles: any = {};
    Object.keys(jss).forEach(key => styles[key] = css(jss[key]));
    return styles;
}