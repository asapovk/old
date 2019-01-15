import React from 'react';

import { objectColor } from './utilities';

import blackCurrant from './themes/black-currant'
import whiteCurrant from './themes/white-currant'
import abrTheme from './themes/abr'
import gazpromTheme from './themes/gazprom'

import checkboxStyles from './jss/Checkbox'
import finderStyles from './jss/Finder'
import modalStyles from './jss/Modal'
import selectStyles from './jss/Select'
import tableStyles from './jss/Table'
import tabsStyles from './jss/Tabs'
import textFieldStyles from './jss/TextField'
import titleStyles from './jss/Title'
import viewportStyles from './jss/Viewport'
import widgetStyles from './jss/Widget'
import widgetStatStyles from './jss/WidgetStat'
import notificationsStyles from './jss/Notifications'
import lkGuestSceneStyles from './jss/LKGuestScene'

export const themes = {
    blackCurrant, whiteCurrant, abrTheme, gazpromTheme
}

export type themeName = 'blackCurrant' | 'whiteCurrant' | 'abrTheme' | 'gazpromTheme'

export interface ThemeInterface {
    name: string
    background: objectColor
    background2: objectColor
    interface: objectColor
    pale: objectColor
    lowlight: objectColor
    text: objectColor
    textOnAccent: objectColor
    highlight: objectColor
    accents: {
        red: objectColor
        green: objectColor
        blue: objectColor
        orange: objectColor
    },
    shadow: objectColor
    shadows: {
        button: string
        table: string
        card: string
    }
    borders: {
        button: {
            width: string
            style: string
            color: string
            radius: string
        }
        table: {
            width: string
            style: string
            color: string
            radius: string
        }
        widget: {
            width: string
            style: string
            color: string
            radius: string
        }
    },
    radius: {
        default: string
        window: string
        button: string
        card: string
    }
    gradient: {
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
        checkbox: checkboxStyles(theme),
        finder: finderStyles(theme),
        modal: modalStyles(theme),
        select: selectStyles(theme),
        table: tableStyles(theme),
        tabs: tabsStyles(theme),
        textField: textFieldStyles(theme),
        title: titleStyles(theme),
        viewport: viewportStyles(theme),
        widget: widgetStyles(theme),
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