import React from 'react';
interface TableProps {
    search?: boolean;
    toolsLeft?: {
        icon: any;
        float: 'left' | 'right';
        onAction: () => void;
    }[];
    toolsRight?: {
        icon: any;
        float: 'left' | 'right';
        onAction: () => void;
    }[];
    pin?: boolean;
    Children?: any[];
}
declare class Menu extends React.Component<TableProps> {
    componentWillMount(): void;
    render(): JSX.Element;
}
export default Menu;
