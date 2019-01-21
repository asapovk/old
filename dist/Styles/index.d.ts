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
    name: string;
    background: objectColor;
    background2: objectColor;
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
    shadows: {
        button: string;
        table: string;
        card: string;
    };
    borders: {
        button: {
            width: string;
            style: string;
            color: string;
            radius: string;
        };
        table: {
            width: string;
            style: string;
            color: string;
            radius: string;
        };
        widget: {
            width: string;
            style: string;
            color: string;
            radius: string;
        };
    };
    radius: {
        default: string;
        window: string;
        button: string;
        card: string;
        table: string;
    };
    gradient: {
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
    finder: {
        main: {
            textColor: string;
            backgroundColor: string;
            borderColor: string;
        };
        filter: {
            backgroundColor: string;
            inputBackground: string;
            borderColor: string;
            color: string;
        };
        nav: {
            badgeColor: string;
        };
    };
    modal: {
        main: {
            backgroundColor: string;
        };
        view: {
            textColor: string;
            titleColor: string;
            subtitleColor: string;
            borderColor: string;
            background: string;
            borderRadius: string;
        };
    };
    select: {
        background: string;
        labelColor: string;
        textColor: string;
        borderColor: string;
        SelectMenuItem: {
            text: string;
            background: string;
        };
    };
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
        textColor: string;
        backgroundColor: string;
        borderColor: string;
        iconColor: string;
        label: {
            color: string;
        };
        singleline: {
            field: {
                borderColor: string;
                backgroundColor: string;
                borderRadius: string;
            };
            input: {
                color: string;
            };
            placeholder: {
                color: string;
            };
        };
        hint: {
            color: string;
        };
    };
    title: {
        active: {
            color: string;
        };
    };
    viewport: {
        main: {
            background: string;
            color: string;
        };
    };
    widget: {
        background: string;
        lowlight: string;
        highlight: string;
        borderRadius: string;
        borderColor: string;
        borderStyle: string;
        borderWidth: string;
    };
    widgetStat: {
        titleStyle: {
            color: string;
        };
        valueStyle: {
            color: string;
        };
        subtitleStyle: {
            color: string;
        };
        extraStyle: {
            borderColor: string;
        };
    };
    notifications: {
        main: (decoration?: string | undefined) => {
            background: string;
            boxShadow: string;
            borderRadius: string;
            color: string;
            borderColor: string;
            borderLeft: string;
        };
    };
    scenes: {
        lkguest: {
            main: {
                backgroundColor: string;
                titleColor: string;
            };
            submitButton: {
                width: string;
            };
            secondaryButton: {
                width: string;
                background: string;
            };
            backButton: React.CSSProperties;
            backButtonIcon: {
                color: string;
            };
        };
    };
};
export declare const StylesContext: React.Context<{
    theme: ThemeInterface;
    finder: {
        main: {
            textColor: string;
            backgroundColor: string;
            borderColor: string;
        };
        filter: {
            backgroundColor: string;
            inputBackground: string;
            borderColor: string;
            color: string;
        };
        nav: {
            badgeColor: string;
        };
    };
    modal: {
        main: {
            backgroundColor: string;
        };
        view: {
            textColor: string;
            titleColor: string;
            subtitleColor: string;
            borderColor: string;
            background: string;
            borderRadius: string;
        };
    };
    select: {
        background: string;
        labelColor: string;
        textColor: string;
        borderColor: string;
        SelectMenuItem: {
            text: string;
            background: string;
        };
    };
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
        textColor: string;
        backgroundColor: string;
        borderColor: string;
        iconColor: string;
        label: {
            color: string;
        };
        singleline: {
            field: {
                borderColor: string;
                backgroundColor: string;
                borderRadius: string;
            };
            input: {
                color: string;
            };
            placeholder: {
                color: string;
            };
        };
        hint: {
            color: string;
        };
    };
    title: {
        active: {
            color: string;
        };
    };
    viewport: {
        main: {
            background: string;
            color: string;
        };
    };
    widget: {
        background: string;
        lowlight: string;
        highlight: string;
        borderRadius: string;
        borderColor: string;
        borderStyle: string;
        borderWidth: string;
    };
    widgetStat: {
        titleStyle: {
            color: string;
        };
        valueStyle: {
            color: string;
        };
        subtitleStyle: {
            color: string;
        };
        extraStyle: {
            borderColor: string;
        };
    };
    notifications: {
        main: (decoration?: string | undefined) => {
            background: string;
            boxShadow: string;
            borderRadius: string;
            color: string;
            borderColor: string;
            borderLeft: string;
        };
    };
    scenes: {
        lkguest: {
            main: {
                backgroundColor: string;
                titleColor: string;
            };
            submitButton: {
                width: string;
            };
            secondaryButton: {
                width: string;
                background: string;
            };
            backButton: React.CSSProperties;
            backButtonIcon: {
                color: string;
            };
        };
    };
}>;
declare const _default: React.ExoticComponent<React.ConsumerProps<{
    theme: ThemeInterface;
    finder: {
        main: {
            textColor: string;
            backgroundColor: string;
            borderColor: string;
        };
        filter: {
            backgroundColor: string;
            inputBackground: string;
            borderColor: string;
            color: string;
        };
        nav: {
            badgeColor: string;
        };
    };
    modal: {
        main: {
            backgroundColor: string;
        };
        view: {
            textColor: string;
            titleColor: string;
            subtitleColor: string;
            borderColor: string;
            background: string;
            borderRadius: string;
        };
    };
    select: {
        background: string;
        labelColor: string;
        textColor: string;
        borderColor: string;
        SelectMenuItem: {
            text: string;
            background: string;
        };
    };
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
        textColor: string;
        backgroundColor: string;
        borderColor: string;
        iconColor: string;
        label: {
            color: string;
        };
        singleline: {
            field: {
                borderColor: string;
                backgroundColor: string;
                borderRadius: string;
            };
            input: {
                color: string;
            };
            placeholder: {
                color: string;
            };
        };
        hint: {
            color: string;
        };
    };
    title: {
        active: {
            color: string;
        };
    };
    viewport: {
        main: {
            background: string;
            color: string;
        };
    };
    widget: {
        background: string;
        lowlight: string;
        highlight: string;
        borderRadius: string;
        borderColor: string;
        borderStyle: string;
        borderWidth: string;
    };
    widgetStat: {
        titleStyle: {
            color: string;
        };
        valueStyle: {
            color: string;
        };
        subtitleStyle: {
            color: string;
        };
        extraStyle: {
            borderColor: string;
        };
    };
    notifications: {
        main: (decoration?: string | undefined) => {
            background: string;
            boxShadow: string;
            borderRadius: string;
            color: string;
            borderColor: string;
            borderLeft: string;
        };
    };
    scenes: {
        lkguest: {
            main: {
                backgroundColor: string;
                titleColor: string;
            };
            submitButton: {
                width: string;
            };
            secondaryButton: {
                width: string;
                background: string;
            };
            backButton: React.CSSProperties;
            backButtonIcon: {
                color: string;
            };
        };
    };
}>>;
export default _default;
