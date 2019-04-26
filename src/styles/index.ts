import React from 'react';
import finderStyles from './jss/Finder';
import lkGuestSceneStyles from './jss/LKGuestScene';
import notificationsStyles from './jss/Notifications';
import selectStyles from './jss/Select';
import tableStyles from './jss/Table';
import tabsStyles from './jss/Tabs';
import titleStyles from './jss/Title';
import widgetStatStyles from './jss/WidgetStat';
import abrTheme from './themes/abr';
import blackCurrant from './themes/black-currant';
import gazpromTheme from './themes/gazprom';
import whiteCurrant from './themes/white-currant';
import whiteCurrantModern from './themes/white-currant-modern';
import { objectColor } from './utilities';

export const themes = {
    blackCurrant,
    whiteCurrant,
    whiteCurrantModern,
    abrTheme,
    gazpromTheme,
}

export type themeName = 'blackCurrant' | 'whiteCurrant' | 'whiteCurrantModern' | 'abrTheme' | 'gazpromTheme'

export interface borderStyle {
    borderWidth: string
    borderStyle: string
    borderColor: string
    borderRadius: string
}

export interface shadowsObject {
    button: {
        default: string
        active: string
    }
    card: {
        default: string
        active: string
    }
    table: string
    widget: string
    textfield: string
    modal: string
}

export interface bordersObject {
    button: borderStyle
    table: borderStyle
    card: borderStyle
    widget: borderStyle
    modal: borderStyle
    textfield: borderStyle
    checkbox: borderStyle
    datepicker: borderStyle
}

export interface ThemeInterface {
    name: string
    background: objectColor
    background2: objectColor
    interface: objectColor
    pale: objectColor
    light: objectColor
    lowlight: objectColor
    text: objectColor
    textOnAccent: objectColor
    highlight: objectColor
    highlightSecondary: objectColor
    disabled: objectColor
    defaultShadow: objectColor
    defaultBorderRadius: string
    accents: {
        red: objectColor
        green: objectColor
        blue: objectColor
        orange: objectColor
    },
    brandColors: {
        [key: string]: objectColor
    },
    shadows: shadowsObject
    borders: bordersObject
    gradients: {
        default: string[]
        buddy: string[]
        card: string[]
    }
    scrollbar: {
        thumb: {
            size: number
            color: string
            borderWidth: number
            borderColor: string
            borderRadius: number
        }
        backgroundColor: string
        borderWidth: number
        borderColor: string
        borderRadius: number
        offsetPosition: number
    }
}

export const createStyles = (themeName?: string) => {
    const theme: ThemeInterface = themeName ? themes[themeName] : themes['blackCurrant'];
    return {
        theme: theme,
        finder: finderStyles(theme),
        select: selectStyles(theme),
        table: tableStyles(theme),
        tabs: tabsStyles(theme),
        title: titleStyles(theme),
        widgetStat: widgetStatStyles(theme),
        notifications: notificationsStyles(theme),
        scenes: {
            lkguest: lkGuestSceneStyles(theme),
        }
    }
};

export const StylesContext = React.createContext(
    createStyles('blackCurrant')
);

export default StylesContext.Consumer;