declare const _default: () => {
    theme: import("../Styles").ThemeInterface;
    button: {
        main: (decoration?: string | undefined, inversion?: boolean | undefined) => import("react").CSSProperties;
    };
    card: {
        main: (active?: boolean | undefined) => import("react").CSSProperties;
    };
    chart: {
        text: string;
        accent: string;
        background: string;
        chartTextColor: string;
    };
    checkbox: {
        main: {
            color: string;
        };
        input: (isRadio: any) => {
            color: string;
            borderColor: string;
            backgroundColor: string;
            borderRadius: string;
        };
        inputActive: (isRadio: any) => {
            color: string;
            borderColor: string;
            backgroundColor: string;
            borderRadius: string;
        };
        circle: {
            background: string;
        };
    };
    datePicker: {
        main: {
            labelColor: string;
        };
        day: {
            default: {
                fontSize: number;
                borderRadius: string;
                background: string;
                borderColor: string;
                color: string;
            };
            active: {
                borderColor: string;
            };
            current: {
                background: string;
                color: string;
            };
            anotherMonth: {
                background: string;
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
                color: string;
                background: string;
                borderColor: string;
            };
            weekDayStyle: {
                color: string;
                background: string;
                borderColor: string;
            };
        };
    };
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
    login: {
        textColor: string;
        textShadow: string;
    };
    menu: {
        main: {
            menu: {
                backgroundColor: string;
                borderColor: string;
            };
            searchBar: {
                background: string;
                borderColor: string;
                boxShadow: string;
                borderRadius: string;
            };
        };
        nav: {
            textColor: string;
            textColorActive: string;
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
    popup: {
        color: string;
        shadowColor: string;
        borderColor: string;
        background: string;
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
    spin: {};
    spinner: {};
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
    badge: {
        container: import("react").CSSProperties;
        main: (color?: string | undefined, top?: string | number, right?: string | number, left?: string | number) => import("react").CSSProperties;
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
            backButton: import("react").CSSProperties;
            backButtonIcon: {
                color: string;
            };
        };
        lkmain: {
            root: {
                overflow: string;
            };
            main: {
                overflow: string;
            };
            sideBackground: {
                background: string;
                borderColor: string;
            };
            sideBottom: {
                overflow: string;
                marginRight: string;
                marginLeft: string;
            };
            mainRight: {
                overflow: string;
            };
            sideMask: {
                background: string;
            };
            components: {
                accountSelect: {
                    field: {
                        borderColor: string;
                        background: string;
                    };
                    add: {
                        background: string;
                    };
                    addIcon: {
                        fill: string;
                    };
                    accountText: {
                        color: string;
                    };
                    dropIcon: {
                        height: string;
                        marginLeft: string;
                        marginRight: string;
                    };
                };
            };
        };
    };
};
/**
 * Использовать тему оформления
 */
export default _default;
