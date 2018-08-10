import { Component } from 'react';
interface ViewportProps {
    children?: any;
    style?: any;
}
declare class Viewport extends Component<ViewportProps> {
    render(): JSX.Element;
}
export default Viewport;
