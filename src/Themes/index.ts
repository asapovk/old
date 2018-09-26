import React from 'react';
import blackCurrant from './lib/black-currant'
import whiteCurrant from './lib/white-currant'
import { GetColor } from './utilities';

export const themes = {
    blackCurrant, whiteCurrant
};
export interface ThemeInterface {
    background: GetColor,
    interface: GetColor,
    pale: GetColor,
    lowlight: GetColor,
    text: GetColor,
    highlight: GetColor,
    accents: {
        red: GetColor,
        green: GetColor,
        blue: GetColor,
        orange: GetColor,
    },
    shadow: GetColor,
    corner: string,
}

export interface themeNames {
    theme?:
    'blackCurrant' |
    'whiteCurrant'
}

export const ThemeContext = React.createContext(
    themes.blackCurrant // default value
);

export const getTheme = () => {
    //@ts-ignore
    const theme = (document.__uiviewport && document.__uiviewport.theme) || blackCurrant;
    return theme as ThemeInterface;
}

export default ThemeContext.Consumer;