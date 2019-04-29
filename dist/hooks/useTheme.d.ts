declare const _default: () => {
    theme: import("../styles").ThemeInterface;
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
    title: {
        active: {
            color: string;
        };
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
    };
};
/**
 * Использовать тему оформления
 */
export default _default;
