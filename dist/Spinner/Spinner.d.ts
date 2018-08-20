import { Component } from 'react';
interface Props {
    spinning?: boolean;
    center?: boolean;
    dark?: boolean;
}
declare class Spinner extends Component<Props> {
    render(): JSX.Element | null;
}
export default Spinner;
