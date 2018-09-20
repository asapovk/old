import React from 'react';
import blackCurrant from './lib/black-currant'
import whiteCurrant from './lib/white-currant'

export const themes = {
    blackCurrant, whiteCurrant
};

export interface themeNames {
    theme?:
    'blackCurrant' |
    'whiteCurrant'
}

export const ThemeContext = React.createContext(
    themes.blackCurrant // default value
);

export default ThemeContext.Consumer;