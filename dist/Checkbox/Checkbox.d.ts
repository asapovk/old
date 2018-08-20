import React from 'react';
interface CheckboxProps {
    label?: string;
    radio?: boolean;
    checked?: true;
    onChange?: (checked: any) => void;
    style?: any;
    defaultValue?: boolean;
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
