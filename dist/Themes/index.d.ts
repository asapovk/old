import React from 'react';
import { GetColor } from './utilities';
export declare const themes: {
    blackCurrant: ThemeInterface;
    whiteCurrant: ThemeInterface;
};
export interface ThemeInterface {
    background: GetColor;
    interface: GetColor;
    pale: GetColor;
    lowlight: GetColor;
    text: GetColor;
    highlight: GetColor;
    accents: {
        red: GetColor;
        green: GetColor;
        blue: GetColor;
        orange: GetColor;
    };
    shadow: GetColor;
    corner: string;
}
export interface themeNames {
    theme?: 'blackCurrant' | 'whiteCurrant';
}
export declare const ThemeContext: React.Context<ThemeInterface>;
declare const _default: React.ComponentType<React.ConsumerProps<ThemeInterface>>;
export default _default;
