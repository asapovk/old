import React from 'react';

import { objectColor } from './utilities';

import blackCurrant from './themes/black-currant'
import whiteCurrant from './themes/white-currant'

import buttonStyles from './styles/Button'
import chartStyles from './styles/Chart'
import checkboxStyles from './styles/Checkbox'
import datePickerStyles from './styles/DatePicker'
import finderStyles from './styles/Finder'
import loginStyles from './styles/Login'
import menuStyles from './styles/Menu'
import modalStyles from './styles/Modal'
import popupStyles from './styles/Popup'
import selectStyles from './styles/Select'
import spinStyles from './styles/Spin'
import spinnerStyles from './styles/Spinner'
import tableStyles from './styles/Table'
import textFieldStyles from './styles/TextField'
import titleStyles from './styles/Title'
import viewportStyles from './styles/Viewport'
import widgetStyles from './styles/Widget'
import widgetStatStyles from './styles/WidgetStat'
import notificationsStyles from './styles/Notifications'

export const themes = {
    blackCurrant, whiteCurrant
}

export type themeName =
    'blackCurrant' |
    'whiteCurrant'

export interface ThemeInterface {
    background: objectColor,
    interface: objectColor,
    pale: objectColor,
    lowlight: objectColor,
    text: objectColor,
    highlight: objectColor,
    accents: {
        red: objectColor,
        green: objectColor,
        blue: objectColor,
        orange: objectColor,
    },
    shadow: objectColor,
    corner: string,
}

export const createStyles = (themeName?: themeName) => {
    const theme = themeName ? themes[themeName] : themes['blackCurrant'];
    return {
        theme: theme,
        button: buttonStyles(theme),
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
        textField: textFieldStyles(theme),
        title: titleStyles(theme),
        viewport: viewportStyles(theme),
        widget: widgetStyles(theme),
        widgetStat: widgetStatStyles(theme),
        notifications: notificationsStyles(theme)
    }
};

export const ThemeContext = React.createContext(
    createStyles('blackCurrant')
);

export default ThemeContext.Consumer;