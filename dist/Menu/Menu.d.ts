interface IMenu {
    header?: any;
    navigation: any[];
    activeMenu: number;
    onMenuClick: (key: number) => void;
    toolsRight?: any[];
    pin?: boolean;
    style?: any;
    profile?: any;
}
declare const _default: (props: IMenu) => JSX.Element;
export default _default;
