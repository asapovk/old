import React from 'react';
interface MenuProps {
    header?: any;
    search?: boolean;
    toolsLeft?: {
        tool: any;
        onAction: () => void;
    }[];
    toolsRight?: {
        tool: any;
        onAction: () => void;
    }[];
    pin?: boolean;
}
declare class Menu extends React.Component<MenuProps> {
    componentWillMount(): void;
    render(): JSX.Element;
}
export default Menu;
