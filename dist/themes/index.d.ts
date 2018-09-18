import React from 'react';
export declare const themes: {
    telegramDark: {
        background: string;
        interface: string;
        pale: string;
        lowlight: string;
        text: string;
        highlight: string;
        accents: {
            red: string;
            green: string;
            blue: string;
            orange: string;
        };
        shadow: string;
        corner: string;
    };
    cleanBright: {
        background: string;
        interface: string;
        pale: string;
        lowlight: string;
        text: string;
        highlight: string;
        accents: {
            red: string;
            green: string;
            blue: string;
            orange: string;
        };
        shadow: string;
        corner: string;
    };
};
export interface themeNames {
    theme?: 'telegramDark' | 'cleanBright';
}
export declare const ThemeContext: React.Context<{
    background: string;
    interface: string;
    pale: string;
    lowlight: string;
    text: string;
    highlight: string;
    accents: {
        red: string;
        green: string;
        blue: string;
        orange: string;
    };
    shadow: string;
    corner: string;
}>;
declare const _default: React.ComponentType<React.ConsumerProps<{
    background: string;
    interface: string;
    pale: string;
    lowlight: string;
    text: string;
    highlight: string;
    accents: {
        red: string;
        green: string;
        blue: string;
        orange: string;
    };
    shadow: string;
    corner: string;
}>>;
export default _default;
