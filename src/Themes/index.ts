import React from 'react';
import blackCurrant from './black-currant'
import whiteCurrant from './white-currant'

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