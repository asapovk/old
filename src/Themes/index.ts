import React from 'react';
import telegramDark from './telegram-dark'
import whiteCurrant from './white-currant'

export const themes = {
    telegramDark, whiteCurrant
};

export interface themeNames {
    theme?:
    'telegramDark' |
    'whiteCurrant'
}

export const ThemeContext = React.createContext(
    themes.telegramDark // default value
);

export default ThemeContext.Consumer;