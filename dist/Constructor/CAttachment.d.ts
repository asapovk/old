import Component from './Prototype';
export default class CAttachment extends Component {
    static needAppend: boolean;
    static defaultProps: {};
    /**
     * Валидация значений
     */
    validate(file?: any): boolean;
    componentWillMount(): void;
    render(): JSX.Element | null;
}
