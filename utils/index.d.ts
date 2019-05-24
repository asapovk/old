declare const _default: {
    alert: (options: import("./alert").AlertOptions) => void;
    notification: (options: import("../core/Notifications/types").default.Notification) => void;
    format: (value: string | number, unit: "rub" | "m3" | "kwh", options: {
        fixed?: number | undefined;
        fractionColor?: "text" | "background" | "lowlight" | "pale" | "interface" | "highlight" | "highlightSecondary" | "textOnAccent" | undefined;
    }) => string | number | JSX.Element;
};
export default _default;
