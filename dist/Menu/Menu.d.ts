import React from 'react';
interface TableProps {
    search?: boolean;
<<<<<<< HEAD
    toolsLeft?: {
        icon: any;
        float: 'left' | 'right';
        onAction: () => void;
    }[];
    toolsRight?: {
=======
    tools?: {
>>>>>>> ad3a11e5a6e756d57a172a2b8c8f2b55790883da
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
