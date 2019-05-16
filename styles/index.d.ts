import React from 'react';
import { objectColor } from './utilities';
export declare const themes: {
    blackCurrant: ThemeInterface;
    whiteCurrant: ThemeInterface;
    whiteCurrantModern: ThemeInterface;
    abrTheme: ThemeInterface;
    gazpromTheme: ThemeInterface;
};
export declare type themeName = 'blackCurrant' | 'whiteCurrant' | 'whiteCurrantModern' | 'abrTheme' | 'gazpromTheme';
export interface borderStyle {
    borderWidth: string;
    borderStyle: string;
    borderColor: string;
    borderRadius: string;
}
export interface shadowsObject {
    button: {
        default: string;
        active: string;
    };
    card: {
        default: string;
        active: string;
    };
    table: string;
    widget: string;
    textfield: string;
    modal: string;
}
export interface bordersObject {
    button: borderStyle;
    table: borderStyle;
    card: borderStyle;
    widget: borderStyle;
    modal: borderStyle;
    textfield: borderStyle;
    checkbox: borderStyle;
    datepicker: borderStyle;
}
export interface ThemeInterface {
    name: string;
    background: objectColor;
    background2: objectColor;
    interface: objectColor;
    pale: objectColor;
    light: objectColor;
    lowlight: objectColor;
    text: objectColor;
    textOnAccent: objectColor;
    highlight: objectColor;
    highlightSecondary: objectColor;
    disabled: objectColor;
    defaultShadow: objectColor;
    defaultBorderRadius: string;
    accents: {
        red: objectColor;
        green: objectColor;
        blue: objectColor;
        orange: objectColor;
    };
    brandColors: {
        [key: string]: objectColor;
    };
    shadows: shadowsObject;
    borders: bordersObject;
    gradients: {
        default: string[];
        buddy: string[];
        card: string[];
    };
    scrollbar: {
        thumb: {
            size: number;
            color: string;
            borderWidth: number;
            borderColor: string;
            borderRadius: number;
        };
        backgroundColor: string;
        borderWidth: number;
        borderColor: string;
        borderRadius: number;
        offsetPosition: number;
    };
}
export declare const createStyles: (themeName?: string | undefined) => {
    theme: ThemeInterface;
    table: {
        main: {
            backgroundColor: string;
            titleColor: string;
            borderColor: string;
            borderRadius: string;
            boxShadow: string;
        };
        row: {
            backgroundColor: string;
            borderColor: string;
        };
        actions: {
            backgroundColor: string;
            actionColor: string;
        };
        form: {
            backgroundColor: string;
            borderColor: string;
        };
        pagination: {
            textColor: string;
            backgroundColor: string;
        };
    };
};
export declare const StylesContext: React.Context<{
    theme: ThemeInterface;
    table: {
        main: {
            backgroundColor: string;
            titleColor: string;
            borderColor: string;
            borderRadius: string;
            boxShadow: string;
        };
        row: {
            backgroundColor: string;
            borderColor: string;
        };
        actions: {
            backgroundColor: string;
            actionColor: string;
        };
        form: {
            backgroundColor: string;
            borderColor: string;
        };
        pagination: {
            textColor: string;
            backgroundColor: string;
        };
    };
}>;
declare const _default: React.ExoticComponent<React.ConsumerProps<{
    theme: ThemeInterface;
    table: {
        main: {
            backgroundColor: string;
            titleColor: string;
            borderColor: string;
            borderRadius: string;
            boxShadow: string;
        };
        row: {
            backgroundColor: string;
            borderColor: string;
        };
        actions: {
            backgroundColor: string;
            actionColor: string;
        };
        form: {
            backgroundColor: string;
            borderColor: string;
        };
        pagination: {
            textColor: string;
            backgroundColor: string;
        };
    };
}>>;
export default _default;
