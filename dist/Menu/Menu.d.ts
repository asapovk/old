import React from 'react';
interface Props {
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
    children?: any;
}
declare class Menu extends React.Component<Props> {
    state: {
        searchField: string;
    };
    render(): JSX.Element;
}
export default Menu;
