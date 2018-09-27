import React from 'react';
interface Props {
    label?: string;
    radio?: boolean;
    checked?: boolean;
    onChange?: (checked: any) => void;
    style?: any;
    defaultValue?: boolean;
    uppercase?: boolean;
}
interface Checkbox {
    checked: boolean;
}
declare class Checkbox extends React.Component<Props> {
    state: {
        checked: boolean;
    };
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    onChange(): void;
    render(): JSX.Element;
}
export default Checkbox;
