import { CSSProperties } from "react";
import { ThemeInterface } from "..";
declare const _default: (theme: ThemeInterface) => {
    main: (active?: boolean | undefined) => CSSProperties;
    counter: (active?: boolean | undefined) => {
        color: string;
    };
};
export default _default;
