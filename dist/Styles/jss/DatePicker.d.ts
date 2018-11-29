import { ThemeInterface } from "..";
declare const _default: (theme: ThemeInterface) => {
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
export default _default;
