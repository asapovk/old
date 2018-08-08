import { Component } from 'react';
interface ViewportProps {
    children?: Component;
}
declare class Viewport extends Component<ViewportProps> {
    render(): JSX.Element;
}
export default Viewport;
