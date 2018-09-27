import { Component } from 'react';
interface Props {
    style?: any;
    children?: any;
    defaultValue?: boolean;
    value?: boolean;
    onLabel?: string;
    offLabel?: string;
    onChange?: (state: boolean) => void;
}
declare class Title extends Component<Props> {
    state: {
        on: boolean;
    };
    onChange(on: any): void;
    componentWillMount(): void;
    render(): JSX.Element;
}
export default Title;
