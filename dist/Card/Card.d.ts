import { CSSProperties, ReactElement } from 'react';
interface ICardAction {
    label: string;
    onAction: () => void;
}
interface IInfo {
    value: string;
    description: string;
}
export interface ICard {
    title: string;
    subtitle?: string;
    info?: IInfo;
    active?: boolean;
    action?: ICardAction;
    onClick?: () => void;
    style?: CSSProperties;
    children?: ReactElement<any>;
}
declare const _default: (props: ICard) => JSX.Element;
export default _default;
