import { CSSProperties } from 'react';
import { ILogin } from '../Login/Login';
interface IMenuItem {
    label: string;
}
export interface IMenuItems {
    list: IMenuItem[];
    active: number;
    onClick: (menuItemKey: number) => void;
}
interface IMenu {
    header?: any;
    items: IMenuItems;
    toolsRight?: any[];
    pin?: boolean;
    style?: CSSProperties;
    profile?: ILogin;
}
declare const _default: (props: IMenu) => JSX.Element;
export default _default;
