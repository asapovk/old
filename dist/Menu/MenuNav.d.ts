import React from 'react';
interface MenuNavProps {
    active?: boolean;
    onClick?: () => void;
}
declare class MenuNav extends React.Component<MenuNavProps> {
    render(): JSX.Element;
}
export default MenuNav;
