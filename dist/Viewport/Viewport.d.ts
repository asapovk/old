import { themeNames } from '../Themes';
import { Component } from 'react';
interface ViewportProps extends themeNames {
    children?: any;
    style?: any;
    theme?: any;
}
interface State {
    mountedActions: any[];
}
declare class Viewport extends Component<ViewportProps> {
    state: State;
    componentDidMount(): void;
    /**
     * Добавляет компонент в viewport
     * возвращает индекс
     */
    mountAction(component: any): number;
    /**
     * Удаляет компонент из viewport
     * по индексу
     */
    unmountAction(index: number): void;
    readonly theme: any;
    render(): JSX.Element;
}
export default Viewport;
