import React from 'react';
import { objectColor } from './utilities';
export declare const themes: {
    blackCurrant: ThemeInterface;
    whiteCurrant: ThemeInterface;
    abrTheme: ThemeInterface;
    gazpromTheme: ThemeInterface;
};
export declare type themeName = 'blackCurrant' | 'whiteCurrant' | 'abrTheme' | 'gazpromTheme';
export interface ThemeInterface {
    background: objectColor;
    interface: objectColor;
    pale: objectColor;
    lowlight: objectColor;
    text: objectColor;
    textOnAccent: objectColor;
    highlight: objectColor;
    accents: {
        red: objectColor;
        green: objectColor;
        blue: objectColor;
        orange: objectColor;
    };
    shadow: objectColor;
    radius: {
        default: string;
        window: string;
        button: string;
    };
    gradient: {
        default: string[];
        buddy: string[];
    };
}
export declare const createStyles: (themeName?: "blackCurrant" | "whiteCurrant" | "abrTheme" | "gazpromTheme" | undefined) => {
    theme: ThemeInterface;
    button: {
        main: (decoration?: string | undefined) => React.CSSProperties;
    };
    chart: {
        text: any;
        accent: any;
        background: any;
        chartTextColor: string;
    };
    checkbox: {
        main: {
            color: any;
        };
        input: (isRadio: any) => {
            color: any;
            borderColor: any;
            backgroundColor: any;
            borderRadius: any;
        };
        inputActive: (isRadio: any) => {
            color: any;
            borderColor: any;
            backgroundColor: any;
            borderRadius: any;
        };
        circle: {
            background: any;
        };
    };
    datePicker: {
        main: {
            labelColor: any;
        };
        day: {
            default: {
                fontSize: number;
                borderRadius: any;
                background: any;
                borderColor: any;
                color: any;
            };
            active: {
                borderColor: any;
            };
            current: {
                background: any;
                color: string;
            };
            anotherMonth: {
                background: any;
            };
            disabledDay: {
                opacity: number;
            };
        };
        monthGrid: {
            style: {
                border: string;
                borderTop: number;
                top: string;
            };
        };
        title: {
            style: {
                color: any;
                background: any;
                borderColor: any;
            };
            weekDayStyle: {
                color: any;
                background: any;
                borderColor: any;
            };
        };
    };
    finder: {
        main: {
            textColor: any;
            backgroundColor: any;
            borderColor: any;
        };
        filter: {
            backgroundColor: any;
            inputBackground: any;
            borderColor: any;
            color: any;
        };
        nav: {
            badgeColor: any;
        };
    };
    login: {
        textColor: any;
        textShadow: string;
    };
    menu: {
        main: {
            menu: {
                backgroundColor: any;
                borderColor: any;
            };
            searchBar: {
                background: any;
                borderColor: any;
                boxShadow: string;
                borderRadius: any;
            };
        };
        nav: {
            textColor: any;
            textColorActive: any;
        };
    };
    modal: {
        main: {
            backgroundColor: any;
        };
        view: {
            textColor: any;
            titleColor: any;
            subtitleColor: any;
            borderColor: any;
            background: any;
            borderRadius: any;
        };
    };
    popup: {
        color: any;
        shadowColor: any;
        borderColor: any;
        background: any;
    };
    select: {
        background: any;
        labelColor: any;
        textColor: any;
        borderColor: any;
        SelectMenuItem: {
            text: any;
            background: any;
        };
    };
    spin: {};
    spinner: {};
    table: {
        main: {
            backgroundColor: any;
            titleColor: any;
            shadowColor: any;
            borderColor: any;
            borderRadius: any;
        };
        row: {
            backgroundColor: any;
            borderColor: any;
        };
        actions: {
            backgroundColor: any;
            actionColor: any;
        };
        form: {
            backgroundColor: any;
            borderColor: any;
        };
        pagination: {
            textColor: any;
            backgroundColor: any;
        };
    };
    tabs: {
        tab: {
            borderRadius: string;
            color: string;
        };
        tabActive: {
            borderRadius: string;
            color: string;
        };
        toolbar: {
            borderRadius: string;
            background: string;
        };
        container: {
            borderColor: string;
            background: string;
            borderRadius: string;
        };
        hl: {
            borderRadius: string;
            borderColor: string;
            background: string;
        };
    };
    textField: {
        textColor: any;
        backgroundColor: any;
        borderColor: any;
        iconColor: any;
        label: {
            color: any;
        };
        singleline: {
            field: {
                borderColor: any;
                backgroundColor: any;
                borderRadius: any;
            };
            input: {
                color: any;
                placeholder: any;
            };
        };
        hint: {
            color: any;
        };
    };
    title: {
        active: {
            color: any;
        };
    };
    viewport: {
        main: {
            background: any;
            color: any;
        };
    };
    widget: {
        background: any;
        borderColor: string;
        lowlight: any;
        highlight: any;
    };
    widgetStat: {
        titleStyle: {
            color: any;
        };
        valueStyle: {
            color: any;
        };
        subtitleStyle: {
            color: any;
        };
        extraStyle: {
            borderColor: any;
        };
    };
    notifications: {
        main: (decoration?: string | undefined) => {
            background: any;
            boxShadow: string;
            borderRadius: any;
            color: any;
            borderColor: any;
            borderLeft: string;
        };
    };
};
export declare const StylesContext: React.Context<{
    theme: ThemeInterface;
    button: {
        main: (decoration?: string | undefined) => React.CSSProperties;
    };
    chart: {
        text: any;
        accent: any;
        background: any;
        chartTextColor: string;
    };
    checkbox: {
        main: {
            color: any;
        };
        input: (isRadio: any) => {
            color: any;
            borderColor: any;
            backgroundColor: any;
            borderRadius: any;
        };
        inputActive: (isRadio: any) => {
            color: any;
            borderColor: any;
            backgroundColor: any;
            borderRadius: any;
        };
        circle: {
            background: any;
        };
    };
    datePicker: {
        main: {
            labelColor: any;
        };
        day: {
            default: {
                fontSize: number;
                borderRadius: any;
                background: any;
                borderColor: any;
                color: any;
            };
            active: {
                borderColor: any;
            };
            current: {
                background: any;
                color: string;
            };
            anotherMonth: {
                background: any;
            };
            disabledDay: {
                opacity: number;
            };
        };
        monthGrid: {
            style: {
                border: string;
                borderTop: number;
                top: string;
            };
        };
        title: {
            style: {
                color: any;
                background: any;
                borderColor: any;
            };
            weekDayStyle: {
                color: any;
                background: any;
                borderColor: any;
            };
        };
    };
    finder: {
        main: {
            textColor: any;
            backgroundColor: any;
            borderColor: any;
        };
        filter: {
            backgroundColor: any;
            inputBackground: any;
            borderColor: any;
            color: any;
        };
        nav: {
            badgeColor: any;
        };
    };
    login: {
        textColor: any;
        textShadow: string;
    };
    menu: {
        main: {
            menu: {
                backgroundColor: any;
                borderColor: any;
            };
            searchBar: {
                background: any;
                borderColor: any;
                boxShadow: string;
                borderRadius: any;
            };
        };
        nav: {
            textColor: any;
            textColorActive: any;
        };
    };
    modal: {
        main: {
            backgroundColor: any;
        };
        view: {
            textColor: any;
            titleColor: any;
            subtitleColor: any;
            borderColor: any;
            background: any;
            borderRadius: any;
        };
    };
    popup: {
        color: any;
        shadowColor: any;
        borderColor: any;
        background: any;
    };
    select: {
        background: any;
        labelColor: any;
        textColor: any;
        borderColor: any;
        SelectMenuItem: {
            text: any;
            background: any;
        };
    };
    spin: {};
    spinner: {};
    table: {
        main: {
            backgroundColor: any;
            titleColor: any;
            shadowColor: any;
            borderColor: any;
            borderRadius: any;
        };
        row: {
            backgroundColor: any;
            borderColor: any;
        };
        actions: {
            backgroundColor: any;
            actionColor: any;
        };
        form: {
            backgroundColor: any;
            borderColor: any;
        };
        pagination: {
            textColor: any;
            backgroundColor: any;
        };
    };
    tabs: {
        tab: {
            borderRadius: string;
            color: string;
        };
        tabActive: {
            borderRadius: string;
            color: string;
        };
        toolbar: {
            borderRadius: string;
            background: string;
        };
        container: {
            borderColor: string;
            background: string;
            borderRadius: string;
        };
        hl: {
            borderRadius: string;
            borderColor: string;
            background: string;
        };
    };
    textField: {
        textColor: any;
        backgroundColor: any;
        borderColor: any;
        iconColor: any;
        label: {
            color: any;
        };
        singleline: {
            field: {
                borderColor: any;
                backgroundColor: any;
                borderRadius: any;
            };
            input: {
                color: any;
                placeholder: any;
            };
        };
        hint: {
            color: any;
        };
    };
    title: {
        active: {
            color: any;
        };
    };
    viewport: {
        main: {
            background: any;
            color: any;
        };
    };
    widget: {
        background: any;
        borderColor: string;
        lowlight: any;
        highlight: any;
    };
    widgetStat: {
        titleStyle: {
            color: any;
        };
        valueStyle: {
            color: any;
        };
        subtitleStyle: {
            color: any;
        };
        extraStyle: {
            borderColor: any;
        };
    };
    notifications: {
        main: (decoration?: string | undefined) => {
            background: any;
            boxShadow: string;
            borderRadius: any;
            color: any;
            borderColor: any;
            borderLeft: string;
        };
    };
}>;
declare const _default: React.ComponentType<React.ConsumerProps<{
    theme: ThemeInterface;
    button: {
        main: (decoration?: string | undefined) => React.CSSProperties;
    };
    chart: {
        text: any;
        accent: any;
        background: any;
        chartTextColor: string;
    };
    checkbox: {
        main: {
            color: any;
        };
        input: (isRadio: any) => {
            color: any;
            borderColor: any;
            backgroundColor: any;
            borderRadius: any;
        };
        inputActive: (isRadio: any) => {
            color: any;
            borderColor: any;
            backgroundColor: any;
            borderRadius: any;
        };
        circle: {
            background: any;
        };
    };
    datePicker: {
        main: {
            labelColor: any;
        };
        day: {
            default: {
                fontSize: number;
                borderRadius: any;
                background: any;
                borderColor: any;
                color: any;
            };
            active: {
                borderColor: any;
            };
            current: {
                background: any;
                color: string;
            };
            anotherMonth: {
                background: any;
            };
            disabledDay: {
                opacity: number;
            };
        };
        monthGrid: {
            style: {
                border: string;
                borderTop: number;
                top: string;
            };
        };
        title: {
            style: {
                color: any;
                background: any;
                borderColor: any;
            };
            weekDayStyle: {
                color: any;
                background: any;
                borderColor: any;
            };
        };
    };
    finder: {
        main: {
            textColor: any;
            backgroundColor: any;
            borderColor: any;
        };
        filter: {
            backgroundColor: any;
            inputBackground: any;
            borderColor: any;
            color: any;
        };
        nav: {
            badgeColor: any;
        };
    };
    login: {
        textColor: any;
        textShadow: string;
    };
    menu: {
        main: {
            menu: {
                backgroundColor: any;
                borderColor: any;
            };
            searchBar: {
                background: any;
                borderColor: any;
                boxShadow: string;
                borderRadius: any;
            };
        };
        nav: {
            textColor: any;
            textColorActive: any;
        };
    };
    modal: {
        main: {
            backgroundColor: any;
        };
        view: {
            textColor: any;
            titleColor: any;
            subtitleColor: any;
            borderColor: any;
            background: any;
            borderRadius: any;
        };
    };
    popup: {
        color: any;
        shadowColor: any;
        borderColor: any;
        background: any;
    };
    select: {
        background: any;
        labelColor: any;
        textColor: any;
        borderColor: any;
        SelectMenuItem: {
            text: any;
            background: any;
        };
    };
    spin: {};
    spinner: {};
    table: {
        main: {
            backgroundColor: any;
            titleColor: any;
            shadowColor: any;
            borderColor: any;
            borderRadius: any;
        };
        row: {
            backgroundColor: any;
            borderColor: any;
        };
        actions: {
            backgroundColor: any;
            actionColor: any;
        };
        form: {
            backgroundColor: any;
            borderColor: any;
        };
        pagination: {
            textColor: any;
            backgroundColor: any;
        };
    };
    tabs: {
        tab: {
            borderRadius: string;
            color: string;
        };
        tabActive: {
            borderRadius: string;
            color: string;
        };
        toolbar: {
            borderRadius: string;
            background: string;
        };
        container: {
            borderColor: string;
            background: string;
            borderRadius: string;
        };
        hl: {
            borderRadius: string;
            borderColor: string;
            background: string;
        };
    };
    textField: {
        textColor: any;
        backgroundColor: any;
        borderColor: any;
        iconColor: any;
        label: {
            color: any;
        };
        singleline: {
            field: {
                borderColor: any;
                backgroundColor: any;
                borderRadius: any;
            };
            input: {
                color: any;
                placeholder: any;
            };
        };
        hint: {
            color: any;
        };
    };
    title: {
        active: {
            color: any;
        };
    };
    viewport: {
        main: {
            background: any;
            color: any;
        };
    };
    widget: {
        background: any;
        borderColor: string;
        lowlight: any;
        highlight: any;
    };
    widgetStat: {
        titleStyle: {
            color: any;
        };
        valueStyle: {
            color: any;
        };
        subtitleStyle: {
            color: any;
        };
        extraStyle: {
            borderColor: any;
        };
    };
    notifications: {
        main: (decoration?: string | undefined) => {
            background: any;
            boxShadow: string;
            borderRadius: any;
            color: any;
            borderColor: any;
            borderLeft: string;
        };
    };
}>>;
export default _default;
