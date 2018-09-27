import { Component } from 'react';
interface Props {
    active?: boolean;
    onClick?: () => void;
    children?: any;
}
declare class MenuNav extends Component<Props> {
    render(): JSX.Element;
}
export default MenuNav;
