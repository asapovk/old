import Component from './Prototype';
export default class CTextFieldSpoiler extends Component {
    static needAppend: boolean;
    static defaultProps: {};
    state: {
        visible: boolean;
    };
    changeVisible(value: any): void;
    render(): JSX.Element | null;
}
