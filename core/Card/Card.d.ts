import { CSSProperties, ReactElement } from 'react';
export interface ICard {
    active?: boolean;
    onClick?: () => void;
    style?: CSSProperties;
    children?: ReactElement<any>;
    animation?: "waves" | "circles";
    className?: string;
}
declare const _default: import("react").ForwardRefExoticComponent<ICard & import("react").RefAttributes<{}>>;
export default _default;
