import React from 'react';

import { objectColor } from './utilities';

import blackCurrant from './themes/black-currant'
import whiteCurrant from './themes/white-currant'
import abrTheme from './themes/abr'
import gazpromTheme from './themes/gazprom'

import buttonStyles from './jss/Button'
import cardStyles from './jss/Card';
import badgeStyles from './jss/Badge'
import chartStyles from './jss/Chart'
import checkboxStyles from './jss/Checkbox'
import datePickerStyles from './jss/DatePicker'
import finderStyles from './jss/Finder'
import loginStyles from './jss/Login'
import menuStyles from './jss/Menu'
import modalStyles from './jss/Modal'
import popupStyles from './jss/Popup'
import selectStyles from './jss/Select'
import spinStyles from './jss/Spin'
import spinnerStyles from './jss/Spinner'
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

export type themeName =
    'blackCurrant' |
    'whiteCurrant' |
    'abrTheme' |
    'gazpromTheme'

export interface ThemeInterface {
    name: string
    background: objectColor
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
    radius: {
        default: string
        window: string
        button: string
    }
    gradient: {
        default: string[]
        buddy: string[]
    }
}

export const createStyles = (themeName?: themeName) => {
    const theme = themeName ? themes[themeName] : themes['blackCurrant'];
    return {
        theme: theme,
        button: buttonStyles(theme),
        card: cardStyles(theme),
        chart: chartStyles(theme),
        checkbox: checkboxStyles(theme),
        datePicker: datePickerStyles(theme),
        finder: finderStyles(theme),
        login: loginStyles(theme),
        menu: menuStyles(theme),
        modal: modalStyles(theme),
        popup: popupStyles(theme),
        select: selectStyles(theme),
        spin: spinStyles(theme),
        spinner: spinnerStyles(theme),
        table: tableStyles(theme),
        tabs: tabsStyles(theme),
        textField: textFieldStyles(theme),
        title: titleStyles(theme),
        badge: badgeStyles(theme),
        viewport: viewportStyles(theme),
        widget: widgetStyles(theme),
        widgetStat: widgetStatStyles(theme),
        notifications: notificationsStyles(theme),
        scanes: {
            lkguest: lkGuestSceneStyles(theme)
        }
    }
};

export const StylesContext = React.createContext(
    createStyles('blackCurrant')
);

export default StylesContext.Consumer;