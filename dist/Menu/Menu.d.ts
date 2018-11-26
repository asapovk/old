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
    style?: any;
    profile?: any;
}
declare const _default: (props: IMenu) => JSX.Element;
export default _default;
