import React from 'react';
import telegramDark from './telegram-dark'
import cleanBright from './clean-bright'

export const themes = {
    telegramDark, cleanBright
};

export interface themeNames {
    theme?:
    'telegramDark' |
    'cleanBright'
}

export const ThemeContext = React.createContext(
    themes.telegramDark // default value
);