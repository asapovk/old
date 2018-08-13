import React from 'react';
interface Tools {
    tool: any;
    onAction: () => void;
}
interface MenuProps {
    header?: any;
    search?: boolean;
    toolsLeft?: Tools;
    toolsRight?: Tools;
    pin?: boolean;
    style?: any;
}
declare class Menu extends React.Component<MenuProps> {
    render(): JSX.Element;
}
export default Menu;
