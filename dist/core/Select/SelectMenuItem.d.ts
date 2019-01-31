import React from 'react';
interface SelectMenuItemProps {
    active?: any;
    onClick?: () => void;
    key?: any;
    children?: any;
    theme?: any;
}
declare class SelectMenuItem extends React.Component<SelectMenuItemProps> {
    state: {
        background: string;
    };
    render(): JSX.Element;
}
export default SelectMenuItem;
