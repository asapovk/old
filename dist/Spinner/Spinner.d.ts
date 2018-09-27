import { Component } from 'react';
interface Props {
    spinning?: boolean;
    center?: boolean;
    dark?: boolean;
    children?: any;
}
declare class Spinner extends Component<Props> {
    render(): any;
}
export default Spinner;
