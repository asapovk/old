import { CSSProperties, ReactElement } from 'react';
export interface ICard {
    active?: boolean;
    onClick?: () => void;
    style?: CSSProperties;
    children?: ReactElement<any>;
    animation?: "waves" | "circles";
}
declare const _default: (props: ICard) => JSX.Element;
export default _default;
