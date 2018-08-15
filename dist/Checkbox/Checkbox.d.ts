import React from 'react';
interface CheckboxProps {
    label?: string;
    indeterminate?: boolean;
    disabled?: boolean;
    radio?: boolean;
    toggle?: boolean;
    cheked?: true;
    onChange?: (checked: any) => void;
    styles?: any;
}
interface Checkbox {
    checked: boolean;
}
declare class Checkbox extends React.Component<CheckboxProps> {
    state: {
        checked: boolean;
    };
    onChange(): void;
    render(): JSX.Element;
}
export default Checkbox;
