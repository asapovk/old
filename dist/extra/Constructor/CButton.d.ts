import Component from './Prototype';
export default class CButton extends Component {
    static defaultProps: {
        onAction: (_: any) => boolean;
    };
    render(): JSX.Element | null;
}
