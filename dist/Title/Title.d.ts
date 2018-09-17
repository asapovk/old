import { Component } from 'react';
interface Props {
    style?: any;
    children: string;
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
    componentWillMount(): void;
    render(): JSX.Element;
}
export default Title;
