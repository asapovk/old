import { Component } from 'react';
interface Props {
    label?: string;
    loading?: boolean | string;
    onClick?: (MouseEvent?: any) => any;
    className?: string;
    style?: any;
    title?: string;
}
declare class Widget extends Component<Props> {
    render(): JSX.Element;
}
export default Widget;
