import React from 'react';
interface CheckboxProps {
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
declare class Checkbox extends React.Component<CheckboxProps> {
    state: {
        checked: boolean;
    };
    componentWillMount(): void;
    onChange(): void;
    render(): JSX.Element;
}
export default Checkbox;
