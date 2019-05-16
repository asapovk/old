declare const _default: () => {
    theme: import("../styles").ThemeInterface;
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
};
/**
 * Использовать тему оформления
 */
export default _default;
