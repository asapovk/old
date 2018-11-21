declare const _default: () => {
    theme: import("../Styles").ThemeInterface;
    button: {
        main: (decoration?: string | undefined, inversion?: boolean | undefined) => import("react").CSSProperties;
    };
    card: {
        main: (active?: boolean | undefined) => import("react").CSSProperties;
        counter: (active?: boolean | undefined) => {
            color: any;
        };
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
        background: any; /**
         * Использовать тему оформления
         */
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
            };
            placeholder: {
                color: any;
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
    badge: {
        container: import("react").CSSProperties;
        main: (color?: string | undefined, top?: string | number, right?: string | number, left?: string | number) => import("react").CSSProperties;
    };
    viewport: {
        main: {
            background: any;
            color: any;
        };
    };
    widget: {
        background: any; /**
         * Использовать тему оформления
         */
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
    scanes: {
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
            backButton: import("react").CSSProperties;
            backButtonIcon: {
                color: string;
            };
        };
    };
};
/**
 * Использовать тему оформления
 */
export default _default;
