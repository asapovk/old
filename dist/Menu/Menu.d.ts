import React from 'react';
interface MenuProps {
    header?: any;
    search?: boolean;
    toolsLeft?: any[];
    toolsRight?: any[];
    pin?: boolean;
    style?: any;
    searchDefaultValue?: string;
    searchValue?: string;
    onSearch?: (value: string) => void;
    onSearchSubmit?: (value: string) => void;
}
declare class Menu extends React.Component<MenuProps> {
    state: {
        searchField: string;
    };
    render(): JSX.Element;
}
export default Menu;
