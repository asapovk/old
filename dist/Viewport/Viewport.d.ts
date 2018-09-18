import { themeNames } from '../Themes';
import { Component } from 'react';
interface ViewportProps extends themeNames {
    children?: any;
    style?: any;
    theme?: any;
}
declare class Viewport extends Component<ViewportProps> {
    render(): JSX.Element;
}
export default Viewport;
