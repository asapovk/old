import { themeName } from '../Themes';
import { Component } from 'react';
interface ViewportProps {
    children?: any;
    style?: any;
    theme?: themeName;
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
    mountAction(component: any, id?: string, extra?: any): number;
    /**
     * Удаляет компонент из viewport
     * по индексу
     */
    unmountAction(index: number): void;
    /**
     * Удаляет компонент из viewport
     * по индексу
     */
    getActionById(id: string): any;
    render(): JSX.Element;
}
export default Viewport;
